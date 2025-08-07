import Left from "./Heading";
import Right from "./RateItem";
import "../App.css";
const Up = () => {
  return (
    <div className="up md:flex md:justify-between">
      <Left/>
      <Right/>
    </div>
  );
};
export default Up;
