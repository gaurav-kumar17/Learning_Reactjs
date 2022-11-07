import React from 'react'
import HomeContainer from '..'
import FooterComponents from '../../../Components/Footer'
import HeaderComponents from '../../../Components/Header'
import AboutPageContainer from '../About'

import { BrowserRouter,Route, Routes} from 'react-router-dom'
import UseRefComp from '../UseRef'
import ProductContainer from '../Products'
import ProductDetails from '../ProductDetails'

const AllRouterWrap = () => {
  return (
    <>

    {/* <h1>Hi i am Route wrap.</h1> */}
    <BrowserRouter>
    <HeaderComponents/>
        <Routes>
            <Route path='/' element={<HomeContainer/>}/>
            <Route path='/about' element={<AboutPageContainer/>}/>
            <Route path='/useref' element={<UseRefComp/>}/>
            <Route path='/products' element={<ProductContainer/>}/>
            <Route path='/products-details/:productid' element={<ProductDetails/>}/>
        </Routes>
    <FooterComponents/>
    </BrowserRouter>

     {/* <AboutPageContainer/>
    <HomeContainer/> */}

    </>
  )
}

export default AllRouterWrap