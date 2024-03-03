import { Component, h } from '@stencil/core';

@Component({
  tag: 'mark-editor',
  styleUrl: 'mark-editor.css',
  shadow: true,
})
export class MarkEditor {

  render() {
    return (
      <p class="content" contenteditable="plaintext-only">
      </p>
    );
  }
}
