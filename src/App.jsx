import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import ActivityCard from "./components/ActivityCard";
import data from "./data.json";

export default function App() {
  const [view, setView] = useState("daily");

  return (
    <main className="dashboard">
      {/* Ліва частина — лише один профіль */}
      <ProfileCard currentView={view} setView={setView} />

      {/* Права частина — 6 карток активностей */}
      <section className="cards-container">
        {data.map((activity, index) => (
          <ActivityCard
            key={index}
            activity={activity}
            index={index}
            view={view}
          />
        ))}
      </section>
    </main>
  );
}
