import React from 'react'

import OfferCard from '@/components/OfferCard'

import offSpecial from '@/assets/off-special.png'

export const SpecialSection = () => {
  return (
    <section className="flex items-center justify-between px-24 pt-24 bg-white md:px-32">
      <div className="flex w-1/2">
        <img src={offSpecial} alt="Oferta especial" />
      </div>
      <OfferCard
        title={{
          label: 'Air Jordan edição ilimitada, calçada pelo próprio Michael Jordan!',
          style: 'text-darkGray2',
        }}
        subtitle={{
          label: 'Oferta imperdível!!!',
          style: 'text-primary',
        }}
        description={{
          label:
            'Sapato calçado pelo jogador no jogo dos Bulls vs Laker na final da NBA, onde com este incrível sapato e suas habilidades diferenciadas ele conseguiu se tornar o MVP do jogo levando o time a vitória naquele dia conquistando o título da NBA contra seu maior rival.',
          style: 'w-[590px]',
        }}
        button={{
          label: 'Ver Ofertas',
          style:
            'bg-primary font-bold w-48 h-10 text-white hover:bg-tertiary ease-in transition-all duration-300',
        }}
        className="flex flex-col w-1/2 h-80"
      />
    </section>
  )
}
