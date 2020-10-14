import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver'

export default function dom2image(element) {
  domtoimage.toPng(element)
  .then((dataUrl) => {
    saveAs(dataUrl, "screenshot.png")
  })
  .catch(function (error) {
      console.error('oops, something went wrong!', error);
  });
}