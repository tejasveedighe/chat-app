import React from 'react';
import { Button, Divider, Drawer } from 'rsuite';
import { useProfile } from '../../context/profile.context';
import EditableInput from '../EditableInput';

function Dashboard({ onSignOut }) {
  const { profile } = useProfile();
  const onSave = async newData => {
    console.log(newData);
  };

  return (
    <>
      <Drawer.Header>
        <Drawer.Title>Dashboard</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey {profile.name}</h3>
        <Divider />
        <EditableInput
          name="NickName"
          initialValue={profile.name}
          onSave={onSave}
          label={<h6 className="mb-2">Teja</h6>}
        />
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
