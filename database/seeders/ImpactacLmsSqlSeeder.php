<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use RuntimeException;

class ImpactacLmsSqlSeeder extends Seeder
{
    public function run(): void
    {
        $path = public_path('impactac_lms_db.sql');

        if (! is_file($path)) {
            throw new RuntimeException("SQL file not found at [{$path}].");
        }

        $tables = $this->extractInsertTables($path);

        if (empty($tables)) {
            throw new RuntimeException('No INSERT statements were found in the SQL file.');
        }

        Schema::disableForeignKeyConstraints();

        try {
            $this->truncateTables($tables);
            $this->importInsertStatements($path);
        } finally {
            Schema::enableForeignKeyConstraints();
        }
    }

    protected function extractInsertTables(string $path): array
    {
        $handle = fopen($path, 'r');

        if ($handle === false) {
            throw new RuntimeException("Unable to open SQL file [{$path}].");
        }

        $tables = [];

        try {
            while (($line = fgets($handle)) !== false) {
                if (preg_match('/^INSERT INTO `([^`]+)`/i', trim($line), $matches)) {
                    $tables[] = $matches[1];
                }
            }
        } finally {
            fclose($handle);
        }

        return array_values(array_unique($tables));
    }

    protected function truncateTables(array $tables): void
    {
        foreach (array_reverse($tables) as $table) {
            if (! Schema::hasTable($table)) {
                continue;
            }

            DB::table($table)->truncate();
        }
    }

    protected function importInsertStatements(string $path): void
    {
        $handle = fopen($path, 'r');

        if ($handle === false) {
            throw new RuntimeException("Unable to open SQL file [{$path}].");
        }

        $statement = '';
        $isCollectingInsert = false;

        try {
            while (($line = fgets($handle)) !== false) {
                $trimmedLine = trim($line);

                if (! $isCollectingInsert) {
                    if (! str_starts_with(strtoupper($trimmedLine), 'INSERT INTO')) {
                        continue;
                    }

                    $isCollectingInsert = true;
                    $statement = $line;

                    if (preg_match('/;\s*$/', $trimmedLine) === 1) {
                        $this->executeStatement($statement);
                        $statement = '';
                        $isCollectingInsert = false;
                    }

                    continue;
                }

                $statement .= $line;

                if (preg_match('/;\s*$/', $trimmedLine) === 1) {
                    $this->executeStatement($statement);
                    $statement = '';
                    $isCollectingInsert = false;
                }
            }
        } finally {
            fclose($handle);
        }
    }

    protected function executeStatement(string $statement): void
    {
        $sql = trim($statement);

        if ($sql === '') {
            return;
        }

        DB::unprepared($sql);
    }
}
