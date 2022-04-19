import React, { useEffect } from 'react'
import { Card, Button, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { asyncFetchItemAction } from '../redux/actions';
import Loader from './Loader';

const ItemPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { item, isLoading } = useSelector(state => state.root);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncFetchItemAction(params.id))
  }, [dispatch, params.id])

  if (isLoading) {
    return <Loader />
  }
  return (
    <div>
      <Container fluid='md'>
        <Row className="justify-content-md-center">
          <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={item.url} />
            <Card.Body>
              <Card.Title>{item.id}</Card.Title>
              <Card.Text>
                {item.title}
              </Card.Text>
              <Button
                onClick={() => { navigate('/') }}
                variant="primary">Назад</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>

    </div>
  )
}

export default ItemPage