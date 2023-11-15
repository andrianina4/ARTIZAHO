import { artizahoWhite } from '@/constants/link/images'
import Image from 'next/image'
import React from 'react'

type Props = {}

function LogoArtizahoWhite({}: Props) {
  return (
    <Image src={artizahoWhite} alt='artizaho' width={131} height={51}/>
  )
}

export default LogoArtizahoWhite