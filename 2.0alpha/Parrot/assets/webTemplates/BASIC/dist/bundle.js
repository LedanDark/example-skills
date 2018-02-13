/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!********************************!*\
  !*** ./~/furhat-core/index.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist */ 3)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL34vZnVyaGF0LWNvcmUvaW5kZXguanM/NjU4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdCcpXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnVyaGF0LWNvcmUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!*******************************!*\
  !*** ./~/furhat-gui/index.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist */ 4)\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL34vZnVyaGF0LWd1aS9pbmRleC5qcz8xNDQ4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0JylcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Z1cmhhdC1ndWkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/* no static exports found */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _furhatCore = __webpack_require__(/*! furhat-core */ 0);\n\nvar _furhatCore2 = _interopRequireDefault(_furhatCore);\n\nvar _furhatGui = __webpack_require__(/*! furhat-gui */ 1);\n\nvar _furhatGui2 = _interopRequireDefault(_furhatGui);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _furhatGui2.default)(function (furhat) {\n    furhat.subscribe('furhatos.event.responses.ResponseSkillGUIName', function (data) {\n        if (data.port == window.location.port) {\n            setPageTitle(data.name);\n        }\n    });\n\n    furhat.subscribe('furhatos.event.actions.ActionSkillGUIClear', function (data) {\n        if (data.port == window.location.port) {\n            clearScreen();\n        }\n    });\n\n    furhat.subscribe('furhatos.event.actions.ActionSkillGUIWrite', function (data) {\n        if (data.port == window.location.port) {\n            clearScreen();\n            appendText(data.text);\n        }\n    });\n\n    furhat.subscribe('furhatos.event.actions.ActionSkillGUIAppend', function (data) {\n        if (data.port == window.location.port) {\n            appendText(data.text);\n        }\n    });\n\n    furhat.send({\n        event_name: 'furhatos.event.requests.RequestSkillGUIName',\n        port: window.location.port\n    });\n});\n\nfunction setPageTitle(title) {\n    document.getElementsByTagName(\"title\")[0].innerText = title;\n}\n\nfunction appendText(text) {\n    var p = document.createElement('p');\n\n    p.innerText = text;\n    document.getElementById('root').appendChild(p);\n}\n\nfunction clearScreen() {\n    var root = document.getElementById('root');\n\n    while (root.firstChild) {\n        root.removeChild(root.firstChild);\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRnVyaGF0IGZyb20gJ2Z1cmhhdC1jb3JlJ1xyXG5pbXBvcnQgRnVyaGF0R1VJIGZyb20gJ2Z1cmhhdC1ndWknXHJcblxyXG5GdXJoYXRHVUkoZnVuY3Rpb24oZnVyaGF0KSB7XHJcbiAgICBmdXJoYXQuc3Vic2NyaWJlKCdmdXJoYXRvcy5ldmVudC5yZXNwb25zZXMuUmVzcG9uc2VTa2lsbEdVSU5hbWUnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgaWYoZGF0YS5wb3J0ID09IHdpbmRvdy5sb2NhdGlvbi5wb3J0KSB7XHJcbiAgICAgICAgICAgIHNldFBhZ2VUaXRsZShkYXRhLm5hbWUpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgZnVyaGF0LnN1YnNjcmliZSgnZnVyaGF0b3MuZXZlbnQuYWN0aW9ucy5BY3Rpb25Ta2lsbEdVSUNsZWFyJywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIGlmKGRhdGEucG9ydCA9PSB3aW5kb3cubG9jYXRpb24ucG9ydCkge1xyXG4gICAgICAgICAgICBjbGVhclNjcmVlbigpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgZnVyaGF0LnN1YnNjcmliZSgnZnVyaGF0b3MuZXZlbnQuYWN0aW9ucy5BY3Rpb25Ta2lsbEdVSVdyaXRlJywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIGlmKGRhdGEucG9ydCA9PSB3aW5kb3cubG9jYXRpb24ucG9ydCkge1xyXG4gICAgICAgICAgICBjbGVhclNjcmVlbigpXHJcbiAgICAgICAgICAgIGFwcGVuZFRleHQoZGF0YS50ZXh0KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgIGZ1cmhhdC5zdWJzY3JpYmUoJ2Z1cmhhdG9zLmV2ZW50LmFjdGlvbnMuQWN0aW9uU2tpbGxHVUlBcHBlbmQnLCBmdW5jdGlvbihkYXRhKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoZGF0YS5wb3J0ID09IHdpbmRvdy5sb2NhdGlvbi5wb3J0KSB7XHJcbiAgICAgICAgICAgIGFwcGVuZFRleHQoZGF0YS50ZXh0KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgIGZ1cmhhdC5zZW5kKHtcclxuICAgICAgICBldmVudF9uYW1lOiAnZnVyaGF0b3MuZXZlbnQucmVxdWVzdHMuUmVxdWVzdFNraWxsR1VJTmFtZScsXHJcbiAgICAgICAgcG9ydDogd2luZG93LmxvY2F0aW9uLnBvcnQsXHJcbiAgICB9KVxyXG59KVxyXG5cclxuZnVuY3Rpb24gc2V0UGFnZVRpdGxlKHRpdGxlKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRpdGxlXCIpWzBdLmlubmVyVGV4dCA9IHRpdGxlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZFRleHQodGV4dCkge1xyXG4gICAgdmFyIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIFxyXG4gICAgcC5pbm5lclRleHQgPSB0ZXh0XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLmFwcGVuZENoaWxkKHApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyU2NyZWVuKCkge1xyXG4gICAgdmFyIHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcblxyXG4gICAgd2hpbGUgKHJvb3QuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHJvb3QucmVtb3ZlQ2hpbGQocm9vdC5maXJzdENoaWxkKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/* no static exports found */
/* all exports used */
/*!*************************************!*\
  !*** ./~/furhat-core/dist/index.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// Constants\nconst OPEN = 'open';\nconst CLOSE = 'closed';\nconst FAIL = 'failed';\n\n/**\n * Furhat main class. Maintains the websocket connection to furhatOS and\n * has methods to send events, subscribe to events and helper methods such as say,\n * gesture, etc.\n */\nclass Furhat {\n  constructor() {\n    this.eventFunctions = {};\n  }\n\n  /**\n   * Initializes the furhat socket connection and executes the callback method.\n   * @param domain IP Address for furhatOS - localhost if SDK.\n   * @param port port for RealTimeAPI module of furhatOS.\n   * @param route route for RealTimeAPI module of furhatOS.\n   * @param callback callback method to be executed on successful opening of websocket.\n   */\n  init(domain, port, route, callback) {\n    if (this.socket !== undefined) {\n      this.socket.close();\n    }\n    console.log(`initializing ws://${domain}:${port}/${route}`); // eslint-disable-line no-console\n    this.socket = new window.WebSocket(`ws://${domain}:${port}/${route}`); // eslint-disable-line no-undef\n\n    this.socket.onopen = () => {\n      this.status = OPEN;\n      if (callback !== undefined) {\n        callback(OPEN, this);\n      }\n    };\n    this.socket.onmessage = event => {\n      if (this.eventFunctions[JSON.parse(event.data).event_name] !== undefined) {\n        this.eventFunctions[JSON.parse(event.data).event_name](event);\n      }\n    };\n    this.socket.onclose = () => {\n      this.status = CLOSE;\n      if (callback !== undefined) {\n        callback(CLOSE, this);\n      }\n    };\n    this.socket.onerror = () => {\n      this.status = FAIL;\n      if (callback !== undefined) {\n        callback(FAIL, this);\n      }\n    };\n  }\n\n  /**\n   * Sends an event to furhatOS\n   * @param event Object containing the event. Mandtory to have event_name parameter in the object\n   */\n  send(event) {\n    if (this.socket.readyState === 2 || this.socket.readyState === 3) {\n      // SHIT\n    } else if (this.socket.readyState === 1) {\n      this.socket.send(JSON.stringify(event));\n    }\n  }\n\n  /**\n   * Subscribes to the given event and triggers the supplied callback on event\n   * @param eventName Name of the event to subscribe\n   * @param callback Function which needs to be triggered when the given event is recieved\n   * @param dontSend [Optional] [false by default] Boolean which determines wether to send\n   * the subscribe event or not. use it to set callbacks for event that are already subscribed to,\n   * for instance with group subscriptions\n   */\n  subscribe(eventName, callback, dontSend = false) {\n    const event = { event_name: 'furhatos.event.actions.ActionRealTimeAPISubscribe', name: eventName };\n    this.eventFunctions[eventName] = callback;\n    if (!dontSend) {\n      this.send(event);\n    }\n  }\n\n  /**\n   * Subscribes to the given event group\n   * @param groupNumber Number(Assigned ENUM) of the group that needs to be subscribed to\n   */\n  subscribeGroup(groupNumber) {\n    const event = { event_name: 'furhatos.event.actions.ActionRealTimeAPISubscribe', group: groupNumber };\n    this.send(event);\n  }\n\n  /**\n   * Says a given text\n   * @param text Text which needs to be said by Furhat\n   */\n  say(text) {\n    const event = { event_name: 'furhatos.event.actions.ActionSpeech', text };\n    this.send(event);\n  }\n\n  /**\n   * Stimulates the speech of a user in the interaction space\n   * @param text Text which needs to be said by the user\n   */\n  userSpeech(text) {\n    const event = { event_name: 'furhatos.event.senses.SenseTypingEnd', messageText: text };\n    this.send(event);\n  }\n\n  /**\n   * Stimulates SenseSpeechStart event. Can be used to stimulate user speech via typing\n   */\n  userSpeechStart() {\n    const event = { event_name: 'furhatos.event.senses.SenseTypingStart' };\n    this.send(event);\n  }\n\n  /**\n   * Performs the given gesture\n   * @param name Name of the gesture that needs to be performed\n   */\n  gesture(name) {\n    const event = { event_name: 'furhatos.event.actions.ActionGesture', name };\n    this.send(event);\n  }\n}\n\nexports.default = Furhat;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL34vZnVyaGF0LWNvcmUvZGlzdC9pbmRleC5qcz8yNmFmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIENvbnN0YW50c1xuY29uc3QgT1BFTiA9ICdvcGVuJztcbmNvbnN0IENMT1NFID0gJ2Nsb3NlZCc7XG5jb25zdCBGQUlMID0gJ2ZhaWxlZCc7XG5cbi8qKlxuICogRnVyaGF0IG1haW4gY2xhc3MuIE1haW50YWlucyB0aGUgd2Vic29ja2V0IGNvbm5lY3Rpb24gdG8gZnVyaGF0T1MgYW5kXG4gKiBoYXMgbWV0aG9kcyB0byBzZW5kIGV2ZW50cywgc3Vic2NyaWJlIHRvIGV2ZW50cyBhbmQgaGVscGVyIG1ldGhvZHMgc3VjaCBhcyBzYXksXG4gKiBnZXN0dXJlLCBldGMuXG4gKi9cbmNsYXNzIEZ1cmhhdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZXZlbnRGdW5jdGlvbnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgZnVyaGF0IHNvY2tldCBjb25uZWN0aW9uIGFuZCBleGVjdXRlcyB0aGUgY2FsbGJhY2sgbWV0aG9kLlxuICAgKiBAcGFyYW0gZG9tYWluIElQIEFkZHJlc3MgZm9yIGZ1cmhhdE9TIC0gbG9jYWxob3N0IGlmIFNESy5cbiAgICogQHBhcmFtIHBvcnQgcG9ydCBmb3IgUmVhbFRpbWVBUEkgbW9kdWxlIG9mIGZ1cmhhdE9TLlxuICAgKiBAcGFyYW0gcm91dGUgcm91dGUgZm9yIFJlYWxUaW1lQVBJIG1vZHVsZSBvZiBmdXJoYXRPUy5cbiAgICogQHBhcmFtIGNhbGxiYWNrIGNhbGxiYWNrIG1ldGhvZCB0byBiZSBleGVjdXRlZCBvbiBzdWNjZXNzZnVsIG9wZW5pbmcgb2Ygd2Vic29ja2V0LlxuICAgKi9cbiAgaW5pdChkb21haW4sIHBvcnQsIHJvdXRlLCBjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLnNvY2tldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNvY2tldC5jbG9zZSgpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgaW5pdGlhbGl6aW5nIHdzOi8vJHtkb21haW59OiR7cG9ydH0vJHtyb3V0ZX1gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgdGhpcy5zb2NrZXQgPSBuZXcgd2luZG93LldlYlNvY2tldChgd3M6Ly8ke2RvbWFpbn06JHtwb3J0fS8ke3JvdXRlfWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXR1cyA9IE9QRU47XG4gICAgICBpZiAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjYWxsYmFjayhPUEVOLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLmV2ZW50RnVuY3Rpb25zW0pTT04ucGFyc2UoZXZlbnQuZGF0YSkuZXZlbnRfbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmV2ZW50RnVuY3Rpb25zW0pTT04ucGFyc2UoZXZlbnQuZGF0YSkuZXZlbnRfbmFtZV0oZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zb2NrZXQub25jbG9zZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdHVzID0gQ0xPU0U7XG4gICAgICBpZiAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjYWxsYmFjayhDTE9TRSwgdGhpcyk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0dXMgPSBGQUlMO1xuICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2FsbGJhY2soRkFJTCwgdGhpcyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhbiBldmVudCB0byBmdXJoYXRPU1xuICAgKiBAcGFyYW0gZXZlbnQgT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGV2ZW50LiBNYW5kdG9yeSB0byBoYXZlIGV2ZW50X25hbWUgcGFyYW1ldGVyIGluIHRoZSBvYmplY3RcbiAgICovXG4gIHNlbmQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gMiB8fCB0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09PSAzKSB7XG4gICAgICAvLyBTSElUXG4gICAgfSBlbHNlIGlmICh0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09PSAxKSB7XG4gICAgICB0aGlzLnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGV2ZW50KSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZXMgdG8gdGhlIGdpdmVuIGV2ZW50IGFuZCB0cmlnZ2VycyB0aGUgc3VwcGxpZWQgY2FsbGJhY2sgb24gZXZlbnRcbiAgICogQHBhcmFtIGV2ZW50TmFtZSBOYW1lIG9mIHRoZSBldmVudCB0byBzdWJzY3JpYmVcbiAgICogQHBhcmFtIGNhbGxiYWNrIEZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBnaXZlbiBldmVudCBpcyByZWNpZXZlZFxuICAgKiBAcGFyYW0gZG9udFNlbmQgW09wdGlvbmFsXSBbZmFsc2UgYnkgZGVmYXVsdF0gQm9vbGVhbiB3aGljaCBkZXRlcm1pbmVzIHdldGhlciB0byBzZW5kXG4gICAqIHRoZSBzdWJzY3JpYmUgZXZlbnQgb3Igbm90LiB1c2UgaXQgdG8gc2V0IGNhbGxiYWNrcyBmb3IgZXZlbnQgdGhhdCBhcmUgYWxyZWFkeSBzdWJzY3JpYmVkIHRvLFxuICAgKiBmb3IgaW5zdGFuY2Ugd2l0aCBncm91cCBzdWJzY3JpcHRpb25zXG4gICAqL1xuICBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaywgZG9udFNlbmQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGV2ZW50ID0geyBldmVudF9uYW1lOiAnZnVyaGF0b3MuZXZlbnQuYWN0aW9ucy5BY3Rpb25SZWFsVGltZUFQSVN1YnNjcmliZScsIG5hbWU6IGV2ZW50TmFtZSB9O1xuICAgIHRoaXMuZXZlbnRGdW5jdGlvbnNbZXZlbnROYW1lXSA9IGNhbGxiYWNrO1xuICAgIGlmICghZG9udFNlbmQpIHtcbiAgICAgIHRoaXMuc2VuZChldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZXMgdG8gdGhlIGdpdmVuIGV2ZW50IGdyb3VwXG4gICAqIEBwYXJhbSBncm91cE51bWJlciBOdW1iZXIoQXNzaWduZWQgRU5VTSkgb2YgdGhlIGdyb3VwIHRoYXQgbmVlZHMgdG8gYmUgc3Vic2NyaWJlZCB0b1xuICAgKi9cbiAgc3Vic2NyaWJlR3JvdXAoZ3JvdXBOdW1iZXIpIHtcbiAgICBjb25zdCBldmVudCA9IHsgZXZlbnRfbmFtZTogJ2Z1cmhhdG9zLmV2ZW50LmFjdGlvbnMuQWN0aW9uUmVhbFRpbWVBUElTdWJzY3JpYmUnLCBncm91cDogZ3JvdXBOdW1iZXIgfTtcbiAgICB0aGlzLnNlbmQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNheXMgYSBnaXZlbiB0ZXh0XG4gICAqIEBwYXJhbSB0ZXh0IFRleHQgd2hpY2ggbmVlZHMgdG8gYmUgc2FpZCBieSBGdXJoYXRcbiAgICovXG4gIHNheSh0ZXh0KSB7XG4gICAgY29uc3QgZXZlbnQgPSB7IGV2ZW50X25hbWU6ICdmdXJoYXRvcy5ldmVudC5hY3Rpb25zLkFjdGlvblNwZWVjaCcsIHRleHQgfTtcbiAgICB0aGlzLnNlbmQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0aW11bGF0ZXMgdGhlIHNwZWVjaCBvZiBhIHVzZXIgaW4gdGhlIGludGVyYWN0aW9uIHNwYWNlXG4gICAqIEBwYXJhbSB0ZXh0IFRleHQgd2hpY2ggbmVlZHMgdG8gYmUgc2FpZCBieSB0aGUgdXNlclxuICAgKi9cbiAgdXNlclNwZWVjaCh0ZXh0KSB7XG4gICAgY29uc3QgZXZlbnQgPSB7IGV2ZW50X25hbWU6ICdmdXJoYXRvcy5ldmVudC5zZW5zZXMuU2Vuc2VUeXBpbmdFbmQnLCBtZXNzYWdlVGV4dDogdGV4dCB9O1xuICAgIHRoaXMuc2VuZChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogU3RpbXVsYXRlcyBTZW5zZVNwZWVjaFN0YXJ0IGV2ZW50LiBDYW4gYmUgdXNlZCB0byBzdGltdWxhdGUgdXNlciBzcGVlY2ggdmlhIHR5cGluZ1xuICAgKi9cbiAgdXNlclNwZWVjaFN0YXJ0KCkge1xuICAgIGNvbnN0IGV2ZW50ID0geyBldmVudF9uYW1lOiAnZnVyaGF0b3MuZXZlbnQuc2Vuc2VzLlNlbnNlVHlwaW5nU3RhcnQnIH07XG4gICAgdGhpcy5zZW5kKGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyB0aGUgZ2l2ZW4gZ2VzdHVyZVxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBnZXN0dXJlIHRoYXQgbmVlZHMgdG8gYmUgcGVyZm9ybWVkXG4gICAqL1xuICBnZXN0dXJlKG5hbWUpIHtcbiAgICBjb25zdCBldmVudCA9IHsgZXZlbnRfbmFtZTogJ2Z1cmhhdG9zLmV2ZW50LmFjdGlvbnMuQWN0aW9uR2VzdHVyZScsIG5hbWUgfTtcbiAgICB0aGlzLnNlbmQoZXZlbnQpO1xuICB9XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZ1cmhhdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnVyaGF0LWNvcmUvZGlzdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** ./~/furhat-gui/dist/index.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _furhatCore = __webpack_require__(/*! furhat-core */ 6);\n\nvar _furhatCore2 = _interopRequireDefault(_furhatCore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nlet portNumber;\nlet callbackFun;\n\nconst InitCallback = (status, hat) => {\n  if (status === 'open') {\n    hat.send({\n      event_name: 'furhatos.senses.SenseSkillGUIConnected',\n      port: portNumber\n    });\n    callbackFun(hat);\n  }\n};\n\n/**\n * FurhatGUI Function which sets up a connection to the furhat skill and gives\n * the furhat object to send and recieve events to the skill.\n * @param callback callback that needs to be triggered when a sucessful connection is established\n */\nconst FurhatGUI = callback => {\n  if (callback !== undefined && typeof callback === 'function') {\n    window.fetch('/port', { mode: 'GET' }).then(r => {\n      // eslint-disable-line no-undef\n      r.json().then(o => {\n        const furhat = new _furhatCore2.default();\n        portNumber = o.port;\n        callbackFun = callback;\n        furhat.init(window.location.hostname, o.port, 'api', InitCallback); // eslint-disable-line no-undef\n      });\n    });\n  }\n};\n\nexports.default = FurhatGUI;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL34vZnVyaGF0LWd1aS9kaXN0L2luZGV4LmpzPzJkNDIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2Z1cmhhdENvcmUgPSByZXF1aXJlKCdmdXJoYXQtY29yZScpO1xuXG52YXIgX2Z1cmhhdENvcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnVyaGF0Q29yZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmxldCBwb3J0TnVtYmVyO1xubGV0IGNhbGxiYWNrRnVuO1xuXG5jb25zdCBJbml0Q2FsbGJhY2sgPSAoc3RhdHVzLCBoYXQpID0+IHtcbiAgaWYgKHN0YXR1cyA9PT0gJ29wZW4nKSB7XG4gICAgaGF0LnNlbmQoe1xuICAgICAgZXZlbnRfbmFtZTogJ2Z1cmhhdG9zLnNlbnNlcy5TZW5zZVNraWxsR1VJQ29ubmVjdGVkJyxcbiAgICAgIHBvcnQ6IHBvcnROdW1iZXJcbiAgICB9KTtcbiAgICBjYWxsYmFja0Z1bihoYXQpO1xuICB9XG59O1xuXG4vKipcbiAqIEZ1cmhhdEdVSSBGdW5jdGlvbiB3aGljaCBzZXRzIHVwIGEgY29ubmVjdGlvbiB0byB0aGUgZnVyaGF0IHNraWxsIGFuZCBnaXZlc1xuICogdGhlIGZ1cmhhdCBvYmplY3QgdG8gc2VuZCBhbmQgcmVjaWV2ZSBldmVudHMgdG8gdGhlIHNraWxsLlxuICogQHBhcmFtIGNhbGxiYWNrIGNhbGxiYWNrIHRoYXQgbmVlZHMgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gYSBzdWNlc3NmdWwgY29ubmVjdGlvbiBpcyBlc3RhYmxpc2hlZFxuICovXG5jb25zdCBGdXJoYXRHVUkgPSBjYWxsYmFjayA9PiB7XG4gIGlmIChjYWxsYmFjayAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHdpbmRvdy5mZXRjaCgnL3BvcnQnLCB7IG1vZGU6ICdHRVQnIH0pLnRoZW4ociA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICByLmpzb24oKS50aGVuKG8gPT4ge1xuICAgICAgICBjb25zdCBmdXJoYXQgPSBuZXcgX2Z1cmhhdENvcmUyLmRlZmF1bHQoKTtcbiAgICAgICAgcG9ydE51bWJlciA9IG8ucG9ydDtcbiAgICAgICAgY2FsbGJhY2tGdW4gPSBjYWxsYmFjaztcbiAgICAgICAgZnVyaGF0LmluaXQod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLCBvLnBvcnQsICdhcGknLCBJbml0Q2FsbGJhY2spOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRnVyaGF0R1VJO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mdXJoYXQtZ3VpL2Rpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/* no static exports found */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/furhat-gui/~/furhat-core/dist/index.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// Constants\nconst OPEN = 'open';\nconst CLOSE = 'closed';\nconst FAIL = 'failed';\n\n/**\n * Furhat main class. Maintains the websocket connection to furhatOS and\n * has methods to send events, subscribe to events and helper methods such as say,\n * gesture, etc.\n */\nclass Furhat {\n  constructor() {\n    this.eventFunctions = {};\n  }\n\n  /**\n   * Initializes the furhat socket connection and executes the callback method.\n   * @param domain IP Address for furhatOS - localhost if SDK.\n   * @param port port for RealTimeAPI module of furhatOS.\n   * @param route route for RealTimeAPI module of furhatOS.\n   * @param callback callback method to be executed on successful opening of websocket.\n   */\n  init(domain, port, route, callback) {\n    if (this.socket !== undefined) {\n      this.socket.close();\n    }\n    console.log(`initializing ws://${domain}:${port}/${route}`); // eslint-disable-line no-console\n    this.socket = new window.WebSocket(`ws://${domain}:${port}/${route}`); // eslint-disable-line no-undef\n\n    this.socket.onopen = () => {\n      this.status = OPEN;\n      if (callback !== undefined) {\n        callback(OPEN, this);\n      }\n    };\n    this.socket.onmessage = event => {\n      if (this.eventFunctions[JSON.parse(event.data).event_name] !== undefined) {\n        this.eventFunctions[JSON.parse(event.data).event_name](JSON.parse(event.data));\n      }\n    };\n    this.socket.onclose = () => {\n      this.status = CLOSE;\n      if (callback !== undefined) {\n        callback(CLOSE, this);\n      }\n    };\n    this.socket.onerror = () => {\n      this.status = FAIL;\n      if (callback !== undefined) {\n        callback(FAIL, this);\n      }\n    };\n  }\n\n  /**\n   * Sends an event to furhatOS\n   * @param event Object containing the event. Mandtory to have event_name parameter in the object\n   */\n  send(event) {\n    if (this.socket.readyState === 2 || this.socket.readyState === 3) {\n      // SHIT\n    } else if (this.socket.readyState === 1) {\n      this.socket.send(JSON.stringify(event));\n    }\n  }\n\n  /**\n   * Subscribes to the given event and triggers the supplied callback on event\n   * @param eventName Name of the event to subscribe\n   * @param callback Function which needs to be triggered when the given event is recieved\n   * @param dontSend [Optional] [false by default] Boolean which determines wether to send\n   * the subscribe event or not. use it to set callbacks for event that are already subscribed to,\n   * for instance with group subscriptions\n   */\n  subscribe(eventName, callback, dontSend = false) {\n    const event = { event_name: 'furhatos.event.actions.ActionRealTimeAPISubscribe', name: eventName };\n    this.eventFunctions[eventName] = callback;\n    if (!dontSend) {\n      this.send(event);\n    }\n  }\n\n  /**\n   * Subscribes to the given event group\n   * @param groupNumber Number(Assigned ENUM) of the group that needs to be subscribed to\n   */\n  subscribeGroup(groupNumber) {\n    const event = { event_name: 'furhatos.event.actions.ActionRealTimeAPISubscribe', group: groupNumber };\n    this.send(event);\n  }\n\n  /**\n   * Says a given text\n   * @param text Text which needs to be said by Furhat\n   */\n  say(text) {\n    const event = { event_name: 'furhatos.event.actions.ActionSpeech', text };\n    this.send(event);\n  }\n\n  /**\n   * Stimulates the speech of a user in the interaction space\n   * @param text Text which needs to be said by the user\n   */\n  userSpeech(text) {\n    const event = { event_name: 'furhatos.event.senses.SenseTypingEnd', messageText: text };\n    this.send(event);\n  }\n\n  /**\n   * Stimulates SenseSpeechStart event. Can be used to stimulate user speech via typing\n   */\n  userSpeechStart() {\n    const event = { event_name: 'furhatos.event.senses.SenseTypingStart' };\n    this.send(event);\n  }\n\n  /**\n   * Performs the given gesture\n   * @param name Name of the gesture that needs to be performed\n   */\n  gesture(name) {\n    const event = { event_name: 'furhatos.event.actions.ActionGesture', name };\n    this.send(event);\n  }\n}\n\nexports.default = Furhat;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL34vZnVyaGF0LWd1aS9+L2Z1cmhhdC1jb3JlL2Rpc3QvaW5kZXguanM/NjAwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyBDb25zdGFudHNcbmNvbnN0IE9QRU4gPSAnb3Blbic7XG5jb25zdCBDTE9TRSA9ICdjbG9zZWQnO1xuY29uc3QgRkFJTCA9ICdmYWlsZWQnO1xuXG4vKipcbiAqIEZ1cmhhdCBtYWluIGNsYXNzLiBNYWludGFpbnMgdGhlIHdlYnNvY2tldCBjb25uZWN0aW9uIHRvIGZ1cmhhdE9TIGFuZFxuICogaGFzIG1ldGhvZHMgdG8gc2VuZCBldmVudHMsIHN1YnNjcmliZSB0byBldmVudHMgYW5kIGhlbHBlciBtZXRob2RzIHN1Y2ggYXMgc2F5LFxuICogZ2VzdHVyZSwgZXRjLlxuICovXG5jbGFzcyBGdXJoYXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmV2ZW50RnVuY3Rpb25zID0ge307XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGZ1cmhhdCBzb2NrZXQgY29ubmVjdGlvbiBhbmQgZXhlY3V0ZXMgdGhlIGNhbGxiYWNrIG1ldGhvZC5cbiAgICogQHBhcmFtIGRvbWFpbiBJUCBBZGRyZXNzIGZvciBmdXJoYXRPUyAtIGxvY2FsaG9zdCBpZiBTREsuXG4gICAqIEBwYXJhbSBwb3J0IHBvcnQgZm9yIFJlYWxUaW1lQVBJIG1vZHVsZSBvZiBmdXJoYXRPUy5cbiAgICogQHBhcmFtIHJvdXRlIHJvdXRlIGZvciBSZWFsVGltZUFQSSBtb2R1bGUgb2YgZnVyaGF0T1MuXG4gICAqIEBwYXJhbSBjYWxsYmFjayBjYWxsYmFjayBtZXRob2QgdG8gYmUgZXhlY3V0ZWQgb24gc3VjY2Vzc2Z1bCBvcGVuaW5nIG9mIHdlYnNvY2tldC5cbiAgICovXG4gIGluaXQoZG9tYWluLCBwb3J0LCByb3V0ZSwgY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5zb2NrZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYGluaXRpYWxpemluZyB3czovLyR7ZG9tYWlufToke3BvcnR9LyR7cm91dGV9YCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIHRoaXMuc29ja2V0ID0gbmV3IHdpbmRvdy5XZWJTb2NrZXQoYHdzOi8vJHtkb21haW59OiR7cG9ydH0vJHtyb3V0ZX1gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4gICAgdGhpcy5zb2NrZXQub25vcGVuID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0dXMgPSBPUEVOO1xuICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2FsbGJhY2soT1BFTiwgdGhpcyk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5ldmVudEZ1bmN0aW9uc1tKU09OLnBhcnNlKGV2ZW50LmRhdGEpLmV2ZW50X25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5ldmVudEZ1bmN0aW9uc1tKU09OLnBhcnNlKGV2ZW50LmRhdGEpLmV2ZW50X25hbWVdKEpTT04ucGFyc2UoZXZlbnQuZGF0YSkpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zb2NrZXQub25jbG9zZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdHVzID0gQ0xPU0U7XG4gICAgICBpZiAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjYWxsYmFjayhDTE9TRSwgdGhpcyk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0dXMgPSBGQUlMO1xuICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2FsbGJhY2soRkFJTCwgdGhpcyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhbiBldmVudCB0byBmdXJoYXRPU1xuICAgKiBAcGFyYW0gZXZlbnQgT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGV2ZW50LiBNYW5kdG9yeSB0byBoYXZlIGV2ZW50X25hbWUgcGFyYW1ldGVyIGluIHRoZSBvYmplY3RcbiAgICovXG4gIHNlbmQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gMiB8fCB0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09PSAzKSB7XG4gICAgICAvLyBTSElUXG4gICAgfSBlbHNlIGlmICh0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09PSAxKSB7XG4gICAgICB0aGlzLnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGV2ZW50KSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZXMgdG8gdGhlIGdpdmVuIGV2ZW50IGFuZCB0cmlnZ2VycyB0aGUgc3VwcGxpZWQgY2FsbGJhY2sgb24gZXZlbnRcbiAgICogQHBhcmFtIGV2ZW50TmFtZSBOYW1lIG9mIHRoZSBldmVudCB0byBzdWJzY3JpYmVcbiAgICogQHBhcmFtIGNhbGxiYWNrIEZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBnaXZlbiBldmVudCBpcyByZWNpZXZlZFxuICAgKiBAcGFyYW0gZG9udFNlbmQgW09wdGlvbmFsXSBbZmFsc2UgYnkgZGVmYXVsdF0gQm9vbGVhbiB3aGljaCBkZXRlcm1pbmVzIHdldGhlciB0byBzZW5kXG4gICAqIHRoZSBzdWJzY3JpYmUgZXZlbnQgb3Igbm90LiB1c2UgaXQgdG8gc2V0IGNhbGxiYWNrcyBmb3IgZXZlbnQgdGhhdCBhcmUgYWxyZWFkeSBzdWJzY3JpYmVkIHRvLFxuICAgKiBmb3IgaW5zdGFuY2Ugd2l0aCBncm91cCBzdWJzY3JpcHRpb25zXG4gICAqL1xuICBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaywgZG9udFNlbmQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGV2ZW50ID0geyBldmVudF9uYW1lOiAnZnVyaGF0b3MuZXZlbnQuYWN0aW9ucy5BY3Rpb25SZWFsVGltZUFQSVN1YnNjcmliZScsIG5hbWU6IGV2ZW50TmFtZSB9O1xuICAgIHRoaXMuZXZlbnRGdW5jdGlvbnNbZXZlbnROYW1lXSA9IGNhbGxiYWNrO1xuICAgIGlmICghZG9udFNlbmQpIHtcbiAgICAgIHRoaXMuc2VuZChldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZXMgdG8gdGhlIGdpdmVuIGV2ZW50IGdyb3VwXG4gICAqIEBwYXJhbSBncm91cE51bWJlciBOdW1iZXIoQXNzaWduZWQgRU5VTSkgb2YgdGhlIGdyb3VwIHRoYXQgbmVlZHMgdG8gYmUgc3Vic2NyaWJlZCB0b1xuICAgKi9cbiAgc3Vic2NyaWJlR3JvdXAoZ3JvdXBOdW1iZXIpIHtcbiAgICBjb25zdCBldmVudCA9IHsgZXZlbnRfbmFtZTogJ2Z1cmhhdG9zLmV2ZW50LmFjdGlvbnMuQWN0aW9uUmVhbFRpbWVBUElTdWJzY3JpYmUnLCBncm91cDogZ3JvdXBOdW1iZXIgfTtcbiAgICB0aGlzLnNlbmQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNheXMgYSBnaXZlbiB0ZXh0XG4gICAqIEBwYXJhbSB0ZXh0IFRleHQgd2hpY2ggbmVlZHMgdG8gYmUgc2FpZCBieSBGdXJoYXRcbiAgICovXG4gIHNheSh0ZXh0KSB7XG4gICAgY29uc3QgZXZlbnQgPSB7IGV2ZW50X25hbWU6ICdmdXJoYXRvcy5ldmVudC5hY3Rpb25zLkFjdGlvblNwZWVjaCcsIHRleHQgfTtcbiAgICB0aGlzLnNlbmQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0aW11bGF0ZXMgdGhlIHNwZWVjaCBvZiBhIHVzZXIgaW4gdGhlIGludGVyYWN0aW9uIHNwYWNlXG4gICAqIEBwYXJhbSB0ZXh0IFRleHQgd2hpY2ggbmVlZHMgdG8gYmUgc2FpZCBieSB0aGUgdXNlclxuICAgKi9cbiAgdXNlclNwZWVjaCh0ZXh0KSB7XG4gICAgY29uc3QgZXZlbnQgPSB7IGV2ZW50X25hbWU6ICdmdXJoYXRvcy5ldmVudC5zZW5zZXMuU2Vuc2VUeXBpbmdFbmQnLCBtZXNzYWdlVGV4dDogdGV4dCB9O1xuICAgIHRoaXMuc2VuZChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogU3RpbXVsYXRlcyBTZW5zZVNwZWVjaFN0YXJ0IGV2ZW50LiBDYW4gYmUgdXNlZCB0byBzdGltdWxhdGUgdXNlciBzcGVlY2ggdmlhIHR5cGluZ1xuICAgKi9cbiAgdXNlclNwZWVjaFN0YXJ0KCkge1xuICAgIGNvbnN0IGV2ZW50ID0geyBldmVudF9uYW1lOiAnZnVyaGF0b3MuZXZlbnQuc2Vuc2VzLlNlbnNlVHlwaW5nU3RhcnQnIH07XG4gICAgdGhpcy5zZW5kKGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyB0aGUgZ2l2ZW4gZ2VzdHVyZVxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBnZXN0dXJlIHRoYXQgbmVlZHMgdG8gYmUgcGVyZm9ybWVkXG4gICAqL1xuICBnZXN0dXJlKG5hbWUpIHtcbiAgICBjb25zdCBldmVudCA9IHsgZXZlbnRfbmFtZTogJ2Z1cmhhdG9zLmV2ZW50LmFjdGlvbnMuQWN0aW9uR2VzdHVyZScsIG5hbWUgfTtcbiAgICB0aGlzLnNlbmQoZXZlbnQpO1xuICB9XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZ1cmhhdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnVyaGF0LWd1aS9+L2Z1cmhhdC1jb3JlL2Rpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/furhat-gui/~/furhat-core/index.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist */ 5)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL34vZnVyaGF0LWd1aS9+L2Z1cmhhdC1jb3JlL2luZGV4LmpzPzQ1MzUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QnKVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Z1cmhhdC1ndWkvfi9mdXJoYXQtY29yZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);