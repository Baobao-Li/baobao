(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{596:function(e,t,n){"use strict";n.r(t);var r=n(4),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"vue路由"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue路由"}},[e._v("#")]),e._v(" Vue路由")]),e._v(" "),n("h4",{attrs:{id:"_1、路由-外置的-vue-router"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、路由-外置的-vue-router"}},[e._v("#")]),e._v(" 1、路由(外置的) vue-router")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import VueRouter from 'vue-router';\nimport Index from './components/index.vue';\nimport List from './components/index.vue';\nimport Login from './components/index.vue';\n\nVue.use(VueRouter); // 注册\nlet router = new VueRouter({\n    routes:[{ // 定义多个路由\n        path:'/index', \n        component:Index\n    },{\n        path:'/list',\n        component:List\n    },{\n        path:'/login',\n        component:Login\n    },{\n        path:'/music',\n        component:Music,\n        children:[{  // 封装子路由\n            path:'/comd',\n            component:Comd\n        },{\n            path:'/search',\n            component:Search\n        }]\n    }]\n})\n\n\napp.vue // 入口文件\n<router-view></router-view>\n")])])]),n("h4",{attrs:{id:"_2、路由跳转路径"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、路由跳转路径"}},[e._v("#")]),e._v(" 2、路由跳转路径")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<router-link to="/music/recommd">推荐</router-link>\n\nrouter-link === a\nto === href\n')])])])])}),[],!1,null,null,null);t.default=o.exports}}]);