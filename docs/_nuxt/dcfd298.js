(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3,4],{256:function(t,e,o){"use strict";function n(t){return(new Intl.NumberFormat).format(t)}o.d(e,"a",(function(){return n}))},257:function(t,e,o){var content=o(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("9a394e80",content,!0,{sourceMap:!1})},258:function(t,e,o){var content=o(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("5b8e8278",content,!0,{sourceMap:!1})},260:function(t,e,o){var content=o(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("71c0d238",content,!0,{sourceMap:!1})},261:function(t,e,o){"use strict";var n=o(3),r=o(64).findIndex,l=o(119),c="findIndex",d=!0;c in[]&&Array(1).findIndex((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},262:function(t,e,o){"use strict";o(257)},263:function(t,e,o){var n=o(50)(!1);n.push([t.i,'*,:after,:before{box-sizing:inherit}html{box-sizing:border-box;scroll-behavior:smooth}body{font-family:"CodecPro"}body,ul{padding:0;margin:0}li{list-style:none}a{text-decoration:none;color:inherit}.list__actions{display:flex;justify-content:space-between}.list__select{font-size:40px}.list__select *{font-weight:700}.list__choise{border:none;background:transparent;padding-right:12px;color:#4959ff}.list__new-product{display:flex;align-items:center}.list__add-text{font-size:20px;color:#4959ff;font-weight:700;margin-right:20px;white-space:nowrap}.list__add-btn{width:48px;height:48px;color:#fff;background-color:#4959ff;border-radius:16px;border:none;font-size:24px;cursor:pointer}@media(max-width:1024px){.list__select{font-size:24px}.list__choise{padding-right:4px}.list__add-text{font-size:16px;margin-right:12px}.list__add-btn{width:32px;height:32px;border-radius:8px}}',""]),t.exports=n},264:function(t,e,o){"use strict";o(258)},265:function(t,e,o){var n=o(50)(!1);n.push([t.i,'*,:after,:before{box-sizing:inherit}html{box-sizing:border-box;scroll-behavior:smooth}body{font-family:"CodecPro"}body,ul{padding:0;margin:0}li{list-style:none}a{text-decoration:none;color:inherit}.list__product{flex-grow:1}.list__item{height:164px;background:#fff;border-radius:32px;margin:0 16px 32px;padding:24px 32px;display:flex}.list__img{width:88px;height:88px;margin-right:24px;border-radius:24px}.list__info{padding-top:16px;padding-right:20px;max-width:170px}.list__name{font-weight:700;margin-bottom:12px;font-size:16px}.list__description{font-weight:300;font-size:12px;line-height:1.5;margin-bottom:16px;color:#677b8f}.list__price{font-size:14px;color:#f84ab3;font-weight:700}@media(max-width:1024px){.list__item{height:151px;margin:0 6px 12px;padding:20px}.list__img{margin-right:20px}.list__info{padding-top:12px;padding-right:0}}',""]),t.exports=n},266:function(t,e,o){"use strict";o.r(e);o(36),o(261);var n={props:["categoryId"],computed:{currentCategory:{get:function(){return this.categoryId},set:function(t){this.$emit("update:categoryId",t)}},categoryList:function(){return this.$store.state.vehicles?this.$store.state.vehicles:0},categories:function(){var t=this.categoryList;return this.categoryList&&(t=t.filter((function(t,e,o){return e===o.findIndex((function(e){return e.type===t.type}))}))),t}}},r=(o(262),o(20)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"list__actions"},[o("div",{staticClass:"list__select"},[o("span",[t._v("Rent")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model.number",value:t.currentCategory,expression:"currentCategory",modifiers:{number:!0}}],staticClass:"list__choise",attrs:{type:"text"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var o="_value"in e?e._value:e.value;return t._n(o)}));t.currentCategory=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"0"}},[t._v("whatever")]),t._v(" "),t._l(t.categories,(function(e){return o("option",{key:e.type,domProps:{value:e.type}},[t._v("\n        "+t._s(e.type)+"\n      ")])}))],2)]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"list__new-product"},[o("div",{staticClass:"list__add-text"},[t._v("Add new")]),t._v(" "),o("button",{staticClass:"list__add-btn"},[t._v("+")])])}],!1,null,null,null);e.default=component.exports},267:function(t,e,o){"use strict";o.r(e);var n={props:["product"],filters:{numberFormat:o(256).a},methods:{gotoPage:function(t){$nuxt.$emit("gotoPage",t)}}},r=(o(264),o(20)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"list__product",on:{click:function(e){return t.gotoPage(t.product)}}},[o("nuxt-link",{staticClass:"list__item",attrs:{to:"/product/"+t.product.id}},[o("img",{staticClass:"list__img",attrs:{src:t.product.preview,alt:t.product.name}}),t._v(" "),o("div",{staticClass:"list__info"},[o("div",{staticClass:"list__name"},[t._v(t._s(t.product.name))]),t._v(" "),o("div",{staticClass:"list__description"},[t._v("\n        "+t._s(t.product.description)+"\n      ")]),t._v(" "),o("div",{staticClass:"list__price"},[t._v(t._s(t._f("numberFormat")(t.product.rent))+" $/h")])])])],1)}),[],!1,null,null,null);e.default=component.exports},270:function(t,e,o){"use strict";o(260)},271:function(t,e,o){var n=o(50)(!1);n.push([t.i,'*,:after,:before{box-sizing:inherit}html{box-sizing:border-box;scroll-behavior:smooth}body{font-family:"CodecPro"}body,ul{padding:0;margin:0}li{list-style:none}a{text-decoration:none;color:inherit}.list{background:#f3f4f7;border-radius:48px;padding:56px 64px 24px}.list__products{display:flex;flex-wrap:wrap;margin:40px -16px 0}@media(max-width:1024px){.list{padding:24px 16px 12px;border-radius:24px}.list__products{margin:24px -10px 0}}',""]),t.exports=n},275:function(t,e,o){"use strict";o.r(e);o(36);var n={data:function(){return{filterCategory:0}},computed:{productList:function(){return this.$store.state.vehicles?this.$store.state.vehicles:{}},filteredProducts:function(){var t=this,e=this.productList;return this.filterCategory&&(e=e.filter((function(e){return e.type===t.filterCategory}))),e}},methods:{reloadProducts:function(){this.$store.dispatch("vehiclesAction"),this.$store.commit("vehiclesLoading",!0),this.$store.commit("vehiclesLoadingFailed",!1)}}},r=(o(270),o(20)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"list"},[this.$store.state.vehiclesLoading?o("div",[t._v("\n    Подождите пожалуйста, транспортные средства загружаются...\n  ")]):t._e(),t._v(" "),this.$store.state.vehiclesLoadingFailed?o("div",[t._v("\n    Ошибка загрузки, попробуйте перезагрузить каталог\n    "),o("button",{on:{click:function(e){return t.reloadProducts()}}},[t._v("Перезагрузить")])]):o("div",[o("ProductActions",{attrs:{"category-id":t.filterCategory},on:{"update:categoryId":function(e){t.filterCategory=e},"update:category-id":function(e){t.filterCategory=e}}}),t._v(" "),o("ul",{staticClass:"list__products"},t._l(t.filteredProducts,(function(t,e){return o("ProductItem",{key:e,attrs:{product:t}})})),1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductActions:o(266).default,ProductItem:o(267).default})},285:function(t,e,o){var content=o(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("4f857918",content,!0,{sourceMap:!1})},286:function(t,e,o){var n=o(50)(!1);n.push([t.i,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}",""]),t.exports=n},291:function(t,e,o){"use strict";o.r(e);o(285);var n={layout:"header"},r=o(20),component=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("ProductList")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductList:o(275).default})}}]);