import React from 'react';
import './styles.css';

export default function Header(){
    return (
        <div>
        <div className="h-svg">
            <svg 
            //onClick={() => {
                // const svg = document.querySelector('svg');
                // if(svg.style.animation === '1s ease 0s infinite normal none running rotateD'){

                //     let transform;

                //     try{
                //         const st = window.getComputedStyle(svg, null);
                //         transform = st.getPropertyValue("-webkit-transform") ||
                //         st.getPropertyValue("-moz-transform") ||
                //         st.getPropertyValue("-ms-transform") ||
                //         st.getPropertyValue("-o-transform") ||
                //         st.getPropertyValue("transform") ||
                //         "fail...";
                //     }
                //     catch (e) {
                //         console.error(e);
                //     }

                //     if(transform !== undefined){
                //         transform = transform.replace('matrix(', ''); transform = transform.replace(')', '');

                //         const angles = transform.split(',');

                //         const a = Math.sqrt(angles[1]*angles[1]);

                //         const degs = Math.round(Math.asin(a) * 180/Math.PI);

                //         console.log(angles[1], degs, a);

                //         svg.style.transform = `rotate(${degs}deg)`;

                //     }

                //     svg.style.animation = 'none';
                // }
                // else{
                //     svg.style.animation = 'rotateD 1s infinite';
                // }

            //}}
             width="50" height="50" viewBox="0 0 137 126" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M53.5 99L35 84L53.5 61L74 35L93 47L53.5 99Z" fill="#FFC7C7" stroke="black"/>
            <path d="M135 72L95 125L68 116L93.5 82.5L119 50L135 72Z" fill="#DC143C" stroke="black"/>
            <path d="M61 2L122 40L135 72L73 34L61 2Z" fill="#DC143C" stroke="black"/>
            <path d="M2 89L34 84L95 125H55L2 89Z" fill="#DC143C" stroke="black"/>
            </svg>
        </div>
        <div className="header">
             
            <h3>Hi, I'm</h3>
            <h1>Dinula.</h1>
           
        </div>
        </div>
    )
}