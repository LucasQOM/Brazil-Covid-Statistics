(function(e){function t(t){for(var a,c,o=t[0],d=t[1],i=t[2],l=0,u=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&u.push(n[c][0]),n[c]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);f&&f(t);while(u.length)u.shift()();return r.push.apply(r,i||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,c=1;c<s.length;c++){var d=s[c];0!==n[d]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},n={app:0},r=[];function c(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"13fd3c13"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(e){var t=[],s=n[e];if(0!==s)if(s)t.push(s[2]);else{var a=new Promise((function(t,a){s=n[e]=[t,a]}));t.push(s[2]=a);var r,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=c(e);var i=new Error;r=function(t){d.onerror=d.onload=null,clearTimeout(l);var s=n[e];if(0!==s){if(s){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",i.name="ChunkLoadError",i.type=a,i.request=r,s[1](i)}n[e]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:d})}),12e4);d.onerror=d.onload=r,document.head.appendChild(d)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var f=i;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}}),s("router-view")],1)},r=[],c=(s("5c0b"),s("2877")),o={},d=Object(c["a"])(o,n,r,!1,null,null,null),i=d.exports,l=(s("d3b7"),s("3ca3"),s("ddb0"),s("8c4f")),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-container",{attrs:{align:"center"}},[a("v-row",{staticClass:"my-3",attrs:{justify:"center"}},[a("div",[a("img",{attrs:{src:s("680b"),height:"150",width:"150"}})])]),a("v-row",{staticClass:"mt-3",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"getStates",attrs:{cols:"6"}},[a("label",{staticClass:"red--text font-weight-bold headline"},[e._v(" Buscar pelo Estado (UF) ")]),a("v-select",{staticClass:"rounded-lg",attrs:{"hide-details":"",items:e.states,"item-value":"uf","item-text":"name",label:"--- SELECIONE UM ESTADO ---",outlined:"",filled:""},on:{change:function(t){return e.getCovidStatus()}},model:{value:e.selectedState,callback:function(t){e.selectedState=t},expression:"selectedState"}})],1),a("v-col",{staticClass:"updatedAt",attrs:{cols:"12",sm:"6"}},[e.selectedState?a("h4",{staticClass:"\n                red\n                darken-1\n                rounded-lg\n                white--text\n                font-weight-bold\n                subheading\n                center-align\n                text-height\n              "},[e._v(" Atualizado em: "+e._s(e._f("moment")(e.statusStates.datetime,"D/MM/YYYY [às] HH[h]mm"))+" ")]):e._e()])],1),e.selectedState?a("v-row",{staticClass:"center-align"},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("label",{staticClass:"red--text font-weight-bold headline"},[e._v("Número de casos (Confirmados)")]),a("v-text-field",{staticClass:"rounded-lg",attrs:{value:e.statusStates.cases,filled:"",disabled:"",dense:"",outlined:"",height:"55"}})],1),a("v-col",{attrs:{cols:"12",sm:"6","align-self":"end"}},[a("label",{staticClass:"red--text font-weight-bold headline"},[e._v("Número de óbitos")]),a("v-text-field",{staticClass:"rounded-lg",attrs:{value:e.statusStates.deaths,filled:"",disabled:"",dense:"",outlined:"",height:"55"}})],1)],1):e._e(),e.selectedState?a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("label",{staticClass:"red--text font-weight-bold headline"},[e._v("Número de casos (Suspeitos)")]),a("v-text-field",{staticClass:"rounded-lg",attrs:{value:e.statusStates.suspects,filled:"",disabled:"",dense:"",outlined:"",height:"55"}})],1),e.selectedState?a("v-col",{staticClass:"rejectedCases",attrs:{cols:"12",sm:"6"}},[a("label",{staticClass:"red--text font-weight-bold headline"},[e._v("Casos rejeitados")]),a("v-text-field",{staticClass:"status rounded-lg",attrs:{value:e.statusStates.refuses,filled:"",disabled:"",dense:"",outlined:"",height:"55"}})],1):e._e()],1):e._e(),a("div",{staticClass:"d-flex justify-center mt-3"},[e.selectedState?e._e():a("v-banner",{staticStyle:{border:"dashed","border-color":"grey"},attrs:{"max-height":"200","max-width":"400"}},[a("v-icon",{attrs:{"x-large":"",color:"grey"}},[e._v(" mdi-help-circle ")]),a("div",{staticClass:"col-md-12 text-center"},[a("div",{staticClass:"title text-h4 font-weight-bold grey--text"},[e._v(" COVID 2019 ")])]),a("div",{staticClass:"col-md-12 text-center"},[a("div",{staticClass:"text text-center text-h5 grey--text"},[e._v(" Fique em casa e se cuide! ")])])],1),e.error?a("v-banner",{staticStyle:{border:"dashed","border-color":"red"},attrs:{"max-height":"200","max-width":"400"}},[a("v-icon",{attrs:{"x-large":"",color:"red"}},[e._v(" mdi-exclamation-thick ")]),a("div",{staticClass:"col-md-12 text-center"},[a("div",{staticClass:"title text-h4 font-weight-bold red--text"},[e._v("OPS")])]),a("div",{staticClass:"col-md-12 text-center"},[a("div",{staticClass:"text text-center text-h5 red--text"},[e._v(" Não foi possível carregar os dados para apresentação ")])])],1):e._e()],1)],1)],1)],1)],1)},u=[],b=(s("159b"),s("bc3a")),j=s.n(b),h={name:"Home",data:function(){return{statusStates:{uf:"",state:"",cases:"",deaths:"",suspects:"",refuses:"",datetime:""},states:[],selectedState:"",error:!1}},mounted:function(){this.getUf()},methods:{getCovidStatus:function(){var e=this;j.a.get("https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/".concat(this.selectedState)).then((function(t){"state not found"!=t.data.error?(e.error=!1,e.statusStates=t.data):e.error=!0}))},getUf:function(){var e=this;j.a.get("https://covid19-brazil-api.now.sh/api/report/v1").then((function(t){t.data.data.forEach((function(t){e.states.push({name:t.state,uf:t.uf})}))}))}}},m=h,v=s("6544"),p=s.n(v),g=s("7496"),x=s("e4e5"),y=s("62ad"),w=s("a523"),k=s("132d"),C=s("0fd9"),S=s("b974"),_=s("8654"),z=Object(c["a"])(m,f,u,!1,null,null,null),O=z.exports;p()(z,{VApp:g["a"],VBanner:x["a"],VCol:y["a"],VContainer:w["a"],VIcon:k["a"],VRow:C["a"],VSelect:S["a"],VTextField:_["a"]}),a["a"].use(l["a"]);var E=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],P=new l["a"]({routes:E}),V=P,M=s("2f62");a["a"].use(M["a"]);var T=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}}),N=s("f309");a["a"].use(N["a"]);var A=new N["a"]({});s("c1df");a["a"].config.productionTip=!1,a["a"].use(s("2ead")),new a["a"]({router:V,store:T,vuetify:A,render:function(e){return e(i)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";s("9c0c")},"680b":function(e,t,s){e.exports=s.p+"img/covid.1f788396.png"},"9c0c":function(e,t,s){}});
//# sourceMappingURL=app.5dd7d0fc.js.map