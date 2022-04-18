import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Figure } from 'react-bootstrap';

const User = () => {
  const { user } = useSelector(state => state.root);
  return (
    <Container fluid>
      <Figure>
        <Figure.Image
          width={50}
          height={50}
          alt='Нет изображения'
          src={user.avatar}
        />
        <Figure.Caption>
          <h6>{user.firstName}</h6>
          <h6>{user.email}</h6>
        </Figure.Caption>
      </Figure>

    </Container>
  )
}

export default User