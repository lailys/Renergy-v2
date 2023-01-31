import React, { useContext, useState, useEffect } from "react";
import { TbdContext } from "../../../provider/provider";
import Dropdown from "react-bootstrap/Dropdown";
import { marketPlaceMap, marketPlaceReverseMap } from "../../../utils/map";
import FullDatapicker from "../../generals/FullDatapicker";
import ErrorContainer from "../../generals/ErrorContainer";
import nextKey from "react-id-generator";

function ListGenerator() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  const [formUpdate, setFormUpdate] = useState(false);
  const [generatorForm, setGeneratorForm] = useState({
    generator_name: "",
    generator_type: null,
    entity_type: null,
    certifying_body: null,
    service_start_dt: null,
    decomissioned_dt: null,
    nameplate_rating: null,
    system_size_kwdc: null,
    street_address: "",
    city: "",
    state: null,
    zipcode: "",
  });
  useEffect(() => [formUpdate]);
  const handleChange = (e) => {
    e.preventDefault();
    if (
      e.target.getAttribute("data-title") &&
      e.target.getAttribute("data-title") !== ""
    ) {
      let updatedGeneratorForm = generatorForm;
      const value = e.target.value || e.target.textContent;
      const type = e.target.getAttribute("data-title");
      const updatedGeneratorFormData =
        type === "system_size_kwdc" || type === "nameplate_rating"
          ? Number.parseFloat(value).toFixed(1)
          : type === "decomissioned_dt" || type === "service_start_dt"
          ? e.target.value
            ? e.target.value
            : null
          : e.target.getAttribute("data-value")
          ? e.target.getAttribute("data-value")
          : value;
      updatedGeneratorForm[type] = updatedGeneratorFormData;
      setFormUpdate((prev) => !prev);
      setGeneratorForm(updatedGeneratorForm);
    }
  };

  return (
    <div className="col-md-4">
      <label className="popup-form-title">New Generator</label>
      <form id="loginform">
        <div className="form-group">
          <input
            type="rext"
            className="form-control"
            data-title="generator_name"
            placeholder="Site Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            data-title="street_address"
            placeholder="Street address"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            data-title="city"
            placeholder="City"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <div className="sub-form-group">
            <div className="sub-sub-form-group">
              <input
                type="text"
                className="form-control"
                data-title="zipcode"
                placeholder="Zipcode"
                onChange={handleChange}
                required
              />
            </div>
            <div className="sub-sub-form-group">
              <div className="input-Backdrop">
                <Dropdown onClick={handleChange} required>
                  <Dropdown.Toggle
                    id="generator-dropdown-basic"
                    variant="secondary"
                  >
                    {generatorForm["state"] || "State"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu variant="dark">
                    {marketPlaceMap["state"].map((g, i) => (
                      <Dropdown.Item
                        as="button"
                        data-title="state"
                        data-value={marketPlaceMap["state"][i][1]}
                        key={nextKey()}
                      >
                        {g[0]}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="sub-form-group">
            <div className="sub-sub-form-group">
              <input
                type="number"
                className="form-control"
                data-title="nameplate_rating"
                placeholder="Nameplate Rating"
                onChange={handleChange}
                required
              />
            </div>
            <div className="sub-sub-form-group">
              <div className="input-Backdrop">
                <input
                  type="number"
                  className="form-control"
                  data-title="system_size_kwdc"
                  placeholder="System Size"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="sub-form-group">
            <div className="sub-sub-form-group">
              <div className="input-Backdrop">
                <Dropdown onClick={handleChange}>
                  <Dropdown.Toggle
                    id="generator-dropdown-basic"
                    variant="secondary"
                  >
                    {marketPlaceReverseMap["generator_type"][
                      generatorForm["generator_type"]
                    ] || "Generator Type"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu variant="dark">
                    {marketPlaceMap["generator_type"].map((g, i) => (
                      <Dropdown.Item
                        as="button"
                        data-title="generator_type"
                        data-value={marketPlaceMap["generator_type"][i][1]}
                        key={nextKey()}
                      >
                        {g[0]}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="sub-sub-form-group">
              <div className="input-Backdrop">
                <Dropdown onClick={handleChange}>
                  <Dropdown.Toggle
                    id="generator-dropdown-basic"
                    variant="secondary"
                  >
                    {marketPlaceReverseMap["entity_type"][
                      generatorForm["entity_type"]
                    ] || "Entity type"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu variant="dark">
                    {marketPlaceMap["entity_type"].map((g, i) => (
                      <Dropdown.Item
                        as="button"
                        data-title="entity_type"
                        data-value={marketPlaceMap["entity_type"][i][1]}
                        key={nextKey()}
                      >
                        {g[0]}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="sub-form-group">
            <div className="sub-sub-form-group">
              <div className="input-Backdrop">
                <Dropdown onClick={handleChange}>
                  <Dropdown.Toggle
                    id="generator-dropdown-basic"
                    variant="secondary"
                  >
                    {marketPlaceReverseMap["certifying_body"][
                      generatorForm["certifying_body"]
                    ] || "Certifying Body"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu variant="dark">
                    {marketPlaceMap["certifying_body"].map((g, i) => (
                      <Dropdown.Item
                        as="button"
                        data-title="certifying_body"
                        data-value={marketPlaceMap["certifying_body"][i][1]}
                        key={nextKey()}
                      >
                        {g[0]}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Placed In Service</label>
          <FullDatapicker
            className="service_start_dt"
            handleChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Decommission Date</label>
          <FullDatapicker
            className="decomissioned_dt"
            handleChange={handleChange}
          />
        </div>

        <div className="form-group">
          <div className="new-rec-form-wrapper">
            <div className="new-rec-form cancel">CANCEL</div>
            <button
              className="new-rec-form submit"
              onClick={(e) =>
                context.addNewGenerator(e, generatorForm, {
                  gen_lic_number: "",
                })
              }
            >
              SUBMIT
            </button>
            {/* <div className="new-rec-form add-more">ADD MORE GENERATORS</div> */}
          </div>
        </div>
      </form>
      <ErrorContainer err={context.error} />
    </div>
  );
}

export default ListGenerator;
