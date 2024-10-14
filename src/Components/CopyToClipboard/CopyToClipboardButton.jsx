import { useState, useEffect } from "react";

export default function CopyToClipboardButton({ CopyToClipboard, colorhex }) {
  const [isCopied, setIsCopied] = useState(false);

  const clickedCopy = () => {
    console.log("Color ID:", colorhex);
    setIsCopied(true);
    CopyToClipboard(colorhex);
  };

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return isCopied ? (
    <div>
      <button>SUCCESSFULLY COPIED ✅</button>
    </div>
  ) : (
    <div>
      <button onClick={clickedCopy}>COPY 🖨️ </button>
    </div>
  );
}
