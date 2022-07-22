import { Route, Redirect } from 'react-router-dom';
import { useProfile } from '../context/profile.context';

function PrivateRoute({ children, ...routerProps }) {
  const profile = useProfile();

  if (!profile) {
    return <Redirect to="/signin" />;
  }

  return <Route {...routerProps}>{children}</Route>;
}

export default PrivateRoute;
