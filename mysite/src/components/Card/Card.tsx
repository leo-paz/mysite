


const Card = ({ exp }) => {
  return (
    <article className="my-card">
      <header className="my-card-header">
        <p>{exp.role}</p>
        <h2>{exp.company}</h2>
        <p>{exp.dateRange}</p>
      </header>
      <ul>
        {exp.points.map(point => <li>{point}</li>)}
      </ul>
      <div className="link-button">
        {exp.links &&
          exp.links.map(link => <a href={link}>Check it out</a>)
        }
      </div>

      <div className="tags">
        {exp.technologies.map(tech => <a >{tech}</a>)}
      </div>
    </article>
  )
}

export default Card;