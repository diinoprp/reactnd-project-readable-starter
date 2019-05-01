import React from 'react';
import { Container, Button, darkColors, lightColors } from 'react-floating-action-button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddPostButton = () => {
  return (
    <Container styles={{right: 15, bottom: 15}}>
      <Button
        tooltip="Add post"
        styles={{ backgroundColor: darkColors.orange, color: lightColors.white }}>
        <FontAwesomeIcon icon="plus" />
      </Button>
    </Container>
  )
}

export default AddPostButton