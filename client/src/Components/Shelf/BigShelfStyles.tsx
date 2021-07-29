import styled from 'styled-components';


export const ShelfComponent = styled.div`
  display:flex;
  align-items:flex-start;
  flex-wrap:wrap;
  height:auto;
  padding: 10px;
  margin:0 auto;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
  
  }
`;

export const ShelfTitle = styled.h3`
  display:flex;
  justify-content:flex-start;
  align-content:flex-end;
  width:30%;
  margin: 0 0 0 7vw;
  padding: 30px 0 0 20px;
  font-size: 24px;
  text-align: left;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    font-size:18px;
    padding:0;
    margin:0;
    width:60%;
  }
`;

export const ShelfImage = styled.img`
  background: ${(props) => props.theme.backgrounds.lightTransparent};
  margin: 0 0 30px 30px;
  padding: 0;
  width: 30%;
  border-radius:10px;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    margin:0;
  }
`;