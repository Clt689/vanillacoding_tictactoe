import Lottie from "lottie-react";
import winAnimation from "./assets/winAnimation.json";
import { twJoin } from "tailwind-merge";
import player1Image from "./assets/player1.png";
import player2Image from "./assets/player2.png";
import { RotateCcw } from "lucide-react";

const squares = [
  "player1",
  "player2",
  null,
  "player1",
  null,
  null,
  "player1",
  null,
  null,
];

export default function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="mockup-browser border-base-300 border w-[600px] bg-primary">
        <div className="mockup-browser-toolbar">
          <div className="input">
            <span className="font-bold">Tic Tac Toe</span>
          </div>
        </div>
        <div className="border-base-300 flex flex-col justify-center items-center px-4 py-16 bg-base-100">
          <div className="flex justify-between items-center w-96">
            <div className="w-40 h-40 relative">
              <Lottie className="scale-125" animationData={winAnimation} />
              <img
                src={player1Image}
                className={twJoin("absolute top-0 z-10", "scale-100")}
              />
            </div>
            <RotateCcw />
            <div className="w-40 h-40 relative">
              <img
                src={player2Image}
                className={twJoin("absolute top-0 z-10", "scale-50")}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 grid-rows-3 gap-1 bg-primary border-4 border-primary w-96 h-96">
            {squares.map((square) => {
              return (
                <div className="bg-base-100">
                  {(() => {
                    switch (square) {
                      case "player1":
                        return <img src={player1Image} />;
                      case "player2":
                        return <img src={player2Image} />;
                      default:
                        return null;
                    }
                  })()}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
