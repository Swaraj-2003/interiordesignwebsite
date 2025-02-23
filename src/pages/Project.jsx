import React from 'react'
import Projectimg1 from '../images/project-1.jpeg';
import Projectimg2 from '../images/project-2.jpeg';
import Projectimg3 from '../images/project-3.jpeg';
import Projectimg4 from '../images/project-4.jpeg';
import Projectimg6 from '../images/gallery-3.jpeg';
import Projectimg5 from '../images/service-3.jpeg';
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div>
    <section className="all-hero-section">
        <div className="container">
            <div className="hero-content">
                <div className="section-title text-center">
                    <h1>Projects</h1>
                    <h4 className="explore-btn">
                        <Link to='/home' className="home-btn">Home  </Link> / Projects
                    </h4>
                </div>
            </div>
        </div>
    </section>
    <section className='latest-project'>
        <div className="container-fluid">
            <div className="row row-section align-items-center">
                <div className="col-md-6">
                    <div className="section-heading">
                        <div className="section-title ">
                            <h3>Latest Project</h3>
                            <h2>Creative projects that define <span>our style</span></h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="section-para">
                        <div className="section-title">
                            <p>Our portfolio showcases a diverse range of projects, from beautifully crafted residential spaces functional and stylish commercial interiors</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Fewprojects /> */}
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <div className="service-item">
                        <div className="service-item-data">
                            <div className="project-imgs">
                                <img src={Projectimg1} alt="" />
                            </div>
                            <div className="service-info project-info">
                                <h3>Residential Spaces</h3>
                                <h2><Link to='/projectdetailspage' className='project-link' >Urban Retreat: Modern Design Meets Comfort</Link></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="service-item">
                        <div className="service-item-data">
                            <div className="project-imgs">
                                <img src={Projectimg2} alt="" />
                            </div>
                            <div className="service-info project-info">
                                <h3>Luxury Homes</h3>
                                <h2><Link to='/projectdetailspage' className='project-link' >Luxurious Loft: Industrial Chic For Living</Link></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="service-item">
                        <div className="service-item-data">
                            <div className="project-imgs">
                                <img src={Projectimg3} alt="" />
                            </div>
                            <div className="service-info project-info">
                                <h3>Outdoor Living Spaces</h3>
                                <h2><Link to='/projectdetailspage' className='project-link' >Coastal Vibes: Serenity By The Sea</Link></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="service-item">
                        <div className="service-item-data">
                            <div className="project-imgs">
                                <img src={Projectimg4} alt="" />
                            </div>
                            <div className="service-info project-info">
                                <h3>Modern Designs</h3>
                                <h2><Link to='/projectdetailspage' className='project-link' >Minimalist Haven: Simple, Clean, Inviting Spaces</Link></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="service-item">
                        <div className="service-item-data">
                            <div className="project-imgs">
                                <img src={Projectimg5} alt="" />
                            </div>
                            <div className="service-info project-info">
                                <h3>Rustic Charm Revived</h3>
                                <h2><Link to='/projectdetailspage' className='project-link' >Nature's Embrace: Timeless Tranquility</Link></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="service-item">
                        <div className="service-item-data">
                            <div className="project-imgs">
                                <img src={Projectimg6} alt="" />
                            </div>
                            <div className="service-info project-info">
                                <h3>Nature-Inspired Harmony</h3>
                                <h2><Link to='/projectdetailspage' className='project-link' >Bold Accents: Statement Living Design</Link></h2>
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

export default Project
