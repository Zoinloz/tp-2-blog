import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './nav/NavBar.js'
import Article from './article/article.js'
import AddArticle from './addArticle/addArticle.js'
import ArticleDetail from './showArticle/detailArticle'

function App() {
  return (
    <div>


        <Router>
        <NavBar/>
          <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/article" component={Article} />
          <Route exact path="/article/add" component={AddArticle} />
          <Route exact path="/article/add/:id" component={AddArticle} />
          <Route exact path="/article/:id" component={ArticleDetail} />
          </Switch>
        </Router>

    </div>
  );
}

export default App;
