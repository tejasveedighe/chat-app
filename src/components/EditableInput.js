import { Icon } from '@rsuite/icons';
import CloseIcon from '@rsuite/icons/Close';
import EditIcon from '@rsuite/icons/Edit';
import CheckIcon from '@rsuite/icons/Check';

import React, { useCallback, useState } from 'react';
import { Input, InputGroup, Message, toaster } from 'rsuite';

function EditableInput({
  initialValue,
  onSave,
  label = null,
  placeHolder = 'Write Your Value',
  emptyMsg = 'Input is Empty',
  ...inputProps
}) {
  const [input, setInput] = useState(initialValue);
  const [isEditable, setIsEditable] = useState(false);

  const onInputChange = useCallback((value, e) => {
    setInput(value);
  });

  const onEditClick = useCallback(() => {
    setIsEditable(p => !p);
    setInput(initialValue);
  }, [initialValue]);

  const onSaveClick = async () => {
    const trimmed = input.trim();

    if (trimmed === '') {
      toaster.push(
        <Message showIcon type="error">
          Field Empty
        </Message>,
        4000
      );
    }

    if (trimmed !== initialValue) {
      await onSave(trimmed);
    }

    setIsEditable(false);
  };
  return (
    <div>
      {label}

      <InputGroup>
        <Input
          {...inputProps}
          disabled={!isEditable}
          placeholder={placeHolder}
          value={input}
          onChange={onInputChange}
        />

        <InputGroup.Button>
          <Icon as={!isEditable ? EditIcon : CloseIcon} onClick={onEditClick} />
        </InputGroup.Button>

        {isEditable && (
          <InputGroup.Button>
            <Icon
              as={isEditable ? CheckIcon : CloseIcon}
              onClick={onSaveClick}
            />
          </InputGroup.Button>
        )}
      </InputGroup>
    </div>
  );
}

export default EditableInput;
