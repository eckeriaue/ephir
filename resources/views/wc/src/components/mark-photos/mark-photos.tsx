import { Component, Method, State, h, } from "@stencil/core"


@Component({
  tag: 'mark-photos',
  shadow: true
})
export class MarkPhotos {

  @State() images: Map<string, File> = new Map()

  @Method()
  async load(file: File) {
    const url = URL.createObjectURL(file)
    this.images.set(url, file)
  }

  render() {
    return (
      <div>
        {
          [...this.images.keys()].map(src => {
            return <img src={src} />
          })
        }
      </div>
    )
  }
}