import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import AddColorForm from "./Components/AddColorForm/AddColorForm";
import { nanoid } from "nanoid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  const addNewColor = (newColor) => {
    const newColorWithId = { id: nanoid(), ...newColor };
    setColors([newColorWithId, ...colors]);
  };

  const deleteColorById = (colorId) => {
    const updatedColors = colors.filter((color) => color.id !== colorId);
    setColors(updatedColors);
  };

  const handleColorUpdate = (colorId, updatedColor) => {
    setColors((previousState) =>
      previousState.map((color) =>
        color.id === colorId ? { ...color, ...updatedColor } : color
      )
    );
  };

  async function CopyToClipboard(colorhex) {
    try {
      await navigator.clipboard.writeText(colorhex);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <h1
        style={{
          backgroundImage:
            "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontSize: "48px",
          textAlign: "center",
        }}
      >
        Theme Creator
      </h1>
      <AddColorForm onAddNewColor={addNewColor} />
      {colors.map((color) => (
        <Color
          key={color.id}
          color={color}
          deleteColorById={deleteColorById}
          handleColorUpdate={handleColorUpdate}
          CopyToClipboard={CopyToClipboard}
        />
      ))}
    </>
  );
}

export default App;
