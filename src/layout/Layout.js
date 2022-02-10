import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <div>
    <Header />
    <Container>
     <main>{children}</main> 
     <Footer/>
    </Container>
    </div>
  )
}
