import React from 'react';
import { useSelector } from 'react-redux';
import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom';

const BicycleProducts = () => {
    console.log("Bicycle Products Page");
    const bicycleArr = useSelector(state => state.bicycles.bicycleList);

    if (bicycleArr) {
        return (
            <>
                <div className="productGrid">
                    {bicycleArr.map( (item, idx) => {
                        const id = item.id;
                        const name = item.name;
                        const photoURL = item.photoURL;
                        const price = item.price.toFixed(2);
                        return (

                            <Link className="productItem" to={`/bicycleDetail/${id}`} key={id}>
                                <img id={item.id} key={id} src={photoURL} alt={"Bicycles"}></img>
                                <Figure.Caption>{name}</Figure.Caption>
                                <span className="price">${price}</span>
                            </Link>
                        )
                    })};
                </div>
            </>
        );

        } else {
            return <h1>Loading ... </h1>
        }
}

export default BicycleProducts;
