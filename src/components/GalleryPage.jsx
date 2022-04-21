import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchItemsAction } from '../redux/actions';
import { arrayDivide } from '../utils/arrayDivide';
import ListItem from './ListItem';
import Loader from './Loader';

const GalleryPage = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(state => state.root);
  let category = 1

  useEffect(() => {
    dispatch(asyncFetchItemsAction())
  }, [dispatch])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      {arrayDivide(items).map((i) =>
        <div
          key={i.id}
          style={{
            border: '1px solid black',
            marginBottom: '10px'
          }}>
          <h1>Категория # {category++}</h1>
          {i.map(item =>
            <ListItem
              item={item}
              key={item.id} />)}
        </div>)}
    </div>
  )
}

export default GalleryPage  