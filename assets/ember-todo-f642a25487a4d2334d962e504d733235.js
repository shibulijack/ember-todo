"use strict"
define("ember-todo/app",["exports","ember-todo/resolver","ember-load-initializers","ember-todo/config/environment"],function(e,t,o,n){Object.defineProperty(e,"__esModule",{value:!0})
var i=void 0
i=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default}),(0,o.default)(i,n.default.modulePrefix),e.default=i}),define("ember-todo/components/todo-item",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({dataLayer:Ember.inject.service(),tagName:"li",editing:!1,classNameBindings:["todo.completed","editing"],actions:{startEditing:function(){this.get("onStartEdit")(),this.set("editing",!0),Ember.run.scheduleOnce("afterRender",this,"focusInput")},doneEditing:function(e){this.get("editing")&&(Ember.isBlank(e)?this.send("removeTodo"):(this.set("todo.title",e.trim()),this.set("editing",!1),this.get("onEndEdit")()))},handleKeydown:function(e){13===e.keyCode?e.target.blur():27===e.keyCode&&this.set("editing",!1)},toggleCompleted:function(e){var t=this.get("todo")
Ember.set(t,"completed",e.target.checked),this.get("dataLayer").persist()},removeTodo:function(){this.get("dataLayer").delete(this.get("todo"))}},focusInput:function(){this.element.querySelector("input.edit").focus()}})}),define("ember-todo/components/todo-list",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({dataLayer:Ember.inject.service(),tagName:"section",elementId:"main",canToggle:!0,allCompleted:Ember.computed("todos.@each.completed",function(){return this.get("todos").isEvery("completed")}),remaining:Ember.computed.filterBy("todos","completed",!1),completed:Ember.computed.filterBy("todos","completed"),selectedTodos:Ember.computed.reads("todos"),actions:{enableToggle:function(){this.set("canToggle",!0)},disableToggle:function(){this.set("canToggle",!1)},toggleAll:function(){var e=this.get("allCompleted")
this.get("todos").forEach(function(t){return Ember.set(t,"completed",!e)}),this.get("dataLayer").persist()},clearCompleted:function(){this.get("todos").removeObjects(this.get("completed")),this.get("dataLayer").persist()},filterTodo:function(e){switch(e){case"all":this.set("selectedTodos",this.get("todos"))
break
case"active":this.set("selectedTodos",this.get("remaining"))
break
case"completed":this.set("selectedTodos",this.get("completed"))}}}})}),define("ember-todo/controllers/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({dataLayer:Ember.inject.service(),actions:{createTodo:function(e){13!==e.keyCode||Ember.isBlank(e.target.value)||(this.get("dataLayer").add({title:e.target.value.trim(),completed:!1}),e.target.value="")}}})}),define("ember-todo/helpers/app-version",["exports","ember-todo/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,o){function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return t.hideSha?i.match(o.versionRegExp)[0]:t.hideVersion?i.match(o.shaRegExp)[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n
var i=t.default.APP.version
e.default=Ember.Helper.helper(n)}),define("ember-todo/helpers/gt",["exports"],function(e){function t(e){var t=o(e,2)
return t[0]>t[1]}Object.defineProperty(e,"__esModule",{value:!0}),e.gt=t
var o=function(){function e(e,t){var o=[],n=!0,i=!1,l=void 0
try{for(var r,a=e[Symbol.iterator]();!(n=(r=a.next()).done)&&(o.push(r.value),!t||o.length!==t);n=!0);}catch(e){i=!0,l=e}finally{try{!n&&a.return&&a.return()}finally{if(i)throw l}}return o}return function(t,o){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,o)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()
e.default=Ember.Helper.helper(t)}),define("ember-todo/helpers/pluralize",["exports","ember-inflector"],function(e,t){function o(e){var o=n(e,2),i=o[0]
return 1===o[1]?i:(0,t.pluralize)(i)}Object.defineProperty(e,"__esModule",{value:!0}),e.pluralizeHelper=o
var n=function(){function e(e,t){var o=[],n=!0,i=!1,l=void 0
try{for(var r,a=e[Symbol.iterator]();!(n=(r=a.next()).done)&&(o.push(r.value),!t||o.length!==t);n=!0);}catch(e){i=!0,l=e}finally{try{!n&&a.return&&a.return()}finally{if(i)throw l}}return o}return function(t,o){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,o)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()
e.default=Ember.Helper.helper(o)}),define("ember-todo/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-todo/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-todo/config/environment"],function(e,t,o){Object.defineProperty(e,"__esModule",{value:!0})
var n=void 0,i=void 0
o.default.APP&&(n=o.default.APP.name,i=o.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(n,i)}}),define("ember-todo/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ember-todo/initializers/data-adapter",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("ember-todo/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("ember-todo/initializers/export-application-global",["exports","ember-todo/config/environment"],function(e,t){function o(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var o
if("undefined"!=typeof window)o=window
else if("undefined"!=typeof global)o=global
else{if("undefined"==typeof self)return
o=self}var n,i=t.default.exportApplicationGlobal
n="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),o[n]||(o[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete o[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=o,e.default={name:"export-application-global",initialize:o}}),define("ember-todo/initializers/injectStore",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("ember-todo/initializers/store",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("ember-todo/initializers/transforms",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"transforms",before:"store",initialize:function(){}}}),define("ember-todo/instance-initializers/ember-data",["exports","ember-data/instance-initializers/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("ember-todo/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-todo/router",["exports","ember-todo/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var o=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
o.map(function(){}),e.default=o}),define("ember-todo/routes/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({dataLayer:Ember.inject.service(),model:function(){return this.get("dataLayer").findAll()}})}),define("ember-todo/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-todo/services/data-layer",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Service.extend({lastId:0,data:null,findAll:function(){return this.get("data")||this.set("data",JSON.parse(window.localStorage.getItem("todos")||"[]"))},add:function(e){var t=Object.assign({id:this.incrementProperty("lastId")},e)
return this.get("data").pushObject(t),this.persist(),t},delete:function(e){this.get("data").removeObject(e),this.persist()},persist:function(){window.localStorage.setItem("todos",JSON.stringify(this.get("data")))}})}),define("ember-todo/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"iEczoBBr",block:'{"statements":[[11,"section",[]],[15,"id","todoapp"],[13],[0,"\\n    "],[11,"header",[]],[15,"id","header"],[13],[0,"\\n      "],[11,"input",[]],[15,"type","text"],[15,"id","new-todo"],[16,"onkeydown",[33,["action"],[[28,[null]],"createTodo"],null],null],[15,"placeholder","What needs to be done?"],[15,"autofocus",""],[13],[14],[0,"\\n    "],[14],[0,"\\n      "],[1,[26,["outlet"]],false],[0,"\\n"],[6,["if"],[[28,["model","length"]]],null,{"statements":[[0,"        "],[1,[33,["todo-list"],null,[["todos"],[[28,["model"]]]]],false],[0,"\\n"]],"locals":[]},null],[0,"  "],[14],[0,"\\n  "],[11,"footer",[]],[15,"id","info"],[13],[0,"\\n    "],[11,"p",[]],[13],[0,"Double-click to edit a todo"],[14],[0,"\\n  "],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-todo/templates/application.hbs"}})}),define("ember-todo/templates/components/todo-item",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"Ih6Rhe/V",block:'{"statements":[[11,"div",[]],[15,"class","view"],[13],[0,"\\n    "],[11,"input",[]],[15,"type","checkbox"],[15,"class","toggle"],[16,"checked",[28,["todo","completed"]],null],[16,"onchange",[33,["action"],[[28,[null]],"toggleCompleted"],null],null],[13],[14],[0,"\\n    "],[11,"label",[]],[16,"ondblclick",[33,["action"],[[28,[null]],"startEditing"],null],null],[13],[1,[28,["todo","title"]],false],[14],[0,"\\n    "],[11,"button",[]],[16,"onclick",[33,["action"],[[28,[null]],"removeTodo"],null],null],[15,"class","destroy"],[13],[14],[0,"\\n  "],[14],[0,"\\n  "],[11,"input",[]],[15,"type","text"],[15,"class","edit"],[16,"value",[28,["todo","title"]],null],[16,"onblur",[33,["action"],[[28,[null]],"doneEditing"],[["value"],["target.value"]]],null],[16,"onkeydown",[33,["action"],[[28,[null]],"handleKeydown"],null],null],[15,"autofocus",""],[13],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-todo/templates/components/todo-item.hbs"}})}),define("ember-todo/templates/components/todo-list",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"a6sppT+l",block:'{"statements":[[6,["if"],[[28,["selectedTodos","length"]]],null,{"statements":[[6,["if"],[[28,["canToggle"]]],null,{"statements":[[0,"    "],[11,"input",[]],[15,"type","checkbox"],[15,"id","toggle-all"],[16,"checked",[26,["allCompleted"]],null],[16,"onchange",[33,["action"],[[28,[null]],"toggleAll"],null],null],[13],[14],[0,"\\n"]],"locals":[]},null],[0,"  "],[11,"ul",[]],[15,"id","todo-list"],[15,"class","todo-list"],[13],[0,"\\n"],[6,["each"],[[28,["selectedTodos"]]],null,{"statements":[[0,"      "],[1,[33,["todo-item"],null,[["todo","onStartEdit","onEndEdit"],[[28,["todo"]],[33,["action"],[[28,[null]],"disableToggle"],null],[33,["action"],[[28,[null]],"enableToggle"],null]]]],false],[0,"\\n"]],"locals":["todo"]},null],[0,"  "],[14],[0,"\\n"]],"locals":[]},null],[0,"\\n"],[6,["if"],[[33,["gt"],[[28,["todos","length"]],0],null]],null,{"statements":[[0,"  "],[11,"footer",[]],[15,"id","footer"],[13],[0,"\\n    "],[11,"span",[]],[15,"id","todo-count"],[13],[11,"strong",[]],[13],[1,[28,["remaining","length"]],false],[14],[0," "],[1,[33,["pluralize"],["item",[28,["remaining","length"]]],null],false],[0," left"],[14],[0,"\\n    "],[11,"ul",[]],[15,"id","filters"],[13],[0,"\\n      "],[11,"li",[]],[13],[11,"a",[]],[16,"onclick",[33,["action"],[[28,[null]],"filterTodo","all"],null],null],[13],[0,"All"],[14],[14],[0,"\\n      "],[11,"li",[]],[13],[11,"a",[]],[16,"onclick",[33,["action"],[[28,[null]],"filterTodo","active"],null],null],[13],[0,"Active"],[14],[14],[0,"\\n      "],[11,"li",[]],[13],[11,"a",[]],[16,"onclick",[33,["action"],[[28,[null]],"filterTodo","completed"],null],null],[13],[0,"Completed"],[14],[14],[0,"\\n    "],[14],[0,"\\n"],[6,["if"],[[28,["completed","length"]]],null,{"statements":[[0,"      "],[11,"button",[]],[15,"id","clear-completed"],[16,"onclick",[33,["action"],[[28,[null]],"clearCompleted"],null],null],[13],[0,"Clear completed"],[14],[0,"\\n"]],"locals":[]},null],[0,"  "],[14],[0,"\\n"]],"locals":[]},null]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-todo/templates/components/todo-list.hbs"}})}),define("ember-todo/config/environment",["ember"],function(e){try{var t="ember-todo/config/environment",o=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),n=JSON.parse(unescape(o)),i={default:n}
return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("ember-todo/app").default.create({name:"ember-todo",version:"0.0.0+66fe51ae"})