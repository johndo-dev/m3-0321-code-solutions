/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/todo-app.js":
/*!************************************!*\
  !*** ./src/components/todo-app.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list */ "./src/components/todo-list.js");
/* harmony import */ var _todo_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-form */ "./src/components/todo-form.js");




class TodoApp {
  constructor(container, nextId, todos, onUpdate = _lib__WEBPACK_IMPORTED_MODULE_0__.noop) {
    this.container = container;
    this.todos = todos;
    this.nextId = nextId;
    this.todoForm = null;
    this.todoList = null;
    this.isStarted = false;
    this.onUpdate = onUpdate;
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  start() {
    if (this.isStarted) return;
    this.todoForm = new _todo_form__WEBPACK_IMPORTED_MODULE_2__.default(this.addTodo);
    this.todoList = new _todo_list__WEBPACK_IMPORTED_MODULE_1__.default(this.toggleCompleted);
    this.update();
    this.isStarted = true;
  }

  addTodo(task) {
    const id = this.nextId;
    const isCompleted = false;
    const newTodo = { id, task, isCompleted };
    this.todos = this.todos.concat(newTodo);
    this.nextId++;
    this.update();
  }

  toggleCompleted(todoId) {
    this.todos = this.todos.map(todo => {
      if (todo.id !== todoId) return todo;
      return Object.assign({}, todo, { isCompleted: !todo.isCompleted });
    });
    this.update();
  }

  update() {
    this.container.innerHTML = '';
    this.container.append(
      (0,_lib__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', { class: 'mb-4' }, 'JS Todo'),
      this.todoForm.render(),
      this.todoList.render(this.todos)
    );
    const { nextId, todos } = this;
    this.onUpdate({ nextId, todos });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoApp);


/***/ }),

/***/ "./src/components/todo-form.js":
/*!*************************************!*\
  !*** ./src/components/todo-form.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");


class TodoForm {
  constructor(onSubmit) {
    this.newTask = '';
    this.element = null;
    this.onSubmit = onSubmit;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.newTask = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.onSubmit(this.newTask);
    this.newTask = '';
    event.target.reset();
    event.target.querySelector('input').focus();
  }

  render() {
    if (this.element) return this.element;
    this.element = (
      (0,_lib__WEBPACK_IMPORTED_MODULE_0__.createElement)('form', { class: 'shadow-sm mb-4' }, [
        (0,_lib__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'input-group' }, [
          (0,_lib__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {
            type: 'text',
            required: true,
            class: 'form-control',
            placeholder: 'What to do?'
          }),
          (0,_lib__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'input-group-append' }, [
            (0,_lib__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', { type: 'submit', class: 'btn btn-primary' }, 'Add Todo')
          ])
        ])
      ])
    );
    this.element.addEventListener('change', this.handleChange);
    this.element.addEventListener('submit', this.handleSubmit);
    return this.element;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoForm);


/***/ }),

/***/ "./src/components/todo-list.js":
/*!*************************************!*\
  !*** ./src/components/todo-list.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");


class TodoList {
  constructor(onToggle) {
    this.onToggle = onToggle;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const todoItem = event.target.closest('[data-todo-id]');
    if (!todoItem) return;
    const todoId = parseInt(todoItem.getAttribute('data-todo-id'), 10);
    this.onToggle(todoId);
  }

  renderCheckbox(todo) {
    const checkbox = (0,_lib__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {
      type: 'checkbox',
      id: `task${todo.id}`,
      class: 'form-check-input'
    });
    checkbox.checked = todo.isCompleted;
    return checkbox;
  }

  renderTodoItem(todo) {
    const labelStyle = todo.isCompleted
      ? 'cursor: pointer; text-decoration: line-through; opacity: 0.5; font-style: italic;'
      : 'cursor: pointer; text-decoration: inherit;';
    const todoItem = (
      (0,_lib__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', { class: 'list-group-item', 'data-todo-id': todo.id }, [
        (0,_lib__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'form-check d-flex' }, [
          this.renderCheckbox(todo),
          (0,_lib__WEBPACK_IMPORTED_MODULE_0__.createElement)('label', { style: labelStyle, class: 'form-check-label flex-grow-1', for: `task${todo.id}` }, todo.task)
        ])
      ])
    );
    return todoItem;
  }

  render(todos) {
    const todoList = (
      (0,_lib__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', { class: 'list-group shadow-sm mb-4' }, todos.map(todo => {
        return this.renderTodoItem(todo);
      }))
    );
    todoList.addEventListener('change', this.handleChange);
    return todoList;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);


/***/ }),

/***/ "./src/lib/create-element.js":
/*!***********************************!*\
  !*** ./src/lib/create-element.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _to_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-array */ "./src/lib/to-array.js");


function createElement(tagName, attributes, children = []) {
  const parent = document.createElement(tagName);
  for (const name in attributes) {
    parent.setAttribute(name, attributes[name]);
  }
  (0,_to_array__WEBPACK_IMPORTED_MODULE_0__.default)(children).forEach(child => {
    if (!(child instanceof HTMLElement)) {
      child = document.createTextNode(child);
    }
    parent.appendChild(child);
  });
  return parent;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);


/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noop": () => (/* reexport safe */ _noop__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "toArray": () => (/* reexport safe */ _to_array__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "createElement": () => (/* reexport safe */ _create_element__WEBPACK_IMPORTED_MODULE_2__.default)
/* harmony export */ });
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop */ "./src/lib/noop.js");
/* harmony import */ var _to_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-array */ "./src/lib/to-array.js");
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-element */ "./src/lib/create-element.js");







/***/ }),

/***/ "./src/lib/noop.js":
/*!*************************!*\
  !*** ./src/lib/noop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function noop() {}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (noop);


/***/ }),

/***/ "./src/lib/to-array.js":
/*!*****************************!*\
  !*** ./src/lib/to-array.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toArray);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_todo_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/todo-app */ "./src/components/todo-app.js");


const container = document.querySelector('#app');

const nextId = 4;

const todos = [
  {
    id: 1,
    task: 'Learn to code.',
    isCompleted: false
  },
  {
    id: 2,
    task: 'Build projects.',
    isCompleted: false
  },
  {
    id: 3,
    task: 'Get a job.',
    isCompleted: false
  }
];

const app = new _components_todo_app__WEBPACK_IMPORTED_MODULE_0__.default(container, nextId, todos, newState => {
  console.log(newState);
});

app.start();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map