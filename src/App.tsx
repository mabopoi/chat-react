import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './containers/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
