(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[137],{6201:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/createblog",function(){return t(5672)}])},5672:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var o=t(5893),i=t(7294),r=t(1163),s=t(9008),a=t(1133),c=t(4931),l=t(5697),u=function(){return(u=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)},p={onActivate:l.func,onAddUndo:l.func,onBeforeAddUndo:l.func,onBeforeExecCommand:l.func,onBeforeGetContent:l.func,onBeforeRenderUI:l.func,onBeforeSetContent:l.func,onBeforePaste:l.func,onBlur:l.func,onChange:l.func,onClearUndos:l.func,onClick:l.func,onContextMenu:l.func,onCopy:l.func,onCut:l.func,onDblclick:l.func,onDeactivate:l.func,onDirty:l.func,onDrag:l.func,onDragDrop:l.func,onDragEnd:l.func,onDragGesture:l.func,onDragOver:l.func,onDrop:l.func,onExecCommand:l.func,onFocus:l.func,onFocusIn:l.func,onFocusOut:l.func,onGetContent:l.func,onHide:l.func,onInit:l.func,onKeyDown:l.func,onKeyPress:l.func,onKeyUp:l.func,onLoadContent:l.func,onMouseDown:l.func,onMouseEnter:l.func,onMouseLeave:l.func,onMouseMove:l.func,onMouseOut:l.func,onMouseOver:l.func,onMouseUp:l.func,onNodeChange:l.func,onObjectResizeStart:l.func,onObjectResized:l.func,onObjectSelected:l.func,onPaste:l.func,onPostProcess:l.func,onPostRender:l.func,onPreProcess:l.func,onProgressState:l.func,onRedo:l.func,onRemove:l.func,onReset:l.func,onSaveContent:l.func,onSelectionChange:l.func,onSetAttrib:l.func,onSetContent:l.func,onShow:l.func,onSubmit:l.func,onUndo:l.func,onVisualAid:l.func},d=u({apiKey:l.string,id:l.string,inline:l.bool,init:l.object,initialValue:l.string,onEditorChange:l.func,outputFormat:l.oneOf(["html","text"]),value:l.string,tagName:l.string,cloudChannel:l.string,plugins:l.oneOfType([l.string,l.array]),toolbar:l.oneOfType([l.string,l.array]),disabled:l.bool,textareaName:l.string,tinymceScriptSrc:l.string,rollback:l.oneOfType([l.number,l.oneOf([!1])]),scriptLoading:l.shape({async:l.bool,defer:l.bool,delay:l.number})},p),f=function(e){return"function"===typeof e},h=function(e){return e in p},v=function(e){return e.substr(2)},m=function(e,n,t,o,i){return function(e,n,t,o,i,r,s){var a=Object.keys(i).filter(h),c=Object.keys(r).filter(h),l=a.filter((function(e){return void 0===r[e]})),u=c.filter((function(e){return void 0===i[e]}));l.forEach((function(e){var n=v(e),o=s[n];t(n,o),delete s[n]})),u.forEach((function(t){var i=o(e,t),r=v(t);s[r]=i,n(r,i)}))}(i,e.on.bind(e),e.off.bind(e),(function(n,t){return function(o){var i;return null===(i=n(t))||void 0===i?void 0:i(o,e)}}),n,t,o)},g=0,y=function(e){var n=Date.now();return e+"_"+Math.floor(1e9*Math.random())+ ++g+String(n)},b=function(e){return null!==e&&("textarea"===e.tagName.toLowerCase()||"input"===e.tagName.toLowerCase())},C=function(e){return"undefined"===typeof e||""===e?[]:Array.isArray(e)?e:e.split(" ")},k=function(){return{listeners:[],scriptId:y("tiny-script"),scriptLoading:!1,scriptLoaded:!1}},E=function(){var e=k();return{load:function(n,t,o,i,r,s){var a=function(){return function(e,n,t,o,i,r){var s=n.createElement("script");s.referrerPolicy="origin",s.type="application/javascript",s.id=e,s.src=t,s.async=o,s.defer=i;var a=function(){s.removeEventListener("load",a),r()};s.addEventListener("load",a),n.head&&n.head.appendChild(s)}(e.scriptId,n,t,o,i,(function(){e.listeners.forEach((function(e){return e()})),e.scriptLoaded=!0}))};e.scriptLoaded?s():(e.listeners.push(s),e.scriptLoading||(e.scriptLoading=!0,r>0?setTimeout(a,r):a()))},reinitialize:function(){e=k()}}}(),w=function(){var e="undefined"!==typeof window?window:t.g;return e&&e.tinymce?e.tinymce:null},j=function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])})(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),x=function(){return(x=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)},O=function(){var e,n,t;return(null===(t=null===(n=null===(e=w())||void 0===e?void 0:e.Env)||void 0===n?void 0:n.browser)||void 0===t?void 0:t.isIE())?"change keyup compositionend setcontent":"change input compositionend setcontent"},_=function(){return window.InputEvent&&"function"===typeof InputEvent.prototype.getTargetRanges?"beforeinput SelectionChange":"SelectionChange"},S=function(e){function n(n){var t,o,r,s=e.call(this,n)||this;return s.rollbackTimer=void 0,s.valueCursor=void 0,s.rollbackChange=function(){var e=s.editor,n=s.props.value;e&&n&&n!==s.currentContent&&e.undoManager.ignore((function(){if(e.setContent(n),s.valueCursor&&(!s.inline||e.hasFocus()))try{e.selection.moveToBookmark(s.valueCursor)}catch(t){}})),s.rollbackTimer=void 0},s.handleBeforeInput=function(e){if(void 0!==s.props.value&&s.props.value===s.currentContent&&s.editor&&(!s.inline||s.editor.hasFocus))try{s.valueCursor=s.editor.selection.getBookmark(3)}catch(n){}},s.handleBeforeInputSpecial=function(e){"Enter"!==e.key&&"Backspace"!==e.key&&"Delete"!==e.key||s.handleBeforeInput(e)},s.handleEditorChange=function(e){var n=s.editor;if(n&&n.initialized){var t=n.getContent();if(void 0!==s.props.value&&s.props.value!==t&&!1!==s.props.rollback&&(s.rollbackTimer||(s.rollbackTimer=window.setTimeout(s.rollbackChange,"number"===typeof s.props.rollback?s.props.rollback:200))),t!==s.currentContent&&(s.currentContent=t,f(s.props.onEditorChange))){var o=s.props.outputFormat,i="html"===o?t:n.getContent({format:o});s.props.onEditorChange(i,n)}}},s.handleEditorChangeSpecial=function(e){"Backspace"!==e.key&&"Delete"!==e.key||s.handleEditorChange(e)},s.initialise=function(e){var n,t,o;void 0===e&&(e=0);var i=s.elementRef.current;if(i)if(function(e){if(!("isConnected"in Node.prototype)){for(var n=e,t=e.parentNode;null!=t;)t=(n=t).parentNode;return n===e.ownerDocument}return e.isConnected}(i)){var r=w();if(!r)throw new Error("tinymce should have been loaded into global scope");var a,c,l=x(x({},s.props.init),{selector:void 0,target:i,readonly:s.props.disabled,inline:s.inline,plugins:(a=null===(n=s.props.init)||void 0===n?void 0:n.plugins,c=s.props.plugins,C(a).concat(C(c))),toolbar:null!==(t=s.props.toolbar)&&void 0!==t?t:null===(o=s.props.init)||void 0===o?void 0:o.toolbar,setup:function(e){s.editor=e,s.bindHandlers({}),s.inline&&!b(i)&&e.once("PostRender",(function(n){e.setContent(s.getInitialValue(),{no_events:!0})})),s.props.init&&f(s.props.init.setup)&&s.props.init.setup(e)},init_instance_callback:function(e){var n,t,o=s.getInitialValue();s.currentContent=null!==(n=s.currentContent)&&void 0!==n?n:e.getContent(),s.currentContent!==o&&(s.currentContent=o,e.setContent(o),e.undoManager.clear(),e.undoManager.add(),e.setDirty(!1));var i=null!==(t=s.props.disabled)&&void 0!==t&&t;e.setMode(i?"readonly":"design"),s.props.init&&f(s.props.init.init_instance_callback)&&s.props.init.init_instance_callback(e)}});s.inline||(i.style.visibility=""),b(i)&&(i.value=s.getInitialValue()),r.init(l)}else if(0===e)setTimeout((function(){return s.initialise(1)}),1);else{if(!(e<100))throw new Error("tinymce can only be initialised when in a document");setTimeout((function(){return s.initialise(e+1)}),100)}},s.id=s.props.id||y("tiny-react"),s.elementRef=i.createRef(),s.inline=null!==(r=null!==(t=s.props.inline)&&void 0!==t?t:null===(o=s.props.init)||void 0===o?void 0:o.inline)&&void 0!==r&&r,s.boundHandlers={},s}return j(n,e),n.prototype.componentDidUpdate=function(e){var n,t,o=this;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(e),this.editor.initialized)){if(this.currentContent=null!==(n=this.currentContent)&&void 0!==n?n:this.editor.getContent(),"string"===typeof this.props.initialValue&&this.props.initialValue!==e.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if("string"===typeof this.props.value&&this.props.value!==this.currentContent){var i=this.editor;i.undoManager.transact((function(){var e;if(!o.inline||i.hasFocus())try{e=i.selection.getBookmark(3)}catch(a){}var n=o.valueCursor;if(i.setContent(o.props.value),!o.inline||i.hasFocus())for(var t=0,r=[e,n];t<r.length;t++){var s=r[t];if(s)try{i.selection.moveToBookmark(s),o.valueCursor=s;break}catch(a){}}}))}if(this.props.disabled!==e.disabled){var r=null!==(t=this.props.disabled)&&void 0!==t&&t;this.editor.setMode(r?"readonly":"design")}}},n.prototype.componentDidMount=function(){var e,n,t,o,i,r;null!==w()?this.initialise():this.elementRef.current&&this.elementRef.current.ownerDocument&&E.load(this.elementRef.current.ownerDocument,this.getScriptSrc(),null!==(n=null===(e=this.props.scriptLoading)||void 0===e?void 0:e.async)&&void 0!==n&&n,null!==(o=null===(t=this.props.scriptLoading)||void 0===t?void 0:t.defer)&&void 0!==o&&o,null!==(r=null===(i=this.props.scriptLoading)||void 0===i?void 0:i.delay)&&void 0!==r?r:0,this.initialise)},n.prototype.componentWillUnmount=function(){var e=this,n=this.editor;n&&(n.off(O(),this.handleEditorChange),n.off(_(),this.handleBeforeInput),n.off("keypress",this.handleEditorChangeSpecial),n.off("keydown",this.handleBeforeInputSpecial),n.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach((function(t){n.off(t,e.boundHandlers[t])})),this.boundHandlers={},n.remove(),this.editor=void 0)},n.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},n.prototype.renderInline=function(){var e=this.props.tagName,n=void 0===e?"div":e;return i.createElement(n,{ref:this.elementRef,id:this.id})},n.prototype.renderIframe=function(){return i.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},n.prototype.getScriptSrc=function(){if("string"===typeof this.props.tinymceScriptSrc)return this.props.tinymceScriptSrc;var e=this.props.cloudChannel;return"https://cdn.tiny.cloud/1/"+(this.props.apiKey?this.props.apiKey:"no-api-key")+"/tinymce/"+e+"/tinymce.min.js"},n.prototype.getInitialValue=function(){return"string"===typeof this.props.initialValue?this.props.initialValue:"string"===typeof this.props.value?this.props.value:""},n.prototype.bindHandlers=function(e){var n=this;if(void 0!==this.editor){m(this.editor,e,this.props,this.boundHandlers,(function(e){return n.props[e]}));var t=function(e){return void 0!==e.onEditorChange||void 0!==e.value},o=t(e),i=t(this.props);!o&&i?(this.editor.on(O(),this.handleEditorChange),this.editor.on(_(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):o&&!i&&(this.editor.off(O(),this.handleEditorChange),this.editor.off(_(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},n.propTypes=d,n.defaultProps={cloudChannel:"5"},n}(i.Component),N=t(4155);function T(){var e=(0,r.useRouter)(),n=(0,i.useContext)(a.I).user,t=(0,i.useRef)(null);return(0,o.jsxs)("div",{children:[(0,o.jsxs)(s.default,{children:[(0,o.jsx)("title",{children:"create new blog"}),(0,o.jsx)("meta",{name:"description",content:"user registeration page"}),(0,o.jsx)("link",{rel:"stylesheet",href:"https://pro.fontawesome.com/releases/v5.10.0/css/all.css",integrity:"sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p",crossOrigin:"anonymous"}),(0,o.jsx)("script",{src:"https://cdn.tiny.cloud/1/".concat(N.env.NEXT_APP_TINY_KEY,"/tinymce/5/tinymce.min.js"),referrerpolicy:"origin"})]}),(0,o.jsxs)("form",{onSubmit:function(o){o.preventDefault();var i=new FormData(o.target);i.append("userid",n._id),i.append("content",t.current.getContent()),fetch("https://blogs-app-server.vercel.app/blogs",{method:"POST",headers:{token:localStorage.getItem("token")},body:i}).then((function(e){return e.json()})).then((function(n){n.success?(c.ZP.success("Published Successfully!"),e.push("/")):(console.log(n),c.ZP.error(n.message))}))},encType:"multipart/form-data",children:[(0,o.jsx)("div",{className:"field",children:(0,o.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[(0,o.jsx)("input",{className:"input",type:"text",name:"title",placeholder:"title"}),(0,o.jsx)("span",{className:"icon is-small is-right",children:(0,o.jsx)("i",{className:"fas fa-check"})})]})}),(0,o.jsx)("div",{className:"field",children:(0,o.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[(0,o.jsx)("input",{className:"input",type:"text",name:"description",placeholder:"description"}),(0,o.jsx)("span",{className:"icon is-small is-right",children:(0,o.jsx)("i",{className:"fas fa-check"})})]})}),(0,o.jsx)("div",{className:"field",children:(0,o.jsx)(S,{name:"content",onInit:function(e,n){return t.current=n},initialValue:"Blog Content here ... ",init:{height:300,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"}})}),(0,o.jsx)("div",{className:"field",children:(0,o.jsxs)("p",{className:"control has-icons-left",children:[(0,o.jsx)("input",{className:"input",type:"file",name:"image",placeholder:"image"}),(0,o.jsx)("span",{className:"icon is-small is-left",children:(0,o.jsx)("i",{className:"fas fa-lock"})})]})}),(0,o.jsx)("div",{className:"field",children:(0,o.jsx)("p",{className:"control",children:(0,o.jsx)("button",{className:"button is-success",children:"Publish Blog"})})})]}),(0,o.jsx)(c.x7,{position:"top-center",reverseOrder:!1})]})}},9008:function(e,n,t){e.exports=t(5443)},2703:function(e,n,t){"use strict";var o=t(414);function i(){}function r(){}r.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,r,s){if(s!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:r,resetWarningCache:i};return t.PropTypes=t,t}},5697:function(e,n,t){e.exports=t(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[931,774,888,179],(function(){return n=6201,e(e.s=n);var n}));var n=e.O();_N_E=n}]);