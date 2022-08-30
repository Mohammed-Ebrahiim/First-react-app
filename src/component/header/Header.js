import React from 'react'
import { Nav } from "react-bootstrap";
import logo from './logo.svg';


function Header () {
  return (
    <article class="container" id="home">
        <div className="row align-items-center">
            <div className="col-12 col-md-6 mt-5">
                <aside>
                    <h1>Hi, I'm <br /> Mohammed Ebrahiim</h1>
                    <p>I am a web developer and a Seeking a Web Developer position in a stable company. I love sharing my experience with others, and I also love to learn something new every single day.</p>
                </aside>
            </div>
            <div className='col-12 col-md-6'>
                <div className='text-center row justify-content-center'>
                    <img src={logo} alt="react img" title='React' />
                </div>
                <div className='links'>
                    <Nav className="ms-auto justify-content-center">
                        <Nav.Link href="#home">
                            <h1><i class="fa-brands fa-linkedin-in"></i></h1>
                        </Nav.Link>
                        <Nav.Link href="#about">
                            <h1><i class="fa-brands fa-github"></i></h1>
                        </Nav.Link>
                        <Nav.Link href="#services">
                           <h1> <i class="fa-brands fa-facebook-f"></i></h1>
                        </Nav.Link>
                        <Nav.Link href="#portfolio">
                            <h1><i class="fa-brands fa-whatsapp"></i></h1>
                        </Nav.Link>
                        <Nav.Link href="#contact">
                            <h1><i class="fa-brands fa-instagram"></i></h1>
                        </Nav.Link>
                    </Nav>
                </div>
            </div> 
        </div>
    </article>
  )
}

export default Header