import styled from 'styled-components';

import { InputComponent } from '../Input/InputStyles';

export const HeaderComponent = styled.div`
  width: auto;
  height: auto;
  display: flex;
  overflow:hidden;
  background: ${(props) => props.theme.backgrounds.headerAndFooter};
  justify-content: space-between;
  padding:0;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    flex-wrap:wrap;
    align-items: center;
    position:sticky;
    top:0;
    left:0;
    z-index:5;
    border-bottom:2px solid grey;
    box-shadow: 0 0 10px 0 grey;
  }
`;
export const TitleDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    width:60%;
    justify-content: flex-start;
    align-items: center;
    margin:2vh 0;
  }
`;

export const LogedDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align:center;
`;

export const LogInput = styled(InputComponent)`
  width: 30%;
  height: 20%;
  margin-top: 5%;
`;

export const BookWebTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.headerTitleFont};
  font-weight: normal;
  font-size: 6vh;
  color: ${(props) => props.theme.fonts.headerTitleColor};
  text-shadow: 1px 1px 1px black, 1px 1px 1px black, 0 0 1px black, 0 0 1px black;
  margin:0 0 0 3vw;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    font-size: 4vh;
  }
`;

export const HeaderImg = styled.img`
  margin:0 0 0 5vw;
  height:80%;
    @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
      width:15vw;
  }
`;
