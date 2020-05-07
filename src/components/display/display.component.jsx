import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCalculateTotal, selectCalculateNext } from 'redux/calculate/calculate.selectors';

import { Container, Value } from './display.styles';

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  total: selectCalculateTotal,
  next: selectCalculateNext,
});

const Display = ({ total, next }) => (
  <Container>
    <Value>{next || total || 0}</Value>
  </Container>
);

/* -------------------------------------------------------------------------- */

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
};

export default connect(mapStateToProps)(Display);
