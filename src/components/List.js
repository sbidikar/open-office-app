import React from 'react';
const List = (props) => {
  const { repos } = props;
  console.log(JSON.stringify(repos));
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Open Office Floor Map Repositories</h2>
      {repos.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <span >{repo.location} </span>
            <span >{repo.building} </span>
            <span >{repo.floor}</span>
            <span >{repo.desk}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;