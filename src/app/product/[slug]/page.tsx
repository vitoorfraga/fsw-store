import { prismaClient } from "@/lib/prisma"
import { ProductsImage } from "./components/products-image"

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
    <div>
      <ProductsImage name={product.name} imagesUrls={product.imageUrls} />
    </div>
  )
}
