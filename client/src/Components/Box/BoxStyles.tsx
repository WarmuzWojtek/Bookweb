import styled from 'styled-components';

export const BoxComponent = styled.div`
  box-sizing: border-box;
  margin: 20px auto;
  padding: 1% 2%;
  font-family: ${(props) => props.theme.fonts.default};
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  background-color: ${(props) => props.theme.backgrounds.lightTransparent};
  border-radius: 10px;
  width: 90%;
  min-height: 20vh;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    flex-direction:column;
    width:90%;
    padding: 2% 4%;
  }
 
`;

export const ImgContainer = styled.div`
  box-sizing: border-box;
  flex-basis: 20%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    width:80%;
    margin:2vh auto;
  }
`;

export const BookImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  box-sizing: border-box;
  padding: 1%;
  flex-basis: 75%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    flex-basis: 65%;
  }
`;
export const BookParagraph = styled.p`
  margin: 5px 0 0 0;
  text-align: left;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    font-size: 12px;
  }
`;
export const BookTitleParagraph = styled.p`
  margin: 5px 0 0 0;
  text-align: left;
  font-weight: bold;
  font-size: 18px;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    font-size: 16px;
  }
`;
export const BoxBookReview = styled.p`
  margin: 5px 0 0 0;
  text-align: justify;
  font-size: 13px;
`;
export const BoxReadMore = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.colors.readMore};
  text-align: left;
  font-size: 14px;
  max-width: 90%;
  cursor: pointer;
  margin-left:20px;
`;