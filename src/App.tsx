import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Home from './containers/Home';
import ChatPage from './containers/ChatPage';
import { UserProvider } from './contexts/User';
import { useUser } from './hooks/useUser';

const App = () => {
  const userHook = useUser();
  const { user } = userHook;

  return (
    <BrowserRouter>
      <UserProvider value={userHook}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/chat'>
            {user.email ? <ChatPage /> : <Redirect to='/' />}
          </Route>
          {/* <Redirect to='/' /> */}
        </Switch>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
