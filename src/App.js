import "./App.css";
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
        document.querySelector(".details-container").scrollIntoView({
          behavior: "smooth",
          block: "start", // Üst kısımda gösterilsin
        });
      }, 100);
    }
  };

  return (
    <div className="App">
      <div>
       <h1>
        Black & <span className="h1-span"> White</span>
      </h1>
      <h2>Photography Contest Top Rankings</h2> 
      </div>
      <div>
        <button onClick={handlePreviousClick} disabled={index === 0}>
          Previous
        </button>
        <button onClick={handleNextClick} disabled={index === data.length - 1}>
          Next
        </button>
      </div>
     
      <div className="img-container">
      <h3 className="rank">
        <i>
          Rank #{index + 1}: Captured by{" "}
          <span className="photographer">{photoData.photographer}</span>
        </i>
      </h3>
        <img
          className="images"
          src={photoData.src.large}
          alt={photoData.photographer}
        />
      </div>
      <div>
        <button className="button-details" onClick={handleMoreDetails}>
          {showMore ? "Hide Details" : "Show Details"}
        </button>
        <div className={`details-container ${showMore ? "show" : ""}`}>
          {showMore && <p>{photoData.details}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
