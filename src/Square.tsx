// square라는 props로 부터 값을 받아서 player1, player2를 보여주는 역할의 파일
import player1Image from "./assets/player1.png";
import player2Image from "./assets/player2.png";

interface SquareProps {
  square: string | null;
  click: () => void;
}

export default function Square(props: SquareProps) {
  const { square, click } = props;
  return (
    <div className="bg-base-100" onClick={click}>
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
}
