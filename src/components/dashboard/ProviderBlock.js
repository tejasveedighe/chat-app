import { Icon } from '@rsuite/icons';
import React, { useState } from 'react';
import { Button, Message, Tag, toaster } from 'rsuite';
import { auth } from '../../misc/firebase';
import firebase from 'firebase/app';

const ProviderBlock = () => {
  const [isConnected, setIsConnected] = useState({
    'google.com': auth.currentUser.providerData.some(
      data => data.providerId === 'google.com'
    ),
    'facebook.com': auth.currentUser.providerData.some(
      data => data.providerId === 'facebook.com'
    ),
  });

  const updateIsConnected = (providerID, value) => {
    setIsConnected(p => {
      return {
        ...p,
        [providerID]: value,
      };
    });
  };

  const unlink = async providerID => {
    try {
      if (auth.currentUser.providerData.length === 1) {
        throw new Error(`You Can not disconnect from ${providerID}`);
      }
      await auth.currentUser.unlink(providerID);
      updateIsConnected(providerID, false);
      toaster.push(
        <Message type="info">{`Unlinked from ${providerID}`}</Message>,
        4000
      );
    } catch (error) {}
  };

  const link = async provider => {
    try {
      await auth.currentUser.linkWithPopup(provider);
      toaster.push(
        <Message type="success">{`Linked To ${provider.providerId}`}</Message>,
        4000
      );
      updateIsConnected(provider.providerId, true);
    } catch (error) {
      toaster.push(<Message type="error">{error.message}</Message>, 4000);
    }
  };

  const unlinkFacebook = () => {
    unlink('facebook.com');
  };
  const unlinkGoogle = () => {
    unlink('google.com');
  };
  const linkGoogle = () => {
    link(new firebase.auth.GoogleAuthProvider());
  };
  const linkFacebook = () => {
    link(new firebase.auth.FacebookAuthProvider());
  };

  return (
    <div>
      {isConnected['google.com'] && (
        <Tag color="green" closable onClose={unlinkGoogle}>
          <Icon icon="google" /> Connected
        </Tag>
      )}
      {isConnected['facebook.com'] && (
        <Tag color="blue" closable onClose={unlinkFacebook}>
          <Icon icon="facebook" /> Connected
        </Tag>
      )}
      <div className="mt-2">
        {!isConnected['google.com'] && (
          <Button color="green" appearance="primary" block onClick={linkGoogle}>
            <Icon icon="google" /> Link To Google
          </Button>
        )}
        {!isConnected['facebook.com'] && (
          <Button
            color="blue"
            appearance="primary"
            block
            onClick={linkFacebook}
          >
            <Icon icon="facebook" /> Link To Facebook
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProviderBlock;
