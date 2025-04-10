"use strict";const O=require("path"),d=require("fs");function S(o){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(o){for(const r in o)if(r!=="default"){const e=Object.getOwnPropertyDescriptor(o,r);Object.defineProperty(t,r,e.get?e:{enumerable:!0,get:()=>o[r]})}}return t.default=o,Object.freeze(t)}const p=S(O),g=S(d);function j(o){o=o.replace(/^#/,"");let t,r,e;if(o.length===3)t=parseInt(o[0]+o[0],16),r=parseInt(o[1]+o[1],16),e=parseInt(o[2]+o[2],16);else if(o.length===6)t=parseInt(o.substring(0,2),16),r=parseInt(o.substring(2,4),16),e=parseInt(o.substring(4,6),16);else throw new Error("Invalid HEX color.");t/=255,r/=255,e/=255;const a=Math.max(t,r,e),i=Math.min(t,r,e);let s,c,$=(a+i)/2;if(a===i)s=c=0;else{const n=a-i;switch(c=$>.5?n/(2-a-i):n/(a+i),a){case t:s=(r-e)/n+(r<e?6:0);break;case r:s=(e-t)/n+2;break;case e:s=(t-r)/n+4;break}s/=6}return s=Math.round(s*360),c=Math.round(c*100),$=Math.round($*100),{h:s,s:c,l:$}}function v(o){return{name:"lmg-js2scss",buildStart(){let t="./theme.config.js";const r=p.resolve(process.cwd(),"theme.config.js");g.existsSync(r)&&(t=r),import(t).then(e=>{const a=_(e.default.theme),i=o.output||"/resources/sass/framework/_config.scss",s=p.resolve(process.cwd(),i),c=p.resolve(process.cwd(),"/resources/sass/framework/_root.scss");g.writeFileSync(process.cwd()+i,a.config),g.writeFileSync(process.cwd()+c,a.root),console.log(`SCSS configuration file generated: ${s}`)})}}}function _(o,t="   "){const r={config:"",root:""},e=Object.entries(o.breakpoints).map(([s,c])=>`${t}${s}: ${c},`).join(`
`);r.config+=`$breakpoints: (
${e}
);
`;const a=Object.entries(o.colors).map(([s,{background:c,foreground:$}])=>{let n="";const l=j(c),h=[400,300,200,100,50],m=[600,700,800,900,950];n+=`${t}--${s}: ${c};
`,n+=`${t}--${s}-500: ${c};
`,n+=`${t}--${s}-h: ${l.h};
`,n+=`${t}--${s}-s: ${l.s}%;
`,n+=`${t}--${s}-l: ${l.l};
`,n+=`${t}--${s}-text-foreground: ${$||"#000"};
`;const b=l.l/6.5;m.forEach((f,u)=>{n+=`${t}--${s}-${f}: hsl(var(--${s}-h), var(--${s}-s), ${l.l-b*(u+2)}%);
`});const w=(100-l.l)/6.5;return h.forEach((f,u)=>{n+=`${t}--${s}-${f}: hsl(var(--${s}-h), var(--${s}-s), ${l.l+w*(u+2)}%);
`}),n}).join(`
`);r.root+=`:root{
${a}
};
`;const i=Object.entries(o.fonts.base).map(([s,c])=>`${t}${s}: ${c},`).join(`
`);return r.config+=`$font-base: (
${i}
);
`,r}module.exports=v;
