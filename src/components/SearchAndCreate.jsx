import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faFileCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

const SearchAndCreate = () => {
  return (
    <div className="search-create columns m-2 p-2">
      <div className="field is-grouped is-grouped-multiline">
        <div className="control my-0">
          <label className="label my-0">N° O.T.</label>
          <div className="control is-flex is-horizontal">
            <div className="field-label my-2">
              <label className="label">Retiro</label>
            </div>
            <p className="control ">
              <input className="input" type="text" />
            </p>
            <button className="button">
              <span className="icon is-small has-text-black">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
            </button>
            <button className="button">
              <span className="icon is-small has-text-black">
                <FontAwesomeIcon icon={faFileCirclePlus} />
              </span>
            </button>
          </div>
        </div>
        <div className="control my-0">
          <label className="label my-0">Ficha Cliente</label>
          <div className="control is-flex">
            <p className="control ">
              <input className="input" type="text" />
            </p>
            <button className="button">
              <span className="icon is-small has-text-black">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
            </button>
            <button className="button">
              <span className="icon is-small has-text-black">
                <FontAwesomeIcon icon={faFileCirclePlus} />
              </span>
            </button>
          </div>
        </div>
        <div className="control my-0">
          <label className="label my-0">Buscar por N° Doc.</label>
          <div className="control is-flex">
            <p className="control ">
              <input className="input" type="text" />
            </p>
            <button className="button">
              <span className="icon is-small has-text-black">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
            </button>
          </div>
        </div>
        <div className="control my-0">
          <label className="label my-0">Buscar Nomina</label>
          <div className="control is-flex">
            <p className="control ">
              <input className="input" type="text" />
            </p>
            <button className="button">
              <span className="icon is-small has-text-black">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
            </button>
          </div>
        </div>
        <div className="control my-0">
          <label className="label my-0">Buscar Factura</label>
          <div className="control is-flex">
            <p className="control ">
              <input className="input" type="text" />
            </p>
            <button className="button">
              <span className="icon is-small has-text-black">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SearchAndCreate;
