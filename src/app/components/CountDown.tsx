'use client';

import Countdown from "react-countdown";

const endingDate = new Date("2023-12-25")

export default function CountDown() {
  return (
    <Countdown
      className="font-bold text-5xl text-yellow-300"
      date={endingDate}
    />
  );
}
