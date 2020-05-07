import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { calculate } from 'redux/calculate/calculate.actions';

import { Container } from './button.styles';

/* -------------------------------------------------------------------------- */

const Button = ({ name, calculate, ...otherProps }) => (
  <Container {...otherProps}>
    <button onClick={() => calculate(name)}>{name}</button>
  </Container>
);

/* -------------------------------------------------------------------------- */

Button.propTypes = {
  name: PropTypes.string.isRequired,
  calculate: PropTypes.func.isRequired,
};

export default connect(null, { calculate })(Button);
