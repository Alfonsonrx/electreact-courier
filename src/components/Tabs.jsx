import React from "react";
import Tab from "./Tab";

const Tabs = (props) => {
  let {activeTab, tabList} = props;
  return (
    <div className="tabs is-boxed m-0">
      <ul className="m-0">
        {tabList.map((tab) => (
          <Tab
            tab={tab}
            key={tab.name}
            activeTab={activeTab}
            changeActiveTab={props.changeActiveTab}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
