(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(149)),o={id:"material-ui-v5",title:"With @material-ui v5",hide_title:!0,slug:"/material-ui-v5"},c={unversionedId:"getting-started/material-ui-v5",id:"getting-started/material-ui-v5",isDocsHomePage:!1,title:"With @material-ui v5",description:"Using with @material-ui v5",source:"@site/docs/getting-started/material-ui-v5.mdx",slug:"/material-ui-v5",permalink:"/docs/material-ui-v5",editUrl:"https://github.com/material-table-core/website/tree/master/docs/getting-started/material-ui-v5.mdx",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/"},next:{title:"Breaking Changes",permalink:"/docs/breaking-changes"}},l=[{value:"Breaking Changes",id:"breaking-changes",children:[]},{value:"Reasoning",id:"reasoning",children:[]},{value:"Installation",id:"installation",children:[{value:"Yarn",id:"yarn",children:[]},{value:"NPM",id:"npm",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"using-with-material-ui-v5"},"Using with @material-ui v5"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The version is still a work in progress and not fully tested!"))),Object(i.b)("h2",{id:"breaking-changes"},"Breaking Changes"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/breaking-changes#material-ui-v5"}),"See here for more")),Object(i.b)("h2",{id:"reasoning"},"Reasoning"),Object(i.b)("p",null,"With ",Object(i.b)("inlineCode",{parentName:"p"},"material-ui")," v5 becoming stable with a beta on July 1st and being promoted as the version to use, we starting to support both version v4 and v5."),Object(i.b)("p",null,"If you migrated to version 5 of ",Object(i.b)("inlineCode",{parentName:"p"},"material-ui"),", simply install our prerelease version to access the new version that supports v5."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("h3",{id:"yarn"},"Yarn"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"yarn add @material-table/core@next")),Object(i.b)("h3",{id:"npm"},"NPM"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm install @material-table/core@next")))}u.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);