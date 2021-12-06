import PropTypes from 'prop-types';
import TodoList from './TodoList';
import Context from '../context/context'
import {useContext} from 'react';

const styles = {
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #ccc',
        padding: '15px 10px 15px 10px',
        borderRadius: '4px',
        marginBottom: '.5rem',
    },
    checkbox: {
        transform: 'scale(1.5)',
        marginRight: '10px',
    },
    close: {
        backgroundColor: 'white',
    }
}

function TodoItem({todo, toggleTodo}) {

    const {removeTodo} = useContext(Context);

    const classes = [];

    if (todo.completed) { classes.push('completed') }

    return (
        <div style={styles.item}>
            <div>
                <input style={styles.checkbox} type={'checkbox'}
                       checked={todo.completed}
                       onChange={ () => { toggleTodo(todo.id) } } />

                <span className={classes.join(' ')}>{todo.title}</span>
            </div>
            <button style={styles.close}
                    onClick={ () => {
                        removeTodo(todo.id)
                    } }>&times;</button>
        </div>
    );

}

// Какие пропсы приходят в компонент
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleTodo: PropTypes.func.isRequired,
}

export default TodoItem