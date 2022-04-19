import React from 'react'
import { Figure } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ListItem = ({item}) => {
  const history = useNavigate();

  return (
    <Figure className='p-2'>
      <Figure.Image 
      src={item.url}
      width={300}
      height={200}
      onClick={() => {
        history(`/item/${item.id}`)
      }}
      />
    </Figure>
  )
}

export default ListItem