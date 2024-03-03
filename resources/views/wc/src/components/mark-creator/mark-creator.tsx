import { Component, State, h } from "@stencil/core"


@Component({
  tag: 'mark-creator',
  shadow: true,
  formAssociated: true
})
export class MarkCreator {

  photos: HTMLMarkPhotosElement
  @State() content: string = ''


  loadImage(): Promise<File> {
    const input = Object.assign(document.createElement('input'), {
      type: 'file',
      accept: 'image/png, image/gif, image/jpeg'
    })
    return new Promise<File>(resolve => {
      input.addEventListener('input', () => resolve(input.files.item(0)), { once: true })
      input.click()
    })
  }

  render() {
    return (
      <div>
        <button onClick={async () => this.photos.load(await this.loadImage())} type="button">{'📷'}</button>
        <button type="button">{'🔗'}</button>
        <mark-editor onMarkContentUpdate={content => this.content = content.detail} />
        <mark-photos ref={el => this.photos = el} />
      </div>
    )
  }
}