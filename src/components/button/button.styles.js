import styled, { css } from 'styled-components';

/* -------------------------------------------------------------------------- */

const wideStyles = css`
  width: 50%;
`;

const orangeStyles = css`
  button {
    background-color: #f5923e;
    color: white;
  }
`;

const getButtonStyles = ({ wide, orange }) => {
  return wide ? wideStyles : orange ? orangeStyles : null;
};

export const Container = styled.div`
  display: inline-flex;
  width: 25%;
  flex: 1 0 auto;

  button {
    background-color: #e0e0e0;
    border: 1px solid transparent;
    font-size: 1.5rem;
    margin: 0 1px 0 0;
    flex: 1 0 auto;
    padding: 0;

    &:focus {
      border: 1px solid black;
      outline: none;
    }
  }

  &:last-child button {
    margin-right: 0;
  }

  ${getButtonStyles}
`;
