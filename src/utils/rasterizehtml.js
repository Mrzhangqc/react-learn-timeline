import Rasterizehtml from 'rasterizehtml'

import { Download } from './common'

export default function svg2Png(element) {
  const canvas = document.createElement("canvas");
  const options = {
    executeJs: true,
    height: element.offsetHeight || window.screen.height,
    width: element.offsetWidth || window.screen.width
  };

  Rasterizehtml.drawDocument(element, canvas, options).then(res => {
    // const svg = new Blob([res.svg], { type: "image/svg+xml;charset=utf-8" });
    // const DOMURL = window.URL || window.webkitURL || window;
    // const svgUrl = DOMURL.createObjectURL(svg);
    // window.URL.revokeObjectURL(svgUrl)

    const context = canvas.getContext("2d");
    canvas.width = options.width;
    canvas.height = options.height;
    context.drawImage(res.image, 0, 0);
    
    const base64 = canvas.toDataURL("image/png", 1);

    Download(base64, "screenshot.png");

  }).catch( _err => {
    console.log(_err)
    window.alert("截图失败，请重新尝试")
  });
}