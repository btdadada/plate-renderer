export interface Rgb {
  r: number
  g: number
  b: number
}

export interface KeyOptions {
  /** 亮度 <= solid 的像素完全不透明（字身） */
  solid?: number
  /** 亮度 >= clear 的像素完全透明（背景） */
  clear?: number
}

/**
 * 把「黑字白底」的原图转成「指定颜色 + 透明背景」，并保留原图边缘的灰度过渡。
 *
 * @param imageData getImageData() 的结果，原地修改
 * @param fontColor 目标字色
 */
export function keyBlackToAlpha(imageData: ImageData, fontColor: Rgb, options: KeyOptions = {}) {
  const { solid = 64, clear = 208 } = options
  const { r, g, b } = fontColor
  const data = imageData.data
  const span = clear - solid

  for (let i = 0; i < data.length; i += 4) {
    // 感知亮度：JPEG 压缩后的边缘噪点用亮度判断比逐通道阈值稳
    const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]

    let coverage: number
    if (lum <= solid) {
      coverage = 1
    } else if (lum >= clear) {
      coverage = 0
    } else {
      coverage = (clear - lum) / span
    }

    // 所有像素（包括全透明的）都写成字色，
    // 缩放时插值不会从背景色里带出灰边或白边
    data[i] = r
    data[i + 1] = g
    data[i + 2] = b
    data[i + 3] = Math.round(coverage * data[i + 3])
  }
}

export function hexToRgb(hex: string) {
    // 去掉 # 号
    let color = hex.replace('#', '');
    
    // 处理简写（如 #f00 → #ff0000）
    if (color.length === 3) {
        color = color.split('').map(c => c + c).join('');
    }
    
    // 位运算提取 RGB
    const num = parseInt(color, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    
    return { r, g, b };
}