var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,i=(e,t)=>{for(var s in t||(t={}))r.call(t,s)&&l(e,s,t[s]);if(a)for(var s of a(t))o.call(t,s)&&l(e,s,t[s]);return e},n=(e,a)=>t(e,s(a));import{j as u,h as p,r as c,R as d,t as m,ae as y,F as v,x as b}from"./vendor.1fd8fd08.js";import{a as f}from"./index.02764415.js";import{F as g}from"./form-item.2143c29d.js";import"./index.a83e34dd.js";import"./index.6342c349.js";import"./index.esm.4af2ea23.js";import"./useTitle.500cc51b.js";const j=()=>{const e=u(),{t:t}=p(),[s,a]=c.exports.useState([]),r=()=>{f.get("settings").then((s=>{const r=s.data;200!==r.code?e({title:t(r.message),status:"error",duration:3e3,isClosable:!0}):a(r.data)}))};return c.exports.useEffect((()=>{r()}),[]),d.createElement(m,{w:"full"},d.createElement(y,{minChildWidth:"400px",spacing:"2"},s.map((o=>{var l,u;return d.createElement(g,{key:o.key,type:o.type,label:o.key,value:"bool"===o.type?"true"===o.value:o.value,readOnly:2===o.group,values:null==(l=o.values)?void 0:l.split(","),description:`${t(o.description)}(${t(0===o.group?"public":1===o.group?"private":"readonly")})`,onChange:e=>{a(s.map((t=>t.key===o.key?"bool"!==o.type?n(i({},t),{value:e}):n(i({},t),{value:"true"===o.value?"false":"true"}):t)))},onDelete:o.version===(null==(u=s.find((e=>"version"===e.key)))?void 0:u.value)?void 0:()=>{f.delete("setting",{params:{key:o.key}}).then((s=>{const a=s.data;200!==a.code?e({title:t(a.message),status:"error",duration:3e3,isClosable:!0}):(e({title:t(a.message),status:"success",duration:3e3,isClosable:!0}),r())}))}})}))),d.createElement(v,{mt:"2",justify:"end"},d.createElement(b,{onClick:()=>{f.post("settings",s).then((s=>{const a=s.data;200!==a.code?e({title:t(a.message),status:"error",duration:3e3,isClosable:!0}):e({title:t(a.message),status:"success",duration:3e3,isClosable:!0})}))}},t("save"))))};export{j as default};