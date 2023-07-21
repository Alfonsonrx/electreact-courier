import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

const UpDateSucursal = () => {
  return (
    <div className="upDate-sucursal columns my-0">
      <div className="column">
        <div className="field is-grouped is-grouped-multiline">
          <div className="control my-0">
            <label className="label my-0">Ultima Actualizacion</label>
            <div className="control is-flex">
              <p className="control mx-2">
                <input
                  className="input is-static"
                  type="text"
                  value={"Martes - 18 - Julio"}
                  readOnly
                />
              </p>
              <button className="button is-white">
                <span className="icon is-small has-text-black">
                  <FontAwesomeIcon icon={faSync} />
                </span>
              </button>
            </div>
          </div>

          <div className="control my-0">
            <label className="label my-0">Sucursal</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="column is-flex is-justify-content-end is-one-quarter">
        <h1 className="title sucursal-title my-auto">Sucursal</h1>
      </div>
    </div>
  );
};

export default UpDateSucursal;
