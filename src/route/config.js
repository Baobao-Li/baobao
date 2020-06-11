import Home from "../views/Home"
import About from "../views/About"

const Routrconfig = [
  {
    "path": "/home",
    "component": Home,
    "name": "首页"
  },
  {
    "path": "/about",
    "component": About,
    "name": "About"
  },
  {
    "path": "/",
    "redirect": "/home",
  }
]

export default Routrconfig;