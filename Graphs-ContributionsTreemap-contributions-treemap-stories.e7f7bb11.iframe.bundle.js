"use strict";(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[4182],{"./components/Graphs/ContributionsTreemap/contributions-treemap.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Contributors:()=>Contributors,Loading:()=>Loading,Owners:()=>Owners,Repositories:()=>Repositories,__namedExportsOrder:()=>__namedExportsOrder,default:()=>contributions_treemap_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_spring_web_modern=__webpack_require__("./node_modules/@react-spring/web/dist/react-spring_web.modern.mjs"),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),card=__webpack_require__("./components/atoms/Card/card.tsx"),client_only=__webpack_require__("./components/atoms/ClientOnly/client-only.tsx"),skeleton_wrapper=__webpack_require__("./components/atoms/SkeletonLoader/skeleton-wrapper.tsx"),Button_button=__webpack_require__("./components/shared/Button/button.tsx"),fi=__webpack_require__("./node_modules/react-icons/fi/index.mjs"),__jsx=react.createElement;const Resizer=_ref=>{let{onToggleResize}=_ref;return __jsx("button",{role:"switch","aria-checked":"true",onClick:event=>{const button=event.currentTarget,checked="true"===button.ariaChecked;button.ariaChecked=checked?"false":"true",onToggleResize(checked)},className:"border rounded border-transparent absolute top-0 right-0 p-2"},__jsx("span",{className:"sr-only"},"Toggle graph size"),__jsx(fi.D7o,{className:"w-4 h-4 hover:text-orange-500"}))};Resizer.displayName="Resizer";try{Resizer.displayName="Resizer",Resizer.__docgenInfo={description:"",displayName:"Resizer",props:{onToggleResize:{defaultValue:null,description:"",name:"onToggleResize",required:!0,type:{name:"OnToggleResizeEventType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Graphs/shared/graph-resizer.tsx#Resizer"]={docgenInfo:Resizer.__docgenInfo,name:"Resizer",path:"components/Graphs/shared/graph-resizer.tsx#Resizer"})}catch(__react_docgen_typescript_loader_error){}function htmlNodeTransform(x,y){return(0,react_spring_web_modern.to)([x,y],((x,y)=>"translate(".concat(x,"px, ").concat(y,"px)")))}var special_node_jsx=react.createElement;const NonMemoizedSpecialNode=_ref=>{let{node,animatedProps,borderWidth,enableLabel,labelSkipSize}=_ref;const showLabel=enableLabel&&node.isLeaf&&(0===labelSkipSize||Math.min(node.width,node.height)>labelSkipSize),[fullRepoName]=node.id.split(":");return special_node_jsx(react_spring_web_modern.q.button,{className:"absolute grid overflow-hidden border-solid place-content-stretch",style:{top:0,left:0,transform:htmlNodeTransform(animatedProps.x,animatedProps.y),width:animatedProps.width,height:animatedProps.height,borderWidth,borderColor:node.borderColor},onClick:node.onClick},special_node_jsx(react_spring_web_modern.q.div,{style:{opacity:node.opacity,width:animatedProps.width,height:animatedProps.height,background:node.color,gridArea:"1 / 1"},onMouseEnter:node.onMouseEnter,onMouseMove:node.onMouseMove,onMouseLeave:node.onMouseLeave}),showLabel&&special_node_jsx(react_spring_web_modern.q.div,{className:"grid p-3 text-white pointer-events-none place-items-start",style:{gridArea:"1 / 1",transformOrigin:"center center",opacity:animatedProps.labelOpacity,placeItems:"flex-start"}},special_node_jsx("div",{className:"flex flex-col items-start"},special_node_jsx("div",{className:"text-sm"},fullRepoName),special_node_jsx("div",{className:"text-xs whitespace-nowrap overflow-hidden overflow-ellipsis"},node.label," contributions"))))};NonMemoizedSpecialNode.displayName="NonMemoizedSpecialNode";const SpecialNode=(0,react.memo)(NonMemoizedSpecialNode);try{SpecialNode.displayName="SpecialNode",SpecialNode.__docgenInfo={description:"",displayName:"SpecialNode",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Graphs/ContributionsTreemap/special-node.tsx#SpecialNode"]={docgenInfo:SpecialNode.__docgenInfo,name:"SpecialNode",path:"components/Graphs/ContributionsTreemap/special-node.tsx#SpecialNode"})}catch(__react_docgen_typescript_loader_error){}var next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),github=__webpack_require__("./lib/utils/github.ts"),contributor_node_jsx=react.createElement;const NonMemoizedContributorNode=_ref=>{let{node,animatedProps,borderWidth,enableLabel,labelSkipSize}=_ref;const showLabel=enableLabel&&node.isLeaf&&(0===labelSkipSize||Math.min(node.width,node.height)>labelSkipSize),avatarURL=(0,github.cc)(node.id);return contributor_node_jsx(react_spring_web_modern.q.button,{className:"absolute grid overflow-hidden border-solid place-content-stretch",style:{top:0,left:0,transform:htmlNodeTransform(animatedProps.x,animatedProps.y),width:animatedProps.width,height:animatedProps.height,borderWidth,borderColor:node.borderColor}},contributor_node_jsx(react_spring_web_modern.q.div,{style:{opacity:node.opacity,width:animatedProps.width,height:animatedProps.height,background:node.color,gridArea:"1 / 1"},onMouseEnter:node.onMouseEnter,onMouseMove:node.onMouseMove,onMouseLeave:node.onMouseLeave}),showLabel&&contributor_node_jsx(react_spring_web_modern.q.div,{className:"grid p-3 text-white place-items-start pointer-events-none",style:{gridArea:"1 / 1",transformOrigin:"center center",opacity:animatedProps.labelOpacity,placeItems:"flex-start"}},contributor_node_jsx("div",{className:"flex items-center gap-2"},contributor_node_jsx(next_image.Z,{className:"col-span-1 col-start-1 row-span-2",src:avatarURL,alt:"".concat(node.id,"'s avatar"),width:"42",height:"42",style:{display:"block",borderRadius:"50%",border:"solid 2px white",flexShrink:0,flexGrow:0}}),contributor_node_jsx("div",{className:"flex flex-col items-start gap-2"},contributor_node_jsx("div",null,node.id),contributor_node_jsx("div",{className:"whitespace-nowrap overflow-hidden overflow-ellipsis",style:{gridColumnStart:"2",marginTop:"-0.5rem"}},node.formattedValue," Contributions")))))};NonMemoizedContributorNode.displayName="NonMemoizedContributorNode";const ContributorNode=(0,react.memo)(NonMemoizedContributorNode);try{ContributorNode.displayName="ContributorNode",ContributorNode.__docgenInfo={description:"",displayName:"ContributorNode",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Graphs/ContributionsTreemap/contributor-node.tsx#ContributorNode"]={docgenInfo:ContributorNode.__docgenInfo,name:"ContributorNode",path:"components/Graphs/ContributionsTreemap/contributor-node.tsx#ContributorNode"})}catch(__react_docgen_typescript_loader_error){}var contributions_treemap_jsx=react.createElement;function BreadCrumb(_ref){let{isActive,useSeparator=!0,children}=_ref;const separatorStyle=(0,react_spring_web_modern.q_)(isActive?{opacity:1}:{opacity:0}),textStyle=(0,react_spring_web_modern.q_)(isActive?{opacity:1,translateX:0}:{opacity:0,translateX:100});return contributions_treemap_jsx(react.Fragment,null,contributions_treemap_jsx(react_spring_web_modern.q.div,{style:textStyle,children}),useSeparator?contributions_treemap_jsx(react_spring_web_modern.q.div,{className:"px-1",style:separatorStyle},"/"):null)}const ResponsiveTreeMapHtml=dynamic_default()((()=>Promise.all([__webpack_require__.e(2672),__webpack_require__.e(6497),__webpack_require__.e(3804),__webpack_require__.e(6453)]).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@nivo/treemap/dist/nivo-treemap.es.js")).then((module=>module.ResponsiveTreeMapHtml))),{ssr:!1,loadableGenerated:{webpack:()=>["./node_modules/@nivo/treemap/dist/nivo-treemap.es.js"]}}),ContributionsTreemap=_ref2=>{let{projectId,orgName,data,color,isLoading,onDrillDown:onDrilldown,onDrillUp,onToggleResize}=_ref2;return contributions_treemap_jsx(card.Z,{className:"grid place-content-stretch"},contributions_treemap_jsx(react.Fragment,null,contributions_treemap_jsx(Resizer,{onToggleResize}),contributions_treemap_jsx("div",{className:"grid"},contributions_treemap_jsx("h2",{className:"font-medium text-lg text-slate-900 mb-2 flex items-center justify-between"},"All Contributions"),contributions_treemap_jsx("div",{className:"flex gap-2 items-center justify-between"},contributions_treemap_jsx("div",{className:"flex gap-2 mb-2"},orgName?contributions_treemap_jsx(BreadCrumb,{isActive:!0,useSeparator:null!==projectId},orgName):null,projectId?contributions_treemap_jsx(react.Fragment,null,contributions_treemap_jsx(BreadCrumb,{isActive:!0},projectId),contributions_treemap_jsx(BreadCrumb,{isActive:!0,useSeparator:!1},"Contributors")):null),contributions_treemap_jsx("div",{className:"flex gap-2 mb-2"},contributions_treemap_jsx(Button_button.Z,{variant:"outline",disabled:!orgName,onClick:orgName?onDrillUp:void 0},contributions_treemap_jsx("span",{className:"sr-only"},"Drill up in the treemap of contributions"),contributions_treemap_jsx("span",{className:"not-sr-only"},"Back")))),contributions_treemap_jsx("div",{className:"rounded-md overflow-hidden grid place-content-stretch"},contributions_treemap_jsx("div",{className:"grid",style:{gridArea:"1 / 1",minHeight:"29rem"}},contributions_treemap_jsx(client_only.Z,null,isLoading?contributions_treemap_jsx(skeleton_wrapper.Z,null):contributions_treemap_jsx(ResponsiveTreeMapHtml,{data,tile:"squarify",labelSkipSize:12,innerPadding:4,leavesOnly:!0,orientLabel:!1,nodeComponent:null===projectId||null===orgName?SpecialNode:ContributorNode,colors:color,nodeOpacity:1,borderWidth:0,onClick:onDrilldown,motionConfig:"default"})))))))};ContributionsTreemap.displayName="ContributionsTreemap";try{ContributionsTreemap.displayName="ContributionsTreemap",ContributionsTreemap.__docgenInfo={description:"",displayName:"ContributionsTreemap",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"OrdinalColorScaleConfig<ComputedNodeWithoutStyles<Datum>>"}},projectId:{defaultValue:null,description:"",name:"projectId",required:!0,type:{name:"string | null"}},orgName:{defaultValue:null,description:"",name:"orgName",required:!0,type:{name:"string | null"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},onDrillDown:{defaultValue:null,description:"",name:"onDrillDown",required:!0,type:{name:"NodeMouseEventHandler<object>"}},onDrillUp:{defaultValue:null,description:"",name:"onDrillUp",required:!0,type:{name:"() => void"}},onToggleResize:{defaultValue:null,description:"",name:"onToggleResize",required:!0,type:{name:"OnToggleResizeEventType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Graphs/ContributionsTreemap/contributions-treemap.tsx#ContributionsTreemap"]={docgenInfo:ContributionsTreemap.__docgenInfo,name:"ContributionsTreemap",path:"components/Graphs/ContributionsTreemap/contributions-treemap.tsx#ContributionsTreemap"})}catch(__react_docgen_typescript_loader_error){}var _Owners$parameters,_Owners$parameters2,_Repositories$paramet,_Repositories$paramet2,_Contributors$paramet,_Contributors$paramet2,_Loading$parameters,_Loading$parameters2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const contributions_treemap_stories={title:"Components/Graphs/ContributionsTreemap",component:ContributionsTreemap},Owners={args:{data:{id:"root",children:[{id:"hono-js",value:45},{id:"reduxjs",value:12},{id:"nodejs",value:76},{id:"reactjs",value:89},{id:"angular",value:33},{id:"babel",value:52},{id:"expressjs",value:64},{id:"webpack",value:22},{id:"eslint",value:17},{id:"jest",value:91},{id:"vuejs",value:41},{id:"nestjs",value:55},{id:"axios",value:8},{id:"lodash",value:37},{id:"moment",value:67},{id:"storybook",value:14},{id:"graphql",value:72},{id:"prisma",value:5},{id:"mongodb",value:29},{id:"redis",value:83}]},color:["#fb923c","#34d399","#10b981","#22d3ee","#818cf8","#3b82f6","#e879f9","#fb7185","#38bdf8","#a78bfa","#c084fc","#f472b6"],onDrillDown:()=>{},onDrillUp:()=>{},orgName:null,projectId:null,isLoading:!1}},Repositories={args:{data:{id:"root",children:[{id:"kubernetes",value:42},{id:"minikube",value:15},{id:"kops",value:72},{id:"helm",value:91},{id:"kubectl",value:33},{id:"kube-proxy",value:58},{id:"kubelet",value:22},{id:"kube-scheduler",value:67},{id:"kube-controller-manager",value:8},{id:"etcd",value:79},{id:"kube-dns",value:11},{id:"coredns",value:25},{id:"flannel",value:63},{id:"calico",value:41},{id:"istio",value:37},{id:"prometheus",value:54},{id:"grafana",value:18},{id:"cni",value:88},{id:"kubernetes-dashboard",value:9},{id:"dashboard",value:75}]},color:["#fb923c","#34d399","#10b981","#22d3ee","#818cf8","#3b82f6","#e879f9","#fb7185","#38bdf8","#a78bfa","#c084fc","#f472b6"],onDrillDown:()=>{},onDrillUp:()=>{},orgName:"kubernetes",projectId:null,isLoading:!1}},Contributors={args:{data:{id:"root",children:[{id:"nickytonline",value:10},{id:"brandonroberts",value:97},{id:"BekahHW",value:30},{id:"isabensusan",value:41},{id:"bdougie",value:52},{id:"jpmcb",value:63},{id:"OgDev-01",value:34}]},color:["#fb923c","#34d399","#10b981","#22d3ee","#818cf8","#3b82f6","#e879f9","#fb7185","#38bdf8","#a78bfa","#c084fc","#f472b6"],onDrillDown:()=>{},onDrillUp:()=>{},orgName:"open-sauced",projectId:"app",isLoading:!1}},Loading={args:{isLoading:!0}};Owners.parameters=_objectSpread(_objectSpread({},Owners.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Owners$parameters=Owners.parameters)||void 0===_Owners$parameters?void 0:_Owners$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    data: {\n      id: "root",\n      children: [{\n        id: "hono-js",\n        value: 45\n      }, {\n        id: "reduxjs",\n        value: 12\n      }, {\n        id: "nodejs",\n        value: 76\n      }, {\n        id: "reactjs",\n        value: 89\n      }, {\n        id: "angular",\n        value: 33\n      }, {\n        id: "babel",\n        value: 52\n      }, {\n        id: "expressjs",\n        value: 64\n      }, {\n        id: "webpack",\n        value: 22\n      }, {\n        id: "eslint",\n        value: 17\n      }, {\n        id: "jest",\n        value: 91\n      }, {\n        id: "vuejs",\n        value: 41\n      }, {\n        id: "nestjs",\n        value: 55\n      }, {\n        id: "axios",\n        value: 8\n      }, {\n        id: "lodash",\n        value: 37\n      }, {\n        id: "moment",\n        value: 67\n      }, {\n        id: "storybook",\n        value: 14\n      }, {\n        id: "graphql",\n        value: 72\n      }, {\n        id: "prisma",\n        value: 5\n      }, {\n        id: "mongodb",\n        value: 29\n      }, {\n        id: "redis",\n        value: 83\n      }]\n    },\n    color: getGraphColorPalette(),\n    onDrillDown: () => {},\n    onDrillUp: () => {},\n    orgName: null,\n    projectId: null,\n    isLoading: false\n  }\n}'},null===(_Owners$parameters2=Owners.parameters)||void 0===_Owners$parameters2||null===(_Owners$parameters2=_Owners$parameters2.docs)||void 0===_Owners$parameters2?void 0:_Owners$parameters2.source)})}),Repositories.parameters=_objectSpread(_objectSpread({},Repositories.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Repositories$paramet=Repositories.parameters)||void 0===_Repositories$paramet?void 0:_Repositories$paramet.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    data: {\n      id: "root",\n      children: [{\n        id: "kubernetes",\n        value: 42\n      }, {\n        id: "minikube",\n        value: 15\n      }, {\n        id: "kops",\n        value: 72\n      }, {\n        id: "helm",\n        value: 91\n      }, {\n        id: "kubectl",\n        value: 33\n      }, {\n        id: "kube-proxy",\n        value: 58\n      }, {\n        id: "kubelet",\n        value: 22\n      }, {\n        id: "kube-scheduler",\n        value: 67\n      }, {\n        id: "kube-controller-manager",\n        value: 8\n      }, {\n        id: "etcd",\n        value: 79\n      }, {\n        id: "kube-dns",\n        value: 11\n      }, {\n        id: "coredns",\n        value: 25\n      }, {\n        id: "flannel",\n        value: 63\n      }, {\n        id: "calico",\n        value: 41\n      }, {\n        id: "istio",\n        value: 37\n      }, {\n        id: "prometheus",\n        value: 54\n      }, {\n        id: "grafana",\n        value: 18\n      }, {\n        id: "cni",\n        value: 88\n      }, {\n        id: "kubernetes-dashboard",\n        value: 9\n      }, {\n        id: "dashboard",\n        value: 75\n      }]\n    },\n    color: getGraphColorPalette(),\n    onDrillDown: () => {},\n    onDrillUp: () => {},\n    orgName: "kubernetes",\n    projectId: null,\n    isLoading: false\n  }\n}'},null===(_Repositories$paramet2=Repositories.parameters)||void 0===_Repositories$paramet2||null===(_Repositories$paramet2=_Repositories$paramet2.docs)||void 0===_Repositories$paramet2?void 0:_Repositories$paramet2.source)})}),Contributors.parameters=_objectSpread(_objectSpread({},Contributors.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Contributors$paramet=Contributors.parameters)||void 0===_Contributors$paramet?void 0:_Contributors$paramet.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    data: {\n      id: "root",\n      children: [{\n        id: "nickytonline",\n        value: 10\n      }, {\n        id: "brandonroberts",\n        value: 97\n      }, {\n        id: "BekahHW",\n        value: 30\n      }, {\n        id: "isabensusan",\n        value: 41\n      }, {\n        id: "bdougie",\n        value: 52\n      }, {\n        id: "jpmcb",\n        value: 63\n      }, {\n        id: "OgDev-01",\n        value: 34\n      }]\n    },\n    color: getGraphColorPalette(),\n    onDrillDown: () => {},\n    onDrillUp: () => {},\n    orgName: "open-sauced",\n    projectId: "app",\n    isLoading: false\n  }\n}'},null===(_Contributors$paramet2=Contributors.parameters)||void 0===_Contributors$paramet2||null===(_Contributors$paramet2=_Contributors$paramet2.docs)||void 0===_Contributors$paramet2?void 0:_Contributors$paramet2.source)})}),Loading.parameters=_objectSpread(_objectSpread({},Loading.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Loading$parameters=Loading.parameters)||void 0===_Loading$parameters?void 0:_Loading$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    isLoading: true\n  }\n}"},null===(_Loading$parameters2=Loading.parameters)||void 0===_Loading$parameters2||null===(_Loading$parameters2=_Loading$parameters2.docs)||void 0===_Loading$parameters2?void 0:_Loading$parameters2.source)})});const __namedExportsOrder=["Owners","Repositories","Contributors","Loading"]},"./components/atoms/Card/card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Card=_ref=>{let{className,children,heading}=_ref;return __jsx("article",{className:"".concat(className||""," block ").concat(heading?"":"p-3"," bg-white border rounded-lg shadow-xs")},heading?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"px-3 md:px-6 py-3 rounded-t-lg bg-light-slate-3"},heading),__jsx("div",null,children)):children)};Card.displayName="Card";const __WEBPACK_DEFAULT_EXPORT__=Card;try{card.displayName="card",card.__docgenInfo={description:"",displayName:"card",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Card/card.tsx#card"]={docgenInfo:card.__docgenInfo,name:"card",path:"components/atoms/Card/card.tsx#card"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/ClientOnly/client-only.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>client_only});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var __jsx=react.createElement;function ClientOnly(_ref){let{children}=_ref;return function useHasMounted(){const{0:hasMounted,1:setHasMounted}=(0,react.useState)(!1);return(0,react.useEffect)((()=>{setHasMounted(!0)}),[]),hasMounted}()?__jsx(react.Fragment,null,children):null}const client_only=ClientOnly;try{ClientOnly.displayName="ClientOnly",ClientOnly.__docgenInfo={description:"",displayName:"ClientOnly",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ClientOnly/client-only.tsx#ClientOnly"]={docgenInfo:ClientOnly.__docgenInfo,name:"ClientOnly",path:"components/atoms/ClientOnly/client-only.tsx#ClientOnly"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/SkeletonLoader/skeleton-wrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-loading-skeleton/dist/index.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{classNames,count=1,width,height,radius}=_ref;const skeletonArray=Array(count).fill(!0);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,skeletonArray.map(((_,index)=>height?__jsx("div",{key:index,className:classNames},__jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__.Z,{height,width,borderRadius:radius,count:1})):__jsx("div",{key:index,className:"react-loading-skeleton"}))))};try{skeletonwrapper.displayName="skeletonwrapper",skeletonwrapper.__docgenInfo={description:"",displayName:"skeletonwrapper",props:{classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}},count:{defaultValue:{value:"1"},description:"",name:"count",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/SkeletonLoader/skeleton-wrapper.tsx#skeletonwrapper"]={docgenInfo:skeletonwrapper.__docgenInfo,name:"skeletonwrapper",path:"components/atoms/SkeletonLoader/skeleton-wrapper.tsx#skeletonwrapper"})}catch(__react_docgen_typescript_loader_error){}},"./components/shared/Button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","children","loading","disabled","variant","showLoadingText","onClick","href"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,loading,disabled,variant,showLoadingText=!0,onClick,href}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);const styles={primary:"bg-light-orange-9 text-light-orange-2 border-light-orange-9 hover:bg-light-orange-10 ".concat(disabled?"bg-light-orange-7 hover:bg-light-orange-7 pointer-events-none":""),default:"bg-white border-light-slate-8 text-light-slate-11 hover:bg-light-slate-2 ".concat(disabled?"bg-light-slate-4 text-light-slate-9 pointer-events-none":""),dark:"bg-dark-slate-6 border-dark-slate-8 text-light-orange-2 hover:bg-dark-slate-8 ".concat(disabled?"bg-dark-slate-4 text-dark-slate-9 pointer-events-none":""),outline:"bg-orange-50 border-orange-500 text-orange-600 hover:bg-orange-100 ".concat(disabled?"bg-light-orange-3 pointer-events-none text-light-orange-7 border-light-orange-5":""),link:"text-orange-600 hover:bg-orange-100 border-none ".concat(disabled?"text-orange-400 pointer-events-none":""),destructive:"border-dark-red-8 bg-dark-red-8 text-white hover:border-dark-red-7 hover:bg-dark-red-7",text:""},rootClass=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(styles[variant],disabled&&"cursor-not-allowed",disabled&&"destructive"!==variant&&"bg-light-orange-7 hover:bg-light-orange-7","items-center inline-flex text-sm font-semibold tracking-tight border py-2 px-4 rounded-md focus-visible:border-orange-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-200 whitespace-nowrap",className),content=loading?__jsx("div",null,__jsx("svg",{"aria-hidden":"true",role:"status",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("inline w-4 h-4 text-white animate-spin",showLoadingText?"mr-2":""),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})),showLoadingText&&__jsx("span",{className:"text-white"},"Loading...")):children;return href?__jsx("a",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,href,ref},props),content):__jsx("button",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,ref,onClick:disabled?void 0:onClick},props),content)}));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"outline"'},{value:'"default"'},{value:'"dark"'},{value:'"link"'},{value:'"text"'},{value:'"destructive"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},showLoadingText:{defaultValue:{value:"true"},description:"",name:"showLoadingText",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/shared/Button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/shared/Button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./lib/utils/github.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ty:()=>getOwnerAndRepoNameFromUrl,VV:()=>getPullRequestCommitMessageFromUrl,cc:()=>getAvatarByUsername,dL:()=>getGithubIssueComments,ih:()=>getGithubIssueDetails,ny:()=>generateRepoParts,o8:()=>isValidIssueUrl,pX:()=>generateGhOgImage,qm:()=>isValidPullRequestUrl});var _supabase__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/utils/supabase.ts");const getAvatarByUsername=function(username){let size=arguments.length>1&&void 0!==arguments[1]?arguments[1]:460;return"https://www.github.com/".concat(username,".png?size=").concat(size)},generateRepoParts=url=>{try{const trimmedUrl=url.trim();if(!(trimmedUrl.includes("https://")||trimmedUrl.includes("http://")||trimmedUrl.includes("www."))&&2===trimmedUrl.split("/").length){const[orgName,repoName]=trimmedUrl.split("/");return{isValidUrl:!0,apiPaths:{orgName,repoName,repoFullName:"".concat(orgName,"/").concat(repoName),issueId:null}}}const githubUrl=new URL(trimmedUrl.includes("https://")?trimmedUrl:"https://".concat(trimmedUrl)),{pathname}=githubUrl,[,orgName,repoName,,issueId]=pathname.split("/"),repoFullName="".concat(orgName,"/").concat(repoName);return"github.com"===githubUrl.hostname&&orgName&&repoName?issueId?{isValidUrl:!0,apiPaths:{orgName,repoName,repoFullName,issueId}}:{isValidUrl:!0,apiPaths:{orgName,repoName,repoFullName,issueId:null}}:{isValidUrl:!1,apiPaths:{orgName:null,repoName:null,repoFullName:null,issueId:null}}}catch(err){return{isValidUrl:!1,apiPaths:{orgName:null,repoName:null,repoFullName:null,issueId:null}}}},generateGhOgImage=githubUrl=>{try{const trimmedUrl=githubUrl.trim(),url=new URL(trimmedUrl.includes("https://")?trimmedUrl:"https://".concat(trimmedUrl)),{pathname}=url;return"github.com"!==url.hostname?{isValid:!1,url:""}:{isValid:!0,url:"https://opengraph.githubassets.com/1".concat(pathname)}}catch(err){return{isValid:!1,url:""}}},getPullRequestCommitMessageFromUrl=async url=>{var _sessionResponse$data;const sessionResponse=await _supabase__WEBPACK_IMPORTED_MODULE_0__.O.auth.getSession(),githubToken=null==sessionResponse||null===(_sessionResponse$data=sessionResponse.data.session)||void 0===_sessionResponse$data?void 0:_sessionResponse$data.provider_token,[,,,owner,repoName,,pullRequestNumber]=url.split("/"),apiUrl="https://api.github.com/repos/".concat(owner,"/").concat(repoName,"/pulls/").concat(pullRequestNumber,"/commits"),response=await fetch(apiUrl,{headers:githubToken?{Authorization:"Bearer ".concat(githubToken)}:{}}),data=await response.json();return Array.isArray(null==data?void 0:data.commits)?data.commits.map((commit=>commit.commit.message)):data.map((commit=>commit.commit.message))},getGithubIssueDetails=async url=>{var _sessionResponse$data2;const sessionResponse=await _supabase__WEBPACK_IMPORTED_MODULE_0__.O.auth.getSession(),githubToken=null==sessionResponse||null===(_sessionResponse$data2=sessionResponse.data.session)||void 0===_sessionResponse$data2?void 0:_sessionResponse$data2.provider_token,[,,,owner,repoName,,issueNumber]=url.split("/"),apiUrl="https://api.github.com/repos/".concat(owner,"/").concat(repoName,"/issues/").concat(issueNumber),response=await fetch(apiUrl,{headers:githubToken?{Authorization:"Bearer ".concat(githubToken)}:{}}),data=await response.json();return{title:data.title,body:data.body}},getGithubIssueComments=async url=>{var _sessionResponse$data3;const sessionResponse=await _supabase__WEBPACK_IMPORTED_MODULE_0__.O.auth.getSession(),githubToken=null==sessionResponse||null===(_sessionResponse$data3=sessionResponse.data.session)||void 0===_sessionResponse$data3?void 0:_sessionResponse$data3.provider_token,[,,,owner,repoName,,issueNumber]=url.split("/"),apiUrl="https://api.github.com/repos/".concat(owner,"/").concat(repoName,"/issues/").concat(issueNumber,"/comments"),response=await fetch(apiUrl,{headers:{Authorization:"token ".concat(githubToken)}});return(await response.json()).map((comment=>comment.body)).join(" ")},isValidPullRequestUrl=url=>!!url.match(/((https?:\/\/)?(www\.)?github\.com\/[^\/]+\/[^\/]+\/pull\/[0-9]+)/),isValidIssueUrl=url=>!!url.match(/((https?:\/\/)?(www\.)?github\.com\/[^\/]+\/[^\/]+\/issues\/[0-9]+)/),getOwnerAndRepoNameFromUrl=url=>{const[,,,owner,repoName]=url.split("/");return{owner,repoName}}},"./lib/utils/supabase.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>supabase});var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@supabase/auth-helpers-nextjs/dist/index.js");const supabase=(0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__.createPagesBrowserClient)()}}]);