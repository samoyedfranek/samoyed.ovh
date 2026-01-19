import { useEffect, useRef, useState } from "react";
import TabBar from "./tabbar";

function Terminal() {
  const [history, setHistory] = useState([
    "Welcome to samoyed.ovh",
    "Type 'help' to get started.",
  ]);

  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdIndex, setCmdIndex] = useState(null);
  const [cursorVisible, setCursorVisible] = useState(true);

  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  /* Blinking cursor */
  useEffect(() => {
    const i = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    return () => clearInterval(i);
  }, []);

  /* Auto-scroll */
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  /* Focus terminal on click */
  const focus = () => inputRef.current?.focus();

  const runCommand = (cmd) => {
    if (!cmd.trim()) return;

    let output = "";

    switch (cmd) {
      case "help":
        output = "Available commands: help, clear, whoami";
        break;
      case "whoami":
        output = "samoyed";
        break;
      case "clear":
        setHistory([]);
        return;
      default:
        output = `command not found: ${cmd}`;
    }

    setHistory(h => [...h, `$ ${cmd}`, output]);
  };

  const onKeyDown = (e) => {
    if (e.ctrlKey && e.key === "l") {
      e.preventDefault();
      setHistory([]);
      return;
    }

    if (e.ctrlKey && e.key === "c") {
      e.preventDefault();
      setHistory(h => [...h, `$ ${input}`, "^C"]);
      setInput("");
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      runCommand(input);
      setCmdHistory(h => [...h, input]);
      setCmdIndex(null);
      setInput("");
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!cmdHistory.length) return;
      const idx =
        cmdIndex === null ? cmdHistory.length - 1 : Math.max(0, cmdIndex - 1);
      setCmdIndex(idx);
      setInput(cmdHistory[idx]);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdIndex === null) return;
      const idx = cmdIndex + 1;
      if (idx >= cmdHistory.length) {
        setCmdIndex(null);
        setInput("");
      } else {
        setCmdIndex(idx);
        setInput(cmdHistory[idx]);
      }
    }
  };

  return (
    <div
      className="h-full flex flex-col text-gray-200 font-mono"
      onClick={focus}
    >
      <TabBar />

      <div
        ref={scrollRef}
        className="flex-1 p-4 overflow-y-auto text-sm"
      >
        {history.map((line, i) => (
          <div key={i}>{line}</div>
        ))}

        {/* Prompt */}
        <div className="flex">
          <span className="text-prompt">samoyed@samoyed.ovh</span>
          <span className="text-path mx-1">~</span>
          <span>$</span>

          {/* Fake input */}
          <div className="ml-2 flex">
            <span>{input}</span>
            <span
              className={`ml-[1px] w-[8px] h-[1em] bg-gray-200 ${
                cursorVisible ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Hidden real input */}
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            className="absolute opacity-0 pointer-events-none"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}

export default Terminal;
