import { useEffect, useState } from "react";

export function useTypewriter(text, speed = 20) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!text) {
      setOutput("");
      return;
    }

    let index = 0;
    setOutput(""); // reset cleanly

    const interval = setInterval(() => {
      index += 1;
      setOutput(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return output;
}
