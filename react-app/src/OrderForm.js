import React, {useState, useEffect } from 'react';
import { baseUrl } from './config';

const OrderForm = ({productDetail}) => {
    const [value, setValue] = useState();
    const [bicycleOpts, setBicycleOpts] = useState();
    const [clothingOpts, setClothingOpts] = useState();
    const [type, setType] = useState();
    const [productId, setProductId] = useState();

    console.log("Inside OrderForm: ");

    useEffect ( () => {
        setType(productDetail.productTypeEnum);
        setProductId(productDetail.id);
        console.log("Hello");
        (async () => {
            console.log("Inside async...")
            if (type === 'Bicycles' || type === 'Clothing') {
                try {
                    const response = await fetch(`${baseUrl}/products/${type}/${productId}`, {
                            method: 'get',
                            headers: { 'Content-Type': 'application/json' },
                        });
                        if (response.ok) {
                            const sizeArr = await response.json();
                            console.log("Fetch returned Sizes:  ", sizeArr);
                        } else {
                            throw response.status;
                        }
                    } catch (e) {
                        console.log("Ordere size fetch error: ", e);
                    }
            }
        })();


        // (async () => { })();
        // (async () => {})();
        //get type
        // if (type === 'Bicycles' || type === 'Clothing') {
        //     console.log("Product id:  ", productDetail.id, " Type: ", type)
        //     (async() => { })();
            // (async () => {
            //     console.log("Inside async...");
                // try {
                //     console.log(" Calling fetch ... ");
                //     const response = await fetch(`${baseUrl}/products/${type}/${productId}`, {
                //         method: 'get',
                //         headers: { 'Content-Type': 'application/json' },
                //     });
                //     if (response.ok) {
                //         const sizeArr = await response.json();
                //         console.log("Fetch returned Sizes:  ", sizeArr);
                //     } else {
                //         throw response.status;
                //     }
                // } catch (e) {
                //     console.log("Accessory fetch error: ", e);
                // }
        // })()

    //  } else if (type === 'Accessories') {

    //     } else {
    //         console.log("Type is not set.");
    //     }
    }, [productDetail.id, type, productDetail.productTypeEnum])

    const getOptions = (options) => {
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('A name was submitted: ' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={value} onChange={handleChange} />
            </label>
            <select defaultValue={"coconut"}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default OrderForm;
