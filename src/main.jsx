import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoApp } from './08-useReducer/TodoApp';

// import './08-useReducer/intro-reducer'
// import { Padre } from './07-tarea-memo/Padre';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { MemoHook } from './06-memos/memoHook';
// import { Memorize } from './06-memos/Memorize';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { HooksApp } from './HooksApp.';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <TodoApp />
  //</React.StrictMode>,
)

