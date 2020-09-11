function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let BODY = document.querySelector("body")
// let BODY = document.body
// let BODY = document.querySelector("html")
console.log(BODY,"BODY")
    // console.log(document.querySelector(`.${header.slug}`))
    // document.querySelector(`.${header.slug}`).scrollIntoView()
// let BODY = document.getElementsByTagName("body")
const Arr = ["css", "scss", "node-sass", "sass-loader", "moment", "TypeScript", "HTML", "uni-app", "Ant Design Mobile", "js", "Vue", "vuepress", "React", "jquery", "Swiper", "Vant", "Element-ui", "react-router-dom", "redux", "axios", "mockjs", "react-redux ", "Vuex"];
BODY.addEventListener("click", (e) => {
  let x = e.pageX,
    y = e.pageY;
  // 创建dom节点
  let span = window.document.createElement("span");
  // 文本
  let html = document.createTextNode(Arr[Math.round(Math.random() * Arr.length)]);
  // 吧文本添加到创建的dom节点
  span.appendChild(html)
  // 添加样式
  span.setAttribute("style", `color: rgb(${getRandom(255, 0)},${getRandom(255, 0)},${getRandom(255, 0)});
                            position: absolute;
                            top: ${y - 20}px;
                            left: ${x}px;
                            z-index: 99999999999999999999999999999999999999999999999999999999999999999999;
                            font-weight: bold;
                            user-select: none;
                            cursor: default;
                            transition-duration:0.3s;`)

  // 吧创建的dom节点添加到body
  let flag = BODY.appendChild(span)

  // 向上移动
  let Time = setTimeout(() => {
    flag.style = `top:${y - 180}px;
      color: rgb(${getRandom(255, 0)},${getRandom(255, 0)},${getRandom(255, 0)});
      position: absolute;
      left: ${x}px;
      z-index: 99999999999999999999999999999999999999999999999999999999999999999999;
      font-weight: bold;
      user-select: none;
      cursor: default;
      transition-duration:1.5s;
      opacity: 0`
    window.clearInterval(Time);
  }, 100)

  // 删除dom
  let removeDom = setTimeout(() => {
    span.remove()
    window.clearInterval(removeDom);
  }, 1500)
})
