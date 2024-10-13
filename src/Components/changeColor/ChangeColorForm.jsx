import ColorInput from "../colorInput/colorInput";

export default function ChangeColorForm({ initialData, handleColorUpdate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    handleColorUpdate(initialData.id, data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input type="text" name="role" defaultValue={initialData.role} />

      <label htmlFor="hex">Hex</label>
      <ColorInput id="hex" defaultValue={initialData.hex} />

      <label htmlFor="contrastText">Contrast Text</label>
      <ColorInput id="contrastText" defaultValue={initialData.contrastText} />

      <button type="submit">Change COLOR</button>
    </form>
  );
}
