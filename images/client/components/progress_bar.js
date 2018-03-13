import React from 'react';

const ProgressBar = (props) => {

  const { ups, downs } = props;

  const total = ups + downs;
  const upsPart = `${ups / total * 100}%`;
  const downsPart = `${downs / total * 100}%`;

  const upsStyle = { width: upsPart }
  const downsStyle = { width: downsPart }

  return (
    <div className="progress-bar">
      <div className="ups" style={upsStyle} />
      <div className="downs" style={downsStyle} />
    </div>
  )
};

export default ProgressBar;