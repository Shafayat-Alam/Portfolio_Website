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
            <div className="description-container">{description}</div>
          </div>
        </>
    )
}

