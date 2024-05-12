<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['title', 'content', 'user_id'];

    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public function photos() {
        return $this->hasMany(Photo::class);
    }

    public function shortContent() {
        if(strlen($this->content) > 2000) {
            return mb_strimwidth($this->content, 0, 2000) . '...';
        }
        return $this->content;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class)->whereNull('parent_id');
    }
}