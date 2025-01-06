<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Profile extends Model
{
    //
    protected $fillable = ['about', 'status', 'user_id'];
    /**
     * @return BelongsTo<User,Profile>
     */
    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function posts() {
        return $this->belongsToMany(Post::class, 'profile_posts')->orderBy('created_at', 'desc');
    }
}
