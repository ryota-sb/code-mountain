import { useEffect, useState } from "react";

const TypingAnimation: React.FC = () => {
  const [texts, setTexts] = useState<string[]>([
    "Welcome to Code Mountain.",
    "This is my portfolio site.",
  ]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [displayText, setDisplayText] = useState<string>("");
  const delay = 100;
  const eraseDelay = 25;
  const loopDelay = 1000;

  useEffect(() => {
    let loopCounter = 0;
    let eraseTimer: NodeJS.Timeout;
    let typeTimer: NodeJS.Timeout;
    let i = -1;

    // 文字を増やす処理
    const type = () => {
      typeTimer = setInterval(() => {
        if (i < texts[currentIndex].length - 1) {
          i++;
          setDisplayText(texts[currentIndex].substr(0, i + 1));
        } else {
          clearInterval(typeTimer);
          eraseTimer = setTimeout(
            () => {
              erase();
            },
            loopCounter < texts.length - 1 ? loopDelay : 0
          );
        }
      }, delay);
    };

    // 文字を減らす処理
    const erase = () => {
      eraseTimer = setInterval(() => {
        if (i > -1) {
          setDisplayText((prev) => prev.slice(0, -1));
          i--;
        } else {
          clearInterval(eraseTimer);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          loopCounter++;
          if (loopCounter <= texts.length - 1) {
            type();
          }
        }
      }, eraseDelay);
    };

    type();

    return () => {
      clearInterval(typeTimer);
      clearTimeout(eraseTimer);
    };
  }, [texts, currentIndex]);

  return (
    <div>
      <div className="flex">
        <h1 className="ml-10 text-2xl text-white">{displayText}</h1>
        <span className="border-blink ml-1 border-r-2 border-white"></span>
      </div>
    </div>
  );
};

export default TypingAnimation;
