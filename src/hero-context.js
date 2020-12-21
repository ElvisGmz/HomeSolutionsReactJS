import React from "react";

export const hero = {
  height: 0,
  setHeight: (currentHeight) => {
    hero.height = currentHeight;
  },
};

const HeroContext = React.createContext(hero);

export default HeroContext;
