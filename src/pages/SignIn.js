import React from 'react';
import firebase from 'firebase/app';
import { Icon } from '@rsuite/icons';
import {
  Col,
  Container,
  Grid,
  Panel,
  Row,
  Button,
  Message,
  useToaster,
} from 'rsuite';
import { auth, database } from '../misc/firebase';

function SignIn() {
  const toaster = useToaster();
  const sigInWithProvider = async provider => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}/`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }
      toaster.push(
        <Message type="success" closable>
          Sign In success
        </Message>
      );
    } catch (err) {
      toaster.push(
        <Message type="error" closable>
          Failed To Sign In
        </Message>
      );
    }
  };
  // const onFacebookSignIn = () => {
  //   sigInWithProvider(new firebase.auth.FacebookAuthProvider());
  // };
  const onGoogleSignIn = () => {
    sigInWithProvider(new firebase.auth.GoogleAuthProvider());
  };
  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to Chat</h2>
                <p>Progressive Chat App</p>
              </div>
              <div className="mt-3">
                <Button
                  block
                  color="green"
                  appearance="primary"
                  onClick={onGoogleSignIn}
                >
                  <Icon icon="google" /> Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}

export default SignIn;
