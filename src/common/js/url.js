export function urlParse() {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  if (arr) {
    arr.forEach((item) => {
      let temp = item.substr(1).split('=');
      let key = decodeURIComponent(temp[0]);
      let val = decodeURIComponent(temp[1]);
      obj[key] = val;
    });
    return obj;
  }
}
