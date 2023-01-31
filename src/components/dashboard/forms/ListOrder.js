import React, { useState, useContext, useEffect } from "react";
import { TbdContext } from "../../../provider/provider";
import Dropdown from "react-bootstrap/Dropdown";
import FullDatapicker from "../../generals/FullDatapicker";
import ErrorContainer from "../../generals/ErrorContainer";
import {
  marketPlaceMap,
  marketPlaceReverseMap,
  getCorrectDataMap,
} from "../../../utils/map";

import nextKey from "react-id-generator";

function ListOrder() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  const [type, setType] = useState("buy");
  const [isDrafted, setIsDrafted] = useState("SAVE");
  const [formUpdate, setFormUpdate] = useState(false);
  const [orderForm, setOrderForm] = useState({
    sell: {
      order_type: null,
      qty: null,
      price_start: null,
      price_end: null,
      end_dt_epoch_secs: null,
      rec_token: null,
    },
    buy: {
      order_type: null,
      qty: null,
      price_start: null,
      price_end: null,
      end_dt_epoch_secs: null,
      vintage_dt_min: null,
      generator_types: null,
      certifying_bodies: null,
      states: null,
    },
  });
  useEffect(() => [formUpdate]);
  useEffect(() => {
    if (context.draftedOrder.side) {
      const form = orderForm;
      form[context.draftedOrder.side] = context.draftedOrder.form;
      setOrderForm(form);
      setType(context.draftedOrder.side);
    }
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    if (
      e.target.getAttribute("data-title") &&
      e.target.getAttribute("data-title") !== ""
    ) {
      let updatedOrderForm = orderForm;
      const value = e.target.value || e.target.textContent;
      const key = e.target.getAttribute("data-title");
      const updatedOrderFormData =
        key === "end_dt_epoch_secs" || key === "vintage_dt_min"
          ? e.target.value
            ? key === "end_dt_epoch_secs"
              ? parseInt(new Date(e.target.value).getTime() / 1000)
              : e.target.value
            : null
          : e.target.getAttribute("data-value")
          ? key === "order_type"
            ? e.target.getAttribute("data-value")
            : [e.target.getAttribute("data-value")]
          : parseInt(value);
      setFormUpdate((prev) => !prev);
      updatedOrderForm[type][key] = updatedOrderFormData;
      setOrderForm(updatedOrderForm);
    }
  };
  const pickOrderKind = (e) => {
    setOrderForm({
      sell: {
        order_type: null,
        qty: null,
        price_start: null,
        price_end: null,
        end_dt_epoch_secs: null,
        rec_token: null,
      },
      buy: {
        order_type: null,
        qty: null,
        price_start: null,
        price_end: null,
        end_dt_epoch_secs: null,
        vintage_dt_min: null,
        generator_types: null,
        certifying_bodies: null,
        states: null,
      },
    });
    context.setError("");
    setType(e.target.classList.contains("buy") ? "buy" : "sell");
  };
  const save = (e) => {
    console.log(
      context.draftedOrder.form,
      "context.draftedOrder.form",
      context.draftedOrder.form ? context.draftedOrder.form.id : null
    );
    context.draftNewOrder(
      e,
      type,
      context.draftedOrder.side && orderForm[type],
      context.draftedOrder.form ? context.draftedOrder.form.id : null
    );
  };
  console.log(context.draftedOrder.form);
  return (
    <div className="col-md-4">
      <label className="popup-form-title">New Order</label>
      <form id="loginform">
        <div className="form-group" onClick={pickOrderKind}>
          <div className="new-rec-form-wrapper">
            <div
              className="order-kind buy"
              id={type === "buy" ? "activated" : ""}
            >
              buy
            </div>
            <div
              className="order-kind sell"
              id={type === "sell" ? "activated" : ""}
            >
              sell
            </div>
          </div>
        </div>
        <div className="form-group">
          <Dropdown onClick={handleChange}>
            <Dropdown.Toggle id="generator-dropdown-basic" variant="secondary">
              {getCorrectDataMap["order_type"][
                context.draftedOrder.side
                  ? context.draftedOrder.form["order_type"]
                  : orderForm[type]["order_type"]
              ] || "Order Type"}
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              {marketPlaceMap["order_type"].map((key, i) => (
                <Dropdown.Item
                  as="button"
                  data-title="order_type"
                  data-value={key[1]}
                  key={nextKey()}
                >
                  {key[0]}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            data-title="qty"
            placeholder="Quantity"
            onChange={handleChange}
            value={context.draftedOrder.side && context.draftedOrder.form.qty}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            data-title="price_start"
            placeholder="Price Start"
            onChange={handleChange}
            value={
              context.draftedOrder.side &&
              context.draftedOrder.form["price_start"]
            }
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            data-title="price_end"
            placeholder="Price End"
            onChange={handleChange}
            value={
              context.draftedOrder.side &&
              context.draftedOrder.form["price_end"]
            }
          />
        </div>
        {type === "sell" && (
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              data-title="rec_token"
              placeholder="Rec Token"
              onChange={handleChange}
            />
          </div>
        )}
        <div className="form-group">
          <label>End Date</label>
          <FullDatapicker
            className="end_dt_epoch_secs"
            handleChange={handleChange}
            value={
              context.draftedOrder.side &&
              new Date(context.draftedOrder.form["end_dt_epoch_secs"] * 1000)
                .toISOString()
                .split("T")[0]
            }
          />
        </div>
        {type === "buy" && (
          <>
            <div className="form-group">
              <label>Vintage Date</label>
              <FullDatapicker
                className="vintage_dt_min"
                handleChange={handleChange}
                value={
                  context.draftedOrder.side &&
                  context.draftedOrder.form["vintage_dt_min"]
                }
              />
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
                        {getCorrectDataMap["generator_type"][
                          context.draftedOrder.side
                            ? context.draftedOrder.form["generator_types"]
                            : orderForm[type]["generator_types"]
                        ] || "Generator Type"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu variant="dark">
                        {marketPlaceMap["generator_type"].map((g, i) => (
                          <Dropdown.Item
                            as="button"
                            data-title="generator_types"
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
                    <Dropdown onClick={handleChange} required>
                      <Dropdown.Toggle
                        id="generator-dropdown-basic"
                        variant="secondary"
                      >
                        {context.draftedOrder.side
                          ? context.draftedOrder.form["states"][0]
                          : orderForm[type]["states"] || "State"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu variant="dark">
                        {marketPlaceMap["state"].map((g, i) => (
                          <Dropdown.Item
                            as="button"
                            data-title="states"
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
                  <div className="input-Backdrop">
                    <Dropdown onClick={handleChange}>
                      <Dropdown.Toggle
                        id="generator-dropdown-basic"
                        variant="secondary"
                      >
                        {marketPlaceReverseMap["certifying_body"][
                          context.draftedOrder.side
                            ? context.draftedOrder.form["certifying_bodies"]
                            : orderForm[type]["certifying_bodies"]
                        ] || "Certifying Body"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu variant="dark">
                        {marketPlaceMap["certifying_body"].map((g, i) => (
                          <Dropdown.Item
                            as="button"
                            data-title="certifying_bodies"
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
          </>
        )}
        <div className="form-group">
          <div className="new-rec-form-wrapper">
            <div className="new-rec-form cancel">CANCEL</div>
            <div
              className="new-rec-form order-save"
              onClick={save}
              id={isDrafted ? "" : "deactivated-save"}
            >
              {context.draftedOrder.side ? "EDIT" : "SAVE"}
            </div>
            <div
              className="new-rec-form order-submit"
              onClick={(e) =>
                context.submitNewOrder(e, type, context.draftedOrder.form.id)
              }
            >
              POST TO MARKET
            </div>
          </div>
        </div>
      </form>
      <ErrorContainer err={context.error} />
    </div>
  );
}

export default ListOrder;
