(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{130:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return m}));var a=t(3),o=t(7),c=(t(0),t(150)),i=(t(163),t(156)),r={id:"on-row-click",title:"Select On Row Click"},l={unversionedId:"selection/on-row-click",id:"selection/on-row-click",isDocsHomePage:!1,title:"Select On Row Click",description:"Usage",source:"@site/demos/selection/on-row-click.mdx",slug:"/selection/on-row-click",permalink:"/demos/selection/on-row-click",version:"current",sidebar:"sidebar",previous:{title:"Basic Selection",permalink:"/demos/selection/basic"},next:{title:"Persist Row Click Events",permalink:"/demos/selection/persist-events"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],d={toc:s};function m(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import MaterialTable from "@material-table/core";\n\n<MaterialTable\n  // ...\n  components={{\n    Row: (props) => {\n      return <MTableBodyRow {...props} onRowClick={onRowClicked} />;\n    },\n  }}\n  options={{\n    selection: true,\n  }}\n/>;\n')),Object(c.b)("h2",{id:"live-demo"},"Live Demo"),Object(c.b)(i.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function SelectionOnRowClick() {\n  const [data, setData] = useState(SELECTION_DATA);\n\n  return (\n    <MaterialTable\n      data={data}\n      columns={SELECTION_COLS}\n      icons={TABLE_ICONS}\n      options={{\n        selection: true,\n      }}\n      onRowClick={(event, rowData) => {\n        // Copy row data and set checked state\n        const rowDataCopy = { ...rowData };\n        rowDataCopy.tableData.checked = !rowDataCopy.tableData.checked;\n        // Copy data so we can modify it\n        const dataCopy = [...data];\n        // Find the row we clicked and update it with `checked` prop\n        dataCopy[rowDataCopy.tableData.id] = rowDataCopy;\n        setData(dataCopy);\n      }}\n    />\n  );\n}\n")))}m.isMDXComponent=!0},156:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(0),o=t.n(a),c=(t(22),function(e){var n=e.type,t=e.children,a=n;return"tip"===n&&(a="success"),"note"===n&&(a="secondary"),o.a.createElement("div",{className:"admonition admonition-"+n+" alert alert--"+a},o.a.createElement("div",{className:"admonition-heading"},o.a.createElement("h5",null,o.a.createElement("span",{className:"admonition-icon"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),n.toLowerCase())),o.a.createElement("div",{className:"admonition-content"},o.a.createElement("p",null,t)))}),i=function(){return o.a.createElement(c,{type:"note"},"See ",o.a.createElement("a",{href:"/demos/#demo-environment"},o.a.createElement("b",null,o.a.createElement("i",null,"here")))," for more on the ",o.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}}}]);