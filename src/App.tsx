import type { Component } from "solid-js";

import logo from "./assets/magicaldoor.png";

const App: Component = () => {
  return (
    <div class="text-center">
      <header class="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white text-3xl">
        <img src={logo} class="animate-spin h-[40vmin] pointer-events-none" alt="logo" />
        <span>MagicDoor.com</span>
      </header>
    </div>
  );
};

export default App;
