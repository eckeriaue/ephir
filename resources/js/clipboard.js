
function Clipboard(Alpine) {
    Alpine.magic('clipboard', () => {
        return subject => navigator.clipboard.writeText(subject)
    })
}

Clipboard.configure = (config) => {
    if (config.hasOwnProperty('onCopy') && typeof config.onCopy === 'function') {
        onCopy = config.onCopy
    }

    return Clipboard
}

export default Clipboard
