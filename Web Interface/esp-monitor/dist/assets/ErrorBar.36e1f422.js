import{j as S,r as R}from"./vendor.d26df5bd.js";import{f as U,L as E}from"./generateCategoricalChart.3d5f4a71.js";function V(r,e){return G(r)||D(r,e)||q(r,e)||$()}function $(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(r,e){if(!!r){if(typeof r=="string")return I(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(r,e)}}function I(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=r[t];return a}function D(r,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var t=[],a=!0,n=!1,o=void 0;try{for(var u=r[Symbol.iterator](),l;!(a=(l=u.next()).done)&&(t.push(l.value),!(e&&t.length===e));a=!0);}catch(m){n=!0,o=m}finally{try{!a&&u.return!=null&&u.return()}finally{if(n)throw o}}return t}}function G(r){if(Array.isArray(r))return r}function J(r,e){if(r==null)return{};var t=Q(r,e),a,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)a=o[n],!(e.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,a)||(t[a]=r[a]))}return t}function Q(r,e){if(r==null)return{};var t={},a=Object.keys(r),n,o;for(o=0;o<a.length;o++)n=a[o],!(e.indexOf(n)>=0)&&(t[n]=r[n]);return t}function T(r){var e=r.offset,t=r.layout,a=r.width,n=r.dataKey,o=r.data,u=r.dataPointFormatter,l=r.xAxis,m=r.yAxis,F=J(r,["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"]),L=U(F),W=o.map(function(K,N){var f=u(K,n),z=f.x,C=f.y,s=f.value,y=f.errorVal;if(!y)return null;var i=[],c,v;if(Array.isArray(y)){var x=V(y,2);c=x[0],v=x[1]}else c=v=y;if(t==="vertical"){var j=l.scale,h=C+e,w=h+a,O=h-a,b=j(s-c),p=j(s+v);i.push({x1:p,y1:w,x2:p,y2:O}),i.push({x1:b,y1:h,x2:p,y2:h}),i.push({x1:b,y1:w,x2:b,y2:O})}else if(t==="horizontal"){var P=m.scale,d=z+e,k=d-a,B=d+a,A=P(s-c),g=P(s+v);i.push({x1:k,y1:g,x2:B,y2:g}),i.push({x1:d,y1:A,x2:d,y2:g}),i.push({x1:k,y1:A,x2:B,y2:A})}return S(E,{className:"recharts-errorBar",...L,children:i.map(function(_,H){return R.exports.createElement("line",{..._,key:"line-".concat(H)})})},"bar-".concat(N))});return S(E,{className:"recharts-errorBars",children:W})}T.defaultProps={stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"};T.displayName="ErrorBar";export{T as E};