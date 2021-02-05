import React, {useState, useEffect } from 'react';
import Select from 'react-select'
import { baseUrl } from './config';
import { useHistory } from 'react-router-dom';


const OrderForm = ({productDetail}) => {
    // const [value, setValue] = useState();
    const [sizes, setSizes] = useState([]);
    const [genders, setGenders] = useState([]);
    const [colors, setColors] = useState([]);
    const [frames, setFrames] = useState([]);
    // const [quantity, setQuantity] = useState(0);
    const [, setType] = useState();
    const [productId, ] = useState(productDetail.id);
    const [, setInventory] = useState([]);
    const [values, setValues] = useState( {
        gender: '',
        size: '',
        frame: '',
        color: '',
        type: '',
        price: '',
        photoUrl: '',
    });
    const history = useHistory();
    // console.log("ProductDetails:  ", productDetail);
    // console.log("Product Id: ", productId);
   //console.log("Inside OrderForm: productDetail: ", productDetail);
   //console.log("values: ", values);
   //console.log("values: gender: ", values.gender, " size: ", values.size, " color: ", values.color, " frame: ", values.frame);

    useEffect ( () => {
            (async () => {
                // console.log("Inside async...")
                try {
                    // console.log("Fetching inventory for product:", productDetail.id);
                    const response = await fetch(`${baseUrl}/inventory/${productDetail.id}`, {
                            method: 'get',
                            headers: { 'Content-Type': 'application/json' },
                        });

                    if (response.ok) {
                        // console.log("Inside response.ok:  ", response.ok)
                        const respArr = await response.json();
                        const productInfo = respArr.productInfo;
                        let tmpSizes = [];
                        let tmpColors = [];
                        let tmpGenders = [];
                        let tmpFrames = [];
                        let tmpInventory = [];
                        if (productInfo.length > 0 && productInfo[0].frame) {
                            //we have a bicycle
                            // console.log("We have a bicycle...");
                            setType('Bicycle');

                            for (let i = 0; i < productInfo.length; i++) {
                                const sz = { value: productInfo[i].size, label: productInfo[i].size };
                                const clr = { value: productInfo[i].color, label: productInfo[i].color };
                                const fr = { value: productInfo[i].frame, label: productInfo[i].frame };
                                const gdr = { value: productInfo[i].gender, label: productInfo[i].gender };
                                if (!objInArray(sz, tmpSizes))   {tmpSizes.push(sz)}
                                if (!objInArray(clr, tmpColors)) {tmpColors.push(clr) }
                                if (!objInArray(fr, tmpFrames)) { tmpFrames.push(fr) }
                                if (!objInArray(gdr, tmpGenders)) { tmpGenders.push(gdr) }
                            }
                        } else if (productInfo.length > 0 && productInfo[0].gender) {
                            //we have clothing

                            for (let i = 0; i < productInfo.length; i++) {
                                const gdr = { value: productInfo[i].gender, label: productInfo[i].gender }
                                const sz = { value: productInfo[i].size, label: productInfo[i].size }
                                if (!objInArray(gdr,tmpGenders)) { tmpGenders.push(gdr) }
                                if (!objInArray(sz,tmpSizes)) { tmpSizes.push(sz) }
                            }
                        }
                        //set inventory to match with chosen values
                        for (let i = 0; i < productInfo.length; i++) {
                            tmpInventory.push(productInfo[i]);
                        }
                        // console.log("tmpInventory:  ", tmpInventory);
                        // console.log("tmpSizes: ", tmpSizes);
                        // console.log("tmpGenders: ", tmpGenders);
                        // console.log("tmpColors: ", tmpColors);
                        // console.log("tmpFrames: ", tmpFrames);
                        setInventory(tmpInventory);
                        setSizes(tmpSizes);
                        setGenders(tmpGenders);
                        setColors(tmpColors);
                        setFrames(tmpFrames);

                        //setValues({...values, gender: genders[0].value, size:sizes[0].value, color:colors[0].value, frame:frames[0].value });

                    } else {
                        throw response.status;
                    }
                } catch (e) {
                    console.log("Order size fetch error: ", e);
                }
            })();

    }, [productDetail.id])

    const objInArray = (obj, arr) => {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].value === obj.value) {
                return true;
            }
        }
        return false;
    }
    // const getOptions = (options) => {
    // }

    const handleChange = (prop) => (newValue) => {
    //     console.log("handleChange: props: ", prop);
    //    console.log("handleChange: changing: ", prop, ":",  newValue.value);
       setValues({...values, [prop]: newValue.value });

    }

    // const handleInputChange = (inputValue, actionMeta) => {
    //     console.log("handleInputChange: inputValue: ", inputValue);
    //     console.log(`action: ${actionMeta.action}`);
    // }
    const handleSubmit = (event) => {
        event.preventDefault();

        //console.log(`Values are now:  Color: ${values.color.color}, Size: ${values.size}, Frame: ${values.frame}, Gender: ${values.gender}`);
        history.push({
            pathname: '/orderConfirmation',
            state: {
                size: values.size,
                color: values.color,
                frame: values.frame,
                type: values.type,
                gender: values.gender,
                price: productDetail.price,
                photoUrl: productDetail.photoURL,
                name: productDetail.name
            }
             });
    }

    if (!productId) {
        // console.log("No product id ... not rendering!");
        return null
    } else {
        // console.log("productId before render: ", productId, " and type: ", type);
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

export default OrderForm;
