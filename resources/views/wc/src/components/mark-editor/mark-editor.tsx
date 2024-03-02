import { Component, h } from '@stencil/core';

@Component({
  tag: 'mark-editor',
  styleUrl: 'mark-editor.css',
  shadow: true,
})
export class MarkEditor {


  render() {
    return (
      <div>
        <input />

        <p class="p-4 border" contenteditable="plaintext-only">
        </p>
      </div>
    );
  }
}
