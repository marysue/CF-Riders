import React from 'react';
import { useSelector } from 'react-redux';
import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom';

const AccessoryProducts = () => {
    console.log("Accessory Products Page");
    const accessoryArr = useSelector(state => state.accessories.accessoryList);
    if (accessoryArr) {
        return (
            <>
                <div className="productGrid">
                    {accessoryArr.map( (item) => {
                        const id = item.id;
                        const name = item.name;
                        const photoURL = item.photoURL;
                        const price = item.price.toFixed(2);
                        return (

                            <Link style={{ textDecoration: 'none' }} className="productItem" to={`/accessoryDetail/${id}`} key={id}>
                                <img id={item.id} key={id} src={photoURL} alt={"Accessories"}></img>
                                <Figure.Caption style={{marginTop:"-5px"}}>{name}</Figure.Caption>
                                <span className="price">${price}</span>
                            </Link>
                        )
                    })}
                </div>
            </>
        );

        } else {
            return <h1>Loading ... </h1>
        }
}

export default AccessoryProducts;
