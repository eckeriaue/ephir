<?php

namespace App\Livewire\Forms;

use App\Models\Post;
use Livewire\Attributes\Validate;
use Livewire\Form;

class CreatePostForm extends Form
{
    public string $title = '';
    public string $content = '';
    
    public function save() {
        Post::create([
            'title' => $this->title,
            'content' => $this->content,
            'user_id' => auth()->user()->id 
        ]);
        $this->reset();
    }

}
