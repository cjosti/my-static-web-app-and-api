import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductList from './ProductList';
import useProducts from './useProducts';
import { DELETE_PRODUCT } from '../store/product.actions';

export default function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list, loading, error } = useProducts();

  const handleSelectProduct = useCallback((product) => {
    if (product?.id) navigate(`/products/${product.id}`);
  }, [navigate]);

  const handleDeleteProduct = useCallback((product) => {
    if (product?.id) dispatch({ type: DELETE_PRODUCT, payload: product.id });
  }, [dispatch]);

  if (loading) return <div>Loading data ...</div>;
  if (error) return <div>Erro: {String(error)}</div>;

  return (
    <>
      <div style={{ padding: 8, fontSize: 12, color: '#666' }}>
        Itens carregados: {Array.isArray(list) ? list.length : 0}
      </div>
      <ProductList
        products={list}
        handleSelectProduct={handleSelectProduct}
        handleDeleteProduct={handleDeleteProduct}
      />
      {/* Debug opcional:
      <pre style={{fontSize:12, background:'#f7f7f7', padding:8}}>{JSON.stringify(list, null, 2)}</pre>
      */}
    </>
  );
}
