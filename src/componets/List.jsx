import React from 'react'

export const List = ({list}) => {
  return (
    <ol>
        {list.map((item, index)=>{
            return <li key={index}>
                <span>{item.input}</span>
                <p>{item.text}</p>
                </li>;
        })}
    </ol>
  );
};
