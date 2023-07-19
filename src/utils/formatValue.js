export default function formatValue(val) {
    const currentMin = Math.trunc(val / 60)
    let currentSec = Math.trunc(val % 60)

    if(currentSec < 10) {
        currentSec = `O${currentSec}`
    }
    return `${currentMin}:${currentSec}`
}