import React from 'react'
import "./style.scss"
import Logo from "../../assets/images/Ebay-Logo.png";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
 <main className='sassa'>
<div className="about">
   <a className="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
      <span className="icon"></span>
   </a>
   <a className="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
      <span className="icon"></span>
   </a>
   <a className="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
      <span className="icon"></span>
   </a>
   <a className="bg_links logo"></a>
</div>


    <nav>
        <div className="menu">   
            <Link to="/">
            <img src={Logo} alt="" />
            </Link>
            <div className="menu_links">
                <a href="" className="link">about</a>
                <a href="" className="link">projects</a>
                <a href="" className="link">contacts</a>
            </div>
            <div className="menu_icon">
                <span className="icon"></span>
            </div>
        </div>
    </nav>

    <section className="wrapper ov">

        <div className="container">

            <div id="scene" className="scene" data-hover-only="false">


                <div className="circle" data-depth="1.2"></div>

                <div className="one" data-depth="0.9">
                    <div className="content">
                        <span className="piece"></span>
                        <span className="piece"></span>
                        <span className="piece"></span>
                    </div>
                </div>

                <div className="two" data-depth="0.60">
                    <div className="content">
                        <span className="piece"></span>
                        <span className="piece"></span>
                        <span className="piece"></span>
                    </div>
                </div>

                <div className="three" data-depth="0.40">
                    <div className="content">
                        <span className="piece"></span>
                        <span className="piece"></span>
                        <span className="piece"></span>
                    </div>
                </div>

                <p className="p404" data-depth="0.50">404</p>
                <p className="p404" data-depth="0.10">404</p>

            </div>

            <div className="text">
                <article>
                    <p>Page note found</p>
                    <Link to="/">
                    <button>Home</button>
                     </Link>
                </article>
            </div>

        </div>
    </section>
    
    </main>
    
    </>
  )
}

export default index