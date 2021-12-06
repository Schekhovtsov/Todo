import TodoList from './components/TodoList';
import React, {useEffect, useState} from 'react';
import Context from './context/context'
import Preloader from './components/Preloader';
import NewTodo from './components/NewTodo';

//const NewTodo = React.lazy(() => { import('./components/NewTodo')})

function App() {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos)
                    setLoading(false)
                }, 1000)

            })
    }, [])

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(
            todos.concat([
                {
                    title,
                    id: Date.now(),
                    completed: false,
                }
            ]));
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">
                <h1>Minin Tutorial</h1>

                <NewTodo onCreate={addTodo}/>

                <TodoList todos={todos}
                          toggleTodo={toggleTodo}/>
                {loading && <Preloader />}
                {!todos.length
                    && !loading
                    && <div><span>Нет активных задач</span></div>}
            </div>
        </Context.Provider>
    );
}

export default App;
