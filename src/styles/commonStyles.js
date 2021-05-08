// Colors
export const Grey = '#666666';
export const VL_Grey = '#EEEDF2'; 
export const White = '#FFFFFF';
export const L_Grey = '#D8D7DE';
export const Black = '#000000';
export const Purple = '#8166D1'
// Font-Family
export const FF_Neuton = "Neuton";
export const FF_Montserrat = "Montserrat";
// FONT SIZE
export const FS_15 = 15;
export const FS_18 = 18;
export const FS_24 = 24;
export const FS_36 = 36;
export const FS_46 = 46;
// FONT WEIGHT
export const FW_NM_300 = 300;
export const FW_NM_400 =400;
export const FW_NM_500 = 500;

//SHADOW
export const BX_Shadow = " 0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12)";

// Positions

export const POSITION_ABS = "absolute";

// For Responsive Design, creating breakpoints of all devices
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

// based on size creating device
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  ipad: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};


