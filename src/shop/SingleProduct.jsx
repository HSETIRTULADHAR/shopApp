import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {Autoplay} from 'swiper/modules';
import ProductDisplay from './ProductDisplay';




const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams();

    useEffect(( ) => {
        fetch('/src/products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    },[]); 

    
    const singleItem = product.filter((val) => val.id === id);
    console.log(singleItem);
    return (
        <>
            {
                singleItem.map((item) => (
                    <div>
                        <PageHeader title="Our shop single" curPage={`Shop / ${item.name}`}/>
                         <div className='shop-single padding-tb aside-bg'>
                            <div className='container'>
                                <div className='row justify-content-center'>
                                    {/* Left Side */}
                                    <div className='col-lg-8 col-12'>
                                        <article>
                                            <div className='product-details'>
                                                <div className='row align-items-center'>
                                                    <div className='col-md-6 col-12'>
                                                        <div className='product-thumb'>
                                                            <div className='swiper-container pro-single-top'>
                                                                <Swiper 
                                                                    spaceBetween={30}
                                                                    slidesPerView={1}
                                                                    loop={"true"}
                                                                    autoplay={{
                                                                        delay: 2000,
                                                                        disableOnInteraction: false
                                                                    }}
                                                                    modules={[Autoplay]}
                                                                    navigation={
                                                                        {
                                                                            prevEl: ".pro-single-prev",
                                                                            nextE1: ".pro-single-next",
                                                                        }
                                                                    }
                                                                    className='mySwiper'
                                                                >
                                                                    {
                                                                        singleItem.map((val,i) => (
                                                                            <SwiperSlide key={i}>
                                                                                <div className='single-thumb'>
                                                                                    <img src={val.img} alt=''/>
                                                                                </div>
                                                                            </SwiperSlide>
                                                                        ))
                                                                    }
                                                                </Swiper>
                                                                <div className='pro-single-next'>
                                                                    <i className='icofont-rounded-left'></i>
                                                                </div>
                                                                <div className='pro-single-prev'>
                                                                    <i className='icofont-rounded-right'></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6 col-12'>
                                                        <div className='post-content'>
                                                            <div>
                                                                <ProductDisplay item={item}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Reviews */}
                                            <div className='review'>
                                                Review
                                            </div>
                                        </article>
                                    </div>
                                    {/* Right side */}
                                    <div className='col-lg-4 col-12'>Right side</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
  )
}

export default SingleProduct
