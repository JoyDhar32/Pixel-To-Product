import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  tshirtColor:'#060F30',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: '/images/AILogo.png',
  fullDecal: '/threejs.png',
});

export default state;