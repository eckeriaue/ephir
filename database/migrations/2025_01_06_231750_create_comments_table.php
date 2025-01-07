<?php

use App\Models\Comment;
use App\Models\Post;
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
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes();
            $table->foreignIdFor(Post::class)->constrained();
            $table->foreignIdFor(Comment::class, 'parent_comment_id')->nullable()->constrained();
            $table->integer('likes')->default(0);
            $table->json('content_json');
            $table->text('content_html');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
