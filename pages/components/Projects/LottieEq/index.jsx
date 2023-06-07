import React from 'react'
import Lottie from 'react-lottie-player'
import eqWhite from './eq-white.json'
import eqAmber from './eq-amber.json'

export default function LottieEq({ variant, ...props }) {
    return (
        <Lottie {...props}
            loop play
            animationData={{
                "amber": eqAmber,
                "white": eqWhite
            }[variant]}
        />
    )
}