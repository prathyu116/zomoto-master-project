import React from 'react';
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

export const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (

        <RiArrowRightSLine
            className={className}
            style={{ ...style, top:"40%",right:"0%",color: "black", background: "white", width: "50px", height: "46px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", zIndex: "99", marginLeft: "-3%", padding: "10px" ,boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px "}}
            onClick={onClick}
        />
    );
}

export const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <RiArrowLeftSLine
            className={className}
            style={{ ...style, top:"40%",left:"0%",color: "black", background: "white", width: "50px", height: "46px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", zIndex: "99", marginLeft: "-3%", padding: "10px" ,boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px "}}
            onClick={onClick}
        />
    );
}
