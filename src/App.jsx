import Up from "./components/Up";
import Posts from "./components/Posts";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [isDesktop, setIsDesktop] = useState(innerWidth >= 1024);
  useEffect(() => {
    const handleResize = () => setIsDesktop(innerWidth >= 1024);
    addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);
  const bgPatternBottonDesktop = isDesktop
    ? "/images/bg-pattern-bottom-desktop.svg"
    : "/images/bg-pattern-bottom-mobile.svg";
  const bgPatternTopDesktop = isDesktop
    ? "/images/bg-pattern-top-desktop.svg"
    : "/images/bg-pattern-top-mobile.svg";
  return (
    <main
      className="w-screen min-h-screen flex justify-center items-center p-3"
      style={{
        backgroundImage: `url("${bgPatternTopDesktop}"), url("${bgPatternBottonDesktop}")`,
      }}
    >
      <div className="container">
        <Up />
        <Posts />
      </div>
    </main>
  );
}
export default App;
