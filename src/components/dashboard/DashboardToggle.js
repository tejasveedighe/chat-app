import { Icon } from '@rsuite/icons';
import React, { useCallback } from 'react';
import { Button, Drawer, Message, toaster } from 'rsuite';
import Dashboard from '.';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks';
import { auth } from '../../misc/firebase';

function DashboardToggle() {
  const { isOpen, close, open } = useModalState();
  const isMobile = useMediaQuery('(max-width: 992px');

  const onSignOut = useCallback(() => {
    auth.signOut();
    toaster.push(
      <Message showIcon type="info">
        Sign Out success
      </Message>,
      4000
    );
    close();
  }, [close]);

  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" /> Dashboard
      </Button>
      <Drawer full={isMobile} open={isOpen} onClose={close} placement="left">
        <Dashboard onSignOut={onSignOut} />
      </Drawer>
    </>
  );
}

export default DashboardToggle;
