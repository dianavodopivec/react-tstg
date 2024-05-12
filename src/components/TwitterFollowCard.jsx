import "/src/components/TwitterFollowCard.css"

const TwitterFollowCard = ({children, format, userName = "Unknow", name, isFollowing}) => {
  const imgSrc = `https://unavatar.io/${userName}`
  const altTag = `The avatar of ${name}`
  const text = isFollowing ? "Unfollow" : "Follow"
  //console.log(isFollowing)
  
  return (
    <article className="tw-follow-card">
        <header>
          <img
            src={imgSrc}
            alt={altTag} 
            /> 
          <div>
            {children}
            <strong>{name}</strong>
            <span>{format(userName)}</span>
          </div>
        </header>
    
        <aside>
          <button>
            {text}
          </button>
        </aside>
      </article>
    )
}

export default TwitterFollowCard