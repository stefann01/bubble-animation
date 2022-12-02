import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [elements, setElements] = useState(
    Array.from({ length: 100 }, () => {
      return {
        x: Math.floor(Math.random() * window.innerWidth),
        y: -Math.floor(Math.random() * 1000),
        width: "40px",
        height: "40px"
      };
    })
  );
  useEffect(() => {
    const updateItems = () => {
      setElements((prev) => {
        return prev.map((e) => {
          const randomSize = Math.floor(Math.random() * 20) + "px";
          const startingYPoint = -Math.floor(Math.random() * 500);
          return {
            ...e,
            y: e.y + 1 > window.innerHeight ? startingYPoint : e.y + 1,
            width: e.y > window.innerHeight ? randomSize : e.width,
            height: e.y > window.innerHeight ? randomSize : e.width
          };
        });
      });
    };
    const interval = setInterval(updateItems);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {elements.map((item, index) => (
        <div
          key={index}
          className="buble"
          style={{
            position: "absolute",
            left: item.x + "px",
            top: item.y + "px",
            width: item.width,
            height: item.height
          }}
        ></div>
      ))}
    </div>
  );
}
