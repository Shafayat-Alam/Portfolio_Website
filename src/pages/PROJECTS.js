import React, { useState, useEffect, useRef }from 'react'
import './projects.css'
import CARD from '../CARD.js'

import Innovation1 from '../assets/Innovation 1.png'
import Innovation2 from '../assets/Innovation 2.png'
import Innovation3 from '../assets/Innovation 3.png'
import Innovation4 from '../assets/Innovation 4.png'
import Innovation5 from '../assets/Innovation 5.png'
import Innovation6 from '../assets/Innovation 6.png'
import Innovation7 from '../assets/Innovation 7.png'
import Innovation8 from '../assets/Innovation 8.png'
import GreenWeb1 from '../assets/Green Web 1.png'
import GreenWeb2 from '../assets/Green Web 2.png'
import SPARKCeramics from '../assets/SPARK Ceramics.png'
import SPARKCeramicsSamplePrep from '../assets/SPARK Ceramics Sample Prep.png'
import SPARKSteatite from '../assets/Steatite Poster.png'
import SPARKSteatiteData from '../assets/SPARK Steatite Data.png'



export default function PROJECTS() {

    const cardContainer = useRef()
    const card = useRef()
    const firstCard = useRef()
    // const [counter, setcounter] = useState(1)
    let counter = 0
    var size;
    // const [firstProject, setfirstProject] = useState([db11, Kobe])
    const firstProject = [
        <img src = {GreenWeb1}/>,
        <img src = {GreenWeb2}/>
    ]
    const secondProject = [
        <img src = {Innovation1}/>,
        <img src = {Innovation2}/>,
        <img src = {Innovation3}/>,
        <img src = {Innovation4}/>,
        <img src = {Innovation5}/>,
        <img src = {Innovation6}/>,
        <img src = {Innovation7}/>,
        <img src = {Innovation8}/>
    ]

    const thirdProject = [
        <img src={SPARKCeramics} />,
        <img src={SPARKCeramicsSamplePrep} />
    ]

    const fourthProject = [
        <img src={SPARKSteatite} />,
        <img src={SPARKSteatiteData} />
    ]

    const fifthProject = [
        <img src="" alt="" />
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
                        <CARD forwardedRef = {card} picture = {firstProject} pictureLength = {firstProject.length} description = {
                            "Green Web is a Progressive Web App(PWA) that I made to spread awareness about postive environment practices. It is a app that is hooked onto firebase, a cloud database service, that let me store data from users in the cloud. Since the data is in the cloud, users can see eachother's data that they put down. This lets Geen Web be an information hub for people to visit to browse through practical daily life postiive environmental practices and also contribute to the information hub. "
                        } className = "card"/>
                        <CARD forwardedRef = {card} picture = {secondProject} pictureLegnth = {secondProject.length} description = {
                            'Ferrari F11'
                        } className = "card"/>
                        <CARD forwardedRef = {card} picture = {thirdProject} pictureLegnth = {thirdProject.length} description = {
                            'Ferrari F11'
                        } className = "card"/>
                        <CARD forwardedRef = {card} picture = {fourthProject} pictureLegnth = {fourthProject.length} description = {
                            'Ferrari F11'
                        } className = "card"/>
                        
                    </div>
                </div>
                <button className="button right-button" onClick = {rightButtonClickHandle}></button>
            </div>
        </>
    )
}
