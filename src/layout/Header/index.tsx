import * as React from 'react'
import { HeaderDeskTop } from './HeaderDesktop'
import { HeaderMobile } from './HeaderMobile'

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <>
      <HeaderMobile />
      <HeaderDeskTop />
    </>
  )
}
