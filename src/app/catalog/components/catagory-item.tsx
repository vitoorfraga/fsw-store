import { Category } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

interface CategoryItemProps {
  category: Category
}

export default function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Link href={`category/${category.slug}`}>
      <div className="flex flex-col">
        <div className="rounded-tl-lg w-full h-[9.37rem] flex items-center justify-center bg-category-item-gradient">
          <Image
            src={category.imageUrl}
            alt={category.name}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            width={0}
            height={0}
            style={{
              objectFit: 'contain'
            }}
            sizes="100vw"
          />
        </div>
        <div className="bg-accent py-2 rounded-br-lg rounded-bl-lg">
          <p className="text-sm font-semibold text-center">{category.name}</p>
        </div>
      </div>
    </Link>
  )
}