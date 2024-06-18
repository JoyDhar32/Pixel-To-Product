import { proxy } from 'valtio';

const state = proxy({
    current: null,
    isAuto:true,
    items: {
      material_grund: "#ffffff",
      nike_logga: "#78001E",
      baksida_logga: "#ffffff",
      framsida: "#ffffff",
      verdel: "#2D0914",
      framsida_vre: "#ffffff",
      sko_sula_underdel: "#ffffff",
      sko_sula_sida: "#ffffff",
      sko_sula_framifrn: "#ffffff",
      metall_svart: "#78001E",
      "material_006": "#ffffff",
      "material_004": "#ffffff",
      "material_001": "#2D0914",
      Material: "black",
      "Material.003": "blue",
      sula_insida: "#ffffff",

    },
    background: "#190158"
    });

export default state;