import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './containers/Home';
import Chat from './containers/Chat';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/chat' component={Chat} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
