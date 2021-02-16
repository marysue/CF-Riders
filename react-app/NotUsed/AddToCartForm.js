import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select'
import { baseUrl } from './config';
import { useHistory } from 'react-router-dom';
import { setBadgeCount } from './store/authentication';



const AddToCartForm = ({productDetail}) => {
    // const [value, setValue] = useState();
    const [sizes, setSizes] = useState([]);
    const [genders, setGenders] = useState([]);
    const [colors, setColors] = useState([]);
    const [frames, setFrames] = useState([]);
    // const [quantity, setQuantity] = useState(0);
    const [productId, ] = useState(productDetail.id);
    const [inventory, setInventory] = useState([]);
    const [values, setValues] = useState( {
        gender: '',
        size: '',
        frame: '',
        color: '',
        type: '',
        price: '',
        photoUrl: '',
    });
    const userId = useSelector(state => state.authentication.userId);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect ( () => {
            (async () => {

                try {
                    const response = await fetch(`${baseUrl}/inventory/${productDetail.id}`, {
                            method: 'get',
                            headers: { 'Content-Type': 'application/json' },
                        });

                    if (response.ok) {
                        const respArr = await response.json();
                        const productInfo = respArr.productInfo;
                        let tmpSizes = [];
                        let tmpColors = [];
                        let tmpGenders = [];
                        let tmpFrames = [];
                        let tmpInventory = [];

                        if (productInfo.length > 0 ) {
                            let sz, clr, fr, gdr;
                            for (let i = 0; i < productInfo.length; i++) {
                                if (productInfo[i].size) { sz = { value: productInfo[i].size, label: productInfo[i].size }};
                                if (productInfo[i].color) { clr = { value: productInfo[i].color, label: productInfo[i].color }};
                                if (productInfo[i].frame) { fr = { value: productInfo[i].frame, label: productInfo[i].frame }};
                                if (productInfo[i].gender) { gdr = { value: productInfo[i].gender, label: productInfo[i].gender }};
                                if  ((productInfo[i].size) && (!objInArray(sz, tmpSizes))){tmpSizes.push(sz)}
                                if  ((productInfo[i].color) && (!objInArray(clr, tmpColors))) {tmpColors.push(clr) }
                                if  ((productInfo[i].frame) && (!objInArray(fr, tmpFrames))) { tmpFrames.push(fr) }
                                if  ((productInfo[i].gender) && (!objInArray(gdr, tmpGenders))) { tmpGenders.push(gdr) }
                            }
                        }
                       for (let i = 0; i < productInfo.length; i++) {
                            tmpInventory.push(productInfo[i]);
                        }
                        setInventory(tmpInventory);
                        if (tmpSizes.length > 0) {setSizes(tmpSizes)} else {setSizes([])};
                        if (tmpGenders.length > 0) {setGenders(tmpGenders)} else {setGenders([])};
                        if (tmpColors.length > 0) {setColors(tmpColors)} else {setColors([])};
                        if (tmpFrames.length > 0) {setFrames(tmpFrames)} else {setFrames([])};
                        } else {
                        throw response.status;
                    }
                } catch (e) {
                    console.log("Order size fetch error: ", e);
                }
            })();


    }, [productDetail.id])

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
        if (tmpSizes.length > 0) {setSizes(tmpSizes)} else {setSizes([])};
        if (tmpGenders.length > 0) {setGenders(tmpGenders)} else {setGenders([])};
        if (tmpColors.length > 0) {setColors(tmpColors)} else {setColors([])};
        if (tmpFrames.length > 0) {setFrames(tmpFrames)} else {setFrames([])};


    }

    const setNewInventory = (inv) => {
        let newInventory = [];

        for (let i =0; i < inv.length; i++) {
            if (inv[i].color && values.color) {
                if (inv[i].color !== values.color) { continue; }  //don't add this one -- it doesn't match)
            }
            if (inv[i].size && values.size) {
                if (inv[i].size !== values.size) { continue; } //don't add this one -- it doesn't match)
            }
            if (inv[i].gender && values.gender) {
                if (inv[i].gender !== values.gender) { continue; } //don't add this one -- it doesn't match)
            }
            if (inv[i].frames && values.frames) {
                if (inv[i].frames !== values.frame) { continue; } //don't add this one - it doesn't match);
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
       setValues({...values, [prop]: newValue.value });
       const newInventory = setNewInventory(inventory);
       setInventory(newInventory);
       setOptions(newInventory);
    }
    const findInventoryId = () => {
        if (!inventory.size && !inventory.color && !inventory.frame && !inventory.gender) {
            return inventory[0].inventoryId;
        }
        for (let i=0; i < inventory.length; i++) {
            if (values.size && inventory.size !== values.size) { continue; }
            if (values.color && inventory.color !== values.color) { continue; }
            if (values.frame && inventory.frame !== values.frame) { continue; }
            if (values.gender && inventory.gender !== values.gender) { continue; }

            //if we make it this far, we've found the appropriate inventory item.
            return inventory[i].inventoryId;
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
                    dispatch(setBadgeCount(cartItemCount.cartItems));
                }
            })();
        } else {
            alert("Failed to add to cart");
        }
        history.push("/productsBrowser");

    }

    if (!productId) {
        return null
    } else if (inventory.length <=  0) {
        return (<div>Product temporarily out of stock.</div>)
    } else {
    return (
        <form onSubmit={handleSubmit} style={{color: "black"}}>
            <div style={{marginTop: "10px"}}>
                { sizes.length > 0 ?
                    <>
                        <label style={{marginRight: "10px"}}>
                            Size:
                        </label>
                        <Select
                            options={sizes}
                            onChange={handleChange("size")}
                            isSearchable={true}
                            >
                        </Select>
                    </>
                    : null
                }
            </div>
            <div style={{marginTop: "10px"}}>
                { colors.length > 0 ?
                    <>
                        <label style={{marginRight: "10px"}}>
                            Color:
                        </label>
                        <Select
                            options={colors}
                             onChange={handleChange('color')}
                             isSearchable={true}
                            >


                        </Select>
                    </> : null
                }
            </div>

            <div style={{marginTop: "10px"}}>
                { frames.length > 0 ?
                    <>
                        <label style={{marginRight: "10px"}}>
                            Frame:
                        </label>
                        <Select
                            options={ frames }
                             onChange={handleChange('frame')}
                            >
                        </Select>
                    </> : null
                }
            </div>
            <div style={{marginTop: "10px"}}>
                { genders.length > 0 ?
                    <>
                        <label style={{marginRight: "10px"}} >
                            Gender:
                        </label>
                        <Select
                            options={ genders }
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
}
}

export default AddToCartForm;
