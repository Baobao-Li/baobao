(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{223:function(n,t,a){"use strict";a.r(t);var e=a(0),s=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"vue组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue组件","aria-hidden":"true"}},[n._v("#")]),n._v(" Vue组件")]),n._v(" "),a("h4",{attrs:{id:"_1、组件是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、组件是什么？","aria-hidden":"true"}},[n._v("#")]),n._v(" 1、组件是什么？")]),n._v(" "),a("ol",[a("li",[n._v("是vue.js最强大的功能之一")]),n._v(" "),a("li",[n._v("可以扩展html元素，封装可重用的代码")])]),n._v(" "),a("h4",{attrs:{id:"_2、注册全局组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、注册全局组件","aria-hidden":"true"}},[n._v("#")]),n._v(" 2、注册全局组件")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("Vue.component('组件名称',引入的.vue文件)\n\nmain.js\nimport heads from 'src/heads';\nVue.component('heads',heads)\n// 然后在页面直接引用heads标签就可以了\n\n")])])]),a("h4",{attrs:{id:"_3、prop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、prop","aria-hidden":"true"}},[n._v("#")]),n._v(" 3、prop")]),n._v(" "),a("ul",[a("li",[n._v("是父组件用来传递数据的一个自定义属性")]),n._v(" "),a("li",[n._v("父组件的数据需要通过props把数据传给子组件，子组件需要显示地用props选项声明'prop''")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("参数:\n    props:{\n        Child:{\n            type:Number,\n            required:true  // 默认值是false\n            default:{\n                return{\n                    msg:'hello!'\n                }\n            }\n        }\n    }\n")])])]),a("h4",{attrs:{id:"_4、自定义事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、自定义事件","aria-hidden":"true"}},[n._v("#")]),n._v(" 4、自定义事件")]),n._v(" "),a("ul",[a("li",[n._v("$on(even)     监听事件")]),n._v(" "),a("li",[n._v("$emit(even)   触发事件")])]),n._v(" "),a("h4",{attrs:{id:"_5、组件通讯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、组件通讯","aria-hidden":"true"}},[n._v("#")]),n._v(" 5、组件通讯")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("1、同级目录\n    全局: window.Eventhub = new Vue();\n    发送:methods:{\n            send(){\n                 EventHub.$emit('HowAre',this.val)\n            }\n        }\n    接收:mounted(){\n            EventHub.$on('HowAre',res=>{\n                this.val = res\n            })\n        }\n2、父级向子级通讯(利用props)\n    父级：\n        data(){\n            return{\n                tit:'加油加油 ！'\n            }\n        }\n    子级：\n        props:['tit'] 接收\n        <val1 :tit=\"tit\"></val1>\n3、子级向父级通讯(利用回调函数)\n    子级：\n        this.$emit('solgan',this.val)\n    父级：\n        <val1 @solgan='onSolgan'></val1>\n         methods:{\n            onSolgan(val){\n                this.solgan = val\n            }\n        }\n    \n")])])]),a("h4",{attrs:{id:"_4、组件components-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、组件components-component","aria-hidden":"true"}},[n._v("#")]),n._v(" 4、组件components/component")]),n._v(" "),a("ol",[a("li",[n._v("局部(components)")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("多个\ncomponents:{\n    组件名称:{\n        name:\n        data(){\n            \n        },\n        methods:{\n            \n        },\n        beforeCreate:{\n            \n        }\n        template = html字符串\n        // template有且只有一个子元素\n        \n        \n    }\n}\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[n._v("全局(component)")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("Vue.component('组件名称',引入的.vue文件)\n")])])])])}],!1,null,null,null);t.default=s.exports}}]);