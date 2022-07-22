import { Route, Redirect } from 'react-router-dom';
import { useProfile } from '../context/profile.context';

function PublicRoute({ children, ...routerProps }) {
  const profile = useProfile();

  if (profile) {
    return <Redirect to="/home" />;
  }

  return <Route {...routerProps}>{children}</Route>;
}

export default PublicRoute;
