import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilterCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "../../styles/despachoTable.scss";

const columns = [
  { field: "col1", headerName: "N° OT", flex: 1 },
  { field: "col2", headerName: "Cta Cte", flex: 1 },
  { field: "col3", headerName: "Fecha", flex: 1 },
  { field: "col4", headerName: "Destinatario", flex: 1 },
  { field: "col5", headerName: "Suc. Origen", flex: 1 },
  { field: "col6", headerName: "Comuna Destino", flex: 1 },
  { field: "col7", headerName: "Ttal Bultos", flex: 1 },
  { field: "col8", headerName: "Nomina", flex: 1 },
  { field: "col9", headerName: "Tipo Entrega", flex: 1 },
  { field: "col10", headerName: "Agencia", flex: 1 },
  { field: "col11", headerName: "Tipo Servicio", flex: 1 },
];

const rows = [
];

const DespachoTable = () => {
  return (
    <div className="despacho-tab">
      <div className="search_and_filter columns">
        <div className="search-ot column">
          <div className="control my-0">
            <div className="control is-flex">
              <button className="button is-outlined">
                <span className="icon is-small has-text-black">
                  <FontAwesomeIcon icon={faFilterCircleXmark} />
                </span>
              </button>
              <p className="control mx-2">
                <input className="input" type="text" placeholder="Text input" />
              </p>
            </div>
          </div>
        </div>

        <div className="column is-flex is-justify-content-end">
          <div className="control mx-2">
            <div className="field is-horizontal">
              <div className="field-label is-normal my-auto">
                <label className="label">Recepcion Agenc.</label>
              </div>
              <div className="field-body my-auto">
                <div className="field">
                  <p className="control">
                    <div className="select">
                      <select>
                        <option></option>
                        <option>With options</option>
                      </select>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="control mx-2">
            <div className="field is-horizontal">
              <div className="field-label is-normal my-auto">
                <label className="label">Recepcion Suc.</label>
              </div>
              <div className="field-body my-auto">
                <div className="field">
                  <p className="control">
                    <div className="select">
                      <select>
                        <option></option>
                        <option>With options</option>
                      </select>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="control mx-2">
            <div className="field is-horizontal">
              <div className="field-label is-normal my-auto">
                <label className="label">Pend. Despacho</label>
              </div>
              <div className="field-body my-auto">
                <div className="field">
                  <p className="control">
                    <div className="select">
                      <select>
                        <option></option>
                        <option>With options</option>
                      </select>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "35rem", width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
      <div className="hometable-buttons columns mt-1">
        <div className="column is-flex is-justify-content-center">
          <div className="buttons">
            <button className="button is-primary">Generar Nomina</button>
            <button className="button is-primary">Agregar a Nomina</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DespachoTable;
