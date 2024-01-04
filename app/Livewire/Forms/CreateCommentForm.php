<?php


namespace App\Livewire\Forms;

use App\Models\Comment;
use Livewire\Form;

class CreateCommentForm extends Form
{
  public string $content = '';

  public function saveCommentByPostId(int $postId)
  {
   Comment::create([
    'content'=> $this->content,
    'post_id' => $postId,
    'user_id' => auth()->id(),
   ]);
   $this->reset();
  }
}