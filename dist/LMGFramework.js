"use strict";const w=require("path"),O=require("fs");function S(t){const o=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t){for(const e in t)if(e!=="default"){const r=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(o,e,r.get?r:{enumerable:!0,get:()=>t[e]})}}return o.default=t,Object.freeze(o)}const u=S(w),g=S(O);function j(t){t=t.replace(/^#/,"");let o,e,r;if(t.length===3)o=parseInt(t[0]+t[0],16),e=parseInt(t[1]+t[1],16),r=parseInt(t[2]+t[2],16);else if(t.length===6)o=parseInt(t.substring(0,2),16),e=parseInt(t.substring(2,4),16),r=parseInt(t.substring(4,6),16);else throw new Error("Invalid HEX color.");o/=255,e/=255,r/=255;const a=Math.max(o,e,r),i=Math.min(o,e,r);let s,c,f=(a+i)/2;if(a===i)s=c=0;else{const n=a-i;switch(c=f>.5?n/(2-a-i):n/(a+i),a){case o:s=(e-r)/n+(e<r?6:0);break;case e:s=(r-o)/n+2;break;case r:s=(o-e)/n+4;break}s/=6}return s=Math.round(s*360),c=Math.round(c*100),f=Math.round(f*100),{h:s,s:c,l:f}}function _(t){return{name:"lmg-js2scss",buildStart(){let o=u.resolve(__dirname,"default.config.js"),e=u.resolve(process.cwd(),"theme.config.js");g.existsSync(e)?o=e:console.log("theme.config.js not found, using default.config.js"),import(o).then(r=>{const a=v(r.default.theme),i=t.output.config||u.resolve(process.cwd(),"/resources/sass/framework/_config.scss"),s=t.output.root||u.resolve(process.cwd(),"/resources/sass/framework/_root.scss");g.writeFileSync(process.cwd()+i,a.config),g.writeFileSync(process.cwd()+s,a.root),console.log("SCSS configuration file generated")})}}}function v(t,o="   "){const e={config:"",root:""},r=Object.entries(t.breakpoints).map(([s,c])=>`${o}${s}: ${c},`).join(`
`);e.config+=`$breakpoints: (
${r}
);
`;const a=Object.entries(t.colors).map(([s,{background:c,foreground:f}])=>{let n="";const l=j(c),m=[400,300,200,100,50],h=[600,700,800,900,950];n+=`${o}--${s}: ${c};
`,n+=`${o}--${s}-500: ${c};
`,n+=`${o}--${s}-h: ${l.h};
`,n+=`${o}--${s}-s: ${l.s}%;
`,n+=`${o}--${s}-l: ${l.l};
`,n+=`${o}--${s}-text-foreground: ${f||"#000"};
`;const b=l.l/6.5;h.forEach(($,p)=>{n+=`${o}--${s}-${$}: hsl(var(--${s}-h), var(--${s}-s), ${l.l-b*(p+2)}%);
`});const d=(100-l.l)/6.5;return m.forEach(($,p)=>{n+=`${o}--${s}-${$}: hsl(var(--${s}-h), var(--${s}-s), ${l.l+d*(p+2)}%);
`}),n}).join(`
`);e.root+=`:root{
${a}
};
`;const i=Object.entries(t.fonts.base).map(([s,c])=>`${o}${s}: ${c},`).join(`
`);return e.config+=`$font-base: (
${i}
);
`,e}module.exports=_;
