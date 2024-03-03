import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'mark-editor',
  styleUrl: 'mark-editor.css',
  shadow: true,
})
export class MarkEditor {

  content: HTMLParagraphElement

  addImage(file: File) {
    return Object.assign(new Image(), {
      src: URL.createObjectURL(file)
    })
  }

  openFilePicker() {
    const input = Object.assign(document.createElement('input'), {
      type: 'file',
      accept:'image/png, image/gif, image/jpeg' 
    })
    input.addEventListener('input', (event) => {
      const file = (event.target as HTMLInputElement).files.item(0)
      this.content.appendChild(this.addImage(file))
    }, { once: true })
    input.click()
  }

  render() {
    return (
      <fieldset>
        <button type='button' onClick={() => this.openFilePicker()} class="load-photo">{'📸'}</button>
        <p class="content" ref={el => this.content = el} contenteditable="plaintext-only">
        </p>
      </fieldset>
    );
  }
}
