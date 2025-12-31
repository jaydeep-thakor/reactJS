import React from "react";

const Card = ({ castImg, realName, castName }) => {
// const Card = (props) => { {props.xyz}
  return (
    <div className="group relative w-80 rounded-[28px] p-[1.5px]
      bg-gradient-to-br from-red-900 via-red-700/60 to-black
      transition-all duration-700 hover:scale-[1.04]">

      {/* Ambient Glow */}
      <div className="absolute -inset-4 rounded-[32px] 
        bg-red-600/20 blur-3xl opacity-0 
        group-hover:opacity-100 transition-opacity duration-700"></div>

      <div className="relative flex flex-col items-center gap-5 rounded-[26px]
        bg-gradient-to-b from-black/95 to-black/85
        backdrop-blur-2xl p-8
        shadow-[0_30px_100px_rgba(0,0,0,0.8)]">

        {/* Avatar */}
        <div className="relative">
          <div className="h-40 w-40 rounded-full p-[2px]
            bg-gradient-to-tr from-red-900 via-red-600 to-red-400">
            <img
              src={castImg}
              alt={realName}
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          {/* Inner Red Pulse */}
          <div className="absolute inset-0 rounded-full
            bg-red-500/20 blur-xl opacity-60 animate-pulse"></div>
        </div>

        {/* Name */}
        <h2 className="text-2xl font-semibold tracking-wide text-white text-center">
          {realName}
        </h2>

        {/* Role */}
        <p className="text-sm tracking-[0.35em] uppercase text-red-400">
          {castName}
        </p>

        {/* Cinematic Divider */}
        <div className="relative h-[1px] w-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r 
            from-transparent via-red-600 to-transparent"></div>
        </div>

      </div>
    </div>
  );
};

export default Card;
