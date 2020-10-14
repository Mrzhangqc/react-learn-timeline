import html2Canvas from 'html2canvas'

import {Render, Download} from './common'

export default function canvas2Png(element) {
  const dom = typeof element === 'string' ? 
    document.getElementById(element) : element;

    const options = {
      logging: false,
      scale: 1,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "transparent",
    }
    html2Canvas(dom, options).then(canvas => {
      if(canvas) {
        const { height, width } = canvas;

        const base64 = canvas.toDataURL("image/png", 1);
        Render(base64, width, height, img => {
          Download(base64, "screenshot.png");
        });
      }
    }).catch(_err => {
      window.alert("截图失败，请重新尝试")
    });
}