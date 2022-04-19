import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchItemsAction } from '../redux/actions';
import ListItem from './ListItem';
import Loader from './Loader';

const GalleryPage = () => {
  const dispatch = useDispatch();
  const { items, isLoading} = useSelector(state => state.root);

  useEffect(() => {
    dispatch(asyncFetchItemsAction())
  }, [dispatch])

  if (isLoading) {
    return <Loader />
  }
  return (
    <div>
      {items.map(item => <ListItem item={item} key={item.id}/>)}
    </div>
  )
}

export default GalleryPage