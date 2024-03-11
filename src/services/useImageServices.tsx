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
  return {handleHover, handleMouseLeave, imageChanged}
}
