import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <div className="Homepage">
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="company-list">
        {companies.map((company) => (
          <Link key={company.id} to={`/company/${company.slug}`}>
            <div className="company-card">
              <img src={company.logo} alt={`${company.name} logo`} />
              <p>{company.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
