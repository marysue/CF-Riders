import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { baseUrl } from './config';
import { setBadgeCount } from './store/authentication';

const NewAddToCartForm = ({productDetail}) => {

    const [sizesAvail, setSizesAvail] = useState(undefined);
    const [colorsAvail, setColorsAvail] = useState(undefined);
    const [gendersAvail, setGendersAvail] = useState(undefined);
    const [framesAvail, setFramesAvail] = useState(undefined);
    const [inventoryAvail, setInventoryAvail] = useState(undefined);
    const [sizeSelected, setSizeSelected] = useState(undefined);
    const [colorSelected, setColorSelected] = useState(undefined);
    const [genderSelected, setGenderSelected] = useState(undefined);
    const [frameSelected, setFrameSelected] = useState(undefined);
    const userId = useSelector(state => state.authentication.userId);
    const history = useHistory();
    const dispatch = useDispatch();

    console.log("NewAddProductToCartForm: received productDetail: ", productDetail)

    useEffect ( () => {
        setColorsAvail(productDetail.colorsAvail);
        setFramesAvail(productDetail.framesAvail);
        setGendersAvail(productDetail.gendersAvail);
        setInventoryAvail(productDetail.inventoryAvail);
        setSizesAvail(productDetail.sizesAvail);

    }, [productDetail])

    const setOptions = (inv) => {
        let tmpSizes = [];
        let tmpGenders = [];
        let tmpColors = [];
        let tmpFrames = [];
        let sz, clr, fr, gdr;
        for (let i = 0; i < inv.length; i++) {
            if (inv[i].size) { sz = { value: inv[i].size, label: inv[i].size }};
            if (inv[i].color) { clr = { value: inv[i].color, label: inv[i].color }};
            if (inv[i].frame) { fr = { value: inv[i].frame, label: inv[i].frame }};
            if (inv[i].gender) { gdr = { value: inv[i].gender, label: inv[i].gender }};
            if  ((inv[i].size) && (!objInArray(sz, tmpSizes))){tmpSizes.push(sz)}
            if  ((inv[i].color) && (!objInArray(clr, tmpColors))) {tmpColors.push(clr) }
            if  ((inv[i].frame) && (!objInArray(fr, tmpFrames))) { tmpFrames.push(fr) }
            if  ((inv[i].gender) && (!objInArray(gdr, tmpGenders))) { tmpGenders.push(gdr) }
        }
        if (tmpSizes.length > 0) {setSizesAvail(tmpSizes)} else {setSizesAvail([])};
        if (tmpGenders.length > 0) {setGendersAvail(tmpGenders)} else {setGendersAvail([])};
        if (tmpColors.length > 0) {setColorsAvail(tmpColors)} else {setColorsAvail([])};
        if (tmpFrames.length > 0) {setFramesAvail(tmpFrames)} else {setFramesAvail([])};
    }

    const setNewInventory = (inv) => {
        let newInventory = [];

        for (let i =0; i < inv.length; i++) {
            if (inv[i].color && colorSelected) {
                if (inv[i].color !== colorSelected) { continue; }  //don't add this one -- it doesn't match)
            }
            if (inv[i].size && sizeSelected) {
                if (inv[i].size !== sizeSelected) { continue; } //don't add this one -- it doesn't match)
            }
            if (inv[i].gender && genderSelected) {
                if (inv[i].gender !== genderSelected) { continue; } //don't add this one -- it doesn't match)
            }
            if (inv[i].frames && frameSelected) {
                if (inv[i].frames !== frameSelected) { continue; } //don't add this one - it doesn't match);
            }
            //if we made it this far, it matches on everything we wanted it to match on. So add it to
            //our new inventory
            newInventory.push(inv[i]);
        }
        return newInventory;
    }
    const objInArray = (obj, arr) => {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].value === obj.value) {
                return true;
            }
        }
        return false;
    }

    const handleChange = (prop) => (newValue) => {

       switch (prop) {
           case ('color'): {
               setColorSelected(newValue.value);
               break;
           }
           case ('size'): {
               setSizeSelected(newValue.value)
               break;
           }
           case ('gender'): {
               setGenderSelected(newValue.value);
               break;
           }
           case ('frame'): {
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
    }
    const findInventoryId = () => {
        console.log(`newAddToCartForm: findInventoryId: Values set: size: ${sizeSelected}, color: ${colorSelected}, frame: ${frameSelected}, gender: ${genderSelected}`);

        if (!inventoryAvail.size && !inventoryAvail.color && !inventoryAvail.frame && !inventoryAvail.gender) {
            console.log("newAddToCartForm: inventoryAvail: ", inventoryAvail[0]);
            return inventoryAvail[0].inventoryAvailId;
        }
        for (let i=0; i < inventoryAvail.length; i++) {
            console.log(`newAddToCartForm: findInventoryId: size: ${inventoryAvail[i].size}, color: ${inventoryAvail[i].color}, frame: ${inventoryAvail[i].frame}, gender: ${inventoryAvail[i].gender}`);
            if (sizeSelected && inventoryAvail[i].size !== sizeSelected) { continue; }
            if (colorSelected && inventoryAvail[i].color !== colorSelected) { continue; }
            if (frameSelected && inventoryAvail[i].frame !== frameSelected) { continue; }
            if (genderSelected && inventoryAvail[i].gender !== genderSelected) { continue; }

            //if we make it this far, we've found the appropriate inventory item.
            return inventoryAvail[i].inventoryId;
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const inventoryId = findInventoryId();
        if (inventoryId && userId) {
            (async () => {
                const response = await fetch(`${baseUrl}/carts`, {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        userId,
                        inventoryId,
                        quantity: '1' }),
                });
                if (response.ok) {
                    const cartItemCount = await response.json();
                    console.log("AddToCartForm: Setting badgeCount to:  ", cartItemCount.cartItmes);
                    dispatch(setBadgeCount(cartItemCount.cartItems));
                }
            })();
        } else {
            alert("Failed to add to cart");
        }
        history.push("/productsBrowser");
    }

    if (!productDetail.productId) {
        return <h2>Loading...</h2>
    } else if (inventoryAvail && inventoryAvail.length <=  0) {
        console.log("newAddToCartForm:  neither inventoryAvail nor inventoryAvail.length");
        return <div>Product temporarily out of stock.</div>
    } else {
        console.log("newAddToCartForm: inventoryAvail: ", inventoryAvail);
        if (inventoryAvail) {
            console.log("InventoryAvail.length:  ", inventoryAvail.length);

        return (

            <form onSubmit={handleSubmit} style={{color: "black"}}>
                <div style={{marginTop: "10px"}}>
                    { sizesAvail.length > 0 ?
                        <>
                            <label style={{marginRight: "10px"}}>
                                Size:
                            </label>
                            <Select
                                options={sizesAvail}
                                onChange={handleChange("size")}
                                isSearchable={true}
                                >
                            </Select>
                        </>
                        : null
                    }
                </div>
                <div style={{marginTop: "10px"}}>
                    { colorsAvail.length > 0 ?
                        <>
                            <label style={{marginRight: "10px"}}>
                                Color:
                            </label>
                            <Select
                                options={colorsAvail}
                                onChange={handleChange('color')}
                                isSearchable={true}
                                >


                            </Select>
                        </> : null
                    }
                </div>

                <div style={{marginTop: "10px"}}>
                    { framesAvail.length > 0 ?
                        <>
                            <label style={{marginRight: "10px"}}>
                                Frame:
                            </label>
                            <Select
                                options={ framesAvail }
                                onChange={handleChange('frame')}
                                >
                            </Select>
                        </> : null
                    }
                </div>
                <div style={{marginTop: "10px"}}>
                    { gendersAvail.length > 0 ?
                        <>
                            <label style={{marginRight: "10px"}} >
                                Gender:
                            </label>
                            <Select
                                options={ gendersAvail }
                                // value={ values.gender }
                                // defaultValue={values.gender}
                                onChange={handleChange('gender')}
                                // isClearable={true}
                                isSearchable={true}

                                >

                            </Select>
                        </> : null
                    }
                </div>

                <input style={{display: "block", marginTop: "15px"}} type="submit" value="Add To Cart" />
            </form>

        );
                } else { return <h2>SERIOUSLY???</h2> }
    }
}

export default NewAddToCartForm;
