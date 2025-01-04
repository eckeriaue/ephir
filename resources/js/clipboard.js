let onCopy = () => {}

const copy = (target, mimeType = undefined) => {
    if (typeof target === 'function') {
        target = target()
    }

    if (typeof target === 'object') {
        target = JSON.stringify(target)
    }

    if (mimeType !== undefined) {
        return window.navigator.clipboard.write([
            new ClipboardItem({
                [mimeType]: new Blob([target], {
                    type: mimeType,
                })
            })
        ])
            .then(onCopy)
    }

    return window.navigator.clipboard.writeText(target)
        .then(onCopy)
}

function Clipboard(Alpine) {
    Alpine.magic('clipboard', () => {
        return copy
    })
}

Clipboard.configure = (config) => {
    if (config.hasOwnProperty('onCopy') && typeof config.onCopy === 'function') {
        onCopy = config.onCopy
    }

    return Clipboard
}

export default Clipboard
