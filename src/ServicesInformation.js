import React from "react";

import './style.css'


const ServicesInformation = props=>{
    return(
        <div className="component col-lg-5 col-md-5 col-sm-12">
                <div className="content">
                <img src={props.imageSrc} alt="icon" />
                    <a className="author">
                        {props.service}
                    </a>
                    <div className="metadata">
                        {props.text}
                        ({props.time} mins)
                        
                    </div>
                </div>
            </div> 
    );
}

export default ServicesInformation;