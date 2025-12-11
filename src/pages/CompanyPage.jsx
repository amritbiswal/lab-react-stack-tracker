import { useParams, Link } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

  const company = companies.find((c) => c.slug === companySlug);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div className="CompanyPage">
      <h2>Company Profile</h2>
      <div className="company-hero">
        <img src={company.logo} alt={`${company.name} logo`} />
        <div className="company-info">
          <h3>{company.name}</h3>
          <p>
            Website:{" "}
            <a href={company.website} target="_blank" rel="noopener noreferrer">
              {company.website}
            </a>{" "}
          </p>
          <p>{company.description}</p>
        </div>
      </div>

      <h3>Tech Stack:</h3>
      <div className="tech-stack">
        {company.techStack.map((tech, index) => (
          <Link to={`/tech/${tech.slug}?company=${companySlug}`} key={index}>
            <div key={index} className="tech-card">
              <img src={tech.logo} alt={`${tech.name} logo`} />
              <p>{tech.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CompanyPage;
