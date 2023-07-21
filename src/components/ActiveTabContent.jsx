import React from 'react';
import '../styles/tabContent.scss'

const ActiveTabContent = (props) => {
  return (
    <div className="tab-content p-2">
      {props.content}
    </div>
  );
}

export default ActiveTabContent;