<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('classes', function (Blueprint $table) {
            $table->string('location')->nullable()->after('status');
            $table->boolean('is_priority')->default(false)->after('location');
            $table->string('url_link')->nullable()->after('is_priority');
            $table->date('implementation_date')->nullable()->after('url_link');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('classes', function (Blueprint $table) {
            $table->dropColumn(['location', 'is_priority', 'url_link', 'implementation_date']);
        });
    }
};
