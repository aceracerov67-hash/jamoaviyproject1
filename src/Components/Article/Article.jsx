import React, { useState } from 'react'
import "./Article.css"
import Mobile from "./images/mobile.png"
import Group from "./images/group.png"

const Article = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="article">
     <div className='container'>
        <div className='article__container'>
            <h1 className='title'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</h1>
             <ul className='article__list'>
                <h1 className='article__title'>Lorem ipsum.</h1>
                <p className='article__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p> 
                <img className='img' src={Group} alt="" />
                <img className='images' src={Mobile}alt="video"onClick={() => setOpen(true)}style={{ cursor: "pointer" }}/>
     {open && (
        <div className="modal">
          <div className="modal__content">
            <button onClick={() => setOpen(false)}>✖</button>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xP4Rrc5i4Mg"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

             </ul>

        </div>
     </div>
    </div>
  )
}

export default Article
