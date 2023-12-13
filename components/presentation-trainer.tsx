import { Star } from '@/constants/link/icons'
import { ITrainer } from '@/types/IUser'
import Image from 'next/image'
import React from 'react'

type PresentationTrainerProps = {
  trainer: ITrainer
}

const NUMBER_STARS = 5
const WIDTH_IMAGE_TRAINER = 110
const HEIGHT_IMAGE_TRAINER = 160

function PresentationTrainer(props: PresentationTrainerProps) {
  const { trainer } = props
  const { star, about, name, photo, id } = trainer

  return (
    <article className='flex gap-x-5'>
      <Image src={photo} alt={`trainer-${id}`} width={WIDTH_IMAGE_TRAINER} height={HEIGHT_IMAGE_TRAINER} className='rounded-[64px]' />
      <div className='flex flex-col justify-between'>
        <div>
          <h3 className='text-reddishBrown font-extrabold text-base'>Avec {name}</h3>
          <p className='text-reddishBrown text-sm'>{about}</p>
        </div>

        <div className='flex gap-x-1'>
          {[...new Array(NUMBER_STARS)].map((_, index) => <span key={index} className={`text-bronze text-lg ${index < star ? '' : 'text-opacity-25'}`}><Star/></span>)}
        </div>
      </div>
    </article>
  )
}

export default PresentationTrainer