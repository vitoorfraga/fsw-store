import { prismaClient } from "@/lib/prisma"
import { ProductsImage } from "./components/products-image"
import { ProductInfo } from "./components/product-info"
import { computeProductTotalPrice } from "@/helpers/product"

interface ProductDetailsPageProps {
  params: {
    slug: string
  }
}

export default async function ProductDetailsPage({ params: { slug } }: ProductDetailsPageProps) {

  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug
    }
  })

  if (!product) return null

  return (
    <div className="flex flex-col gap-8">
      <ProductsImage name={product.name} imagesUrls={product.imageUrls} />
      <ProductInfo product={computeProductTotalPrice(product)} />
    </div>
  )
}
