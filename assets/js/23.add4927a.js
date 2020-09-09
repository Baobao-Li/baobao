(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{575:function(t,e,a){"use strict";a.r(e);var r=a(4),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"redux中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux中间件"}},[t._v("#")]),t._v(" Redux中间件")]),t._v(" "),a("h5",{attrs:{id:"_1、applymiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、applymiddleware"}},[t._v("#")]),t._v(" 1、applyMiddleware")]),t._v(" "),a("ul",[a("li",[t._v("方便调试，实时触发，线下使用")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import {createStore，applyMiddleware} from 'redux';\nimport reducers from './reducers';\nimport Logger from 'redux-logger';\n\nexport default createStore(reducers, applyMiddleware(Logger))\n")])])]),a("h5",{attrs:{id:"_2、redux-thunk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、redux-thunk"}},[t._v("#")]),t._v(" 2、redux-thunk")]),t._v(" "),a("ul",[a("li",[t._v("目的：异步解决方案")]),t._v(" "),a("li",[t._v("支持action的写法有对象变为函数")]),t._v(" "),a("li",[t._v("可以发送多个dispatch")]),t._v(" "),a("li",[t._v("改变action")]),t._v(" "),a("li",[t._v("同时会帮我们注入两个参数dispatch和getState")]),t._v(" "),a("li",[t._v("在异步操作完成之后再触发dispatch操作")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('dispatch((dispatch, getState)=>{\n    // getState可以获取全局的state\n    dispatch({\n        type:"START"\n    })\n    fetch(\'/data.json\')\n    .then(res=>res.json())\n    .then(success=>{\n        if(success){\n            dispatch({\n                type:"FETCH_LIST",\n                payLoad:success.arr\n            })\n        }else{\n            dispatch({\n                type:"FETCH_TAIL"\n            })\n        }\n    })\n})\n')])])]),a("h5",{attrs:{id:"_3、redux-saga"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、redux-saga"}},[t._v("#")]),t._v(" 3、redux-saga")]),t._v(" "),a("ul",[a("li",[t._v("拦截请求")]),t._v(" "),a("li",[t._v("解决异步")]),t._v(" "),a("li",[t._v("不会改变action")]),t._v(" "),a("li",[t._v("take 拦截")]),t._v(" "),a("li",[t._v("takeEvery 每次都拦截")])]),t._v(" "),a("h5",{attrs:{id:"_4、redux-thunk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、redux-thunk"}},[t._v("#")]),t._v(" 4、redux-thunk")]),t._v(" "),a("ul",[a("li",[t._v("改写action")])])])}),[],!1,null,null,null);e.default=s.exports}}]);