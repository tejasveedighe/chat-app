import React from 'react';
import { Button, Divider, Drawer, Message, toaster } from 'rsuite';
import { useProfile } from '../../context/profile.context';
import { database } from '../../misc/firebase';
import EditableInput from '../EditableInput';
import { AvatarInputBtn } from './AvatarInputBtn';
import ProviderBlock from './ProviderBlock';

function Dashboard({ onSignOut }) {
  const { profile } = useProfile();

  const onSave = async newData => {
    const userNicknameRef = database
      .ref(`/profiles/${profile.uid}`)
      .child('name');

    try {
      await userNicknameRef.set(newData);
      toaster.push(
        <Message showIcon type="success">
          Nickname has been updated!
        </Message>,
        4000
      );
    } catch (error) {}
  };

  return (
    <>
      <Drawer.Header>
        <Drawer.Title>Dashboard</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey {profile.name}</h3>
        <ProviderBlock />
        <Divider />
        <EditableInput
          name="NickName"
          initialValue={profile.name}
          onSave={onSave}
          label={<h6 className="mb-2">Teja</h6>}
        />
        <AvatarInputBtn />
        <Drawer.Actions>
          <Button block color="red" onClick={onSignOut} appearance="primary">
            Sign Out
          </Button>
        </Drawer.Actions>
      </Drawer.Body>
    </>
  );
}

export default Dashboard;
