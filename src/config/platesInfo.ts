interface PlateInfo {
  plateImage: string
  fontColor: string
  fonts: Array<{
    width: number
    height: number
    left: number
    top: number
  }>    
}
export type Colors = 'green' | 'blue'
type PlatesInfo = Record<Colors, PlateInfo>

export const platesInfo: PlatesInfo = {
  green: {
    plateImage: 'green',
    fontColor: '#000000',
    fonts: [
      {
        "width": 0.0929,
        "height": 0.6204,
        "left": 0.0328,
        "top": 0.1852
      },
      {
        "width": 0.0874,
        "height": 0.6296,
        "left": 0.1475,
        "top": 0.1852
      },
      {
        "width": 0.0902,
        "height": 0.6296,
        "left": 0.3361,
        "top": 0.1852
      },
      {
        "width": 0.0902,
        "height": 0.6296,
        "left": 0.4490,
        "top": 0.1852
      },
      {
        "width": 0.0874,
        "height": 0.6296,
        "left": 0.5519,
        "top": 0.1852
      },
      {
        "width": 0.0874,
        "height": 0.6296,
        "left": 0.6612,
        "top": 0.1852
      },
      {
        "width": 0.0902,
        "height": 0.6296,
        "left": 0.7678,
        "top": 0.1852
      },
      {
        "width": 0.0902,
        "height": 0.6296,
        "left": 0.8770,
        "top": 0.1852
      }
    ]
  },
  blue: {
    plateImage: 'blue',
    fontColor: '#ffffff',
    fonts: [
      {
        "width": 0.1042,
        "height": 0.7396,
        "left": 0.0357,
        "top": 0.1302
      },
      {
        "width": 0.1042,
        "height": 0.7396,
        "left": 0.1619,
        "top": 0.1302
      },
      {
        "width": 0.0893,
        "height": 0.7396,
        "left": 0.3461,
        "top": 0.1302
      },
      {
        "width": 0.1004,
        "height": 0.7396,
        "left": 0.4741,
        "top": 0.1302
      },
      {
        "width": 0.0938,
        "height": 0.7396,
        "left": 0.6139,
        "top": 0.1302
      },
      {
        "width": 0.0938,
        "height": 0.7396,
        "left": 0.7479,
        "top": 0.1302
      },
      {
        "width": 0.1004,
        "height": 0.7396,
        "left": 0.8818,
        "top": 0.1302
      }
    ]
  }
}