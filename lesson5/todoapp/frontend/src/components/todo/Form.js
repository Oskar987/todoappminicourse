import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../../actions/todos';

class Form extends Component {

    state = {
        title: '',
        description: '',
        message: ''
    };

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { title, description } = this.state;
        const todo = { title, description };
        this.props.addTodo(todo);
        this.setState({
            title: '',
            description: ''
        });
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { title, description } = this.state;

        return (
            <div className='card card-body mt-4 mb-4'>
                <h2>Add todo</h2>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Title</label>
                        <input
                            type='text'
                            className='form-control'
                            name='title'
                            onChange={this.onChange}
                            value={title} />
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <input
                            type='text'
                            className='form-control'
                            name='description'
                            onChange={this.onChange}
                            value={description} />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addTodo })(Form);
