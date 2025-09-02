import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_PRODUCT } from '../store/product.actions';

export default function useProducts() {
  const dispatch = useDispatch();
  const slice = useSelector((s) => s.products || s.product || {});
  const list =
  Array.isArray(slice.list) ? slice.list :
  Array.isArray(slice.data) ? slice.data : [];

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCT });
  }, [dispatch]);

  return { list, loading: !!slice.loading, error: slice.error || null };
}
