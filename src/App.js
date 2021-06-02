import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { MovieDetail } from './cmps/MovieDetail/MovieDetail';
import './style/App.scss';
// import { ContactDetailsPage } from './views/ContactDetailsPage/ContactDetailsPage';
// import { ContactEditPage } from './views/ContactEditPage/ContactEditPage';
// import { ContactPage } from './views/ContactPage/ContactPage';
import { Explore } from './views/Explore/Explore';
import { HomePage } from './views/HomePage/HomePage';
import { SearchResults } from './views/SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <Router>
      <AppHeader />
        <Switch>
          {/* <HomePage /> */}
          {/* <Route component={ContactEditPage} path="/edit/:contactId?" /> */}
          {/* <Route component={ContactDetailsPage} path="/detalis/:contactId" /> */}
          <Route component={SearchResults} path="/search/:search" />
          <Route component={MovieDetail} path="/details/:movieId" />
          <Route component={Explore} path="/explore" />
          {/* <Route component={ContactPage} path="/contact" /> */}
          <Route component={HomePage} path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
