(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{109:function(t,e,o){"use strict";o.r(e);var n=o(9),a=o.n(n),s=o(45),i=o.n(s),r=o(33),c=o(35),u=o(39),d=o(22),l=o(58),p=o.n(l),_=o(73),j=o.n(_),b=o(74),g=o.n(b),m=o(13),x=function(t){return Object(m.jsx)("div",{className:g.a.heading,children:Object(m.jsx)("h1",{children:t.title})})},h=o(17),O=o(75),f=o.n(O),v=o(43);v.a.initializeApp({apiKey:"AIzaSyAfdG1xt2XmdlzLTFUEwBQ6BezEdzqua9c",authDomain:"todoapp-b6c76.firebaseapp.com",databaseURL:"https://todoapp-b6c76-default-rtdb.firebaseio.com",projectId:"todoapp-b6c76",storageBucket:"todoapp-b6c76.appspot.com",messagingSenderId:"1093447404387",appId:"1:1093447404387:web:2f66ee6421868de995e156",measurementId:"G-X0W4P2EFRZ"});var w=v.a.firestore(),A=function(t){var e=Object(n.useState)(""),o=Object(h.a)(e,2),a=o[0],s=o[1],i=function(e){"Enter"===e.key&&""!==a&&(w.collection(t.userId).add({createdAt:v.a.firestore.FieldValue.serverTimestamp(),task:a,isImportant:!1,isDone:!1}),s(""))};return Object(m.jsx)("div",{className:f.a.input,children:Object(m.jsx)("input",{type:"text",placeholder:"Type here your #todo and press Enter",value:a,onChange:function(t){return s(t.target.value)},onKeyDown:function(t){return i(t)}})})},I=o(40),N=o.n(I),L=o(34),y=o.n(L),k=function(t){var e=localStorage.getItem("user");return Object(m.jsxs)("div",{className:y.a.toolbox,children:[Object(m.jsx)("div",{className:"".concat(y.a.toolbox__button," ").concat(y.a.red),id:"close",onClick:function(){w.collection(e).doc(t.taskId).delete()}}),Object(m.jsx)("div",{className:"".concat(y.a.toolbox__button," ").concat(y.a.yellow),id:"important",onClick:function(){w.collection(e).doc(t.taskId).update({isImportant:!t.isImportant})}}),Object(m.jsx)("div",{className:"".concat(y.a.toolbox__button_extended," ").concat(y.a.green),id:"complete",onClick:function(){w.collection(e).doc(t.taskId).update({isDone:!t.isDone})}})]})},T=function(t){var e=t.id,o=t.task,n=t.isImportant,a=t.isDone;return Object(m.jsxs)("div",{className:N.a["todoList-item"],children:[Object(m.jsxs)("div",{className:N.a["todoList-item__row"],children:[Object(m.jsx)("div",{className:N.a["todoList-item__name"],children:a?Object(m.jsxs)("strike",{style:{fontWeight:"light"},children:[" ",o," "]}):o}),n?Object(m.jsx)("span",{className:N.a.important,children:"!!!"}):null,Object(m.jsx)(k,{taskId:e,isDone:a,isImportant:n})]}),Object(m.jsx)("hr",{className:N.a["todoList-item__line"]})]})},S=o(76),D=o.n(S),E=function(t){var e=Object(n.useState)([]),o=Object(h.a)(e,2),a=o[0],s=o[1];return Object(n.useEffect)((function(){w.collection(t.userId).orderBy("createdAt","asc").onSnapshot((function(t){s(t.docs.map((function(t){return{id:t.id,task:t.data().task,isImportant:t.data().isImportant,isDone:t.data().isDone,createdAt:t.data().createdAt}})))}))})),Object(m.jsx)("div",{className:D.a.todoList,children:a.length>0?a.map((function(t,e){return Object(m.jsx)(T,{id:t.id,task:t.task,isImportant:t.isImportant,isDone:t.isDone},e)})):Object(m.jsx)("p",{style:{opacity:".5",fontSize:"16px"},children:" For now, you haven't any tasks. Keep calm :)"})})},R=function(){var t=localStorage.getItem("user");return Object(m.jsxs)("div",{className:j.a.todo,children:[Object(m.jsx)(x,{title:"Your favorite todo!"}),Object(m.jsx)(E,{userId:t}),Object(m.jsx)(A,{userId:t})]})},z=o(0),C=o.n(z),B=o(3),G=o(52),U=o.n(G),q=o(53),F=o.n(q),P=function(t){return Object(m.jsxs)("div",{className:F.a["Auth-group"],children:[Object(m.jsx)("div",{className:F.a["Auth-group__input"],children:Object(m.jsx)("input",{type:"text",placeholder:"Enter your e-mail",onChange:function(e){return t.getLoginData(e)}})}),Object(m.jsx)("div",{className:F.a["Auth-group__input"],children:Object(m.jsx)("input",{type:"password",placeholder:"Enter your password",onChange:function(e){return t.getPasswordData(e)}})})]})},X=o(60),Q=o.n(X),V="SET_USER_DATA",K="SET_LOGIN_STATUS_TO_ACTIVE";var M=Object(r.b)(null,(function(t){return{setUserData:function(e){return t(function(t){return{type:V,payload:t}}(e))}}}))((function(t){return Object(m.jsxs)("div",{className:Q.a["Login-group"],children:[Object(m.jsx)("button",{className:Q.a.btn,onClick:function(){t.setUserData(t.userData),t.loginRequest()},children:t.buttonName}),Object(m.jsx)(c.b,{to:"/register",children:"Register now!"})]})})),W=o(51),H=o.n(W);var J=Object(r.b)(null,(function(t){return{setLoginStatusToActive:function(){return t({type:K})}}}))((function(t){var e=Object(d.g)(),o={email:null,password:null,returnSecureToken:!0},n=function(){var n=Object(B.a)(C.a.mark((function n(){var a;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,H.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAfdG1xt2XmdlzLTFUEwBQ6BezEdzqua9c",o);case 3:if(200!==(a=n.sent).status){n.next=10;break}return localStorage.setItem("user",a.data.email),n.next=8,t.setLoginStatusToActive();case 8:localStorage.setItem("isAuthenticated","true"),e.push("/todo");case 10:n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0),window.alert("Email or password does not exist!");case 16:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:U.a.Auth,children:[Object(m.jsxs)("div",{className:U.a.Auth__logo,children:[" Simple ",Object(m.jsx)("span",{className:U.a.todoText,children:"#TODO"})]}),Object(m.jsx)(P,{getLoginData:function(t){return function(t){o.email=t.target.value}(t)},getPasswordData:function(t){return function(t){o.password=t.target.value}(t)}}),Object(m.jsx)(M,{buttonName:"LogIn",userData:o,loginRequest:n})]})})),Y=function(){return Object(m.jsx)(a.a.Fragment,{children:Object(m.jsx)("span",{children:"Oops, this page doesn't found :("})})},Z=o(62),$=o.n(Z),tt=o(78),et=o.n(tt);function ot(t){return Object(m.jsx)("div",{className:et.a.RegisterGroup,children:Object(m.jsx)("button",{onClick:function(){t.registerRequest()},children:"Register"})})}var nt=function(){var t={email:null,password:null,returnSecureToken:!0},e=function(){var e=Object(B.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAfdG1xt2XmdlzLTFUEwBQ6BezEdzqua9c",t);case 3:return e.next=5,window.alert("Registered successfully!");case 5:return e.next=7,window.location.replace("/");case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),window.alert("Your account does not registered yet, try again...");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:$.a.Auth,children:[Object(m.jsx)("div",{className:$.a.Auth__logo,children:" Register "}),Object(m.jsx)(P,{getLoginData:function(e){return function(e){t.email=e.target.value}(e)},getPasswordData:function(e){return function(e){t.password=e.target.value}(e)}}),Object(m.jsx)(ot,{userData:t,registerRequest:e})]})},at=o(63),st=o.n(at),it=function(){return Object(m.jsx)("div",{className:st.a.Navigation,children:Object(m.jsx)("div",{className:st.a.Navigation__item,onClick:function(){sessionStorage.removeItem("isAuthenticated"),localStorage.removeItem("isAuthenticated"),window.location.replace("/")},children:"\xac"})})};var rt=Object(r.b)((function(t){return{isLoggedIn:t.auth.user.isLoggedIn}}))((function(t){return t.isLoggedIn||"true"===sessionStorage.getItem("isAuthenticated")||"true"===localStorage.getItem("isAuthenticated")?Object(m.jsxs)("div",{className:p.a.app,children:[Object(m.jsx)(it,{}),Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.b,{path:"/todo",component:R}),Object(m.jsx)(d.b,{exact:!0,path:"/",component:R}),Object(m.jsx)(d.b,{component:Y})]})]}):Object(m.jsx)("div",{className:p.a.app,children:Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.b,{path:"/auth",component:J}),Object(m.jsx)(d.b,{path:"/register",component:nt}),Object(m.jsx)(d.b,{exact:!0,path:"/",component:J}),Object(m.jsx)(d.a,{to:"/"})]})})})),ct=o(64),ut={user:{email:null,password:null,isLoggedIn:!1}},dt=Object(u.b)({auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case V:var o=Object(ct.a)({},t.user);return o.email=e.payload.email,o.password=e.payload.password,{user:o};case K:var n=Object(ct.a)({},t.user);return n.isLoggedIn=!0,{user:n};default:return t}}}),lt="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):u.c,pt=Object(u.d)(dt,lt(Object(u.a)())),_t=Object(m.jsx)(c.a,{children:Object(m.jsx)(r.a,{store:pt,children:Object(m.jsx)(rt,{})})});i.a.render(_t,document.getElementById("root"))},34:function(t,e,o){t.exports={toolbox:"Toolbox_toolbox__2ajAx",toolbox__button:"Toolbox_toolbox__button__1BQv0",toolbox__button_extended:"Toolbox_toolbox__button_extended__bjn5b",green:"Toolbox_green__11lvQ",yellow:"Toolbox_yellow__1H1w5",red:"Toolbox_red__6PCzt"}},40:function(t,e,o){t.exports={"todoList-item":"TodoListItem_todoList-item__11eoo","todoList-item__row":"TodoListItem_todoList-item__row__1MB5w","todoList-item__line":"TodoListItem_todoList-item__line__2K0jK","todoList-item__name":"TodoListItem_todoList-item__name__3hxkf",important:"TodoListItem_important__1qnme"}},52:function(t,e,o){t.exports={Auth:"Auth_Auth__2AC6H",Auth__logo:"Auth_Auth__logo__1NGG4",todoText:"Auth_todoText__3u3ie"}},53:function(t,e,o){t.exports={"Auth-group":"Auth-group_Auth-group__uZ9tc","Auth-group__input":"Auth-group_Auth-group__input__1VhbE"}},58:function(t,e,o){t.exports={app:"App_app__2ziFi"}},60:function(t,e,o){t.exports={"Login-group":"Login-group_Login-group__s3SU0",btn:"Login-group_btn__3ZPDn"}},62:function(t,e,o){t.exports={Auth:"Register_Auth__DA0V5",Auth__logo:"Register_Auth__logo__2uc-1"}},63:function(t,e,o){t.exports={Navigation:"Navigation_Navigation__1Ylka",Navigation__item:"Navigation_Navigation__item__1-1hl"}},73:function(t,e,o){t.exports={todo:"todo_todo__N2Gab"}},74:function(t,e,o){t.exports={heading:"Heading_heading__njkQq"}},75:function(t,e,o){t.exports={input:"Input_input__jrqWM"}},76:function(t,e,o){t.exports={todoList:"TodoList_todoList__wJSF2"}},78:function(t,e,o){t.exports={RegisterGroup:"RegisterGroup_RegisterGroup__3tBD6"}}},[[109,1,2]]]);
//# sourceMappingURL=main.cd60bd51.chunk.js.map