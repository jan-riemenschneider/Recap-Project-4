import ColorInput from "../colorInput/colorInput";
import "./AddColorForm.css";

export default function AddColorForm({ onAddNewColor }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddNewColor(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input type="text" name="role" />

      <label htmlFor="hex">Hex</label>
      <ColorInput id="hex" />

      <label htmlFor="contrastText">Contrast Text</label>
      <ColorInput id="contrastText" />

      <button type="submit">ADD COLOR</button>
    </form>
  );
}
