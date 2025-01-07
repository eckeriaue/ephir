<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Facades\DB;

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
    /**
     * @return BelongsToMany
     */
    public function posts(): BelongsToMany {
        return $this->belongsToMany(Post::class, 'profile_posts', 'profile_id', 'post_id')->orderBy('created_at', 'desc');
    }
    /**
     * @return bool
     */
    public static function publish(Post $post): bool {
        return DB::table('profile_posts')->insert([
            'profile_id' => auth()->user()->profile->id,
            'post_id' => $post->id,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
