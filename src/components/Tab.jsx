import React from 'react';
import { useDispatch } from 'react-redux';

const Tab = (props) => {
  const dispatch = useDispatch();
  
  const { name } = props.tab;
  const { activeTab, changeActiveTab  } = props;
  
  return (
    <li className={name === activeTab && "is-active"} onClick={() => dispatch(changeActiveTab(name))}>
      <a>
        <span>{name}</span>
      </a>
    </li>
  );
};


export default Tab;