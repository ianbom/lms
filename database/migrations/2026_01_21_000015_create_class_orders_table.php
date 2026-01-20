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
        Schema::create('class_orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('class_id')->constrained('classes')->cascadeOnDelete();
            $table->bigInteger('amount');
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->char('pending_lock', 1)->nullable();


            // Target bank info (snapshot)
            $table->string('target_bank_name', 80);
            $table->string('target_account_no', 50);
            $table->string('target_account_name', 120);

            // Sender info (optional)
            $table->string('sender_name', 120)->nullable();
            $table->string('sender_bank', 80)->nullable();
            $table->date('transfer_date')->nullable();
            $table->string('proof_url', 600)->nullable();

            $table->timestamp('decided_at')->nullable();
            $table->timestamps();

            $table->index(['user_id', 'class_id']);
            $table->index('status');
            $table->unique(['user_id', 'class_id', 'pending_lock']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('class_orders');
    }
};
