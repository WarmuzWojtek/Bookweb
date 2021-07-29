import styled from 'styled-components';
import { BoxBooksComponent } from '../BoxBooks/BoxBooksStyles';

export const ShelfComponent = styled(BoxBooksComponent)`
display:flex;
flex-wrap:wrap;
 height:auto;
 padding: 30px;
 margin:5vh auto;
 @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
  width:90%;
  padding:3%;
  justify-content:flex-start;
}
`;

export const ShelfTitle = styled.h3`
  display: flex;
  justify-content: flex-start;
  align-content: flex-end;
  width: 45%;
  margin: 0;
  padding: 30px 0 0 20px;
  font-size: 22px;
  text-align: left;
  @media only screen and (max-width: 1200px) {
   font-size:20px;
  }
  @media only screen and (max-width: 1000px) {
    font-size:18px;
   }
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    font-size:18px;
    width:55%;
    margin:0;
    padding:5% 0 0 0;
  }
  @media only screen and (max-width: ${(props) => props.theme.size.xs}) {
    font-size:16px;
    
  }
`;

export const ShelfImage = styled.img`
  background: ${(props) => props.theme.backgrounds.lightTransparent};
  margin: 0 0 30px 30px;
  padding: 0;
  width: 40%;
  border-radius: 10px;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    width:40%;
    margin:0;
  }
`;