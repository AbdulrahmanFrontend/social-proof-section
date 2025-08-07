import { useState } from "react";
import "../App.css";
const StarRating = ({ line }) => {
  const [activeStar, setActiveStar] = useState(5);
  const handleStarClick = (index) => setActiveStar(index + 1);
  const stars = [
    "/images/icon-star.svg",
    "/images/icon-star.svg",
    "/images/icon-star.svg",
    "/images/icon-star.svg",
    "/images/icon-star.svg",
  ];
  return (
    <li
      className={`line flex justify-between xl:py-3.5 xl:px-20 lg:px-16 lg:py-6 md:py-8 py-4 px-4 max-md:my-5 rounded-2xl ${line.margin} md:w-10/12 font-bold`}
      id={`line-${line.uniqueId}`}
    >
      <div className={`stars flex gap-1 items-center`}>
        {stars.map((src, index) => {
          return (
            <img
              onClick={() => handleStarClick(index)}
              src={src}
              alt="star"
              className={`md:w-3.5 ${
                index < activeStar ? "opacity-100" : "opacity-50"
              }`}
              loading="lazy"
            />
          );
        })}{" "}
      </div>
      Rated {activeStar} Stars in {line.word}
    </li>
  );
};
const RateItem = () => {
  const lines = [
    { margin: "md:me-auto", word: "Reviews", uniqueId: 1 },
    { margin: "md:mx-auto", word: "Report Guru", uniqueId: 2 },
    { margin: "md:ms-auto", word: "BestTech", uniqueId: 3 },
  ];
  return (
    <ul className="right md:w-3/5 flex flex-col md:justify-between max-md:my-10">
      {lines.map((line) => (
        <StarRating key={line.uniqueId} line={line} />
      ))}
    </ul>
  );
};
export default RateItem;
