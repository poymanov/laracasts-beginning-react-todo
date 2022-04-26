import {useMemo, useState} from 'react';
import TodoForm from './TodoForm';
import './App.css';
import TodoList from "./TodoList";
import NoTodos from "./NoTodos";

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Finish React Series',
            isComplete: false,
            isEditing: false,
        },
        {
            id: 2,
            title: 'Go Grocery',
            isComplete: true,
            isEditing: false,
        },
        {
            id: 3,
            title: 'Take over world',
            isComplete: false,
            isEditing: false,
        },
    ]);

    const [idForTodo, setIdForTodo] = useState(4);

    function addTodo(todo) {
        setTodos([
            ...todos,
            {
                id: idForTodo,
                title: todo,
                isComplete: false,
            }
        ]);

        setIdForTodo(prevIdForTodo => prevIdForTodo + 1);
    }

    function completeTodo(id) {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }

            return todo;
        });

        setTodos(updatedTodos)
    }

    function markAsEditing(id) {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isEditing = true;
            }

            return todo;
        });

        setTodos(updatedTodos);
    }

    function updateTodo(event, id) {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                if (event.target.value.trim().length === 0) {
                    todo.isEditing = false;
                    return todo;
                }
                todo.title = event.target.value;
                todo.isEditing = false;
            }

            return todo;
        });

        setTodos(updatedTodos);
    }

    function cancelEdit(event, id) {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isEditing = false;
            }

            return todo;
        });

        setTodos(updatedTodos);
    }

    function deleteTodo(id) {
        setTodos([...todos].filter(todo => todo.id !== id));
    }

    function remainingCalculation() {
        return todos.filter(todo => !todo.isComplete).length;
    }

    const remaining = useMemo(remainingCalculation, [todos])

    function clearCompleted() {
        setTodos([...todos].filter(todo => !todo.isComplete));
    }

    function completedAllTodos() {
        const updatedTodos = todos.map(todo => {
            todo.isComplete = true;

            return todo;
        });

        setTodos(updatedTodos);
    }

    function todosFiltered(filter) {
        if (filter === 'all') {
            return todos;
        } else if (filter === 'active') {
            return todos.filter(todo => !todo.isComplete)
        } else if (filter === 'completed') {
            return todos.filter(todo => todo.isComplete)
        }
    }

    return (
        <div className="todo-app-container">
            <div className="todo-app">
                <h2>Todo App</h2>
                <TodoForm addTodo={addTodo}/>

                {todos.length > 0 ? (
                    <TodoList
                        todos={todos}
                        completeTodo={completeTodo}
                        markAsEditing={markAsEditing}
                        updateTodo={updateTodo}
                        cancelEdit={cancelEdit}
                        deleteTodo={deleteTodo}
                        remaining={remaining}
                        clearCompleted={clearCompleted}
                        completedAllTodos={completedAllTodos}
                        todosFiltered={todosFiltered}
                    />
                ) : (
                    <NoTodos/>
                )}
            </div>
        </div>
    );
}

export default App;