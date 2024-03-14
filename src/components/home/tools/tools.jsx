import React from "react";
import CircularBar from "./CircularBar";
import { FaReact } from 'react-icons/fa'
import { SiRedux } from 'react-icons/si'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaNode } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { SiMaterialui } from 'react-icons/si'
import { DiSass } from "react-icons/di";
import { DiWordpress } from "react-icons/di";
import { DiSymfony } from "react-icons/di";
import { DiDocker } from "react-icons/di";

import './tools.css'

export default function Tools(){
    const jsIcon = <TbBrandJavascript/>
    const reactIcon = <FaReact/>
    const reduxIcon = <SiRedux/>
    const muiIcon = <SiMaterialui/>
    const nodeIcon = <FaNode/>
    const expressIcon = <SiExpress/>
    const diSass = <DiSass/>
    const diWordpress = <DiWordpress/>
    const diSymfony = <DiSymfony/>
    const diDocker = <DiDocker/>

    return(
        <div className="toolsContainer">
            <h1>These are my everyday tools</h1>
            <span className='circularBar'>
                <CircularBar icon={jsIcon} value={100} title="Javascript"></CircularBar>
                {/* <p className="toolTitle">Javascript</p> */}
            </span>
            <span className='circularBar'>
                <CircularBar icon={diSass} value={100} title="Sass"></CircularBar>
                {/* <div className="toolTitle">Sass</div> */}
            </span>
            <span className='circularBar'>
                <CircularBar icon={reactIcon} value={90} title="React" ></CircularBar>
                {/* <div className="toolTitle">React</div> */}
            </span>
            <span className='circularBar'>
                <CircularBar icon={reduxIcon} value={70} title="Redux"></CircularBar>
                {/* <div className="toolTitle">Redux</div> */}
            </span>
            <span className='circularBar'>
                <CircularBar icon={muiIcon} value={70} title="Material UI"></CircularBar>
                {/* <div className="toolTitle">Material UI</div> */}
            </span>
            <span className='circularBar'>
                <CircularBar icon={nodeIcon} value={80} title="Node.js"></CircularBar>
                {/* <div className="toolTitle">Node.js</div> */}
            </span>
            <span className='circularBar'>
                <CircularBar icon={expressIcon} value={80} title="Express.js"></CircularBar>
                {/* <div className="toolTitle">Express.js</div> */}
            </span>
            <span className='circularBar'>
                <CircularBar icon={diWordpress} value={60} title="Wordpress"></CircularBar>
            </span>
            <span className='circularBar'>
                <CircularBar icon={diSymfony} value={40} title="Symfony"></CircularBar>
            </span>
            <span className='circularBar'>
                <CircularBar icon={diDocker} value={30} title="Docker"></CircularBar>
            </span>
        </div>
    )
}