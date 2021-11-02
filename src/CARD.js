import React, { useEffect } from 'react'
import './card.css'
import AOS from 'aos'
import "aos/dist/aos.css";

export default function CARD({forwardedRef, name, picture, pictureLength, description}) {
  
    // const images = picture.map((pic) => <img src = {pic.value} alt = {name + "image"}/>)
    // const images = [];

    // function showImages(){
    //   for(let i = 0; i < pictureLnegth; i++){
    //     <img src = {picture[i]} alt = {name = "image"} />
    //     console.log("woah: " + i)
    //   }
    //   console.log("length: " + pictureLength)
    // }

    // function showImages(){
    //   for(let i = 0;i < pictureLength;i++){
    //     <img src={images[i]} alt="" />
    //   }
    // }

    
    
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
          <div ref = {forwardedRef} className="card">
            <div className ="picture-container">{picture}</div>
            <div className="description-container">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facere omnis sunt dolor molestias ipsa. Aliquid, est blanditiis! Eveniet quibusdam corporis quo nesciunt unde sit veniam est impedit. Distinctio numquam quasi, vitae, aperiam minima sed aliquam atque ex adipisci eveniet animi asperiores vel sint quos error quod. Sed aspernatur, delectus optio velit totam temporibus ullam cupiditate, obcaecati error accusantium commodi recusandae omnis hic dicta. Fuga inventore corrupti, tempore velit voluptate tempora nulla adipisci earum architecto impedit harum praesentium qui aliquam porro, esse facilis vero. Excepturi sit quidem, voluptatum voluptates ad consequatur corrupti deserunt, esse, iusto unde odio. Quo, facere error.
            </div>
          </div>
        </>
    )
}

