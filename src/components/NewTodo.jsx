import {useState} from 'react';
import PropTypes from 'prop-types';

const useInputValue = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    return {
        bind: {
            value,
            onChange: e => setValue(e.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

const NewTodo = ({onCreate}) => {

    const input = useInputValue('')

    function submitHandler(e) {
        e.preventDefault()

        if ( input.value().trim() ) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <div className={'newFormBlock'}>
            <form onSubmit={submitHandler}>
                <input {...input.bind} />
                <button>Добавить</button>
            </form>
        </div>
    )
}

NewTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default NewTodo