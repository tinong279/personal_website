import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h2 className="text-3x1 font-bold text-blue-600">
          Welcome to my site!
        </h2>
        <p className="mt-4 text-grat-600">
          This is a beautiful Tailwind-powered portfolio
        </p>
      </main>
    </div>
  );
}

export default App;
