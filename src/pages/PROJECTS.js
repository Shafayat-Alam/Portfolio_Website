import React, { useState, useEffect, useRef }from 'react'
import './projects.css'
import CARD from '../CARD.js'
import db11 from '../assets/db11.jpg'
import FerrariF12 from '../assets/FerrariF12.jpg'
import Kobe from '../assets/Kobe.jpg'
import Messi from '../assets/Messi.jpg'

export default function PROJECTS() {

    const cardContainer = useRef()
    const card = useRef()
    const firstCard = useRef()
    // const [counter, setcounter] = useState(1)
    let counter = 0
    var size;

    // const [firstProject, setfirstProject] = useState([db11, Kobe])
    const firstProject = [
        <img src = {db11}/>,
        <img src = {Messi}/>
    ]
    const secondProject = [
        <img src={FerrariF12} />,
        <img src={Kobe} />
    ]
    // const [secondProject, setsecondProject] = useState([FerrariF12, Messi])

    useState(() =>{
        // if(cards.current != null){
            // size = cards.current
            // console.log('not null')
        // }
        console.log(counter)
    }, [])

    useEffect(() => {
        console.log("prev counter: " + counter)
    }, [counter])

    function rightButtonClickHandle(){
        console.log("counter: " + counter)
        if(counter >= 3) { return }
        size = card.current.offsetWidth;
        // cardContainer.style.transition = "transform 0.4s ease-in-out";
        cardContainer.current.style.transition = "transform 0.4s ease-in-out"
        // setcounter(prevCount => prevCount + 1)
        counter++
        console.log("counter begin: " + counter)

        // cardContainer.style.transform = "translate('" + (size * counter) + "'px)"\
        // setTimeout(() =>{
            cardContainer.current.style.transform = "translateX(" + (-size * counter) + "px)"
            console.log("end Counter: " + counter)
        // }, 1000)
    }

    function leftButtonClickHandle(){
        console.log("counter: " + counter)
        if(counter <= 0) { return } 
        size = card.current.offsetWidth;
        // cardContainer.style.transition = "transform 0.4s ease-in-out";
        cardContainer.current.style.transition = "transform 0.4s ease-in-out"
        // setcounter(prevCount => prevCount - 1)
        counter--
        console.log("counter begin: " + counter)
        // cardContainer.style.transform = "translate('" + (size * counter) + "'px)"\
        cardContainer.current.style.transform = "translateX(" + (-size * counter) + "px)"
        console.log("end Counter: " + counter)
    }

    return (
        <>
            <div className="container">
                <button className = "button left-button" onClick = {leftButtonClickHandle}></button>
                <div className="carousal-container">
                    <div ref = {cardContainer} className="card-container">
                        <CARD forwardedRef = {card} picture = {firstProject} pictureLength = {firstProject.length} description = {'Aston Martin db11'} className = "card"/>
                        <CARD forwardedRef = {card} picture = {secondProject} pictureLegnth = {secondProject.length} description = {'Ferrari F11'} className = "card"/>
                        <CARD forwardedRef = {card} picture = {firstProject} pictureLegnth = {firstProject.length} description = {'Aston Martin db12'} className = "card"/>
                        <CARD forwardedRef = {card} picture = {secondProject} pictureLegnth = {secondProject.length} description = {'Ferrari F12'} className = "card"/>
                     </div>
                </div>
                <button className="button right-button" onClick = {rightButtonClickHandle}></button>
            </div>
        </>
    )
}
