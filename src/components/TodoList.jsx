import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
}

function TodoList(props) {

    console.log(props.todos)

    return (
        <ul style={styles.ul}>
            {props.todos.map(todo => {
                return <TodoItem todo={todo}
                                 toggleTodo={props.toggleTodo}
                                 key={todo.id}
                        />;
            })}
        </ul>
    );

}

// Какие пропсы приходят в компонент
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleTodo: PropTypes.func.isRequired,
}

export default TodoList;