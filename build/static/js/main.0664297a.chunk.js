(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{17:function(e,t,n){e.exports=n(40)},40:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(15),c=n.n(r),i=n(16),u=n(2),s=n(3),l=n.n(s),m="/api/notes",d=function(){return l.a.get(m)},f=function(e){return l.a.post(m,e)},h=function(e){return l.a.delete("".concat(m,"/").concat(e))},b=function(e,t){return console.log("".concat(m,"/").concat(e)),l.a.put("".concat(m,"/").concat(e),t)},p=function(e){var t={display:"block"},n={display:"block",width:"100%",padding:8,boxSizing:"border-box",marginBottom:16,borderColor:"#333",borderWidth:0,borderBottomWidth:1},a=e.handleAddNewPerson,r=e.handleSetNewName,c=e.handleSetNewPhonenumber,i=e.newName,u=e.newPhonenumber;return o.a.createElement("form",{onSubmit:a},o.a.createElement("div",null,o.a.createElement("label",{style:t},"Name: ",o.a.createElement("input",{style:n,value:i,onChange:r})),o.a.createElement("label",{style:t},"Number:"," ",o.a.createElement("input",{style:n,value:u,onChange:c}))),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"Add")))},g=function(e){var t=e.value,n=e.onChange;return o.a.createElement("div",null,o.a.createElement("label",{style:{display:"block"}},"Filter shown with: ",o.a.createElement("input",{style:{display:"block",width:"100%",padding:8,boxSizing:"border-box",marginBottom:24,borderColor:"#333",borderWidth:0,borderBottomWidth:1},value:t,onChange:n})))},y=function(e){var t=e.persons,n=e.showPerson,a=e.deletePerson,r={display:"flex",marginBottom:24},c={flexGrow:1,margin:0},i={flexGrow:0},u={fontWeight:"bold"};return o.a.createElement("div",null,t.map((function(e){return n(e.name)&&o.a.createElement("div",{style:r},o.a.createElement("p",{style:c,key:e.name},o.a.createElement("span",{style:u},e.name,":")," ",e.number),o.a.createElement("button",{style:i,onClick:function(){return a(e.id)}},"Delete"))})))},w=function(e){var t=e.type,n=e.message,a="";"error"===t&&(a="#FECBCB"),"success"===t&&(a="#D2FEDC");var r={position:"fixed",bottom:10,left:10,right:10,padding:16,backgroundColor:a,borderRadius:4,transition:"all 1s ease-in-out"};return o.a.createElement("div",{style:r},n)},v=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(u.a)(c,2),l=s[0],m=s[1],v=Object(a.useState)(""),E=Object(u.a)(v,2),C=E[0],N=E[1],k=Object(a.useState)(""),P=Object(u.a)(k,2),j=P[0],O=P[1],S=Object(a.useState)({type:"",message:""}),x=Object(u.a)(S,2),B=x[0],W=x[1];Object(a.useEffect)((function(){d().then((function(e){r(e.data)}))}),[]);return o.a.createElement("div",{style:{fontFamily:"Courier, monospace",maxWidth:320,margin:"0 auto"}},""!==B.type&&o.a.createElement(w,{type:B.type,message:B.message}),o.a.createElement("h1",null,"Phonebook"),o.a.createElement("h2",null,"Add person"),o.a.createElement(p,{handleAddNewPerson:function(e){if(e.preventDefault(),!(l.trim().length<1)){var t=n.find((function(e){return e.name===l}));if(t){if(window.confirm("".concat(l," is already added to phonebook. Do you want to replace the old number with the new one?"))){var a=Object(i.a)({},t,{number:C.trim()});return console.log(a.number,a.name,a.id),void b(t.id,a).then((function(e){m(""),N(""),r(n.map((function(e){return e.id===a.id?a:e}))),W({type:"success",message:"Phonenumber for ".concat(t.name," was successfully updated")}),setTimeout((function(){W({type:"",message:""})}),4e3)})).catch((function(e){W({type:"error",message:"There was an error updating phonenumber of ".concat(t.name,".")}),setTimeout((function(){W({type:"",message:""})}),4e3)}))}m(""),N("")}else{var o={name:l.trim(),number:C.trim()};f(o).then((function(e){r(n.concat(e.data)),m(""),N(""),W({type:"success",message:"New person was added successfully."}),setTimeout((function(){W({type:"",message:""})}),4e3)}))}}},handleSetNewName:function(e){return m(e.target.value)},handleSetNewPhonenumber:function(e){return N(e.target.value)},newName:l,newPhonenumber:C}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(g,{value:j,onChange:function(e){return O(e.target.value)}}),o.a.createElement(y,{persons:n,showPerson:function(e){return!j||!!e.toLowerCase().includes(j.toLowerCase())},deletePerson:function(e){var t=n.find((function(t){return t.id===e}));window.confirm("Are you sure you want to remove ".concat(t.name,"?"))&&h(e).then((function(t){r(n.filter((function(t){return t.id!==e}))),W({type:"success",message:"Person was successfully removed."}),setTimeout((function(){W({type:"",message:""})}),4e3)})).catch((function(e){W({type:"error",message:"There was an error deleting the person."}),setTimeout((function(){W({type:"",message:""})}),4e3)}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.0664297a.chunk.js.map