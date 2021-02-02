import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './containers/Home';
import ChatPage from './containers/ChatPage';
import { UserProvider } from './contexts/User';
import { useUser } from './hooks/useUser';

const App = () => {
  const user = useUser();

  return (
    <BrowserRouter>
      <UserProvider value={user}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/chat' component={ChatPage} />
        </Switch>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
