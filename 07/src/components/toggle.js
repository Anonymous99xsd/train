/* eslint-disable no-undef */
export default function toggle(spinRef, value) {
    if (value) {
        if (spinRef.current) spinRef.current.style.display = 'flex'
    } else spinRef.current.style.display = 'none'
}