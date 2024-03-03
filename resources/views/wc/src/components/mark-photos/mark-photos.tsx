import { Component, Method, State, forceUpdate, h } from "@stencil/core"


@Component({
  tag: 'mark-photos',
  shadow: true,
  styles: /*css*/`
    .slider {
      display: flex;
      flex-wrap: wrap;
    }
    .slide {
      max-height: 320px;
      max-width: fit-content;
    }
    img {
      max-height:100%;
    }
  `
})
export class MarkPhotos {

  @State() images: Map<string, File> = new Map()

  @Method()
  getImages() {
    return Promise.resolve(this.images)
  }

  @Method()
  async load(file: File) {
    const url = URL.createObjectURL(file)
    this.images.set(url, file)
    forceUpdate(this)
  }

  render() {
    return (
      <div class="slider">
        {
          [...this.images.keys()].map(src => {
            return (
              <div class="slide">
                <img src={src} />
              </div>
            )
          })
        }
      </div>
    )
  }
}