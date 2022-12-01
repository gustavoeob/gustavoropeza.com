import React from 'react'
import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const expresizeGIF = "https://firebasestorage.googleapis.com/v0/b/portfolio-ff6da.appspot.com/o/projects%2Fexpresize-overview.gif?alt=media&token=19ad2772-0b20-4281-9900-3f25cc0befb8"
const mountainGIF = "https://firebasestorage.googleapis.com/v0/b/portfolio-ff6da.appspot.com/o/projects%2Fmountain.co-overview.gif?alt=media&token=93e846b9-6c26-4408-adf3-72e3025ed8f3"
const swissrentingGIF = "https://firebasestorage.googleapis.com/v0/b/portfolio-ff6da.appspot.com/o/projects%2Fswissrenting-overview.gif?alt=media&token=38bdd559-3473-4e14-82cb-1056767ec70f"
export default () => (
    <Carousel className="main-container carousel-container axis-vertical" infiniteLoop useKeyboardArrows showStatus={false}>
      <div className='project-container'>
        <img
          alt=""
          src={expresizeGIF}
        />
        <a href="https://expresize.vercel.app" target="_blank" rel="noopener noreferrer">
        <p className="legend legend-one">Expresize <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link" viewBox="0 0 16 16">
  <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
  <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
</svg></p>
        </a>
      </div>
      <div className='project-container'>
        <img
          alt="mountain clothing store and memory card game"
          src={mountainGIF}

        />
        <a href="https://mountaindotco.vercel.app/" target="_blank" rel="noopener noreferrer">
        <p className="legend legend-two">Mountain.co <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link" viewBox="0 0 16 16">
  <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
  <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
</svg></p>
        </a>
      </div>
      <div className='project-container'>
        <img
          alt="swiss renting app booking system"
          src={swissrentingGIF}

        />
        <p className="legend legend-three">Swiss Renting</p>
      </div>
    
    </Carousel>
  );
  
