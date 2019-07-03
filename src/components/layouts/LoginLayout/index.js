import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { connect } from 'react-redux';

import { changeCurrentUser } from '../../../store/actions';

/* eslint react/prop-types: 0 */
const LoginLayout = ({ history, dispatch, currentUser }) => {
    return (
        <div>
            Hello login! <button onClick={() => dispatch(changeCurrentUser('testUser'))}>Change user</button>{' '}
            <button onClick={() => history.push('/register')}>Go to Register</button>
        </div>
    );
};

export default connect()(LoginLayout);
