import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { MovieDetail } from './cmps/MovieDetail/MovieDetail';
import './style/App.scss';
import { ActorDetail } from './views/ActorDetail/ActorDetail';
// import { ContactDetailsPage } from './views/ContactDetailsPage/ContactDetailsPage';
// import { ContactEditPage } from './views/ContactEditPage/ContactEditPage';
// import { ContactPage } from './views/ContactPage/ContactPage';
import { Explore } from './views/Explore/Explore';
import { HomePage } from './views/HomePage/HomePage';
import { profilePage } from './views/profilePage/profilePage';
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
          <Route component={MovieDetail} path="/movie/:movieId" />
          <Route component={ActorDetail} path="/actor/:actorId" />
          <Route component={Explore} path="/explore" />
          <Route component={profilePage} path="/profile" />
          <Route component={HomePage} path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
