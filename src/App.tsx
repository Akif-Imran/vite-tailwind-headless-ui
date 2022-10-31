import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-row flex-1 justify-center">
      <p className="text-xl text-purple-900 font-bold">Controlled App</p>
    </div>
  );
}

export default App;
