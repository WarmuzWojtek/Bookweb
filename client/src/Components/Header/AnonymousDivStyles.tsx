import styled from 'styled-components';

import { InputComponent } from '../Input/InputStyles';
import { ButtonComponent } from '../Button/ButtonStyles';

export const LogDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  height: auto;
  align-items: center;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
   width:100%;
   border-top:2px solid grey;
   box-shadow:0 0 3px 0 grey;
   padding-top:2vh;
  }
`;

export const LogInput = styled(InputComponent)`
  width: 30%;
  height: 20%;
  display: inline-block;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    width:80%;
    margin:1vh 0;
  }
`;
export const LogButton = styled(ButtonComponent)`
  z-index: 1;
  padding-top: 7px;
  padding-bottom: 7px;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    width: 60%;
    height: 100%;
    margin:2vh 0;
  }
`;

export const ErrorMessageEmail = styled.span`
  color: red;
  font-size: 11px;
  margin-top: 5px;
  position: absolute;
  top: 9%;
  right: 26%;
`;

export const ErrorMessagePassword = styled.span`
  color: red;
  font-size: 11px;
  margin-top: 5px;
  position: absolute;
  top: 9%;
  right: 6%;
`;