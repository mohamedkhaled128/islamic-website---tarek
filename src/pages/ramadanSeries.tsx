import { useState } from "react";
import { ramadanSeries, Series } from "../data/ramadanSeries";
import "../index.css";

const ProgramsPage = () => {
  const [selectedSeries, setSelectedSeries] = useState<Series | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  const handleSelectSeries = (series: Series) => {
    setSelectedSeries(series);
    setCurrentVideoIndex(0);
  };

  const handleBack = () => {
    setSelectedSeries(null);
  };

  return (
    <main className="program-main">
      <section className="program-section-main">
        <div className="container">
          <h2 className="program-main-title">البرامج والسلاسل</h2>
          <p className="program-subtitle">
            اختر سلسلة لعرض الحلقات وتشغيل الفيديو
          </p>

          {/* ===== Series Grid ===== */}
          {!selectedSeries && (
            <section className="series-section">
              {ramadanSeries.map((series, index) => (
                <div
                  key={index}
                  className="series-card"
                  onClick={() => handleSelectSeries(series)}
                >
                  <h3>{series.name}</h3>
                  <p>{series.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* ===== Player Section ===== */}
          {selectedSeries && (
            <section className="player-section">
              <button className="back-btn" onClick={handleBack}>
                ← الرجوع للسلاسل
              </button>

              <div className="player-layout">
                <aside className="playlist">
                  <ul>
                    {selectedSeries.videos.map((video, i) => (
                      <li
                        key={i}
                        className={
                          i === currentVideoIndex ? "active" : ""
                        }
                        onClick={() => setCurrentVideoIndex(i)}
                      >
                        {video.title}
                      </li>
                    ))}
                  </ul>
                </aside>

                <main className="video-player">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedSeries.videos[currentVideoIndex].id}`}
                    allowFullScreen
                  ></iframe>
                  <h2>
                    {
                      selectedSeries.videos[currentVideoIndex]
                        .title
                    }
                  </h2>
                </main>
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProgramsPage;
