webpackJsonp([1],{"7Otq":function(e,r,t){e.exports=t.p+"static/img/logo.026545e.png"},"8otr":function(e,r){},Gqjw:function(e,r){},NHnr:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t("7+uW"),n={render:function(){var e=this.$createElement,r=this._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{src:t("7Otq"),width:"130px"}}),this._v(" "),r("router-view")],1)},staticRenderFns:[]};var o=t("VU/8")({name:"App"},n,!1,function(e){t("zX60")},null,null).exports,s=t("/ocq"),i={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),e._v(" "),t("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),t("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ul",[t("li",[t("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),t("br"),e._v(" "),t("li",[t("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,r=this._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),r("li",[r("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),r("li",[r("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var l=t("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},i,!1,function(e){t("TXg2")},"data-v-d8ec41bc",null).exports,u=t("fZjL"),c=t.n(u),p="10.0.1.13:4000",m=function(e,r){var t=("http://"+p+"/api/login/:email/:password").replace(":email",e).replace(":password",r);return fetch(t).then(function(e){return e.json()}).then(function(e){return e})},v=function(e,r,t){var a=("http://"+p+"/api/signup/:userParams").replace(":userParams",e+"/"+r+"/"+t);return fetch(a).then(function(e){return e.json()}).catch(function(e){return e}).then(function(e){return e})},d={name:"Login",data:function(){return{titulo:"Inicio de Sesión",email:"",password:"",json:[],error:""}},methods:{Ingresar:function(){var e=this;console.log(e.email),console.log(e.password),this.validarCampos()?(e.error="",this.validarEmail()?(e.error="",m(e.email,e.password).then(function(r){"errors"!=c()(r)?(e.json=r,e.$router.push("/paginaPrincipal")):e.error="Usted no esta registrador por favor registrese"}).catch(function(r){e.error="Usted no esta registrador",console.log(r)})):(e.error="Email invalido",e.json=[])):(e.error="Campos vacios",e.json=[])},validarCampos:function(){return""!=this.email&&""!=this.password},validarEmail:function(){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)}}},h={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h1",[e._v(e._s(e.titulo))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",name:"email",placeholder:"Correo Electronico"},domProps:{value:e.email},on:{input:function(r){r.target.composing||(e.email=r.target.value)}}}),t("br"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(r){r.target.composing||(e.password=r.target.value)}}}),t("br"),t("br"),e._v(" "),t("button",{attrs:{type:"button",name:"btnIngresar"},on:{click:e.Ingresar}},[e._v("Ingresar")]),t("br"),t("br"),e._v(" "),t("small",[t("router-link",{attrs:{to:"/signup"}},[e._v("Registrarse")])],1),e._v(" "),t("div",{},[t("h1",[e._v(e._s(e.error))]),e._v(" "),e._l(e.json,function(r){return t("h1",[e._v(e._s(r))])})],2)])},staticRenderFns:[]};var _=t("VU/8")(d,h,!1,function(e){t("qD6l")},"data-v-e29c4770",null).exports,f={name:"Signup",data:function(){return{titulo:"Registro de Usuario",username:"",email:"",password:"",password_confirmation:"",json:[],error:""}},methods:{Registrarse:function(e){e.preventDefault();var r=this;this.validarCampos()?(r.error="",this.validarEmail()?(r.error="",this.validateMinLength()?(r.error="",this.validateConfirmationPassword()?(r.error="",v(r.username,r.email,r.password).then(function(e){"errors"!=c()(e)?(r.json=e,r.$router.push("/registroExitoso")):r.error="El email esta en uso, prueba con otro email"}).catch(function(e){r.error="El email esta en uso, prueba con otro email",console.log(e)})):(console.log("El password no coincide"),r.error="El password no coincide",r.json=[])):(console.log("El password debe tener min 8 characteres"),r.error="El password debe tener min 8 characteres",r.json=[])):(console.log("Email invalido"),r.error="Email invalido",r.json=[])):(console.log("Campos vacios"),r.error="Campos vacios",r.json=[])},validarCampos:function(){return""!=this.username&&""!=this.email&&""!=this.password&&""!=this.password_confirmation},validarEmail:function(){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)},validateMinLength:function(){return this.password.trim().length>7},validateConfirmationPassword:function(){return this.password==this.password_confirmation}}},g={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h1",[e._v(e._s(e.titulo))]),e._v(" "),t("form",{attrs:{id:"app",method:"get"},on:{submit:e.Registrarse}},[t("input",{directives:[{name:"model",rawName:"v-model.text",value:e.username,expression:"username",modifiers:{text:!0}}],attrs:{type:"text",name:"username",placeholder:"Nombre de Usuario"},domProps:{value:e.username},on:{input:function(r){r.target.composing||(e.username=r.target.value)}}}),t("br"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.email",value:e.email,expression:"email",modifiers:{email:!0}}],attrs:{type:"email",name:"email",placeholder:"Correo Electronico"},domProps:{value:e.email},on:{input:function(r){r.target.composing||(e.email=r.target.value)}}}),t("br"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.password",value:e.password,expression:"password",modifiers:{password:!0}}],attrs:{type:"password",name:"password",placeholder:"Password",maxlength:"32"},domProps:{value:e.password},on:{input:function(r){r.target.composing||(e.password=r.target.value)}}}),t("br"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.password",value:e.password_confirmation,expression:"password_confirmation",modifiers:{password:!0}}],attrs:{type:"password",name:"password_confirmation",placeholder:"Confirmar Password",maxlength:"32"},domProps:{value:e.password_confirmation},on:{input:function(r){r.target.composing||(e.password_confirmation=r.target.value)}}}),t("br"),t("br"),e._v(" "),t("input",{attrs:{type:"submit",value:"Registrarse"}})]),t("br"),e._v(" "),t("small",[t("router-link",{attrs:{to:"/"}},[e._v("Login")])],1),e._v(" "),t("h1",[e._v(e._s(e.error))])])},staticRenderFns:[]};var w=t("VU/8")(f,g,!1,function(e){t("Gqjw")},"data-v-4028e795",null).exports,b={render:function(){var e=this.$createElement,r=this._self._c||e;return r("div",[r("h1",[this._v(this._s(this.bienvenida))]),this._v(" "),r("br"),this._v(" "),r("small",[r("router-link",{attrs:{to:"/"}},[this._v("SALIR")])],1)])},staticRenderFns:[]};var E=t("VU/8")({name:"registroExitoso",data:function(){return{bienvenida:"Bienvenido su registro fue realizado con EXITO"}}},b,!1,function(e){t("yqau")},"data-v-2dd63249",null).exports,j={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h1",[e._v(e._s(e.titulo))]),t("br"),e._v(" "),t("small",[t("router-link",{attrs:{to:"/"}},[e._v("Cerrar Session")])],1),e._v(" "),t("div",{},e._l(e.json,function(r){return t("h1",[e._v(e._s(r))])}),0)])},staticRenderFns:[]};var x=t("VU/8")({name:"paginaPrincipal",data:function(){return{titulo:"Bienvenido su ingreso fue realizado con EXITO",json:[],error:""}}},j,!1,function(e){t("8otr")},"data-v-c54512a2",null).exports;a.a.use(s.a);var P=new s.a({routes:[{path:"/Helloworld",name:"HelloWorld",component:l},{path:"/",name:"Login",component:_},{path:"/signup",name:"Signup",component:w},{path:"/registroExitoso",name:"registroExitoso",component:E},{path:"/paginaPrincipal",name:"paginaPrincipal",component:x}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:P,components:{App:o},template:"<App/>"})},TXg2:function(e,r){},qD6l:function(e,r){},yqau:function(e,r){},zX60:function(e,r){}},["NHnr"]);
//# sourceMappingURL=app.9888c980ae26e60faceb.js.map