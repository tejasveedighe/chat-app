import React, { useState } from 'react';
import Modal from 'rsuite/Modal';
import Button from 'rsuite/Button';
import { toaster, Message } from 'rsuite';
import { useModalState } from '../../misc/custom-hooks';

const fileInputTypes = '.png, .jpeg, .jpg';

const acceptedFileTypes = [
  'image/png',
  'image/jpeg',
  'image/pjpeg',
  'image/jpg',
];

const isValidFile = file => acceptedFileTypes.includes(file.type);

export function AvatarInputBtn() {
  const { isOpen, open, close } = useModalState();
  const [image, setImage] = useState(null);

  const onFileInputChange = event => {
    const currFiles = event.target.files;
    if (currFiles.length === 1) {
      const file = currFiles[0];
      if (isValidFile(file)) {
        setImage(file);
        open();
      } else {
        toaster.push(
          <Message closable showIcon type="info">
            Invalid File Type
          </Message>,
          4000
        );
      }
    }
  };

  return (
    <div className="mt-3 text-center">
      <div>
        <label
          htmlFor="avatar-upload"
          className="d-block cursor-pointer padded"
        >
          Select new avatar
          <input
            id="avatar-upload"
            type="file"
            className="d-none"
            accept={fileInputTypes}
            onChange={onFileInputChange}
          />
        </label>

        <Modal open={isOpen} onClose={close}>
          <Modal.Header>
            <Modal.Title>Adjust and Upload new avatar</Modal.Title>
          </Modal.Header>
          <Modal.Body>xxx</Modal.Body>
          <Modal.Footer>
            <Button block appearance="ghost">
              Upload New Avatar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
