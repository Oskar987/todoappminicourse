import React, { Fragment } from 'react';
import Form from './Form';
import List from './List';

export default function DashBoard() {
    return (
        <Fragment>
            <List />
            <Form />
        </Fragment>
    )
}
