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
    <main className="flex flex-col gap-8">
      <PromoBanner
        src="/banner_home_01.png"
        alt="Até 55% de desconto esse mês"
      />

      <section className="p-5">
        <Categories />
      </section>

      <section>
        <SectionTitle>Ofertas</SectionTitle>
        <ProducList products={deals} />
      </section>


      <PromoBanner
        src="/banner_home_02.png"
        alt="Até 55% de desconto em mouses"
      />

      <section>
        <SectionTitle>Teclados</SectionTitle>
        <ProducList products={keyboards} />
      </section>


      <section>
        <PromoBanner
          src="/banner_home_03.png"
          alt="Até 55% de desconto em mouses"
        />

        <section>
          <SectionTitle>Teclados</SectionTitle>
          <ProducList products={keyboards} />
        </section>

      </section>
    </main>
  )
}
