import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { baseUrl } from "./config";
import { setBadgeCount } from "./store/authentication";
import Button from 'react-bootstrap/Button'


const NewAddToCartForm = ({ productDetail }) => {
  const [sizesAvail, setSizesAvail] = useState(undefined);
  const [colorsAvail, setColorsAvail] = useState(undefined);
  const [gendersAvail, setGendersAvail] = useState(undefined);
  const [framesAvail, setFramesAvail] = useState(undefined);
  const [inventoryAvail, setInventoryAvail] = useState(undefined);
  const [sizeSelected, setSizeSelected] = useState(undefined);
  const [colorSelected, setColorSelected] = useState(undefined);
  const [genderSelected, setGenderSelected] = useState(undefined);
  const [frameSelected, setFrameSelected] = useState(undefined);
  const userId = useSelector((state) => state.authentication.userId);
  const [errorMsg, setErrorMsg] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const [cartDone, setCartDone] = useState(false);

  useEffect(() => {
    if (productDetail.colorsAvail && productDetail.colorsAvail.length > 1) {
      setColorsAvail(productDetail.colorsAvail);
    } else if (
      productDetail.colorsAvail &&
      productDetail.colorsAvail.length === 1
    ) {
      setColorsAvail([productDetail.colorsAvail[0]]);
      setColorSelected(productDetail.colorsAvail[0].value);
    }
    if (productDetail.framesAvail && productDetail.framesAvail.length > 1) {
      setFramesAvail(productDetail.framesAvail);
    } else if (
      productDetail.framesAvail &&
      productDetail.framesAvail.length === 1
    ) {
      setFramesAvail([productDetail.framesAvail[0]]);
      setFrameSelected(productDetail.framesAvail[0].value);
    }
    if (productDetail.gendersAvail && productDetail.gendersAvail.length > 1) {
      setGendersAvail(productDetail.gendersAvail);
    } else if (
      productDetail.gendersAvail &&
      productDetail.gendersAvail.length === 1
    ) {
      setGendersAvail([productDetail.gendersAvail[0]]);
      setGenderSelected(productDetail.gendersAvail[0].value);
    }
    if (productDetail.sizesAvail && productDetail.sizesAvail.length > 1) {
      setSizesAvail(productDetail.sizesAvail);
    } else if (
      productDetail.sizesAvail &&
      productDetail.sizesAvail.length === 1
    ) {
      setSizesAvail([productDetail.sizesAvail[0]]);
      setSizeSelected(productDetail.sizesAvail[0].value);
    }

    setInventoryAvail(productDetail.inventoryAvail);
  }, [productDetail]);

  const setOptions = (inv) => {
    let tmpSizes = [];
    let tmpGenders = [];
    let tmpColors = [];
    let tmpFrames = [];
    let sz, clr, fr, gdr;
    for (let i = 0; i < inv.length; i++) {
      if (inv[i].size) {
        sz = { value: inv[i].size, label: inv[i].size };
      }
      if (inv[i].color) {
        clr = { value: inv[i].color, label: inv[i].color };
      }
      if (inv[i].frame) {
        fr = { value: inv[i].frame, label: inv[i].frame };
      }
      if (inv[i].gender) {
        gdr = { value: inv[i].gender, label: inv[i].gender };
      }
      if (inv[i].size && !objInArray(sz, tmpSizes)) {
        tmpSizes.push(sz);
      }
      if (inv[i].color && !objInArray(clr, tmpColors)) {
        tmpColors.push(clr);
      }
      if (inv[i].frame && !objInArray(fr, tmpFrames)) {
        tmpFrames.push(fr);
      }
      if (inv[i].gender && !objInArray(gdr, tmpGenders)) {
        tmpGenders.push(gdr);
      }
    }
    if (tmpSizes.length > 0) {
      setSizesAvail(tmpSizes);
    } else {
      setSizesAvail([]);
    }
    if (tmpGenders.length > 0) {
      setGendersAvail(tmpGenders);
    } else {
      setGendersAvail([]);
    }
    if (tmpColors.length > 0) {
      setColorsAvail(tmpColors);
    } else {
      setColorsAvail([]);
    }
    if (tmpFrames.length > 0) {
      setFramesAvail(tmpFrames);
    } else {
      setFramesAvail([]);
    }
  };

  const setNewInventory = (inv) => {
    let newInventory = [];

    for (let i = 0; i < inv.length; i++) {
      if (inv[i].color && colorSelected) {
        if (inv[i].color !== colorSelected) {
          continue;
        } //don't add this one -- it doesn't match)
      }
      if (inv[i].size && sizeSelected) {
        if (inv[i].size !== sizeSelected) {
          continue;
        } //don't add this one -- it doesn't match)
      }
      if (inv[i].gender && genderSelected) {
        if (inv[i].gender !== genderSelected) {
          continue;
        } //don't add this one -- it doesn't match)
      }
      if (inv[i].frames && frameSelected) {
        if (inv[i].frames !== frameSelected) {
          continue;
        } //don't add this one - it doesn't match);
      }
      //if we made it this far, it matches on everything we wanted it to match on. So add it to
      //our new inventory
      newInventory.push(inv[i]);
    }
    return newInventory;
  };
  const objInArray = (obj, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].value === obj.value) {
        return true;
      }
    }
    return false;
  };

  const handleChange = (prop) => (newValue) => {
    switch (prop) {
      case "color": {
        setColorSelected(newValue.value);
        break;
      }
      case "size": {
        setSizeSelected(newValue.value);
        break;
      }
      case "gender": {
        setGenderSelected(newValue.value);
        break;
      }
      case "frame": {
        setFrameSelected(newValue.value);
        break;
      }
      default: {
        break;
      }
    }

    const newInventory = setNewInventory(inventoryAvail);
    setInventoryAvail(newInventory);
    setOptions(newInventory);
  };
  const findInventoryId = () => {
    //console.log(`newAddToCartForm: findInventoryId: Values set: size: ${sizeSelected}, color: ${colorSelected}, frame: ${frameSelected}, gender: ${genderSelected}`);
    console.log(
      `colorSelected: ${colorSelected}, sizeSelected: ${sizeSelected}, genderSelected: ${genderSelected}, frameSelected: ${frameSelected}`
    );
    for (let i = 0; i < inventoryAvail.length; i++) {
      console.log(
        `${i}:  ${inventoryAvail[i].size}, ${inventoryAvail[i].color}, ${inventoryAvail[i].frame}, ${inventoryAvail[i].gender}`
      );
      if (sizeSelected && inventoryAvail[i].size !== sizeSelected) {
        console.log(`${i}:  size: ${inventoryAvail[i].size} no match`);
        continue;
      }
      if (colorSelected && inventoryAvail[i].color !== colorSelected) {
        console.log(`${i}:  color: ${inventoryAvail[i].color} no match`);
        continue;
      }

      if (frameSelected && inventoryAvail[i].frame !== frameSelected) {
        console.log(
          `${i}:  frame: ${inventoryAvail[i].frame} no match with selected: ${frameSelected}`
        );
        continue;
      }
      if (genderSelected && inventoryAvail[i].gender !== genderSelected) {
        console.log(`${i}:  gender: ${inventoryAvail[i].gender} no match`);
        continue;
      }
      console.log(
        "Returning inventoryAvail[i].inventoryId",
        inventoryAvail[i].inventoryId
      );
      //if we make it this far, we've found the appropriate inventory item.
      return inventoryAvail[i].inventoryId;
    }
    return undefined;
  };

  const submitCheck = () => {
    if (colorsAvail && colorsAvail.length > 1 && !colorSelected) {
      console.log("Setting colorSelected error");
      setErrorMsg((errorMsg) => (errorMsg += "No color specified.  "));
    }
    if (sizesAvail && sizesAvail.length > 1 && !sizeSelected) {
      console.log("Setting sizeSelected error.");
      setErrorMsg((errorMsg) => (errorMsg += "No size selected.  "));
    }
    if (gendersAvail && gendersAvail.length > 1 && !genderSelected) {
      console.log("Setting genderSelected error.");
      setErrorMsg((errorMsg) => (errorMsg += "Select M/F. "));
    }
    if (framesAvail && framesAvail.length > 1 && !frameSelected) {
      console.log("Setting frameSelected error.");
      setErrorMsg((errorMsg) => (errorMsg += "No frame selected. "));
    }
  };
  const handleSubmit = async(event) => {
    event.preventDefault();
    submitCheck();
    console.log("ErrorMsg:  ", errorMsg);

    if (errorMsg === "") {
      const inventoryId = findInventoryId();
      if (inventoryId && userId) {

          const response = await fetch(`${baseUrl}/carts`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userId,
              inventoryId,
              quantity: "1",
            }),
          });
          if (response.ok) {
            const cartItemCount = await response.json();
            dispatch(setBadgeCount(cartItemCount.cartItems));
            setCartDone(true);
          }

      } else {
        console.log(
          "NewAddToCartForm: Failed fetch.  InventoryId: ",
          inventoryId,
          " UserId: ",
          userId
        );
      }
    } else {
      setTimeout(() => {
        setErrorMsg("");
      }, 5000);
    }
  };

  const returnToProducts = () => { history.push('/bicycleProducts');}
  const goToShoppingCart = () => { history.push('/bicycleProducts');}

  if (cartDone) {
    return (<>
                <h2>Your order has been placed!</h2>
                <div style={{display:"flex"}}>
                <Button size="lg" style={{marginTop:"0px", height:"45px", width: "100px",marginRight:"30px"}} variant="outline-success" onClick={returnToProducts}>Continue Shopping</Button>
                <Button size="lg" style={{marginTop:"0px",height:"45px", width: "100px",}} variant="outline-success" onClick={goToShoppingCart}>Go to My Cart</Button>
                </div>
            </>
    )
  } else if (!productDetail.productId || !inventoryAvail) {
    return <h2>Loading...</h2>;
  } else {
    // console.log("NewAddToCartForm: inventoryAvail: ", inventoryAvail);
    return (
      <>
        {errorMsg ? (
          <div style={{ backgroundColor: "red", color: "white" }}>
            {errorMsg}
          </div>
        ) : null}
        <form onSubmit={handleSubmit} style={{ color: "black" }}>
          <div style={{ marginTop: "10px" }}>
            {sizesAvail.length > 0 ? (
              <>
                <label style={{ marginRight: "10px" }}>Size:</label>
                <Select
                  options={sizesAvail}
                  onChange={handleChange("size")}
                  isSearchable={true}
                ></Select>
              </>
            ) : null}
          </div>
          <div style={{ marginTop: "10px" }}>
            {colorsAvail.length > 0 ? (
              <>
                <label style={{ marginRight: "10px" }}>Color:</label>
                <Select
                  options={colorsAvail}
                  onChange={handleChange("color")}
                  isSearchable={true}
                ></Select>
              </>
            ) : null}
          </div>

          <div style={{ marginTop: "10px" }}>
            {framesAvail.length > 1 ? (
              <>
                <label style={{ marginRight: "10px" }}>Frame:</label>
                <Select
                  options={framesAvail}
                  onChange={handleChange("frame")}
                ></Select>
              </>
            ) : null}
            {framesAvail.length === 1 ? (
              <>
                <label style={{ marginRight: "10px" }}>Frame:</label>
                <label style={{ marginRight: "10px" }}>
                  {" "}
                  {framesAvail[0].value}
                </label>
              </>
            ) : null}
          </div>
          <div style={{ marginTop: "10px" }}>
            {gendersAvail.length > 0 ? (
              <>
                <label style={{ marginRight: "10px" }}>Gender:</label>
                <Select
                  options={gendersAvail}
                  // value={ values.gender }
                  // defaultValue={values.gender}
                  onChange={handleChange("gender")}
                  // isClearable={true}
                  isSearchable={true}
                ></Select>
              </>
            ) : null}
          </div>

          <input
            style={{ display: "block", marginTop: "15px" }}
            type="submit"
            value="Add To Cart"
          />
        </form>
      </>
    );
  }
};

export default NewAddToCartForm;
