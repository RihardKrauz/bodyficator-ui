import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from '../../routing/ProtectedRoute';
import LoginLayout from '../LoginLayout';
import ProfileLayout from '../ProfileLayout';
import RegisterLayout from '../RegisterLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const MainPage = () => (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="login" />
                <Route path="/login" component={LoginLayout} />
                <Route path="/register" component={RegisterLayout} />
                <ProtectedRoute path="/profile" component={ProfileLayout} />
            </Switch>
        </BrowserRouter>
        <ToastContainer />
    </div>
);

export default MainPage;
