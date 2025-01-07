<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    protected $fillable = ['post_id', 'content_json', 'content_html'];
    /**
     * @return BelongsTo<Post,Comment>
     */
    public function post(): BelongsTo {
        return $this->belongsTo(Post::class);
    }
    /**
     * @return BelongsTo<User,Comment>
     */
    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}
