import React from 'react'
import { Player } from "@lottiefiles/react-lottie-player";
import lodingLottie from '../asset/lottie_anim/loading_lottie_animination.json'

export default function LoadingLottie() {
  return (
    <Player
    autoplay
    loop
    src={lodingLottie}
    style={{ height: "30rem", width: "100%" }}
  ></Player>
  )
}
