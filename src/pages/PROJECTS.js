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
import Matter1 from '../assets/Matter 1.png'
import Matter2 from '../assets/Matter 2.png'
import WindowBlindController1 from '../assets/Window Blind Servo 1.png'
import WindowBlindController2 from '../assets/Window Blind Servo 2.png'




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
        <img src={Matter1} />,
        <img src={Matter2} />
    ]

    const sixthProject = [
        <img src="" alt="" />
    ]

    const seventhProject = [
        <img src={WindowBlindController1} />,
        <img src={WindowBlindController2} />
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
        if(counter >= 5) { return }
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
                            "Green Web is a Progressive Web App(PWA) that I made to spread awareness about postive environment practices. It is a app that is hooked onto firebase, a cloud database service, that let me store data from users in the cloud. Since the data is in the cloud, users can see eachother's data that they put down. This lets Geen Web be an information hub for people to visit to browse through practical daily life postiive environmental practices and also contribute to the information hub. It also has a responsive UI that responds to the screen-size of the user's device to provide the user a comfortable UI no matter what device the user may choose to use the app.*** Here is the link to the app: https://greenerweb.netlify.app/ ***"
                        } className = "card"/>
                        <CARD forwardedRef = {card} picture = {secondProject} pictureLegnth = {secondProject.length} description = {
                            "Last year, FIRST robotics was a little different. We had three different parts to the competition and one of the parts was the Innovation Challenge were we had to come up with an innovation that can help with the physical and/or mental health of people during the pandemic. We came up with an innovative desk that gets you moving through foot pedals while you work. We did extensive research on physical and mental health problems associated with prolonged idleness, and found that movement can do wonders for both your physical and mental health. Since the pandemic had everyone sitting at home or decrease movement in some way, our desk helps you get small movement throughout while you work that can have drastic effects on a person's health. The desk extends up and the seat fold to the side to transform into a standing desk, further decreasing the time people spend sitting. After research and product, along with other members of the robotics team I put together a pitch presentation disaplying the problem, solution, product, business model, and potential impact.\n  ***Please scroll to view all parts of the slide presentation.***"
                        } className = "card"/>
                        <CARD forwardedRef = {card} picture = {seventhProject} pictureLength = {seventhProject.length} description = {
                            "The furniture is my room is positioned in a way that makes it inconveninent to open/close my window blinds. I was thinkning to make a system using an arduino nano that can pull the strings for me to open/close my window blinds without me inconveniently getting access to them. So I 3d printed a casing for a servo and a shaft for the servo that act as a pulley-like structure to wind/unwind strings to pull either of the strings to open/close the window blinds. I connected the sevo to an arduino nano and wrote a small program to control the servo using serial communication. However, I cannot just use my phone to control the servo so I plan to hook up a backend firebase database to a simple react app and host it using netlify to send data to the arduino from a react app on my phone."
                        } className = "card"/>
                        <CARD forwardedRef = {card} picture = {thirdProject} pictureLegnth = {thirdProject.length} description = {
                            'This is one of the posters I put together working with some other members of the SPARK program. This poster was resaerch done the chemical composition of ceramic samples found in different quarry sites across Long Island. Chemical compoisition studies such as this helps Archaeologists study really old native groups of people indigenous to Long Island. In this project each of the members did literature review/background research before putting the samples through a beamline and then analying data with a program called IDL to find their chemical composition and elemental variations. After data analysis, we put together graphs to showcase our findings. '
                        } className = "card"/>
                        <CARD forwardedRef = {card} picture = {fourthProject} pictureLegnth = {fourthProject.length} description = {
                            'This is one of the posters members of the SPARK program and I put together to showcase our findings. We had steatite samples from several quarry sites accross Long Island, and found their chemical composition by putting the samples through the XPD beamlone(courtesy of BNL) and using Dioptas. Then we matched each sample to one of the two parent quarry sites to find the origin of each steatite sample.'
                        } className = "card"/>
                        <CARD forwardedRef = {card} picture = {fifthProject} pictureLegnth = {fifthProject.length} description = {
                            "'Matter' is a Progressive Web App(PWA) with experimental physics simulations catered towards AP Physics students. When I took AP Physics 1 last year during the pandemic, it was difficult for me to get a good understanding of something of the concepts because I could not visualize or see them in action. As I was struggling taking the class at home, I decided to scourge the internet for help but I found it much easier to make my own simulations at home drawing pictures on paper. Although, I was still struggling with Physics, this was an oppurtunity for me to work on a PWA to help visual learners like me sturggling with AP Physics. Unfortunately, this is still in development. It is a big project so it would take some time. It should be done by the end of this year. "
                        } className = "card"/>
                    </div>
                </div>
                <button className="button right-button" onClick = {rightButtonClickHandle}></button>
            </div>
        </>
    )
}
