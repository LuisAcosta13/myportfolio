import React from "react";
import CircularBar from "./CircularBar";
import { FaReact } from 'react-icons/fa'
import { SiRedux } from 'react-icons/si'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaNode } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { SiMaterialui } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import './tools.css'

export default function Tools(){
    const jsIcon = <TbBrandJavascript/>
    const reactIcon = <FaReact/>
    const reduxIcon = <SiRedux/>
    const muiIcon = <SiMaterialui/>
    const nodeIcon = <FaNode/>
    const expressIcon = <SiExpress/>
    const postgreIcon = <SiPostgresql/>

    return(
        <div className="toolsContainer">
            <h1>Estas son las principales herramientas que utilizo</h1>
            <span className='circularBar'>
                <CircularBar icon={jsIcon} value={90} title="Javascript"></CircularBar>
                {/* <p className="toolTitle">Javascript</p> */}
            </span>
            <span className='circularBar'>
                <CircularBar icon={reactIcon} value={90} title="React" ></CircularBar>
                {/* <div className="toolTitle">React</div> */}
            </span>
            <span className='circularBar'>
                <CircularBar icon={reduxIcon} value={80} title="Redux"></CircularBar>
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
                <CircularBar icon={postgreIcon} value={60} title="PostgreSQL"></CircularBar>
                {/* <div className="toolTitle">PostgreSQL</div> */}
            </span>
        </div>
    )
}