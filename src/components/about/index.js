import React from 'react';
import './styles.css';

// let navs;

export default function About(){

    return (
        <div className="nav-item about">
             
            <h3>I'm a developer based in Colombo</h3>

            <p>
                <b>I do front end and back end.</b>
                Been doing front end for more than a year now. And enjoy Javascript.
            </p>

            <p>
            So if you're interested contact me.
            </p>
            <p>
            While you're here checkout my algorithms section.
            </p>

        </div>
    )
}

// window.addEventListener('load', 
// () => {
//     selected();
//     deselect();
// });

// function selected(){

//     navs = document.querySelectorAll('nav span');

//     navs[0].style.boxShadow = 'none';

//     navs[0].style.backgroundColor = 'lightgray';

// }

// function deselect(){

//     for(let i = 0; i < navs.length; i++){
//         console.log(navs[i]);
//     }
    
// }
