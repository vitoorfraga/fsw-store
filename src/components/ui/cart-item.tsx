'use client'

import { CartProduct } from "@/providers/cart"
import Image from "next/image"
import { Button } from "./button"
import { useState } from "react"
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react"

interface CartItemProps {
  product: CartProduct
}

export default function CartItem({ product }: CartItemProps) {

  const [productQuantity, setProductQuantity] = useState(1)

  function handleDecreaseProductQuantityClick() {
    setProductQuantity(prev => prev === 1 ? prev : prev - 1)
  }

  function handleIncreaseProductQuantityClick() {
    setProductQuantity(prev => prev + 1)
  }


  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-accent flex items-center justify-center rounded-lg h-[4.81rem] w-[4.81rem]">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-auto max-w-[80%] max-h-[80%]"
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div className="flex flex-col">
          <p className="text-sm font-bold">{product.name}</p>

          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm">R$ {product.totalPrice.toFixed(2)}</p>
            {product.discountPercentage > 0 && (
              <p className="text-xs opacity-75 line-through">R$ {Number(product.basePrice).toFixed(2)}</p>
            )}
          </div>

          <div className="flex items-center mt-[5px]">
            <Button className="h-8 w-8" size='icon' variant='outline' onClick={handleDecreaseProductQuantityClick}>
              <ArrowLeftIcon size={12} />
            </Button>

            <span className="text-xs">{product.quantity}</span>

            <Button className="h-8 w-8" size='icon' variant='outline' onClick={handleIncreaseProductQuantityClick}>
              <ArrowRightIcon size={12} />
            </Button>
          </div>
        </div>
      </div>

      <Button size='icon' variant='outline'>
        <TrashIcon size={16} />
      </Button>
    </div>
  )
}
