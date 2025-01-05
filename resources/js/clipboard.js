

export default function Clipboard(Alpine) {
    Alpine.magic('clipboard', () => {
        return subject => navigator.clipboard.writeText(subject)
    })
}
