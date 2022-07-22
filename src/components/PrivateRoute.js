import { Route, Redirect } from 'react-router-dom';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/profile.context';

function PrivateRoute({ children, ...routerProps }) {
  const { profile, isLoading } = useProfile();
  if (!profile && isLoading) {
    return (
      <Container>
        <Loader center vertical size="md" content="Loading" speed="slow" />
      </Container>
    );
  }

  if (!profile && !isLoading) {
    return <Redirect to="/signin" />;
  }

  return <Route {...routerProps}>{children}</Route>;
}

export default PrivateRoute;
