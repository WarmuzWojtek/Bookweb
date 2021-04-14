import { FC } from 'react';
import {
  BoxComponent,
  ImgContainer,
  ContentContainer,
  BookParagraph,
  BookTitleParagraph,
  BoxBookReview,
  BoxReadMore,
  BookImage,
} from './BoxStyles';

export type BoxComponentProps = {
  book_id?: number;
  title: string;
  cover: string;
  description?: string;
  author_id?: number;
  name?: string;
  surname?: string;
  book_groups?: string;
  score: number;
  user_id?: number;
  email?: string;
  author?: string;

};

export const Box: FC<BoxComponentProps> = ({ title, name, surname, score, description, cover }) => {
  const readMoreHandler = () => { };

  return (
    <BoxComponent data-testid="BoxId">
      <ImgContainer>
        <BookImage src={cover}></BookImage>
      </ImgContainer>
      <ContentContainer>
        <BookTitleParagraph>{title}</BookTitleParagraph>
        <BookParagraph>{name} {surname}</BookParagraph>
        <BookParagraph>Średnia ocena: {score}</BookParagraph>
        <BoxBookReview>
          {description?.slice(0, 200)}
          <BoxReadMore onClick={readMoreHandler} data-testid="BoxReadMoreId">
            czytaj więcej
          </BoxReadMore>
        </BoxBookReview>
      </ContentContainer>
    </BoxComponent>
  );
};
