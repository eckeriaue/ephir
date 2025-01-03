<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{

    use HasFactory, SoftDeletes;

    protected $fillable = ['title', 'content', 'user_id'];
    /**
     * @return BelongsTo<User,Post>
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
