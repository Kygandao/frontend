import './App.css';
import Header from './components/Header'
import BlogsListPage from './pages/BlogsListPage'
import BlogPage from './pages/BlogPage'

import {
  HashRouter as Router,
  Route, Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="container dark">
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact component={BlogsListPage} />
          <Route path="/blog/:id" component={BlogPage} /> 
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;


