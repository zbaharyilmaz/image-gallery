import './App.css';
import { useState } from "react";
import data from "./helper/data"; // Verilerin olduğu dosyaya doğru yolu ekleyin

function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const photoData = data[index];

  const handleNextClick = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePreviousClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleMoreDetails = () => {
    setShowMore(!showMore);
    if (!showMore) {
      // Sayfayı yazıya kaydır
      setTimeout(() => {
        window.scrollTo({
          top: document.querySelector(".details-container").offsetTop,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <div className="App">
      <h2>
        <i>Black and White Photo Contest</i> Top 30 Rankings
      </h2>
      <h3>
        <i>Photo by <span className="photographer">{photoData.photographer}</span></i>
      </h3>
      <h4>({index + 1} of {data.length})</h4>
      <div>
        <button onClick={handlePreviousClick} disabled={index === 0}>Previous</button>
        <button onClick={handleNextClick} disabled={index === data.length - 1}>Next</button>
      </div>
      <div className="img-container">
        <img className="images" src={photoData.src.large} alt={photoData.photographer} />
      </div>
      <div>
        <button onClick={handleMoreDetails}>{showMore ? "Hide Details" : "Show Details"}</button>
        <div className={`details-container ${showMore ? "show" : ""}`}>
          {showMore && <p>{photoData.details}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
