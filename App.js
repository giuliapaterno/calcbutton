import React from 'react';

import {StackNavigator} from 'react-navigation';

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
// import EditTodo from "./components/EditTodo";

const App = StackNavigator (
  { //Configura le route
    TodoList: {
      screen: TodoList
    },
     AddTodo: {
      screen: AddTodo
    },
    /* EditTodo: {
      screen: EditTodo
    }  */
  },
  { //Configura il comportamento della stacknavigator
    initialRouteName: "TodoList", //quale tra le screen si visualizza prima
   // mode: "modal" ci permette di far apparire la navigazione in maniera modale
  }
);

export default App;