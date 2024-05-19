<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['title', 'content', 'user_id'];

    protected $casts = [
        'content' => 'json',
    ];

    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public function photos() {
        return $this->hasMany(Photo::class);
    }

    public function shortContent() {
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