import Image from "next/image";
import { Categories } from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import { ProducList } from "./components/product-list";

export default async function Home() {

  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    }
  })

  return (
    <main>
      <Image
        className="h-auto w-full p-5"
        sizes="100vw"
        src="/banner_home_01.png"
        alt="Até 55% de desconto esse mês"
        width={0}
        height={0}
      />

      <section className="mt-8 p-5">
        <Categories />
      </section>

      <section className="mt-8">
        <p className="font-bold uppercase pl-5 mb-3">Ofertas</p>
        <ProducList products={deals} />
      </section>


      <Image
        className="h-auto w-full p-5"
        sizes="100vw"
        src="/banner_home_02.png"
        alt="Até 55% de desconto em mouses"
        width={0}
        height={0}
      />
    </main>
  )
}
