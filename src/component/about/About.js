import React from 'react'
// import logo from './logo.svg';
import logo from '../../assets/imgs/Mohammed.png'

 function About() {
  return (
    // <h1>About Mohammed</h1>
    <article class="container" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" id="about">
        
        <h2 class="text-center fw-bold mt-5 mb-5 text-primary"><q> About Mohammed</q></h2>
        <div class="row">
            <div class="col-sm-12 col-lg-6 image mb-5" data-aos="flip-left">
                {/* <img src="imgs/about-1.jpg" alt="about Mohammed Ebrahiim"> */}
                <img src= {logo} alt="about Mohammed Ebrahiim" />
            </div>
            <div class="col-sm-12 col-lg-6 about-me" data-aos="flip-right">
                <h2 className='text-primary'>Hi Guys</h2>
                <p>
                    Front-End Developer with +1 years experience using: HTML, CSS, SASS, Bootstrap, JavaScript, and React js. Also, I hope to be given the opportunity as a UI Developer or Front-End Developer. I have followed the growth of Digital Verse, and I am confident my skills can help you achieve your goal. To get first-hand experience on what I can do and what I have done as a Front-End Developer.
                </p>
                <address ><i class="fa-solid fa-caret-right text-primary"> </i><span class="fw-bold text-primary"> &nbsp; Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> :  &nbsp; Mohammed Ebrahiim</address>
                <address><i class="fa-solid fa-caret-right text-primary"> </i><span class="fw-bold text-primary"> &nbsp; E-Mail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> :  &nbsp; <a href="mailto:mohammedebrahiim97@gmail.com">mohammedebrahiim97@gmail.com</a></address>
                <address><i class="fa-solid fa-caret-right text-primary"> </i><span class="fw-bold text-primary"> &nbsp; Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> :  &nbsp; <a href="tel:+201094968733">+201094968733</a></address>
                <address><i class="fa-solid fa-caret-right text-primary"> </i><span class="fw-bold text-primary"> &nbsp; Address &nbsp;&nbsp;&nbsp;</span> :  &nbsp; Mansoura, Egypt</address>
                <address><i class="fa-solid fa-caret-right text-primary"> </i><span class="fw-bold text-primary"> &nbsp; Freelance &nbsp;</span> :  &nbsp; Available</address>
                
                {/* <button class="btn btn-primary mt-4"><a href="https://drive.google.com/file/d/1qid2wDOanvEyhRE6fcQyswOd-7Y7kylm/view?usp=sharing" target="_blank" class="text-white text-decoration-none">DOWNLOAD RESUME</a></button> */}
            </div>
        </div>
    </article>
  )
}
export default About;