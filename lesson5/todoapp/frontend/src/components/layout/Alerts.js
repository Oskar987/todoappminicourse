import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
    }
    componentDidUpdate(prevProps){
        const { error, alert, message } = this.props;

        if(error !== prevProps.error){
            if(error.msg.title){
                alert.error(`Title: ${error.msg.title.join()}`);
            }
            else if(error.msg.detail){
                alert.error(`Details: ${error.msg.detail}`);
            }
        }

        if(message !== prevProps.message){
            if(message.todoDeleted){
                alert.success(message.todoDeleted);
            }

            if(message.todoAdded){
                alert.success(message.todoAdded);
            }
        }
    }

    render() {
        return (
            <Fragment/>
        )
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
