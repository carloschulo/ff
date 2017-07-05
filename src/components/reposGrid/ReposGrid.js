import React from "react";
import "./repos.css";

const ReposGrid = ({ repos }) => {
  // console.log(props.repos)
  return (
    <ul className="repo-list">
      {repos.map((repo, index) =>
        <li key={repo.name} className="repo-item">
          <div className="pop-rank">
            #{index + 1}
          </div>
          <ul className="space-list-item">
            <li>
              <img
                src={repo.owner.avatar_url}
                alt="avatar"
                className="avatar"
              />
            </li>
            <li>
              <a href={repo.html_url}>
                {repo.name}
              </a>
            </li>
            <li>
              @{repo.owner.login}
            </li>
            <li>
              {repo.stargazers_count} stars
            </li>
          </ul>
        </li>
      )}
    </ul>
  );
};
ReposGrid.propTypes = {
  repos: React.PropTypes.array.isRequired
}

export default ReposGrid;
