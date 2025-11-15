import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[hsl(0,0%,12%)] h-[560px] w-[350px] p-8 rounded-xl">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <img
            src="/images/avatar-jessica.jpeg"
            alt="Jessica"
            className="rounded-full w-[150px] h-[150px]"
          />
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <h1>Jessica Randall</h1>
            <p className="text-[hsl(75,94%,57%)] font-medium">London, United Kingdom</p>
          </div>
          <p>"Front-end developer and avid reader."</p>
        </div>
        <div className="flex flex-col gap-2 w-full mt-[10px]">
          <a className="block" href="https://github.com" target="_blank">
            <button className="bg-[hsl(0,0%,20%)] w-full">GitHub</button>
          </a>
          <a href="https://frontendmentor.io" target="_blank">
            <button className="bg-[hsl(0,0%,20%)] w-full">
              Frontend Mentor
            </button>
          </a>
          <a href="https://linkedin.com" target="_blank">
            <button className="bg-[hsl(0,0%,20%)] w-full">LinkedIn</button>{" "}
          </a>
          <a href="https://twitter.com" target="_blank">
            <button className="bg-[hsl(0,0%,20%)] w-full">Twitter</button>
          </a>
          <a href="https://instagram.com" target="_blank">
            <button className="bg-[hsl(0,0%,20%)] w-full">Instagram</button>
          </a>
        </div>
      </div>

    </>
  );
}

export default App;
