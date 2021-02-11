import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './nav/NavBar.js'
import Article from './article/article.js'
import AddArticle from './addArticle/addArticle.js'

function App() {
  return (
    <div>


        <Router>
        <NavBar/>
          <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/article" component={Article} />
          <Route exact path="/article/add" component={AddArticle} />
          </Switch>
        </Router>

    </div>
  );
}

export default App;
