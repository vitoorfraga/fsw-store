import { ProductWithTotalPrice } from "@/helpers/product"
import Image from "next/image"
import { Badge } from "./badge"
import { ArrowDownIcon } from "lucide-react"
import Link from "next/link"
import { DiscountBadge } from "./discount-badge"

interface ProductItemProps {
  product: ProductWithTotalPrice
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex flex-col gap-4 min-w-[170px]">
        <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-auto max-w-[80%] max-h-[70%]"
            style={{
              objectFit: 'contain'
            }}
            alt={product.name}
          />

          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute left-3 top-3">
              {product.discountPercentage}
            </DiscountBadge>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis w-full">{product.name}</p>

          <div className="flex items-center gap-2">
            {product.discountPercentage > 0 && (
              <>
                <p className="font-semibold text-base">R$ {product.totalPrice.toFixed(2)}</p>
                <p className="opacity-75 line-through text-xs">R$ {Number(product.basePrice).toFixed(2)}</p>
              </>
            )}

            {product.discountPercentage === 0 && (
              <p className="font-semibold text-sm">R$ {product.totalPrice.toFixed(2)}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
