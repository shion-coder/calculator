import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { setDimensions } from 'redux/dimensions/dimensions.actions';

import { debounce } from 'lodash-es';

import Display from 'components/display/display.component';
import ButtonPanel from 'components/button-panel/button-panel.component';

import { Container } from './app.styles';

/* -------------------------------------------------------------------------- */

const App = ({ setDimensions }) => {
  useEffect(() => {
    const handleResize = debounce(() => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 1000);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setDimensions]);

  return (
    <Container>
      <Display />
      <ButtonPanel />
    </Container>
  );
};

/* -------------------------------------------------------------------------- */

App.propTypes = {
  setDimensions: PropTypes.func,
};

export default connect(null, { setDimensions })(App);
