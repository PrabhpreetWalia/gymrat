import React from "react";

function Barbell() {
  return (
    <svg
      fill="#000000"
      width="800px"
      height="800px"
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2">
        <rect x="56" y="56" width="40" height="144" rx="8" />
      </g>
      <g opacity="0.2">
        <rect x="160" y="56" width="40" height="144" rx="8" />
      </g>
      <path d="M248,120h-8V88a16.01833,16.01833,0,0,0-16-16H208V64a16.01833,16.01833,0,0,0-16-16H168a16.01833,16.01833,0,0,0-16,16v56H104V64A16.01833,16.01833,0,0,0,88,48H64A16.01833,16.01833,0,0,0,48,64v8H32A16.01833,16.01833,0,0,0,16,88v32H8a8,8,0,0,0,0,16h8v32a16.01833,16.01833,0,0,0,16,16H48v8a16.01833,16.01833,0,0,0,16,16H88a16.01833,16.01833,0,0,0,16-16V136h48v56a16.01833,16.01833,0,0,0,16,16h24a16.01833,16.01833,0,0,0,16-16v-8h16a16.01833,16.01833,0,0,0,16-16V136h8a8,8,0,0,0,0-16ZM32,168V88H48v80Zm56,24H64V64H88l.00488,63.90088C88.00439,127.93457,88,127.9668,88,128c0,.03369.00439.06592.00488.09912l.00489,63.90039Zm104,0H168V64h24l.001,15.9751L192,80l.00146.0249.00733,95.80225c-.00147.0581-.00879.11426-.00879.17285s.00732.11523.00879.17383l.001,15.82568Zm32-24H208V88h16Z" />
    </svg>
  );
}

export default Barbell;