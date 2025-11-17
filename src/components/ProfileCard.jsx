import avatar from "../assets/images/avatar-femail.png";

export default function ProfileCard({ currentView, setView }) {
  return (
    <section className="profile-card">
      <div className="profile-info">
        <img src={avatar} alt="User avatar" className="avatar" />
        <div className="profile-text">
          <p>Report for</p>
          <h1>Sofiia<br />Volynets</h1>
        </div>
      </div>

      <div className="time-options">
        <button
          className={`time-btn ${currentView === "daily" ? "active" : ""}`}
          onClick={() => setView("daily")}
        >
          Daily
        </button>
        <button
          className={`time-btn ${currentView === "weekly" ? "active" : ""}`}
          onClick={() => setView("weekly")}
        >
          Weekly
        </button>
      </div>
    </section>
  );
}
