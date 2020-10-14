// 渲染图片
export function Render(src, width, height, cb) {
  const img = new Image();
  img.src = src;
  img.width = width;
  img.height = height;
  img.crossOrigin = ""; // 图像跨域时配置
  cb && cb(img);
}

// 下载图片
export function Download(url, name) {
  const target = document.createElement("a");
  target.href = url;
  target.download = name;
  const event = document.createEvent("MouseEvents");
  event.initEvent("click", true, true);
  target.dispatchEvent(event);
}