import { platesInfo, type Colors } from './config/platesInfo'
import { keyBlackToAlpha, hexToRgb } from './utils/imageProcess'

export class PlateRenderer {
  element: HTMLElement
  plateColor: Colors
  plateNumber: String

  constructor(plateNumber: string, plateColor: Colors, el: string | HTMLElement) {
    let element: HTMLElement
    if (typeof el === 'string') {
      const _el = document.getElementById(el)
      if (!_el) {
        throw new Error(`Element with ID "${el}" not found in DOM`)
      }
      element = _el
    } else {
      element = el
    }

    this.plateColor = plateColor
    this.element = element
    this.plateNumber = plateNumber
  }

  static async create(plateNumber: string, plateColor: Colors, el: string | HTMLElement) {
    const plateRenderer = new PlateRenderer(plateNumber, plateColor, el)
    const plateInfo = platesInfo[plateColor]
    const element = plateRenderer.element
    const canvas = document.createElement('canvas')
    const canvasWidth = element.offsetWidth
    const canvasHeight = canvasWidth / plateInfo.aspectRatio
    canvas.width = canvasWidth
    canvas.height = canvasHeight
    const ctx = canvas.getContext('2d')
    const img = new Image()
    const plateImageModule = await import(`./assets/plate/${plateColor}.png`)
    img.src = plateImageModule.default
    img.onload = function() {
      ctx?.drawImage(img, 0, 0, canvasWidth, canvasHeight)
      element.appendChild(canvas)
    }

    ;[...plateNumber].forEach(async (char, index) => {
      //单个字符信息
      const fontInfo = plateInfo.fonts[index]
      if (!fontInfo) return

      const img = new Image()
      const charModule = await import(`./assets/font/140_${char}.jpg`)
      img.src = charModule.default
      img.onload = () => {
        plateRenderer.extractFontToCanvas(img, canvas, plateInfo.fontColor, canvasWidth * fontInfo.width, canvasHeight * fontInfo.height, canvasWidth * fontInfo.left, canvasHeight * fontInfo.top)
      }
    })
  }

  extractFontToCanvas(img: HTMLImageElement, targetCanvas: HTMLCanvasElement, fontColor: string, width?: number, height?: number, x?: number, y?: number) {
    width = width || img.width
    height = height || img.height

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = img.naturalWidth || img.width;
    tempCanvas.height = img.naturalHeight || img.height;
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) throw new Error('Canvas 2D context not supported')
    tempCtx.drawImage(img, 0, 0);

    // 黑字白底 → 字色 + 透明背景，灰边保留为半透明
    const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
    keyBlackToAlpha(imageData, hexToRgb(fontColor));
    tempCtx.putImageData(imageData, 0, 0);

    const ctx = targetCanvas.getContext('2d');
    if (!ctx) throw new Error('Canvas 2D context not supported')
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(tempCanvas, x || 0, y || 0, width, height);
  }
}