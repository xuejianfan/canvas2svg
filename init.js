const _this = canvas.value;
const C2S = window.C2S;
const ctx = new C2S(_this.canvas.width + 200, _this.canvas.height + 200);
if (_this.data.pens) {
  for (const item of _this.data.pens) {
    item.render(ctx);
  }
}

let mySerializedSVG = ctx.getSerializedSvg();
//   mySerializedSVG = mySerializedSVG.replace(
//     '<defs/>',
//     `<defs>
//   <style type="text/css">
//     @font-face {
//       font-family: 'topology';
//       src: url('http://at.alicdn.com/t/font_1331132_h688rvffmbc.ttf?t=1569311680797') format('truetype');
//     }
//   </style>
// </defs>`
//   );

mySerializedSVG = mySerializedSVG.replace(/--le5le--/g, "&#x");
// mySerializedSVG = mySerializedSVG.replace(/(i?)(<svg)([^>]+>)/, `$2 style="background-color:gray"$3`)
mySerializedSVG = mySerializedSVG.replace(
  /<defs\/>/,
  `<rect width="${_this.canvas.width + 200 || 0}" height="${
    _this.canvas.height || 0
  }" style="fill: ${_this.data.bkColor || "white"}; stroke-width: 10" />`
);

const urlObject = window.URL || window;
const exportBlob = new Blob([mySerializedSVG]);
const url = urlObject.createObjectURL(exportBlob);
