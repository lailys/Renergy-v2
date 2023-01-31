import React, { useContext, useEffect, useState } from "react";
import { TbdContext } from "../../../provider/provider";
import Dropdown from "react-bootstrap/Dropdown";
import FullDatapicker from "../../generals/FullDatapicker";
import ErrorContainer from "../../generals/ErrorContainer";
import nextKey from "react-id-generator";

function ListRec() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  const [list, setList] = useState([]);
  const [formUpdate, setFormUpdate] = useState(false);
  const [selectedGen, setSelectedGen] = useState("Generator Asset");
  const [recForm, setRecForm] = useState({
    serial_num_begin: null,
    serial_num_end: null,
    vintage_dt: null,
    generator_asset: null,
  });
  useEffect(() => {
    context.getAvailableGens();
  }, []);
  useEffect(() => {
    const getList = () => {
      let map = {};
      for (let gen of context.availableGens) {
        map[gen.generator_asset_short_str] = gen.id;
      }
      return map;
    };
    if (context.availableGens) setList(getList());
  }, [context.availableGens]);
  const handleChange = (e) => {
    e.preventDefault();
    if (
      e.target.getAttribute("data-title") &&
      e.target.getAttribute("data-title") !== ""
    ) {
      let updatedRecForm = recForm;
      const value = e.target.value || e.target.textContent;
      const type = e.target.getAttribute("data-title");
      const updatedRecFormData =
        type === "vintage_dt"
          ? e.target.value
            ? e.target.value
            : null
          : e.target.getAttribute("data-value")
          ? parseInt(e.target.getAttribute("data-value"))
          : parseInt(value);
      if (e.target.getAttribute("data-value")) {
        setSelectedGen(value);
      }
      updatedRecForm[type] = updatedRecFormData;
      setFormUpdate((prev) => !prev);
      setRecForm(updatedRecForm);
    }
  };

  return (
    <div className="col-md-4">
      <label className="popup-form-title">New REC</label>
      <form id="loginform">
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            data-title="serial_num_begin"
            placeholder="Beginning Serial ID"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            data-title="serial_num_end"
            placeholder="End Serial ID"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <Dropdown onClick={handleChange}>
            <Dropdown.Toggle id="generator-dropdown-basic" variant="secondary">
              {selectedGen}
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              {Object.keys(list).map((key) => (
                <Dropdown.Item
                  as="button"
                  data-title="generator_asset"
                  data-value={list[key]}
                  key={nextKey()}
                >
                  {key}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="form-group">
          <label>Vintage Date</label>
          <FullDatapicker handleChange={handleChange} className="vintage_dt" />
        </div>
        <div className="form-group">
          <div className="new-rec-form-wrapper">
            <div className="new-rec-form cancel">CANCEL</div>
            <div
              className="new-rec-form submit"
              onClick={(e) => context.addNewRec(e, recForm)}
            >
              SUBMIT
            </div>
            {/* <div className="new-rec-form add-more">ADD MORE TOKENS</div> */}
          </div>
        </div>
      </form>
      <ErrorContainer err={context.error} />
    </div>
  );
}

export default ListRec;
