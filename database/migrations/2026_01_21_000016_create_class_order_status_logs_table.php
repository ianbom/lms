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
        Schema::create('class_order_status_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained('class_orders')->cascadeOnDelete();
            $table->enum('status', ['pending', 'approved', 'rejected']);
            $table->foreignId('actor_id')->nullable()->constrained('users')->nullOnDelete();
            $table->text('note')->nullable();
            $table->timestamp('created_at')->nullable();

            $table->index('order_id');
            $table->index('status');
            $table->unique(['order_id', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('class_order_status_logs');
    }
};
