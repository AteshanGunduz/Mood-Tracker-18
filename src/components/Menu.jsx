import { useEffect } from "react";

export default function Menu(props) {
  function scrollDown() {
    window.scrollTo({
      top: window.innerHeight * 2,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    if (props.skip) scrollDown();
  }, []);

  return (
    <div className="menu-wrapper">
      <div className="header-text-container">
        <h1>Hayat Takipçisi</h1>
      </div>
      <div className="main-menu-container">
        <button className="menu-item-button">
          <img className="menu-icon" src="./images/goals.svg" />
          <p>Hedefler</p>
        </button>
        <button className="menu-item-button">
          <img className="menu-icon" src="./images/to-do-list.svg" />
          <p>Yapılacaklar Listesi</p>
        </button>
        <button className="menu-item-button" onClick={scrollDown}>
          <img className="menu-icon" src="./images/monthly-report.svg" />
          <p>Raporlar</p>
        </button>
        <button className="menu-item-button">
          <img className="menu-icon" src="./images/settings.svg" />
          <p>Ayarlar</p>
        </button>
        <button className="menu-item-button">
          <img className="menu-icon highlights" src="./images/highlights.svg" />
          <p>Öne Çıkanlar</p>
        </button>
        <button className="menu-item-button">
          <img className="menu-icon" src="./images/new-entry.svg" />
          <p>Yeni Giriş</p>
        </button>
      </div>
    </div>
  );
}
