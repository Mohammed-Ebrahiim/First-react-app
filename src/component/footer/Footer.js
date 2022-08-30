import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer className='bg-dark text-white'>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-md-8">
                    
                        <p>Copyright &copy; 2022 All rights reserved. | This template is made with  by Mohammed Ebrahiim </p>
                    
                </div>
                <div className="col-md-4">
                
                    <ul className='d-flex list-unstyled'>
                        <li>
                            <a href="#" className='text-white'><i class="fa-brands fa-linkedin-in"></i></a>
                        </li>
                        <li className='mx-5'>
                            <a href="#" className='text-white'><i class="fa-brands fa-github"></i></a>
                        </li>
                        <li>
                            <a href="#" className='text-white'><i class="fa-brands fa-whatsapp"></i></a>
                        </li>
                    </ul>
                
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
