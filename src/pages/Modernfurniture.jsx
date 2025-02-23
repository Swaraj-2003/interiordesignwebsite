import React from 'react'
import Furnitureimg from '../images/project-1.jpeg';
import Collectionimg1 from '../images/furniforma-imagebox-img1.jpeg';
import Collectionimg2 from '../images/furniforma-imagebox-img2.jpeg';
import Collectionimg3 from '../images/furniforma-imagebox-img3.jpeg';
import Decoresecimg1 from '../images/decoreimg1.jpeg';
import Decoresecimg2 from '../images/decoreimg2.jpeg';
import Furnitureimg1 from '../images/furniture1.jpeg';
import Furnitureimg2 from '../images/furniture2.jpeg';
import Furnitureimg3 from '../images/furniture3.jpeg';
import Furnitureimg4 from '../images/furniture7.jpeg';
import Furnitureimg5 from '../images/furniture5.jpeg';
import Furnitureimg6 from '../images/furniture8.jpeg';

import { AiTwotoneCheckCircle } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../css/Modernfurniture.css';



$(function () {

    $('.project-item-link').on("click", function () {
        $(this).addClass('active').siblings().removeClass('active');

        let filter = $(this).attr('data-filter')
        if (filter === 'all') {
            $('.type').show(400);
        } else {
            $('.type').not('.' + filter).hide(200);
            $('.type').filter('.' + filter).show(400);
        }
    })
});


