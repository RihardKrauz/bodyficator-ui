import React from 'react';
import { PropTypes } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { STORAGE_KEYS } from '../../../utils/storage';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../../store/selectors';
import { changeCurrentUser } from '../../../store/actions';

/* eslint-disable react-hooks/exhaustive-deps */
function ProtectedRoute({ component: Component, dispatch, currentUser, ...rest }) {
    const authenticatedUser = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);

    React.useEffect(() => {
        if (!currentUser && authenticatedUser) {
            dispatch(changeCurrentUser(authenticatedUser));
        }
    }, []);

    return (
        <Route
            {...rest}
            render={props =>
                authenticatedUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }
        />
    );
}

ProtectedRoute.propTypes = {
    component: PropTypes.func,
    location: PropTypes.object,
    currentUser: PropTypes.string
};

const mapStateToProps = state => ({
    currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(ProtectedRoute);
