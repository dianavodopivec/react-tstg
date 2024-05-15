import { useEffect, useState } from "react";
import "/src/components/TwitterFollowCard.css";

const TwitterFollowCard = ({ children, format, userName = "Unknow", name }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const handleFollow = () => setIsFollowing(previous => previous ? previous = false : previous = true);
  useEffect(() => {
      console.warn(isFollowing)
  }, [isFollowing])

  const imgSrc = `https://unavatar.io/${userName}`;
  const altTag = `The avatar of ${name}`;
  const text = isFollowing ? "Unfollow" : "Follow";
  const buttonStyle = isFollowing ? "button--unfollow" : "button--follow";

  return (
    <article className="tw-follow-card">
      <header>
        <img src={imgSrc} alt={altTag} />
        <div>
          {children}
          <strong>{name}</strong>
          <span>{format(userName)}</span>
        </div>
      </header>

      <aside>
        <button
          className={buttonStyle}
          onClick={handleFollow}
        >
          {text}
        </button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;
