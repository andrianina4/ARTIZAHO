import { artizahoLogoWhiteVertical, artizahoWhite } from '@/constants/link/images'
import Image from 'next/image'
import React from 'react'


function LogoArtizahoWhite() {
  return (
    <Image src={artizahoWhite} alt='artizaho' width={131} height={51}/>
  )
}

function LogoArtizahoWhiteVertical() {
  return (
    <Image src={artizahoLogoWhiteVertical} alt='artizaho-' width={127} height={127}/>
  )
}

export default LogoArtizahoWhite
export {
  LogoArtizahoWhiteVertical
}