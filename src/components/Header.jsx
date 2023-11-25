import { useState } from "react";

const filters = ["All", "Completed", "Upcoming", "Active"];
function Header() {
  const [activeTab, setActiveTab] = useState("All");
  const handleActiveTab = (status) => {
    setActiveTab(status);
    console.log(activeTab);
  };
  return (
    <header className="header">
      <h1 className="header__title">My Courses(3)</h1>
      <ul className="status-bar">
        {filters.map((f, index) => {
          return (
            <li className="filter-item">
              <button
                className={f === activeTab ? "active" : ""}
                key={f}
                onClick={() => handleActiveTab(f)}
              >
                {f}
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default Header;
