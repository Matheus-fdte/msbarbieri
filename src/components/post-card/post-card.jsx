import React from 'react';

export default (props) => {
  const {data} = props;
  console.log(data);
    
  return (<span>{props.tag}</span>);
};
