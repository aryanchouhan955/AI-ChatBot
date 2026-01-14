import { useEffect, useState } from "react";

export function useTypewriter(text = "", speed = 15) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (typeof text !== "string" || !text.length) {
      setDisplayed("");
      return;
    }

    setDisplayed("");
    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(prev => prev + text.charAt(i));
      i++;

      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

