import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            textInput: "",
        }
    }

    handleChange = event => {
        console.log(event.target.value);
        this.setState({
            textInput: event.target.value,
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleAdd(this.state.textInput);
        this.setState({
            textInput: "",
        })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.textInput} onChange={this.handleChange} type="text" name="item" />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;