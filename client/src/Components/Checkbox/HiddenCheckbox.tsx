import styled from 'styled-components';

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;
