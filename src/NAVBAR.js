import React, { useState, useEffect } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export default function NAVBAR() {

    let smallNavContainer = null
    let bigNavContainer = null
    let projectsLinkSmall = null
    let aboutLinkSmall = null
    let contactLinkSmall = null

    const [currentPath, setcurrentPath] = useState()
    const [waiting, setwaiting] = useState(false)
    const [linkClick, setlinkClick] = useState(false)

    function currentPage(path){
        projectsLinkSmall = document.getElementById('projects')
        aboutLinkSmall = document.getElementById('about')
        contactLinkSmall = document.getElementById('contact')
        if(path === '/pages/PROJECTS.js'){
            projectsLinkSmall.classList.add('navbar-link-active')
            aboutLinkSmall.classList.remove('navbar-link-active')
            contactLinkSmall.classList.remove('navbar-link-active')
        }
        if(path === '/pages/ABOUT.js'){
            projectsLinkSmall.classList.remove('navbar-link-active')
            aboutLinkSmall.classList.add('navbar-link-active')
            contactLinkSmall.classList.remove('navbar-link-active')
        }
        if(path === '/pages/CONTACT.js'){
            projectsLinkSmall.classList.remove('navbar-link-active')
            aboutLinkSmall.classList.remove('navbar-link-active')
            contactLinkSmall.classList.add('navbar-link-active')
        }
    }

    function homeNav(path){
        if(path === "/"){
            smallNavContainer.classList.remove('display-nav')
            bigNavContainer.classList.add('display-nav')
            console.log("smallNav: " + smallNavContainer.classList)
            console.log("bigNav: " + bigNavContainer.classList)
            // console.log("path: " + currentPath)
        }
        else{
            smallNavContainer.classList.add('display-nav')
            bigNavContainer.classList.remove('display-nav')
            console.log("smallNav: " + smallNavContainer.classList)
            console.log("bigNav: " + bigNavContainer.classList)
            // console.log("path: " + currentPath)
        }
    }

    useEffect(() => {
        // smallNavContainer = document.querySelector('.small-nav-container')
        // bigNavContainer = document.querySelector('.big-nav-container')
        setcurrentPath(window.location.pathname)
        // console.log(currentPath)
        // setlinkClick(false)
    }, [])

    useEffect(() => {
        if(currentPath != null){
            currentPage(currentPath)

            smallNavContainer = document.querySelector('.small-nav-container')
            bigNavContainer = document.querySelector('.big-nav-container')
            console.log(currentPath)
            homeNav(currentPath)
        }
    }, [currentPath])

    return (
        <>
            <div className = "small-nav-container" >
                <div className = "left-container">
                    <Link to = "/" target = "_parent" className = "navbar-link navbar-link-small">Home</Link>
                </div>
                <div className="right-container">
                    <div className = "logo">Logo</div>
                    <Link to = "/pages/PROJECTS.js" target = "_parent" id = "projects" className = "navbar-link navbar-link-small">Projects</Link>
                    <Link to = "/pages/ABOUT.js" target = "_parent" id = "about" className = "navbar-link navbar-link-small">About</Link>
                    <Link to = "/pages/CONTACT.js" target = "_parent" id = "contact" className = "navbar-link navbar-link-small">Contact</Link>
                </div>
            </div>
            <div className="big-nav-container" >
                {/* <div className = "left-container">
                    <Link to = "/" target = "_parent" className = "navbar-link">Home</Link>
                </div>
                <div className="right-container">
                    <div>Logo</div>
                    <Link to = "/pages/PROJECTS.js" target = "_parent" className = "navbar-link">Projects</Link>
                    <Link to = "/pages/ABOUT.js" target = "_parent" className = "navbar-link" >About</Link>
                    <Link to = "/pages/CONTACT.js" target = "_parent" className = "navbar-link" >Contact</Link>
                </div> */}
                <div className="welcome-message-container">
                    <h1 className = "welcome-message">Welcome!</h1>
                </div>
                <div className="top-hider">
                    <Link to = "/pages/ABOUT.js" target = "_parent" className = "navbar-link navbar-link-big">About</Link>
                </div>
                <div className="middle-hider-2">
                    <Link to = "/pages/PROJECTS.js" target = "_parent" className = "navbar-link navbar-link-big">Projects</Link>
                </div>
                <div className="middle-hider-1">
                    <Link to = "/pages/CONTACT.js" target = "_parent" className = "navbar-link navbar-link-big">Contact</Link>   
                </div>
                <div className="bottom-hider">
                </div>
            </div>
        </>
    )
}
