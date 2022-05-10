import {useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from "./TodoList";
import NoTodos from "./NoTodos";
import {TodosContext} from "../context/TodosContext";
import useLocalStorage from "../hooks/useLocalStorage";
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import '../reset.css';
import '../App.css';


function App() {
    const [todos, setTodos] = useLocalStorage('todos', []);
    const [idForTodo, setIdForTodo] = useState(4);
    const [filter, setFilter] = useState('all')

    function todosFiltered() {
        if (filter === 'all') {
            return todos;
        } else if (filter === 'active') {
            return todos.filter(todo => !todo.isComplete)
        } else if (filter === 'completed') {
            return todos.filter(todo => todo.isComplete)
        }
    }

    return (
        <TodosContext.Provider
            value={{
                todos,
                setTodos,
                idForTodo,
                setIdForTodo,
                todosFiltered,
                filter,
                setFilter
            }}>

            <div className="todo-app">
                <h2>Todo App</h2>
                <TodoForm/>

                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={todos.length > 0}
                        timeout={300}
                        classNames="slide-vertical"
                        unmountOnExit
                    >
                        {todos.length > 0 ? <TodoList/> : <NoTodos/>}
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </TodosContext.Provider>
    );
}

export default App;
