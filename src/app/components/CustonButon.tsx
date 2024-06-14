'use client'
import { useSnapshot } from "valtio";

  import state from "../store"; 
import { getContrastingColor } from "../config/helpers";

interface Color {
  color: string; // Define the type of state.color property
}

interface CustomButtonProps {
  type: "filled" | "outline"; // Allowed button types
  title: string;
  customStyles?: string; // Optional custom CSS classes
  handleClick: () => void; // Function type for onClick handler
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  title,
  customStyles,
  handleClick,
}) => {
  const snap = useSnapshot<Color>(state); // Type cast for specific state type

  const generateStyle = (
    type: CustomButtonProps["type"]
  ): React.CSSProperties => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }

    // Handle default or invalid type (optional for robustness)
    return {}; // Or throw an error if strict type checking is desired
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
      
    >
      {title}
    </button>
  );
};

export default CustomButton;
