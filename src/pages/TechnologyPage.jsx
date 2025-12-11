import { useParams, Link, useSearchParams } from 'react-router-dom';

function TechnologyPage({ technologies }) {
  const { techSlug } = useParams();
  const [searchParams] = useSearchParams();
  const companySlug = searchParams.get('company');
  const technology = technologies.find((tech) => tech.slug === techSlug);

  if (!technology) {
    return <div>Technology not found</div>;
  }

  return (
    <div className='TechnologyPage'>
      <h2>Technology Details</h2>
      <img src={technology.image} alt={`${technology.name} logo`} />
      <h3>{technology.name}</h3>
      <p>{technology.description}</p>

      {companySlug && (
        <Link to={`/company/${companySlug}`}>
          <button>Back</button>
        </Link>
      )}
    </div>
  );
}

export default TechnologyPage;
