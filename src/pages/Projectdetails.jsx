import React from 'react'
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { BsFillTelephoneFill, BsEnvelope,BsCalendar, BsClock, BsCheckCircle, BsFillGeoAltFill, BsPerson } from "react-icons/bs";
import Projectdetailsimg from '../images/project-1.jpeg';
import Projecgalleryimg1 from '../images/gallery-1.jpeg';
import Projecgalleryimg2 from '../images/gallery-2.jpeg';
import Projecgalleryimg3 from '../images/gallery-3.jpeg';
import Projecgalleryimg4 from '../images/gallery-4.jpeg';
import { Link } from 'react-router-dom';
import '../css/Projectdetails.css';

const Projectdetails = () => {
  return (
    <div>
            <section className="all-hero-section">
                <div className="container">
                    <div className="hero-content">
                        <div className="section-title text-center">
                            <h1>Project Details</h1>
                            <h4 className="explore-btn">
                                <Link to='/' className="home-btn">Home  </Link> / Project Details
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            <div className="project-details-wrap">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-lg-4">
                            <div className="project-details-sidebar">
                                <ul className='project-details-box'>
                                    <li className='project-details-list'>
                                        <div className="project-details-icon"><BsCalendar className='icon' /></div>
                                        <div className="project-sub-details">
                                            <h3>Project Date:</h3>
                                            <p>10 December, 2024</p>
                                        </div>
                                    </li>
                                    <li className='project-details-list'>
                                        <div className="project-details-icon"><BsClock className='icon' /></div>
                                        <div className="project-sub-details">
                                            <h3>Project Duration:</h3>
                                            <p>12 Hours / Week</p>
                                        </div>
                                    </li>
                                    <li className='project-details-list'>
                                        <div className="project-details-icon"><BsCheckCircle className='icon' /></div>
                                        <div className="project-sub-details">
                                            <h3>Category:</h3>
                                            <p>Residential Interior Renovation</p>
                                        </div>
                                    </li>
                                    <li className='project-details-list'>
                                        <div className="project-details-icon"><BsPerson className='icon' /></div>
                                        <div className="project-sub-details">
                                            <h3>Client / Company:</h3>
                                            <p>Luxe Interiors</p>
                                        </div>
                                    </li>
                                    <li className='project-details-list'>
                                        <div className="project-details-icon"><BsFillGeoAltFill className='icon' /></div>
                                        <div className="project-sub-details">
                                            <h3>Project Location:</h3>
                                            <p>789 maple avenue, design city</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="help">
                                    <div className='project-details-box'>
                                        <div className="section-sub-data">
                                            <h3>How can we help</h3>
                                            <p>If you need any helps, please feel free to contact us.</ p>
                                        </div>
                                        <div className='project-details-list'>
                                            <div className="project-details-icon"><BsFillTelephoneFill className='icon' /></div>
                                            <div className="project-sub-details">
                                                <p>+91 1234567890</p>
                                            </div>
                                        </div>
                                        <div className='project-details-list'>
                                            <div className="project-details-icon"><BsEnvelope className='icon' /></div>
                                            <div className="project-sub-details">
                                                <p>inspired@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-8">
                            <div className="project-detaild-info">
                                <h2 className='text-center'>Urban Retreat</h2>
                                <div className="project-details-img mt-4">
                                    <img src={Projectdetailsimg} alt="" className='img-fluid' />
                                </div>
                                <div className="project-details-information">
                                    <div className="section-title">
                                        <h2>Project information</h2>
                                    </div>
                                    <p>This project involved a complete transformation of the space to align with the client's vision for a modern, functional, and aesthetically pleasing interior. Our team focused on integrating custom elements, maximizing space, and ensuring every detail enhanced both style and practicality. The result is a beautifully designed area that reflects the client's unique taste and lifestyle.</p>
                                    <p>In this project, we aimed to create a harmonious blend of elegance and functionality, tailored specifically to the client's preferences. Every aspect, from material selection to color schemes, was carefully curated to enhance the space's ambiance and utility. Our goal was to craft a warm, inviting environment that reflects a sophisticated design philosophy while catering to everyday needs. The project stands as a testament to our commitment to delivering high-quality, personalized interior solutions.</p>
                                </div>
                                <div className="project-details-design">
                                    <div className="section-title">
                                        <h2>Design highlights</h2>
                                    </div>
                                    <p className='mb-3'>This section showcases the standout elements of the project, featuring unique design choices, custom-made pieces, and innovative solutions tailored to enhance both style and functionality. From carefully selected finishes to lighting arrangements, each detail has been meticulously crafted to bring out the best in the space and align with the client's vision.</p>
                                    <div className="about-data1">
                                        <p><AiTwotoneCheckCircle /> Custom cabinetry was designed to maximize storage while maintaining a sleek, modern look.</p>
                                        <p><AiTwotoneCheckCircle /> Ambient lighting was strategically placed to enhance the mood and highlight key areas.</p>
                                        <p><AiTwotoneCheckCircle /> Textures and finishes were carefully chosen to add depth and warmth to each room.</p>
                                        <p><AiTwotoneCheckCircle /> A neutral color palette was accented with bold elements for a balanced, timeless feel.</p>
                                    </div>
                                </div>
                                <div className="project-details-gallery">
                                    <div className="section-title">
                                        <h2>Project Gallery</h2>
                                    </div>
                                    <div className="project-details-gallery-imgs">
                                        <ul>
                                            <li><img src={Projecgalleryimg1} alt="" /></li>
                                            <li><img src={Projecgalleryimg2} alt="" /></li>
                                            <li><img src={Projecgalleryimg3} alt="" /></li>
                                            <li><img src={Projecgalleryimg4} alt="" /></li>
                                        </ul>
                                    </div>
                                    <div className="services-btn">
                                        <Link to='/gallery' className="section-btn">See All Images</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Projectdetails
