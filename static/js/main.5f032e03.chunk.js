(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{50:function(e,n,t){e.exports=t(78)},55:function(e,n,t){},78:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(20),c=t.n(o),i=(t(55),t(2)),u=t(7),d=t(14),l=t(6),s=t.n(l),f=t(10),m=t(4),p=t(5),b=t(43),O=t.n(b).a.create({baseURL:"https://todo-list-e1cb3.firebaseio.com/"}),E=function(){return O.get("todos.json")},v=function(e,n,t){return O.post("todos.json",{task:e,day:n,done:t})},g=function(e){return O.delete("todos/".concat(e,".json"))},j=function(e,n){return O.patch("todos/".concat(e,".json"),{done:n})},x=function(e,n){return O.patch("todos/".concat(e,".json"),{day:n})},y={todos:[{id:"1",day:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",task:"\u041a\u0443\u043f\u0438\u0442\u044c \u043c\u043e\u043b\u043e\u043a\u043e",done:!1},{id:"2",day:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",task:"\u041a\u0443\u043f\u0438\u0442\u044c \u043c\u0430\u0441\u043b\u043e",done:!1},{id:"3",day:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",task:"\u041f\u043e\u043c\u044b\u0442\u044c \u043f\u043e\u043b",done:!1},{id:"4",day:"\u0412\u0442\u043e\u0440\u043d\u0438\u043a",task:"\u041f\u043e\u0433\u0443\u043b\u044f\u0442\u044c \u0432 \u043f\u0430\u0440\u043a\u0435",done:!1},{id:"5",day:"\u0412\u0442\u043e\u0440\u043d\u0438\u043a",task:"\u0417\u0430\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0437\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",done:!1},{id:"6",day:"\u0412\u0442\u043e\u0440\u043d\u0438\u043a",task:"\u041f\u043e\u043c\u044b\u0442\u044c \u0448\u043a\u0430\u0444",done:!1},{id:"7",day:"\u0421\u0440\u0435\u0434\u0430",task:"\u0420\u0435\u0448\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443",done:!1},{id:"8",day:"\u0421\u0440\u0435\u0434\u0430",task:"\u0419\u043e\u0433\u0430",done:!1},{id:"9",day:"\u0427\u0435\u0442\u0432\u0435\u0440\u0433",task:"\u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0442\u043e\u0440\u0442",done:!1},{id:"10",day:"\u0427\u0435\u0442\u0432\u0435\u0440\u0433",task:"\u0421\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u041c\u0424\u0426",done:!1},{id:"11",day:"\u0427\u0435\u0442\u0432\u0435\u0440\u0433",task:"\u041f\u043e\u0441\u0442\u0438\u0440\u0430\u0442\u044c \u043a\u043e\u0432\u0435\u0440",done:!1},{id:"12",day:"\u0427\u0435\u0442\u0432\u0435\u0440\u0433",task:"\u041a\u0443\u043f\u0438\u0442\u044c \u0442\u0435\u0442\u0440\u0430\u0434\u0438",done:!1},{id:"13",day:"\u041f\u044f\u0442\u043d\u0438\u0446\u0430",task:"\u0419\u043e\u0433\u0430",done:!1},{id:"14",day:"\u0421\u0443\u0431\u0431\u043e\u0442\u0430",task:"\u0411\u0430\u0441\u0441\u0435\u0439\u043d",done:!1},{id:"15",day:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435",task:"\u0420\u043e\u0431\u043e\u0442\u043e\u0442\u0435\u0445\u043d\u0438\u043a\u0430",done:!1},{id:"16",day:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435",task:"\u041f\u0440\u043e\u0433\u0443\u043b\u043a\u0430 \u0432 \u043b\u0435\u0441\u0443",done:!1}],loading:!1,loadingButton:!1},h=function(e){return{type:"SET_TODOS",todos:e}},k=function(e){return{type:"DELETE_TASK",id:e}},T=function(e,n,t,a){return{type:"ADD_TASK",task:e,day:n,done:t,id:a}},_=function(e){return{type:"CHECKED",id:e}},I=function(e,n,t){return{type:"MOVE_TASK_IN_OTHER_COLUMN",sourceIndex:e,destinationIndex:n,destinationId:t}},D=t(24),w=t(23),S=t(3);function L(){var e=Object(i.a)(["\n  text-decoration: ",";\n"]);return L=function(){return e},e}function A(){var e=Object(i.a)(["\n  margin-right: 5px;\n"]);return A=function(){return e},e}function C(){var e=Object(i.a)(["\n  border: 1px solid green;\n  padding: 3px;\n  margin-bottom: 8px;\n  border-radius: 5px;\n  outline: none;\n  background-color: ",";\n"]);return C=function(){return e},e}var N=S.a.div(C(),(function(e){return e.isDragging?"AliceBlue":"lavender"})),R=S.a.span(A()),B=S.a.span(L(),(function(e){return e.done?"line-through":"none"})),H=function(e){return r.a.createElement(w.b,{draggableId:e.id,index:e.index,key:e.id},(function(n,t){return r.a.createElement(N,Object.assign({},n.draggableProps,n.dragHandleProps,{ref:n.innerRef,isDragging:t.isDragging}),r.a.createElement(R,null," ",e.idTaskInDay,". "),r.a.createElement(B,{done:e.done}," ",e.task," "))}))};function U(){var e=Object(i.a)(["\n  list-style-type: none;\n  border: 1px solid green;\n  border-radius: 8px;\n  margin-bottom: 15px;\n  margin-top: 15px;\n  padding: 20px;\n  transition: background-color 0.2s ease;\n  background-color: ",";\n"]);return U=function(){return e},e}var M=S.a.li(U(),(function(e){return e.isDraggingOver?"Gainsboro":"lavender"})),K=function(e){var n=e.todos.filter((function(n){return n.day===e.day}));return r.a.createElement(w.c,{droppableId:e.day},(function(t,a){return r.a.createElement(M,Object.assign({},t.droppableProps,{ref:t.innerRef,isDraggingOver:a.isDraggingOver}),0===n.length?"\u0437\u0430\u0434\u0430\u0447 \u043d\u0435\u0442":n.map((function(n,t){return r.a.createElement(H,{key:n.id,done:n.done,task:n.task,id:n.id,index:e.todos.indexOf(n),idTaskInDay:t+1})})),t.placeholder)}))},V=Object(d.b)((function(e){return{todos:e.todoList.todos}}))((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{todos:e.todos,day:e.day}))}));function W(){var e=Object(i.a)(["\n  left: 56px;\n  animation: "," 0.6s infinite;\n"]);return W=function(){return e},e}function q(){var e=Object(i.a)(["\n  left: 32px;\n  animation: "," 0.6s infinite;\n"]);return q=function(){return e},e}function F(){var e=Object(i.a)(["\n  left: 8px;\n  animation: "," 0.6s infinite;\n"]);return F=function(){return e},e}function X(){var e=Object(i.a)(["\n  left: 8px;\n  animation: "," 0.6s infinite;\n"]);return X=function(){return e},e}function P(){var e=Object(i.a)(["\n0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n"]);return P=function(){return e},e}function z(){var e=Object(i.a)(["\n0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n"]);return z=function(){return e},e}function J(){var e=Object(i.a)(["\n0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n"]);return J=function(){return e},e}function G(){var e=Object(i.a)(["\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: silver;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n"]);return G=function(){return e},e}function $(){var e=Object(i.a)(["\n  isplay: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n"]);return $=function(){return e},e}var Q=S.a.div($()),Y=S.a.div(G()),Z=Object(S.b)(J()),ee=Object(S.b)(z()),ne=Object(S.b)(P()),te=Object(S.a)(Y)(X(),Z),ae=Object(S.a)(Y)(F(),ee),re=Object(S.a)(Y)(q(),ee),oe=Object(S.a)(Y)(W(),ne),ce=function(){return r.a.createElement(Q,null,r.a.createElement(te,null),r.a.createElement(ae,null),r.a.createElement(re,null),r.a.createElement(oe,null))};function ie(){var e=Object(i.a)(["\n  flex: 0 1 45%;\n"]);return ie=function(){return e},e}function ue(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]);return ue=function(){return e},e}function de(){var e=Object(i.a)(["\n  text-decoration: none;\n  color: black;\n  font-weight: 600;\n  font-size: 1.3rem;\n  margin-bottom: 15px;\n  &:hover {\n    color: green;\n  }\n  &.active {\n    color: green;\n  }\n"]);return de=function(){return e},e}var le=Object(S.a)(D.b)(de()),se=S.a.div(ue()),fe=S.a.div(ie()),me=function(e){var n=e.moveTaskInSameColumn,t=e.moveTaskInOtherColumn,a=e.loading;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(ce,null):r.a.createElement(w.a,{onDragStart:function(){},onDragEnd:function(e){var a=e.draggableId,r=e.destination,o=e.source;r&&(r.droppableId===o.droppableId&&r.index===o.index||(r.droppableId===o.droppableId?n(o.index,r.index):r.droppableId!==o.droppableId&&t(o.index,r.index,r.droppableId,a)))}},r.a.createElement(se,null,r.a.createElement(fe,null,r.a.createElement(le,{to:"/monday"}," \u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a "),r.a.createElement(V,{day:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a"})),r.a.createElement(fe,null,r.a.createElement(le,{to:"/tuesday"}," \u0412\u0442\u043e\u0440\u043d\u0438\u043a "),r.a.createElement(V,{day:"\u0412\u0442\u043e\u0440\u043d\u0438\u043a"})),r.a.createElement(fe,null,r.a.createElement(le,{to:"/wednesday"}," \u0421\u0440\u0435\u0434\u0430 "),r.a.createElement(V,{day:"\u0421\u0440\u0435\u0434\u0430"})),r.a.createElement(fe,null,r.a.createElement(le,{to:"/thursday"}," \u0427\u0435\u0442\u0432\u0435\u0440\u0433 "),r.a.createElement(V,{day:"\u0427\u0435\u0442\u0432\u0435\u0440\u0433"})),r.a.createElement(fe,null,r.a.createElement(le,{to:"/friday"}," \u041f\u044f\u0442\u043d\u0438\u0446\u0430 "),r.a.createElement(V,{day:"\u041f\u044f\u0442\u043d\u0438\u0446\u0430"})),r.a.createElement(fe,null,r.a.createElement(le,{to:"/saturday"}," \u0421\u0443\u0431\u0431\u043e\u0442\u0430 "),r.a.createElement(V,{day:"\u0421\u0443\u0431\u0431\u043e\u0442\u0430"})),r.a.createElement(fe,null,r.a.createElement(le,{to:"/sunday"}," \u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 "),r.a.createElement(V,{day:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435"})))))},pe=Object(d.b)((function(e){return{loading:e.todoList.loading}}),(function(e){return{moveTaskInSameColumn:function(n,t){return e(function(e,n){return{type:"MOVE_TASK_IN_SAME_COLUMN",sourceIndex:e,destinationIndex:n}}(n,t))},moveTaskInOtherColumn:function(n,t,a,r){return e(function(e,n,t,a){return function(){var r=Object(f.a)(s.a.mark((function r(o){return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,o(I(e,n,t)),r.next=4,x(a,t);case 4:r.next=9;break;case 6:r.prev=6,r.t0=r.catch(0),alert(r.t0.message);case 9:case"end":return r.stop()}}),r,null,[[0,6]])})));return function(e){return r.apply(this,arguments)}}()}(n,t,a,r))},setTodos:function(){return e(function(){var e=Object(f.a)(s.a.mark((function e(n){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:"SHOW_LOADER"}),e.next=4,E();case 4:(t=e.sent).data&&(a=Object.keys(t.data).map((function(e){return Object(p.a)(Object(p.a)({},t.data[e]),{},{id:e})})),n({type:"HIDE_LOADER"}),n(h(a))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}())}}}))((function(e){return Object(a.useEffect)((function(){e.setTodos()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(me,{moveTaskInSameColumn:e.moveTaskInSameColumn,moveTaskInOtherColumn:e.moveTaskInOtherColumn,loading:e.loading}))}));function be(){var e=Object(i.a)(["\n  border-radius: 5px;\n  background-color: lavender;\n"]);return be=function(){return e},e}function Oe(){var e=Object(i.a)(["\n  margin-left: 10px;\n  margin-right: 10px;\n"]);return Oe=function(){return e},e}function Ee(){var e=Object(i.a)(["\n  margin-left: 5px;\n"]);return Ee=function(){return e},e}function ve(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid green;\n  border-radius: 5px;\n  padding: 15px;\n  margin-bottom: 10px;\n"]);return ve=function(){return e},e}function ge(){var e=Object(i.a)(["\n  text-decoration: ",";\n"]);return ge=function(){return e},e}var je=S.a.span(ge(),(function(e){return e.done?"line-through":"none"})),xe=S.a.li(ve()),ye=S.a.span(Ee()),he=S.a.input(Oe()),ke=S.a.button(be()),Te=function(e){return r.a.createElement(xe,null,r.a.createElement(ye,null," ",e.number,r.a.createElement(he,{type:"checkbox",checked:e.todos.done,onChange:function(){return e.checked(e.todos.id,!e.todos.done)}}),r.a.createElement(je,{done:e.todos.done}," ",e.todos.task)),r.a.createElement(ke,{onClick:function(){return e.deleteTask(e.todos.id)}},"\xd7"))},_e=t(17),Ie=t(48),De=t(49);function we(){var e=Object(i.a)(["\n\t\t\tborder: transparent;\n\t\t\tborder-radius: 5px;\n\t\t\theight: 20px;\n\t\t\twidth: 100%;\t\t\t\n\t\t\toutline: none;\n\t"]);return we=function(){return e},e}function Se(){var e=Object(i.a)(["\n\t\t\tposition: relative;\n\t\t\tborder:",";\n\t\t\tborder-radius: 5px;\n\t\t\tpadding: 15px;\n\t\t\tmargin-bottom: 10px;\t\n\t"]);return Se=function(){return e},e}var Le=S.a.div(Se(),(function(e){return e.required?"1px solid green":"1px solid red"})),Ae=S.a.input(we()),Ce=function(e){var n=e.label,t=e.register,a=e.required,o=Object(De.a)(e,["label","register","required"]);return r.a.createElement(Le,{required:a},r.a.createElement(Ae,Object.assign({name:n,ref:t({required:a})},o)))};function Ne(){var e=Object(i.a)(["\n  border-radius: 5px;\n  background-color: lavender;\n"]);return Ne=function(){return e},e}var Re=S.a.button(Ne()),Be=function(e){var n=Object(Ie.a)({defaultValues:{something:"anything"}}),t=n.register,a=n.handleSubmit,o=n.reset,c=n.formState.isSubmitSuccessful,i=r.a.useState({}),u=Object(_e.a)(i,1)[0];return r.a.useEffect((function(){c&&o(Object(p.a)({},u))}),[c,u,o]),r.a.createElement("form",{onSubmit:a((function(n){e.addTask(n.task,e.day,!1)}))},r.a.createElement(Ce,{register:t,required:!0,type:"text",label:"task",placeholder:"\u0414\u043e\u0431\u0430\u0432\u044c \u0437\u0430\u0434\u0430\u0447\u0443",autoFocus:!0}),r.a.createElement(Re,null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))};function He(){var e=Object(i.a)(["\n  margin-bottom: 10px;\n"]);return He=function(){return e},e}function Ue(){var e=Object(i.a)(["\n  padding: 0;\n"]);return Ue=function(){return e},e}var Me=S.a.div(Ue()),Ke=S.a.div(He()),Ve=function(e){var n=e.todos.filter((function(n){return n.day===e.day}));return r.a.createElement("div",null,r.a.createElement("h3",null,e.day," "),e.loadingButton&&r.a.createElement(ce,null),r.a.createElement(Me,null,0===n.length?r.a.createElement(Ke,null,"\u0437\u0430\u0434\u0430\u0447 \u043d\u0435\u0442"):n.map((function(n,t){return r.a.createElement(Te,{key:n.id,number:t+1,todos:n,deleteTask:e.deleteTask,checked:e.checked})}))),r.a.createElement(Be,{addTask:e.addTask,day:e.day}))},We=Object(d.b)((function(e){return{todos:e.todoList.todos,loadingButton:e.todoList.loadingButton}}),(function(e){return{addTask:function(n,t,a){return e(function(e,n,t){return function(){var a=Object(f.a)(s.a.mark((function a(r){var o;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:"SHOW_LOADER_BUTTON"}),a.next=4,v(e,n,t);case 4:o=a.sent,r({type:"HIDE_LOADER_BUTTON"}),r(T(e,n,t,o.data.name)),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),alert(a.t0.message);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(n,t,a))},deleteTask:function(n){return e(function(e){return function(){var n=Object(f.a)(s.a.mark((function n(t){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:"SHOW_LOADER_BUTTON"}),n.next=4,g(e);case 4:t({type:"HIDE_LOADER_BUTTON"}),t(k(e)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),alert(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(n))},checked:function(n,t){return e(function(e,n){return function(){var t=Object(f.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j(e,n);case 3:a(_(e)),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),alert(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}(n,t))}}}))(Ve);function qe(){var e=Object(i.a)(["\n  flex: 1 1 60%;\n  max-width: 60%;\n  border: 1px solid green;\n  background-color: lavender;\n  padding: 15px;\n"]);return qe=function(){return e},e}function Fe(){var e=Object(i.a)(["\n  flex: 0 0 auto;\n  margin-top: 10px;\n  margin-bottom: 20px;\n"]);return Fe=function(){return e},e}function Xe(){var e=Object(i.a)(["\n  flex: 1 0 auto;\n"]);return Xe=function(){return e},e}function Pe(){var e=Object(i.a)(["\n  flex: 1 1 30%;\n  max-width: 30%;\n  padding: 0px 20px;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]);return Pe=function(){return e},e}function ze(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return ze=function(){return e},e}var Je=S.a.div(ze()),Ge=S.a.div(Pe()),$e=S.a.div(Xe()),Qe=S.a.div(Fe()),Ye=S.a.div(qe());var Ze=Object(u.f)((function(){return r.a.createElement(Je,null,r.a.createElement(Ge,null,r.a.createElement($e,null,r.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b"),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",render:function(){return r.a.createElement(We,{day:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a"})}}),r.a.createElement(u.a,{path:"/monday",render:function(){return r.a.createElement(We,{day:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a"})}}),r.a.createElement(u.a,{path:"/tuesday",render:function(){return r.a.createElement(We,{day:"\u0412\u0442\u043e\u0440\u043d\u0438\u043a"})}}),r.a.createElement(u.a,{path:"/wednesday",render:function(){return r.a.createElement(We,{day:"\u0421\u0440\u0435\u0434\u0430"})}}),r.a.createElement(u.a,{path:"/thursday",render:function(){return r.a.createElement(We,{day:"\u0427\u0435\u0442\u0432\u0435\u0440\u0433"})}}),r.a.createElement(u.a,{path:"/friday",render:function(){return r.a.createElement(We,{day:"\u041f\u044f\u0442\u043d\u0438\u0446\u0430"})}}),r.a.createElement(u.a,{path:"/saturday",render:function(){return r.a.createElement(We,{day:"\u0421\u0443\u0431\u0431\u043e\u0442\u0430"})}}),r.a.createElement(u.a,{path:"/sunday",render:function(){return r.a.createElement(We,{day:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435"})}}))),r.a.createElement(Qe,null," * \u041f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u0439 \u0434\u0435\u043b\u0430 \u043c\u0435\u0436\u0434\u0443 \u0434\u043d\u044f\u043c\u0438 \u043d\u0435\u0434\u0435\u043b\u0438 ")),r.a.createElement(Ye,null,r.a.createElement(pe,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var en=t(13),nn=t(47),tn=Object(en.c)({todoList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SHOW_LOADER_BUTTON":return Object(p.a)(Object(p.a)({},e),{},{loadingButton:!0});case"HIDE_LOADER_BUTTON":return Object(p.a)(Object(p.a)({},e),{},{loadingButton:!1});case"SHOW_LOADER":return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case"HIDE_LOADER":return Object(p.a)(Object(p.a)({},e),{},{loading:!1});case"SET_TODOS":var t=["\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430","\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435"],a=Object(p.a)(Object(p.a)({},e),{},{todos:n.todos,loading:!1}),r=t.map((function(e){return a.todos.filter((function(n){return n.day===e}))}));return a.todos=[].concat(Object(m.a)(r[0]),Object(m.a)(r[1]),Object(m.a)(r[2]),Object(m.a)(r[3]),Object(m.a)(r[4]),Object(m.a)(r[5]),Object(m.a)(r[6])),a;case"ADD_TASK":var o={id:n.id,day:n.day,task:n.task,done:n.done},c=e.todos.filter((function(e){return e.day===n.day})),i=e.todos.indexOf(c[c.length-1]),u=Object(p.a)(Object(p.a)({},e),{},{todos:Object(m.a)(e.todos)});return u.todos.splice(i+1,0,o),u;case"DELETE_TASK":return Object(p.a)(Object(p.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==n.id}))});case"CHECKED":return Object(p.a)(Object(p.a)({},e),{},{todos:e.todos.map((function(e){return e.id===n.id?Object(p.a)(Object(p.a)({},e),{},{done:!e.done}):e}))});case"MOVE_TASK_IN_SAME_COLUMN":var d=e.todos.find((function(e,t){return t===n.sourceIndex})),l=Object(p.a)(Object(p.a)({},e),{},{todos:Object(m.a)(e.todos)}),s=e.todos.findIndex((function(e,t){return t===n.sourceIndex})),f=e.todos.findIndex((function(e,t){return t===n.destinationIndex}));return l.todos.splice(s,1),l.todos.splice(f,0,d),l;case"MOVE_TASK_IN_OTHER_COLUMN":var b=e.todos.find((function(e,t){return t===n.sourceIndex})),O=Object(p.a)(Object(p.a)({},e),{},{todos:Object(m.a)(e.todos)}),E=e.todos.findIndex((function(e,t){return t===n.sourceIndex})),v=e.todos.findIndex((function(e,t){return t===n.destinationIndex}));return O.todos.splice(E,1),E<v&&v--,O.todos.splice(v,0,Object(p.a)(Object(p.a)({},b),{},{day:n.destinationId})),O;default:return e}}}),an=Object(en.e)(tn,Object(en.d)(Object(en.a)(nn.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));window.store=an;var rn=an;c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:rn},r.a.createElement(D.a,null,r.a.createElement(Ze,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.5f032e03.chunk.js.map