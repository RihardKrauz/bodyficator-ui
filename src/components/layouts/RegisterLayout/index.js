import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const RegisterLayout = ({ history }) => {
    return (
        <div>
            Hello register!<button onClick={() => history.push('/login')}>Go to login</button>
        </div>
    );
};

export default RegisterLayout;
