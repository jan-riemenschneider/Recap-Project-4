import { useState } from "react";
import "./DeleteButton.css";

export default function DeleteButton({ colorId, deleteColorById }) {
  const [isConfirm, setIsConfirm] = useState(false);

  const handleDeleteClick = () => {
    setIsConfirm(true);
  };

  const handleConfirmDelete = () => {
    deleteColorById(colorId);
    setIsConfirm(false);
  };

  const handleCancel = () => {
    setIsConfirm(false);
  };

  return (
    <div>
      {isConfirm ? (
        <div>
          <p className="color-card-highlight">Are you sure?</p>
          <button onClick={handleConfirmDelete}>Yes, delete!</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <button onClick={handleDeleteClick}>DELETE</button>
      )}
    </div>
  );
}
