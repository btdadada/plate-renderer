# plate-renderer

> 纯前端车牌照片生成，目前支持小客车绿牌和蓝牌

![效果图](https://cdn.jsdelivr.net/gh/btdadada/plate-renderer@main/docs/example.png)

---

## ✨ 特性

- 🚀 **轻量无依赖** - 纯 TypeScript 编写，零外部依赖
- 🎨 **支持多种车牌类型** - 蓝牌、绿牌，持续更新
- 📦 **开箱即用** - 简单 API，快速上手
- 🛠️ **TypeScript 支持** - 自带类型声明，开发体验友好

---

## 📦 安装

```bash
npm install plate-renderer
```

## 🪚 用法
```bash
import { PlateRenderer } from 'plate-renderer'
PlateRenderer.create('京ADT0069', 'green', 'container')
```

## ⚙️ 参数说明
| 参数 | 说明 |
|-----|-----|
| plateNumber | 车牌号 |
| plateColor | green绿牌 blue蓝牌 |
| element | HTML元素或ID名 |

## ⚠️ 注意事项
按照真实车牌宽高比例，来定义容器宽高比例，可以使生成的车牌照片贴合容器
| 车牌类型 | 宽高比例 |
|-----|-----|
| 蓝牌 | 22 : 7 |
| 绿牌 | 24 : 7 |