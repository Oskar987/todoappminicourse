import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import DashBoard from './todo/DashBoard';
import { Provider } from 'react-redux';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './layout/Alerts';
import store from '../store';

// optional configuration
const alertOptions = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <Header />
                        <Alerts/>
                    </Fragment>
                    <div className='container'>
                        <DashBoard />
                    </div>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));