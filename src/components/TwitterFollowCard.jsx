import "/src/components/TwitterFollowCard.css"

const TwitterFollowCard = ({userName, name}) => {
    const imgSrc = `https://unavatar.io/${userName}`
    const altTag = `The avatar of ${name}`
    return (
        <article className="tw-follow-card">
        <header>
          <img
            src={imgSrc}
            alt={altTag} 
          /> 
          <div>
            <strong>{name}</strong>
            <span>@{userName}</span>
          </div>
        </header>
    
        <aside>
          <button>Seguir</button>
        </aside>
      </article>
    )
}

export default TwitterFollowCard