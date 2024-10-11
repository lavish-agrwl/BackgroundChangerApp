import { useState } from "react";
function App() {
  const [color, setColor] = useState("black");

  function Button({ colour }) {
    return (
      <button
        onClick={() => setColor(colour)}
        className="rounded-lg px-4 py-2 border-2 border-white"
        style={{ background: colour }}
      >
        {colour}
      </button>
    );
  }

  return (
    <div
      className="w-full h-screen text-white"
      style={{ backgroundColor: color }}
    >
      <h1 className="p-4 text-4xl text-center underline">Background Changer</h1>
      <div className="flex flex-wrap justify-center fixed bottom-16 w-1/2 left-1/4 m-2  px-4 py-2 gap-4 rounded-xl">
        <Button colour="Red" />
        <Button colour="Green" />
        <Button colour="Blue" />
        <Button colour="Black" />
        <Button colour="Magenta" />
        <Button colour="Purple" />
        <Button colour="Orange" />
        <Button colour="Pink" />
        <Button colour="Teal" />
        <Button colour="Grey" />
      </div>
    </div>
  );
}

export default App;
