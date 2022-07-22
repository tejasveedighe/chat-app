import { Route, Redirect } from 'react-router-dom';
import { useProfile } from '../context/profile.context';

function PublicRoute({ children, ...routerProps }) {
  const { profile, isLoading } = useProfile();
  if (!profile && isLoading) {
    return (
      <Container>
        <Loader center vertical size="md" content="Loading" speed="slow" />
      </Container>
    );
  }

  if (profile && !isLoading) {
    return <Redirect to="/" />;
  }
  return <Route {...routerProps}>{children}</Route>;
}

export default PublicRoute;
