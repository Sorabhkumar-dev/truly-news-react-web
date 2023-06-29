import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import errorLottie from "../asset/lottie_anim/error_lottie_animination.json";

export default function ErrorLottie() {
  return (
    <Player
      autoplay
      loop
      src={errorLottie}
      style={{ height: "30rem", width: "100%" }}
    ></Player>
  );
}
