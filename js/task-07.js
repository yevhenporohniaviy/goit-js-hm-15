const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
const defaultValue = input.value

text.style.fontSize = `${defaultValue}px`

input.addEventListener('input', (e) => {
  text.style.fontSize = `${e.target.value}px`
})