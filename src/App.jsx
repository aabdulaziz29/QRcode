import { useState } from "react";
import QRCode from "react-qr-code";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="container mx-auto w-2/4">
      <h1 className="py-4">QR code content</h1>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter the URL for the QR code"
        className="border border-gray-300 w-full h-8 p-4 font-light text-sm focus:outline-none focus:border-gray-600"
      />
      <QRCode className="mx-auto mt-20" value={inputValue} />
    </div>
  );
}

export default App;
