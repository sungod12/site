import { useEffect } from 'react'
import { Fragment } from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import { Box ,styled} from '@mui/material';
import { getProducts } from '../../redux/actions/productActions';
import { useSelector } from 'react-redux';
import Slide from './Slide';
import MidSlide from './MidSlide'; 
import MideSection from './MidSection';
import Footer from './Footer';
import Header from '../header/Header';
const Component = styled(Box)`

padding:10px;
background:#F2F2F2;
`

const Home = () => {
  const { products } = useSelector(state => state.getProducts)
  // console.log(products)
  useEffect(() => {
   getProducts()
  }, [products])

  return (
    <Fragment>
      <Header/>
      <NavBar />
      <Component> 
        <Banner />
        <MidSlide products={products}  title="Deal Of the day" timer={true}/>
        <MideSection/>
        <Slide products={products} title="Discounts for you" timer={false}/>
        <Slide products={products} title="Suggest items" timer={false}/>
        <Slide products={products} title="Top Deal's" timer={false}/>
      </Component>
      <Footer/>
    </Fragment>
  )
}

export default Home

