import React, { Fragment, useContext, useRef } from "react";
import StateContext from "../context/StateContext";
import { Link } from "react-router-dom";

const categoryList = [
  "Telecommunication Equipment and Telephone Sales",
  "Computer Network/Information Services",
  "Telegraph Services",
  "Money Orders - Wire Transfer",
  "Cable, Satellite, and Other Pay Television Services",
  "Utilities - Electric, Gas, Water",
  "Motor Vehicle Supplies and New Parts",
  "Office and Commercial Furniture",
  "Construction Materials - Not Elsewhere Classified",
  "Computers, Peripherals, and Software",
];

const QrForm = (props) => {
  const dataCtx = useContext(StateContext);
  const { setShow } = dataCtx;
  const merchantIdRef = useRef();
  const merchantNameRef = useRef();
  const merchantCityRef = useRef();
  const merchantAccRef = useRef();
  const merchantCategoryRef = useRef();
  const merchantSubCategoryRef = useRef();
  const countryRef = useRef();
  const currencyRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      merchantName: merchantNameRef.current.value,
      merchantCity: merchantCityRef.current.value,
      merchantId: merchantIdRef.current.value,
      merchantAcc: merchantAccRef.current.value,
      merchantCategory: merchantCategoryRef.current.value,
      merchantSubCategory: merchantSubCategoryRef.current.value,
      merchantCountry: countryRef.current.value,
      merchantCurrency: currencyRef.current.value,
    };
    try {
      const res = await fetch("https://qr-backend-g3ui.onrender.com/emv-rq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([data]),
      });
      const jsonData = await res.json();

      console.log(jsonData.message);

      // await props.show(jsonData.qr);
    } catch (err) {
      console.log("Error saving json file:", err);
    }
  };

  //

  const merchantId = Math.round(Math.random() * 100000);

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <h1 className="header">Generate qr</h1>
        <label htmlFor="id" className="label">
          Merchant Id
        </label>
        <input
          type="text"
          id="id"
          defaultValue={merchantId}
          ref={merchantIdRef}
          className="input"
          name="merchantId"
        />
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          type="text"
          name="merchantName"
          id="name"
          ref={merchantNameRef}
          className="input"
        />
        <label htmlFor="cifAcc" className="label">
          CIF Account
        </label>
        <input type="text" id="cifAcc" className="input" ref={merchantAccRef} />
        <label htmlFor="category" className="label">
          Merchant Category
        </label>
        <select
          name="category"
          id="category"
          className="category select"
          ref={merchantCategoryRef}
        >
          <option value="">--Choose Category--</option>
          {categoryList.map((cat) => {
            return (
              <option value={cat} key={Math.random() * 100}>
                {cat}
              </option>
            );
          })}
        </select>
        <label htmlFor="subCategory" className="label">
          Merchant Sub Category
        </label>
        <select
          name="sub-category"
          id="sub-category"
          className="sub-category select"
          ref={merchantSubCategoryRef}
        >
          <option value="">-Choose Sub-Category</option>
          <option value="sub-category1">Sub Category1</option>
          <option value="sub-category2">Sub Category2</option>
          <option value="sub-category3">Sub Category3</option>
        </select>
        <label htmlFor="country" className="label">
          Country
        </label>
        <input
          type="text"
          name="country"
          id="country"
          className="input"
          ref={countryRef}
        />
        <label htmlFor="city" className="label">
          City
        </label>
        <input
          type="text"
          name="city"
          id="city"
          ref={merchantCityRef}
          className="input"
        />
        <label htmlFor="currency" className="label">
          Currency
        </label>
        <input type="text" id="currency" className="input" ref={currencyRef} />

        <button className="btn">Generate</button>
      </form>
      <Link to={"/"}>
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          go and show
        </button>
      </Link>
    </Fragment>
  );
};

export default QrForm;

// 4814: Telecommunication Equipment and Telephone Sales
// 4816: Computer Network/Information Services
// 4821: Telegraph Services
// 4829: Money Orders - Wire Transfer
// 4899: Cable, Satellite, and Other Pay Television Services
// 4900: Utilities - Electric, Gas, Water
// 5013: Motor Vehicle Supplies and New Parts
// 5021: Office and Commercial Furniture
// 5039: Construction Materials - Not Elsewhere Classified
// 5045: Computers, Peripherals, and Software
// 5047: Medical, Dental, and Hospital Equipment and Supplies
// 5065: Electrical Parts and Equipment
// 5072: Hardware, Equipment, and Supplies
// 5094: Precious Stones and Metals, Watches, and Jewelry
// 5111: Stationery, Office Supplies, Printing, and Writing Paper
// 5199: Nondurable Goods - Not Elsewhere Classified
// 5200: Home Supply Warehouse Stores
// 5211: Lumber and Building Materials Stores
// 5231: Glass, Paint, and Wallpaper Stores
// 5251: Hardware Stores
// 5261: Nurseries, Lawn, and Garden Supply Stores
// 5309: Duty-Free Stores
// 5310: Discount Stores
// 5311: Department Stores
// 5411: Grocery Stores, Supermarkets
// 5422: Freezer and Locker Meat Provisioners
// 5499: Miscellaneous Food Stores - Convenience Stores and Specialty Markets
// 5511: Car and Truck Dealers (New and Used)
// 5521: Automobile and Truck Dealers (Used Only)
// 5532: Automotive Tire Stores
