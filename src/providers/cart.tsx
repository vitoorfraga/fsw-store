'use client'

import { Product } from "@prisma/client";
import { ReactNode, createContext, useState } from "react";

interface CardProduct extends Product {
  quantity: number
}

interface ICartContext {
  products: CardProduct[]
  cartTotalPrice: number
  cartBasePrice: number
  cartTotalDiscount: number
  addProductToCart: (product: CardProduct) => void
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  cartTotalPrice: 0,
  addProductToCart: () => { }
})

export const CartProvider = ({ children }: { children: ReactNode }) => {

  const [products, setProducts] = useState<CardProduct[]>([])

  const addProductToCart = (product: CardProduct) => {
    setProducts((prev) => [...prev, product])
  }

  return (
    <CartContext.Provider value={{
      products,
      addProductToCart,
      cartBasePrice: 0,
      cartTotalDiscount: 0,
      cartTotalPrice: 0
    }}>
      {children}
    </CartContext.Provider>
  )
}