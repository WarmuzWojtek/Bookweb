import styled from 'styled-components';

export const BoxBooksComponent = styled.div`
  position: relative;
  font-family: ${(props) => props.theme.fonts.default};
  color: ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.backgrounds.darkTransparent};
  box-shadow: ${(props) => props.theme.shadows.inset};
  width: 45vw;
  height: 30vw;
  border-radius: 25px;
  padding: 2vh 3vw;
  box-sizing:border-box;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    padding: 3vw;
    height: auto;
    width: 80%;
  }
`;

export const BoxBooksTitle = styled.h2`
  margin: 2vh 0;
  padding: 0;
  font-size: 30px;
  text-align: left;
  @media only screen and (max-width: ${(props) => props.theme.size.lg}) {
    font-size: 24px;
  }
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    font-size: 18px;
    margin:0;
  }
  // @media only screen and (max-width: ${(props) => props.theme.size.xs}) {
  //   font-size: 14px;
  // }
`;

export const BoxBooksParagraph = styled.p`
  margin: 5px 0 0 5px;
  padding: 0;
  font-size: 18px;
  text-align: left;
  :before{
    content:"-";
  }
  @media only screen and (max-width: ${(props) => props.theme.size.lg}) {
    font-size: 14px;
  }
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    width:70%;
  }
  // @media only screen and (max-width: ${(props) => props.theme.size.xs}) {
  //   font-size: 10px;
  // }
`;
export const BoxBooksImage = styled.img`
  position: absolute;
  top: 55%;
  left: 8%;
  z-index: 1;
  margin: 30px 0 0 0;
  padding: 0;
  width: 30vw;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    left: 70%;
    top: 20%;
    width: 35%;
  }
`;