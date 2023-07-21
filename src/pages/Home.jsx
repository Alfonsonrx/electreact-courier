import React from "react";
import { useSelector } from "react-redux";

import UpDateSucursal from "../components/UpDateSucursal";
import SearchAndCreate from "../components/SearchAndCreate";
import Tabs from "../components/Tabs";
import ActiveTabContent from "../components/ActiveTabContent";

import { changeActiveTab as changeMainTab } from "../redux/homeMainTabSlice";
import { changeActiveTab as changeTablesTab } from "../redux/homeTablesTabSlice";
import DespachoTable from "../components/Tables/DespachoTable";

import "../styles/home.scss";

function componentDidMount() {
  window.electron.notificationApi.sendNotification("My custom message!");
}

const Home = () => {
  const { mainActiveTab } = useSelector((state) => state.homeMainTab);
  const { tablesActiveTab } = useSelector((state) => state.homeTablesTab);

  const handleCLick = () => {
    componentDidMount();
  };

  const tablesTabList = [
    {
      name: "Despacho",
      content: <DespachoTable />,
    },
    {
      name: "Entrega",
      content: "Stuff 3",
    },
    {
      name: "Retiro",
      content: "Stuff 4",
    },
  ];
  const activeTablesContent = () => {
    const activeIndex = tablesTabList.findIndex((tab) => {
      return tab.name === tablesActiveTab;
    });

    return tablesTabList[activeIndex].content;
  };

  const mainTabList = [
    {
      name: "Despacho sucursal",
      content: (
        <div>
          <Tabs
            tabList={tablesTabList}
            activeTab={tablesActiveTab}
            changeActiveTab={changeTablesTab}
          />
          <ActiveTabContent
            key={tablesActiveTab}
            content={activeTablesContent()}
          />
        </div>
      ),
    },
    {
      name: "Despacho",
      content: "Otro Despacho",
    },
  ];

  const activeMainContent = () => {
    const activeIndex = mainTabList.findIndex((tab) => {
      return tab.name === mainActiveTab;
    });

    return mainTabList[activeIndex].content;
  };

  return (
    <div className="content m-2">
      <header className="header-home">
        <div className="columns">
          <div className="column py-0 is-narrow">Usuario: Admin</div>
          <div className="column py-0 is-narrow">Perfil: 1</div>
          <div className="column py-0 is-narrow">Compilacion: 1000</div>
          <div className="column py-0 is-narrow">Sucursal: Arica</div>
          <div className="column py-0 is-narrow">
            Termica: *Insertar termica*
          </div>
        </div>
      </header>
      <UpDateSucursal />

      <Tabs
        tabList={mainTabList}
        activeTab={mainActiveTab}
        changeActiveTab={changeMainTab}
      />
      <ActiveTabContent key={mainActiveTab} content={activeMainContent()} />
      <SearchAndCreate />
    </div>
  );
};

export default Home;
