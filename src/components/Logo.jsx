import React from 'react'
import myLogo from '../images/myLogo.svg';

const Logo = ({ onClick }) => {
    return (
        <svg onClick={onClick} id="myLogo" className="mainIcon"/*  width="3rem" height="3rem" */ version="1.1" viewBox="0 0 68.157 79.226" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(-42.166 -100.49)">
                <g strokeWidth="1">
                    <path d="m74.655 100.49-7.7174 9.4165v23.447l-2.2386 3.2742h-4.1424v-18.936l-7.3499 8.9679v26.886l7.3499 8.9679v-18.936h4.1424l2.2386 3.2742v23.447l7.7174 9.4165v-34.935l-3.7558-4.6783 3.7558-4.6783z" />
                    <path d="m48.062 132.94-5.8498 7.1376h-0.04599l0.02273 0.0279-0.02273 0.0279h0.04599l5.8498 7.1376v-7.1934z" />
                    <path d="m78.264 100.88v11.226c2.3697 2.3743 4.6927 4.7955 5.1449 9.0873v37.82c-0.45224 4.2918-2.7752 6.713-5.1449 9.0873v11.226l21.114-25.762v-10.721l-8.0853 9.8888v-25.258l8.0853 9.8888v-10.721z" />
                    <path d="m104.43 132.94 5.8498 7.1376h0.046l-0.0227 0.0279 0.0227 0.0279h-0.046l-5.8498 7.1376v-7.1934z" />
                </g>
            </g>
        </svg>
    )
}

export default Logo
