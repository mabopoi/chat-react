import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './containers/Home';
import ChatPage from './containers/ChatPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/chat' component={ChatPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
