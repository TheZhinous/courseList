const filters = ["All", "Completed", "Upcoming", "Active"];
function Header() {
  return (
    <header className="header">
      <h1 className="header__title">My Courses(3)</h1>
      <ul className="status-bar">
        {filters.map((f, index) => {
          return (
            <li className="filter-item" key={index}>
              {f}
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default Header;
