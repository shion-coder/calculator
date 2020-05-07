import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  background-color: #858694;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1 0 auto;

  > div {
    width: 100%;
    margin-bottom: 1px;
    flex: 1 0 auto;
    display: flex;
  }
`;
