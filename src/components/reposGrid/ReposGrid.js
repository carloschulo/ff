import React from 'react';
import './repos.css';

const ReposGrid = props => {
  console.log(props.repos)
  return (
    <ul className='repo-list'>
      {
        props.repos.map(repo => <li key={repo.name}>{repo.name}</li>)
      }
      
    </ul>
  );
};

export default ReposGrid;