import { proxy } from 'valtio';

const state = proxy({
    current: null,
    isAuto:true,
    items: {
      laces: "#ffffff",
      mesh: "#78001E",
      caps: "#ffffff",
      inner: "#ffffff",
      sole: "#2D0914",
      stripes: "#ffffff",
      band: "#ffffff",
      patch: "#ffffff",
    },
    background: "#190158"
    });

export default state;