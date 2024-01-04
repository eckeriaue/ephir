<?php

namespace App\Livewire\Forms;

use App\Models\Post;
use Livewire\Attributes\Validate;
use Livewire\Form;

class CreatePostForm extends Form
{

    #[Validate('required|min:3|max:255')]
    public string $title = '';
    #[Validate('required|min:3')]
    public string $content = '';

    public function save() {
        Post::create([
            'title' => trim($this->title),
            'content' => trim($this->content),
            'user_id' => auth()->user()->id
        ]);
        $this->reset();
    }

}
