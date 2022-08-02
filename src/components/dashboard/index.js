import React from 'react';
import { Button, Drawer } from 'rsuite';
import { useProfile } from '../../context/profile.context';

function Dashboard({ onSignOut }) {
  const { profile } = useProfile();

  return (
    <>
      <Drawer.Header>
        <Drawer.Title>Dashboard</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey {profile.name}</h3>
        <Drawer.Actions>
          <Button block color="red" onClick={onSignOut}>
            Sign Out
          </Button>
        </Drawer.Actions>
      </Drawer.Body>
    </>
  );
}

export default Dashboard;
