import { useState } from "react";

export default function ImageServices() {
  const [imageChanged, setImageChanged] = useState(false);
  const handleHover = () => {
    if (!imageChanged) {
      setImageChanged(true);
    }
  };

  const handleMouseLeave = () => {
    setImageChanged(false);
  };

  const handleClick = () => {
    window.open("https://wa.link/ro0439", "_blank");
  };

  return {handleHover, handleMouseLeave, handleClick, imageChanged}
}
