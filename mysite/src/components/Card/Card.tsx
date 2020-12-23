


const Card = ({exp}) => {
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
          {/* <div className="my-card-author">
            <a className="author-avatar" href="#">
              <img src="avatar.png" />
            </a>
            <svg className="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className="author-name">
              <div className="author-name-prefix">Author</div>
              Jeff Delaney
            </div>
          </div> */}
          <div className="tags">
            {exp.technologies.map(tech => <a >{tech}</a>)}
          </div>
        </article>
    )
}

export default Card;