import { PlateRenderer } from './index'
import { type Colors } from './config/platesInfo'
const select = document.getElementById('select') as HTMLSelectElement
const input = document.getElementById('input') as HTMLInputElement

function generate() {
  input.value = [...input.value].map(char => {
    if (/^[a-zA-Z]$/.test(char)) {
      char = char.toUpperCase()
    }
    return char
  }).join('')
  PlateRenderer.create(input.value, select.value as Colors, 'app');
}

select.addEventListener('change', generate)

let isComposing = false

input.addEventListener('compositionstart', () => {
  isComposing = true
});

input.addEventListener('compositionend', () => {
  isComposing = false
  generate()
});

input.addEventListener('input', () => {
  if (isComposing) return
  generate()
});

input.value = '津AF1234挂'
select.value = 'yellowLarge'
generate()