import React from 'react'
import { Figure } from 'react-bootstrap'

const ListItem = ({item}) => {
  return (
    <Figure className='p-2'>
      <Figure.Image 
      src={item.url}
      width={300}
      height={200}
      />
    </Figure>
  )
}

export default ListItem