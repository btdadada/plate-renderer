interface PlateInfo {
  aspectRatio: number
  plateImage: string
  fontColor: string
  fonts: Array<{
    width: number
    height: number
    left: number
    top: number
    fontColor?: string
  }>    
}
export type Colors = 'green' | 'blue' | 'greenLarge' | 'yellow' | 'yellowLarge' | 'HK/Macao' | 'shi' | 'ling' | 'police'
type PlatesInfo = Record<Colors, PlateInfo>

export const platesInfo: PlatesInfo = {
  green: {
    aspectRatio: 3.43,
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
    aspectRatio: 3.14,
    plateImage: 'blue',
    fontColor: '#ffffff',
    fonts: [
      {
        "width": 0.1042,
        "height": 0.68,
        "left": 0.0357,
        "top": 0.16
      },
      {
        "width": 0.1042,
        "height": 0.68,
        "left": 0.1619,
        "top": 0.16
      },
      {
        "width": 0.0893,
        "height": 0.68,
        "left": 0.3461,
        "top": 0.16
      },
      {
        "width": 0.1004,
        "height": 0.68,
        "left": 0.4741,
        "top": 0.16
      },
      {
        "width": 0.0938,
        "height": 0.68,
        "left": 0.6139,
        "top": 0.16
      },
      {
        "width": 0.0938,
        "height": 0.68,
        "left": 0.7479,
        "top": 0.16
      },
      {
        "width": 0.1004,
        "height": 0.68,
        "left": 0.87,
        "top": 0.16
      }
    ]
  },
  greenLarge: {
    aspectRatio: 3.43,
    plateImage: 'greenLarge',
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
  yellow: {
    aspectRatio: 3.14,
    plateImage: 'yellow',
    fontColor: '#000000',
    fonts: [
      {
        "width": 0.1042,
        "height": 0.68,
        "left": 0.0357,
        "top": 0.16
      },
      {
        "width": 0.1042,
        "height": 0.68,
        "left": 0.1619,
        "top": 0.16
      },
      {
        "width": 0.0893,
        "height": 0.68,
        "left": 0.3461,
        "top": 0.16
      },
      {
        "width": 0.1004,
        "height": 0.68,
        "left": 0.4741,
        "top": 0.16
      },
      {
        "width": 0.0938,
        "height": 0.68,
        "left": 0.6139,
        "top": 0.16
      },
      {
        "width": 0.0938,
        "height": 0.68,
        "left": 0.7479,
        "top": 0.16
      },
      {
        "width": 0.1004,
        "height": 0.68,
        "left": 0.87,
        "top": 0.16
      }
    ]
  },
  yellowLarge: {
    aspectRatio: 2.155,
    plateImage: 'yellowLarge',
    fontColor: '#000000',
    fonts: [
      {
        "width": 0.200,
        "height": 0.2520,
        "left": 0.2200,
        "top": 0.0900
      },
      {
        "width": 0.20,
        "height": 0.25200,
        "left": 0.5700,
        "top": 0.0900
      },
      {
        "width": 0.1450,
        "height": 0.4900,
        "left": 0.0700,
        "top": 0.400
      },
      {
        "width": 0.1400,
        "height": 0.4900,
        "left": 0.2500,
        "top": 0.400
      },
      {
        "width": 0.1400,
        "height": 0.4900,
        "left": 0.4400,
        "top": 0.400
      },
      {
        "width": 0.1400,
        "height": 0.4900,
        "left": 0.6200,
        "top": 0.400
      },
      {
        "width": 0.1400,
        "height": 0.4900,
        "left": 0.8000,
        "top": 0.400
      }
    ]
  },
  "HK/Macao": {
    aspectRatio: 3.14,
    plateImage: 'black_140',
    fontColor: '#ffffff',
    fonts: [
      {
        "width": 0.1042,
        "height": 0.68,
        "left": 0.0357,
        "top": 0.16
      },
      {
        "width": 0.1042,
        "height": 0.68,
        "left": 0.1619,
        "top": 0.16
      },
      {
        "width": 0.0893,
        "height": 0.68,
        "left": 0.3461,
        "top": 0.16
      },
      {
        "width": 0.1004,
        "height": 0.68,
        "left": 0.4741,
        "top": 0.16
      },
      {
        "width": 0.0938,
        "height": 0.68,
        "left": 0.6139,
        "top": 0.16
      },
      {
        "width": 0.0938,
        "height": 0.68,
        "left": 0.7479,
        "top": 0.16
      },
      {
        "width": 0.1004,
        "height": 0.68,
        "left": 0.87,
        "top": 0.16
      }
    ]
  },
  "shi": {
    aspectRatio: 3.14,
    plateImage: 'shi',
    fontColor: '#ffffff',
    fonts: [
      {
        "width": 0.1042,
        "height": 0.68,
        "left": 0.0357,
        "top": 0.16
      },
      {
        "width": 0.1042,
        "height": 0.68,
        "left": 0.1619,
        "top": 0.16
      },
      {
        "width": 0.0893,
        "height": 0.68,
        "left": 0.29,
        "top": 0.16
      },
      {
        "width": 0.1004,
        "height": 0.68,
        "left": 0.4741,
        "top": 0.16
      },
      {
        "width": 0.0938,
        "height": 0.68,
        "left": 0.6139,
        "top": 0.16
      },
      {
        "width": 0.0938,
        "height": 0.68,
        "left": 0.7479,
        "top": 0.16
      },
      {
        "width": 0.1004,
        "height": 0.68,
        "left": 0.87,
        "top": 0.16
      }
    ]
  },
  "ling": {
    aspectRatio: 3.14,
    plateImage: 'ling',
    fontColor: '#ffffff',
    fonts: [
      {
        "width": 0.1042,
        "height": 0.68,
        "left": 0.0357,
        "top": 0.16
      },
      {
        "width": 0.1042,
        "height": 0.68,
        "left": 0.1619,
        "top": 0.16
      },
      {
        "width": 0.0893,
        "height": 0.68,
        "left": 0.29,
        "top": 0.16
      },
      {
        "width": 0.1004,
        "height": 0.68,
        "left": 0.4,
        "top": 0.16
      },
      {
        "width": 0.0938,
        "height": 0.68,
        "left": 0.6139,
        "top": 0.16
      },
      {
        "width": 0.0938,
        "height": 0.68,
        "left": 0.7479,
        "top": 0.16
      },
      {
        "width": 0.1004,
        "height": 0.68,
        "left": 0.87,
        "top": 0.16
      }
    ]
  },
  police: {
    aspectRatio: 3.14,
    plateImage: 'police',
    fontColor: '#000000',
    fonts: [
      {
        "width": 0.1042,
        "height": 0.68,
        "left": 0.0357,
        "top": 0.16
      },
      {
        "width": 0.1042,
        "height": 0.68,
        "left": 0.1619,
        "top": 0.16
      },
      {
        "width": 0.0893,
        "height": 0.68,
        "left": 0.3461,
        "top": 0.16
      },
      {
        "width": 0.1004,
        "height": 0.68,
        "left": 0.4741,
        "top": 0.16
      },
      {
        "width": 0.0938,
        "height": 0.68,
        "left": 0.6139,
        "top": 0.16
      },
      {
        "width": 0.0938,
        "height": 0.68,
        "left": 0.7479,
        "top": 0.16
      },
      {
        "width": 0.1004,
        "height": 0.68,
        "left": 0.87,
        "top": 0.16,
        "fontColor": "#bc0003"
      }
    ]
  },
}