const Modernfurniture = () => {
  return (
    <div>
            <section className="all-hero-section">
                <div className="container">
                    <div className="hero-content">
                        <div className="section-title text-center">
                            <h1>Modern Furniture</h1>
                            <h4 className="explore-btn">
                                <Link to='/' className="home-btn">Home  </Link> / Modern Furniture
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className='furniture-wrap'>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-lg-6">
                            <div className="commercial-img">
                                <img src={Furnitureimg} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <div className="commercial-content">
                                <div className="section-title ">
                                    <h3>Our Modern Funiture Design</h3>
                                    <h2>Modern Furniture : Design for  <span>Today's Living</span></h2>
                                </div>
                                <p>Create a space you love with our hand-picked selection of modern furniture. From minimalist designs to statement pieces, we offer high-quality, stylish furniture to suit every taste.</p>

                                <p>Discover sleek, contemporary pieces that elevate your home. Generate the most creative ideas and brands hence adding value to each interaction.</p>
                                <div className="read-more-btn">
                                    <Link to='/projectdetailspage' className="section-btn">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='collections'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-title ">
                                <h3>Furnishing Spaces, Elevating Lives</h3>
                                <h2>Showcasing Timeless Furniture   <span>Designs</span></h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="section-para">
                                <div className="section-title">
                                    <p>Create a space you love with our hand-picked selection of modern furniture. From minimalist designs to statement pieces, we offer high-quality, stylish furniture to suit every taste.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row collection-items">
                        <div className="col-md-6 col-lg-4">
                            <div className="service-item">
                                <div className="service-item-data">
                                    <div className="collection-img">
                                        <img src={Collectionimg1} alt="" />
                                    </div>
                                    <div className="service-info text-center ">
                                        <h2><Link to='' className='service-item-link furniture-head'>Floating Shelves</Link></h2>
                                        <p className='m-0 collection-para'>- 2 ITEMS -</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="service-item">
                                <div className="service-item-data">
                                    <div className="collection-img">
                                        <img src={Collectionimg2} alt="" />
                                    </div>
                                    <div className="service-info text-center ">
                                        <h2><Link to='' className='service-item-link furniture-head'>Wooden Lounge Chair</Link></h2>
                                        <p className='m-0 collection-para'>- 3 ITEMS -</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="service-item">
                                <div className="service-item-data">
                                    <div className="collection-img">
                                        <img src={Collectionimg3} alt="" />
                                    </div>
                                    <div className="service-info text-center ">
                                        <h2><Link to='' className='service-item-link furniture-head'>Living Room Sofas</Link></h2>
                                        <p className='m-0 collection-para'>- 2 ITEMS -</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='decor-hub'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <div className="decor-content">
                                <div className="section-title">
                                    <h3>Home Decor Hub</h3>
                                    <h2>Exceptional Furniture's For  <span>Indoor & Outdoor</span></h2>
                                    <p>Our dedicated team of designers works closely with you to    understand your vision and bring it to life with thoughtful    attention to detail. Whether it's transforming a single room   or an entire home..</p>
                                </div>
                                <div className="decore-img">
                                    <img src={Decoresecimg1} alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <div className="decor-content">
                                <div className="decore-img">
                                    <img src={Decoresecimg2} alt="" className='img-fluid' />
                                </div>
                                <div className="section-title decore-sub-content">
                                    <h4>Discover Endless Designs</h4>
                                    <p className='decore-sub-para'>Our dedicated team of designers works closely with you to    understand your vision and bring it to life with thoughtful    attention to detail. Whether it's transforming a single room   or an entire home..</p>
                                    <div className="about-data1 decore-sub">
                                       <p><AiTwotoneCheckCircle /> Creative expertise</p>
                                       <p><AiTwotoneCheckCircle /> client-centered approach</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='furniture-list'>
                <div className="container">
                    <div className="collection-project-wrap text-center">
                        <div className="section-title ph light-color">
                            <h2>Explore Our Furniture  <span>Styles</span></h2>
                        </div>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-8">
                                <ul className="project-list collection-items">
                                    {/* <li className='project-item-link ' data-filter="all">All</li> */}
                                    <li className='project-item-link light-color active ' data-filter="cat1">Home Decoration</li>
                                    <li className='project-item-link light-color' data-filter="cat2">Office Decoration</li>
                                    <li className='project-item-link light-color' data-filter="cat3">Indoor Decoration</li>
                                    <li className='project-item-link light-color' data-filter="cat4">Outdoor Decoration</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 col-md-6 col-lg-4 type cat1">
                            <div className="funiture-details">
                                <div className="furniture-info">
                                    <div className="furniture-imgs product-tag">
                                        <img src={Furnitureimg1} alt="" className='img-fluid'/>
                                        <div className='add-label sale'><span>SALE</span> </div>
                                        <div className='add-like'><span><BsHeart/></span> </div>
                                    </div>
                                    <div className="furniture-data discount-price text-center">
                                        <h3>Home Decoration</h3>
                                        <Link to='' className='furniture-link' >Round Wood Table</Link>
                                        <p>$ 65.00 - $ 60.00</p>
                                        <div className="services-btn">
                                            <Link to='/shop' className="section-btn"> Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 type cat1 cat2">
                            <div className="funiture-details">
                                <div className="furniture-info">
                                    <div className="furniture-imgs product-tag ">
                                        <img src={Furnitureimg4} alt="" className='img-fluid'/>
                                        <div className='add-like'><span><BsHeart/></span> </div>
                                    </div>
                                    <div className="furniture-data discount-price text-center">
                                        <h3>Home Decoration , Office Decoration </h3>
                                        <Link to='' className='furniture-link' >Modern Ceramic Lamp</Link>
                                        <p>$ 65.00 - $ 60.00</p>
                                        <div className="services-btn">
                                            <Link to='/shop' className="section-btn"> Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 type cat3">
                            <div className="funiture-details">
                                <div className="furniture-info">
                                    <div className="furniture-imgs product-tag">
                                        <img src={Furnitureimg2} alt="" className='img-fluid'/>
                                        <div className='add-label sale'><span>NEW</span> </div>
                                        <div className='add-like'><span><BsHeart/></span> </div>
                                    </div>
                                    <div className="furniture-data discount-price text-center cat3">
                                        <h3>Indoor Decoration</h3>
                                        <Link to='' className='furniture-link' >Ceramic Art Set</Link>  
                                        <p>$ 65.00 - $ 60.00</p>
                                        <div className="services-btn">
                                            <Link to='/shop' className="section-btn"> Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 type cat2">
                            <div className="funiture-details">
                                <div className="furniture-info">
                                    <div className="furniture-imgs product-tag">
                                        <img src={Furnitureimg3} alt="" className='img-fluid'/>
                                        <div className='add-label sale'><span>SOLD</span> </div>
                                        <div className='add-like'><span><BsHeart/></span> </div>
                                    </div>
                                    <div className="furniture-data discount-price text-center">
                                        <h3>Office Decoration</h3>
                                        <Link to='' className='furniture-link' >Soft Seater Chair</Link>    
                                        <p>$ 65.00 - $ 60.00</p>
                                        <div className="services-btn">
                                            <Link to='/shop' className="section-btn"> Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>            
                        <div className="col-12 col-md-6 col-lg-4 type cat4">
                            <div className="funiture-details">
                                <div className="furniture-info">
                                    <div className="furniture-imgs product-tag">
                                        <img src={Furnitureimg6} alt="" className='img-fluid'/>
                                        <div className='add-like'><span><BsHeart/></span> </div>
                                    </div>
                                    <div className="furniture-data discount-price text-center">
                                        <h3>Office Decoration , Outdoor Decoration</h3>
                                        <Link to='' className='furniture-link' >Elegant Wooden Table</Link>    
                                        <p>$ 65.00 - $ 60.00</p>
                                        <div className="services-btn">
                                            <Link to='/shop' className="section-btn"> Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 type cat1 cat4">
                            <div className="funiture-details">
                                <div className="furniture-info">
                                    <div className="furniture-imgs product-tag">
                                        <img src={Furnitureimg5} alt="" className='img-fluid'/>
                                        <div className='add-label sale'><span>SALE</span> </div>
                                        <div className='add-like'><span><BsHeart/></span> </div>
                                    </div>
                                    <div className="furniture-data discount-price text-center">
                                        <h3>Home Decoration , Outdoor Decoration</h3>
                                        <Link to='' className='furniture-link' >Bamboo Sofa</Link>  
                                        <p>$ 65.00 - $ 60.00</p>
                                        <div className="services-btn">
                                            <Link to='/shop' className="section-btn"> Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  )
}

export default Modernfurniture
