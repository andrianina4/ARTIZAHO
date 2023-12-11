import { artizahoLogoWhiteVertical, artizahoWhite, artizahoBrown } from '@/constants/link/images'
import Image from 'next/image'
import React from 'react'

function LogoArtizaho({ isColor = false }: { isColor?: boolean }) {
  return (
    <Image src={isColor ? artizahoBrown : artizahoWhite} alt='artizaho' width={131} height={51} />
  )
}

function LogoArtizahoWhiteVertical() {
  return (
    <Image src={artizahoLogoWhiteVertical} alt='artizaho-' width={127} height={127} />
  )
}

export default LogoArtizaho
export {
  LogoArtizahoWhiteVertical
}