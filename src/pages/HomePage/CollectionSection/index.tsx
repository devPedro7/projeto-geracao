import React from 'react'
import {
  PiTShirtThin,
  PiPantsThin,
  PiBaseballCapThin,
  PiHeadphonesThin,
  PiSneakerThin,
} from 'react-icons/pi'

import Section from '@/components/Section'
import FeaturedCard from '@/components/FeaturedCard'
import CategoryCard from '@/components/CategoryCard'

import dropSupreme from '@/assets/drop-supreme.png'
import dropAdidas from '@/assets/drop-adidas.png'
import dropBass from '@/assets/drop-bass.png'

export const CollectionSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-24 py-10 md:px-32">
      <Section
        title="Coleções em vitrine"
        titleAlign="text-left"
        className="flex gap-4"
      >
        <FeaturedCard
          title="Novo drop Maximus Supreme"
          discount={30}
          image={{
            src: dropSupreme,
            alt: 'Drop Maximus',
          }}
        />
        <FeaturedCard
          title="Coleção Puma"
          discount={30}
          image={{
            src: dropAdidas,
            alt: 'Drop Puma',
          }}
        />
        <FeaturedCard
          title="Novo Fone JBL"
          discount={30}
          image={{
            src: dropBass,
            alt: 'Drop Bass',
          }}
        />
      </Section>
      <Section
        title="Coleções em vitrine"
        titleAlign="text-center"
        className="flex gap-4"
      >
        <CategoryCard title="Camisetas" icon={PiTShirtThin} />
        <CategoryCard title="Calças" icon={PiPantsThin} />
        <CategoryCard title="Bonés" icon={PiBaseballCapThin} />
        <CategoryCard title="Smartphones" icon={PiHeadphonesThin} />
        <CategoryCard title="Calçados" icon={PiSneakerThin} />
      </Section>
    </div>
  )
}
