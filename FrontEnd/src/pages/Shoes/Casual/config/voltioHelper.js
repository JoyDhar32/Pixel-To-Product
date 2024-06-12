import { proxy } from 'valtio';

const state = proxy({
    current: null,
    isAuto:true,
    items: {
      laces: "#ffffff",
      mesh: "#ffffff",
      caps: "#ffffff",
      inner: "#ffffff",
      sole: "#ffffff",
      stripes: "#ffffff",
      band: "#ffffff",
      patch: "#ffffff",
    },
    background: "#190158"
    });

export default state;