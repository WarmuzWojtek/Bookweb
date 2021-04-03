import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { AppRoute } from './AppRoute.enum';
import { HomePage } from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';
import { RankingPage } from '../Pages/RankingPage';
import { AuthorPage } from '../Pages/AuthorPage';
import { BookPage } from '../Pages/BookPage';
import { BooksCatalogPage } from '../Pages/BooksCatalogPage';
import { AddNewBookPage } from '../Pages/AddNewBookPage';
import { ProvidersCatalogPage } from '../Pages/ProvidersCatalogPage';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Home} exact component={HomePage} />
        <Route path={AppRoute.Login} component={LoginPage} />
        <Route path={AppRoute.Ranking} component={RankingPage} />
        <Route path={AppRoute.Author} component={AuthorPage} />
        <Route path={AppRoute.Book} component={BookPage} />
        <Route path={AppRoute.BooksCatalog} component={BooksCatalogPage} />
        <Route path={AppRoute.AddNewBook} component={AddNewBookPage} />
        <Route path={AppRoute.ProvidersCatalog} component={ProvidersCatalogPage} />
      </Switch>
    </BrowserRouter>
  );
};
