import { useState } from 'react'
import { Button, Figure } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ListItem = ({ item }) => {
  const history = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <Figure className='p-2' style={{ position: 'relative' }}>
      <div
        onMouseOver={() => { setShow(true) }}
        onMouseLeave={() => { setShow(false) }}>
        <Figure.Image
          src={item.url}
          width={300}
          height={200}
        />
        <Button
          onClick={() => {
            history(`/item/${item.id}`)
          }}
          style={{
            position: 'absolute',
            top: '70%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: show === true ? '' : 'none'
          }}>Подробнее</Button>
      </div>
    </Figure>
  )
}

export default ListItem