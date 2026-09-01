export function clearChild(el: HTMLElement) {
  el.childNodes.forEach(node => {
    el.removeChild(node)
  })
}