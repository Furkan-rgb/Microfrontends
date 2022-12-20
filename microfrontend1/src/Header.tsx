import React from "react";

export default function Header() {
  return (
    <div className="text-3xl text-white bg-blue-500 p5 font bold">
      This Header is from Microfrontend 1
    </div>
  );
}

export function Calc({ number: number }) {
  return number * 3;
}

export const CalcT = (number: number) => {
  return number * 2;
};
