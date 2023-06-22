import * as React from 'react';
import { useAppDispatch, useAppSelector } from './storeHooks';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { setProductsSuccess } from '../slices/productsSlice';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
    quantity: number;
    isWished: boolean;
  }

  export interface UseProductsResult {
    isLoading: boolean;
    products: Product[] | null;
    error: any;
  }

  
  const useProducts = ():UseProductsResult => {
    const dispatch = useAppDispatch();
  
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error('Failed to fetch data');
      }
    };
  
    const { isLoading, error, data: products } = useQuery<Product[]>(['products'], fetchData, {
      onSuccess: (data) => {
        const modifiedData: Product[] = data.map((product) => ({
          ...product,
          quantity: 0,
          isWished: false,
        }));
        dispatch(setProductsSuccess(modifiedData));
      },
    });
  
    useEffect(() => {
        if (!isLoading && products && products.length > 0) {
          dispatch(setProductsSuccess(products));
        }
      }, [dispatch, isLoading, products]);
      
  return {
    isLoading,
    products: products || null,
    error,
  };

}

export default useProducts;