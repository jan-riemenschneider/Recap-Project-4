import { useState } from "react";
import ChangeColorForm from "./ChangeColorForm";

export default function ChangeColor({ color, handleColorUpdate }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleEditClick = () => {
    setIsOpening(true);
  };

  const handleCancelClick = () => {
    setIsOpening(false);
  };

  return (
    <div>
      {isOpening ? (
        <div>
          <ChangeColorForm
            initialData={color}
            handleColorUpdate={handleColorUpdate}
          />
          <button onClick={handleCancelClick}>CANCEL</button>
        </div>
      ) : (
        <button onClick={handleEditClick}>EDIT</button>
      )}
    </div>
  );
}
