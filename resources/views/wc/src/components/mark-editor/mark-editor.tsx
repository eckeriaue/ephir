import { Component, Event, h, type EventEmitter } from '@stencil/core';

@Component({
  tag: 'mark-editor',
  styleUrl: 'mark-editor.css',
  shadow: true,
})
export class MarkEditor {

  @Event() markContentUpdate: EventEmitter<string>

  render() {
    return (
      <p class="content" onInput={e => this.markContentUpdate.emit(e.target['innerHTML'])} contenteditable="plaintext-only">
      </p>
    );
  }
}
