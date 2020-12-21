import React from "react";

export const hero = {
  height: 0,
  top: 0,
  setHeight: (currentHeight) => {
    hero.height = currentHeight;
  },
  setTop: (currentTop) => {
    hero.top = currentTop;
  },
};

const HeroContext = React.createContext(hero);

export default HeroContext;
