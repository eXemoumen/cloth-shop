// tabs
import Swatch from "../assets/swatch.png";
import fileIcon from "../assets/file.png";
import ai from "../assets/ai.png";
import logoShirt from "../assets/logo-tshirt.png";
import stylishShirt from "../assets/stylish-tshirt.png";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: Swatch.src,
  },
  {
    name: "filepicker",
    icon: fileIcon.src,
  },
  {
    name: "aipicker",
    icon: ai.src,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt.src,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt.src,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
