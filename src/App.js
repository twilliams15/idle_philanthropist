import React from "react";
import { Buildings } from "./components/buildings";
import { Credits } from "./components/credits";
import { Display } from "./components/display";
import { Donate } from "./components/donate";
import { CounterProvider } from "./counter";
import "./styles.css";

export default function App() {
  return (
    <CounterProvider>
      <div className="w-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-green-800">
        <div className="w-full mx-auto py-16">
          <div className="bg-white px-6 py-4 my-3 w-3/4 mx-auto shadow rounded-md flex items-center">
            <div className="w-full text-center mx-auto ">
              <h1 className="text-3xl font-bold mb-4 text-gray-900">
                Idle Philanthropist
              </h1>
              <ul>
                <li className="p-3">
                  <Display />
                </li>
                <li className="p-3">
                  <Donate />
                </li>
                <li className="p-3">
                  <Buildings />
                </li>
              </ul>
              <Credits />
            </div>
          </div>
        </div>
      </div>
    </CounterProvider>
  );
}
