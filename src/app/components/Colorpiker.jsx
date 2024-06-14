import  SketchPicker  from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const Colorpeaker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColor = {
          ['#fff ']
        }
        
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};
export default Colorpeaker;
