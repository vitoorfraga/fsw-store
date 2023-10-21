import Image from "next/image";
import { Categories } from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import { ProducList } from "./components/product-list";
import { SectionTitle } from "./components/section-title";
import { PromoBanner } from "./components/promo-banner";

export default async function Home() {

  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    }
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards'
      }
    }
  })

  return (
    <main>
      <PromoBanner
        src="/banner_home_01.png"
        alt="Até 55% de desconto esse mês"
      />

      <section className="mt-8 p-5">
        <Categories />
      </section>

      <section className="mt-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProducList products={deals} />
      </section>


      <PromoBanner
        src="/banner_home_02.png"
        alt="Até 55% de desconto em mouses"
      />

      <section className="mt-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProducList products={keyboards} />
      </section>
    </main>
  )
}
