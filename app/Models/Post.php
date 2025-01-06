<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{

    use HasFactory, SoftDeletes;

    protected $fillable = ['title', 'content_html', 'content_json', 'user_id'];
    /**
     * @return BelongsTo<User,Post>
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    /**
     * @return HasMany<PostImages,Post>
     */
    public function images(): HasMany {
        return $this->hasMany(PostImage::class);
    }
    /**
     * @return BelongsToMany<Post,Post>
     */
    public function profile(): BelongsToMany {
        return $this->belongsToMany(Post::class, 'profile_posts');
    }
}
