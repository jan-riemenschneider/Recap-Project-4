import ChangeColor from "../changeColor/ChangeColor";
import CheckColorAccessibility from "../checkColorAccessibility/checkColorAccessibility";
import CopyToClipboardButton from "../CopyToClipboard/CopyToClipboardButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import "./Color.css";

export default function Color({
  color,
  deleteColorById,
  handleColorUpdate,
  CopyToClipboard,
}) {
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <div className="Button">
        <CopyToClipboardButton
          CopyToClipboard={CopyToClipboard}
          colorhex={color.hex}
        />
        <ChangeColor color={color} handleColorUpdate={handleColorUpdate} />
        <DeleteButton colorId={color.id} deleteColorById={deleteColorById} />
      </div>
      <CheckColorAccessibility
        Hex={color.hex}
        ContrastText={color.contrastText}
      />
    </div>
  );
}
