import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchItemsAction, fetchItemsAction } from '../redux/actions';

const GalleryPage = () => {
  const dispatch = useDispatch();
  const {items, isLoading} = useSelector(state => state.root);

  useEffect(() => {  
    // dispatch(fetchItemsAction());
    dispatch(asyncFetchItemsAction())
  },[])

if(isLoading) {
  return <h1>Загрузка...</h1>
}
  return (
    <div>
      {items.map(item => <div key={item.id}>
        {item.id}
      </div>)}
    </div>
  )
}

export default GalleryPage