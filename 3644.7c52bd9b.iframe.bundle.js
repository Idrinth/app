"use strict";(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[3644],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.Z)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutPropertiesLoose})},"./components/atoms/Avatar/avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Avatar_avatar});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const cachedImages=(imageUrl,cloudName)=>cloudName?"https://res.cloudinary.com/".concat(cloudName,"/image/fetch/").concat(imageUrl):imageUrl;var console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement;const Avatar_avatar=props=>{let imageSource;try{"string"==typeof props.avatarURL&&props.avatarURL.length>0&&new URL(props.avatarURL),imageSource=props.avatarURL&&props.isCached?cachedImages(props.avatarURL,"dgxgziswe"):props.avatarURL}catch(error){console.error(error)}switch(typeof props.size){case"string":return __jsx(DefaultAvatar,(0,esm_extends.Z)({},props,{avatarURL:imageSource}));case"number":return __jsx(CustomAvatar,(0,esm_extends.Z)({},props,{avatarURL:imageSource}))}},CustomAvatar=_ref=>{let{className,avatarURL,initials,alt,size,hasBorder,isCircle,initialsClassName}=_ref;return __jsx("div",{className:"inline-flex ".concat(avatarURL?"":"bg-orange-500"," justify-center relative items-center w-max h-max overflow-hidden\n\n        ").concat(isCircle?"rounded-full ":"rounded-lg ","\n        ").concat(hasBorder?"ring-2 ring-slate-200 ":"","\n        ").concat(null!=className?className:" ","\n      ")},avatarURL?__jsx(next_image.Z,{className:"".concat(className||""," object-cover"),alt:alt||"Avatar",width:size,height:size,src:avatarURL}):__jsx("div",{className:"".concat(initialsClassName," flex items-center justify-center font-bold leading-none text-slate-50 mb-0.25 "),style:{width:size,height:size}},initials))};CustomAvatar.displayName="CustomAvatar";const DefaultAvatar=_ref2=>{let{className,avatarURL,initials,alt,size,hasBorder,isCircle}=_ref2;return __jsx("div",{className:"inline-flex ".concat(avatarURL?"":"bg-orange-500"," justify-center relative items-center overflow-hidden\n        ").concat(isCircle?"rounded-full ":"rounded-lg ","\n        ").concat(hasBorder?"ring-2 ring-slate-200 ":"","\n        ").concat("sm"===size?"w-6 h-6 ":"base"===size?"w-8 h-8 ":"lg"===size?"w-12 h-12 ":"w-8 h-8 ","\n        ").concat(null!=className?className:" ","\n      ")},avatarURL?__jsx(next_image.Z,{className:"".concat(className||""," object-cover"),alt:alt||"Avatar",fill:!0,src:avatarURL}):__jsx("div",{className:"flex items-center justify-center font-bold leading-none text-slate-50 mb-0.25 ".concat("sm"===size?"text-xs":"base"===size?"text-sm":"lg"===size?"text-lg":"text-sm"),style:{width:size,height:size}},initials))};DefaultAvatar.displayName="DefaultAvatar";try{avatar.displayName="avatar",avatar.__docgenInfo={description:"",displayName:"avatar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},avatarURL:{defaultValue:null,description:"",name:"avatarURL",required:!1,type:{name:"string | StaticImageData"}},initials:{defaultValue:null,description:"",name:"initials",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:'number | "base" | "sm" | "lg"'}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},isCircle:{defaultValue:null,description:"",name:"isCircle",required:!1,type:{name:"boolean"}},isCached:{defaultValue:null,description:"",name:"isCached",required:!1,type:{name:"boolean"}},initialsClassName:{defaultValue:null,description:"",name:"initialsClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar.tsx#avatar"]={docgenInfo:avatar.__docgenInfo,name:"avatar",path:"components/atoms/Avatar/avatar.tsx#avatar"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/RepoCardProfile/repo-card-profile.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_icons_bi__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-icons/bi/index.mjs"),react_icons_vsc__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-icons/vsc/index.mjs"),components_atoms_Avatar_avatar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/Avatar/avatar.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const RepoCardProfile=_ref=>{let{avatar,orgName,repoName,prCount,issueCount,className}=_ref;return __jsx("div",{className:"".concat(className," flex gap-3 ")},__jsx("div",{className:"h-max group-hover:border rounded-lg"},__jsx(components_atoms_Avatar_avatar__WEBPACK_IMPORTED_MODULE_1__.Z,{initials:"BD",size:40,avatarURL:avatar})),__jsx("div",{className:"flex flex-col gap-1 h-[46px]"},__jsx("div",{className:"text-base"},__jsx("p",{className:"text-light-slate-11 group-hover:text-dark-orange-12 -mt-1"},orgName," / ",__jsx("span",{className:"text-light-slate-12 group-hover:text-white"},repoName))),__jsx("div",{className:"flex group-hover:text-dark-orange-12 text-light-slate-10 gap-3"},__jsx("span",{className:"flex text-xs gap-0.5 items-center"},__jsx(react_icons_vsc__WEBPACK_IMPORTED_MODULE_2__.gL2,{className:"text-[15px]"})," ",issueCount),__jsx("span",{className:"flex gap-0.5 text-xs items-center"},__jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.XeX,{className:"text-[15px]"})," ",prCount))))};RepoCardProfile.displayName="RepoCardProfile";const __WEBPACK_DEFAULT_EXPORT__=RepoCardProfile;try{repocardprofile.displayName="repocardprofile",repocardprofile.__docgenInfo={description:"",displayName:"repocardprofile",props:{avatar:{defaultValue:null,description:"",name:"avatar",required:!1,type:{name:"string | StaticImageData"}},orgName:{defaultValue:null,description:"",name:"orgName",required:!0,type:{name:"string"}},repoName:{defaultValue:null,description:"",name:"repoName",required:!0,type:{name:"string"}},prCount:{defaultValue:null,description:"",name:"prCount",required:!1,type:{name:"number"}},issueCount:{defaultValue:null,description:"",name:"issueCount",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/RepoCardProfile/repo-card-profile.tsx#repocardprofile"]={docgenInfo:repocardprofile.__docgenInfo,name:"repocardprofile",path:"components/molecules/RepoCardProfile/repo-card-profile.tsx#repocardprofile"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/SuggestedRepo/suggested-repo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_shared_Button_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/shared/Button/button.tsx"),_RepoCardProfile_repo_card_profile__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/molecules/RepoCardProfile/repo-card-profile.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const SuggestedRepository=_ref=>{let{data,onAddRepo,loadingData}=_ref;return __jsx("div",{className:"flex justify-between flex-col xs:flex-row xs:items-start"},__jsx(_RepoCardProfile_repo_card_profile__WEBPACK_IMPORTED_MODULE_2__.Z,data),__jsx(components_shared_Button_button__WEBPACK_IMPORTED_MODULE_1__.Z,{disabled:"".concat(data.orgName,"/").concat(data.repoName)===(null==loadingData?void 0:loadingData.repoName)&&(null==loadingData?void 0:loadingData.isLoading)&&!(null!=loadingData&&loadingData.isAddedFromCart),loading:"".concat(data.orgName,"/").concat(data.repoName)===(null==loadingData?void 0:loadingData.repoName)&&(null==loadingData?void 0:loadingData.isLoading)&&!(null!=loadingData&&loadingData.isAddedFromCart),variant:"text",className:"border border-light-slate-6 shadow-input w-fit",onClick:()=>onAddRepo&&onAddRepo("".concat(data.orgName,"/").concat(data.repoName))},"Add to Page"))};SuggestedRepository.displayName="SuggestedRepository";const __WEBPACK_DEFAULT_EXPORT__=SuggestedRepository;try{suggestedrepo.displayName="suggestedrepo",suggestedrepo.__docgenInfo={description:"",displayName:"suggestedrepo",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"RepoCardProfileProps"}},onAddRepo:{defaultValue:null,description:"",name:"onAddRepo",required:!1,type:{name:"((repo: string) => void)"}},loadingData:{defaultValue:null,description:"",name:"loadingData",required:!1,type:{name:"{ repoName: string; isLoading: boolean; isAddedFromCart: boolean; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/SuggestedRepo/suggested-repo.tsx#suggestedrepo"]={docgenInfo:suggestedrepo.__docgenInfo,name:"suggestedrepo",path:"components/molecules/SuggestedRepo/suggested-repo.tsx#suggestedrepo"})}catch(__react_docgen_typescript_loader_error){}},"./components/shared/Button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","children","loading","disabled","variant","showLoadingText","onClick","href"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,loading,disabled,variant,showLoadingText=!0,onClick,href}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);const styles={primary:"bg-light-orange-9 text-light-orange-2 border-light-orange-9 hover:bg-light-orange-10 ".concat(disabled?"bg-light-orange-7 hover:bg-light-orange-7 pointer-events-none":""),default:"bg-white border-light-slate-8 text-light-slate-11 hover:bg-light-slate-2 ".concat(disabled?"bg-light-slate-4 text-light-slate-9 pointer-events-none":""),dark:"bg-dark-slate-6 border-dark-slate-8 text-light-orange-2 hover:bg-dark-slate-8 ".concat(disabled?"bg-dark-slate-4 text-dark-slate-9 pointer-events-none":""),outline:"bg-orange-50 border-orange-500 text-orange-600 hover:bg-orange-100 ".concat(disabled?"bg-light-orange-3 pointer-events-none text-light-orange-7 border-light-orange-5":""),link:"text-orange-600 hover:bg-orange-100 border-none ".concat(disabled?"text-orange-400 pointer-events-none":""),destructive:"border-dark-red-8 bg-dark-red-8 text-white hover:border-dark-red-7 hover:bg-dark-red-7",text:""},rootClass=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(styles[variant],disabled&&"cursor-not-allowed",disabled&&"destructive"!==variant&&"bg-light-orange-7 hover:bg-light-orange-7","items-center inline-flex text-sm font-semibold tracking-tight border py-2 px-4 rounded-md focus-visible:border-orange-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-200 whitespace-nowrap",className),content=loading?__jsx("div",null,__jsx("svg",{"aria-hidden":"true",role:"status",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("inline w-4 h-4 text-white animate-spin",showLoadingText?"mr-2":""),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})),showLoadingText&&__jsx("span",{className:"text-white"},"Loading...")):children;return href?__jsx("a",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,href,ref},props),content):__jsx("button",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,ref,onClick:disabled?void 0:onClick},props),content)}));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"outline"'},{value:'"default"'},{value:'"dark"'},{value:'"link"'},{value:'"text"'},{value:'"destructive"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},showLoadingText:{defaultValue:{value:"true"},description:"",name:"showLoadingText",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/shared/Button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/shared/Button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/react-icons/lib/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon,Pd:()=>IconContext});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),_excluded=["attr","size","title"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Tree2Element(tree){return tree&&tree.map(((node,i)=>react.createElement(node.tag,_objectSpread({key:i},node.attr),Tree2Element(node.child))))}function GenIcon(data){return props=>react.createElement(IconBase,_extends({attr:_objectSpread({},data.attr)},props),Tree2Element(data.child))}function IconBase(props){var elem=conf=>{var className,{attr,size,title}=props,svgProps=_objectWithoutProperties(props,_excluded),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",_extends({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:_objectSpread(_objectSpread({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(conf=>elem(conf))):elem(DefaultContext)}}}]);