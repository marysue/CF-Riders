import React from "react";
import { useSelector } from "react-redux";
import Figure from "react-bootstrap/Figure";
import { Link } from "react-router-dom";

const ClothingProducts = () => {
  const clothingArr = useSelector((state) => state.clothing.clothingList);
  if (clothingArr) {
    return (
      <>
        <div className="productGrid">
          {clothingArr.map((item) => {
            const id = item.id;
            const name = item.name;
            const photoURL = item.photoURL;
            const price = item.price.toFixed(2);
            return (
              <Link
                style={{textDecoration: "none" }}
                className="productItem"
                to={`/clothingDetail/${id}`}
                key={id}
              >
                <img
                  id={item.id}
                  key={id}
                  src={photoURL}
                  alt={"Clothing"}
                ></img>
                <Figure.Caption style={{marginTop: "-5px"}}>{name}</Figure.Caption>
                <span className="price">${price}</span>
              </Link>
            );
          })}
        </div>
      </>
    );
  } else {
    return <h1>Loading ... </h1>;
  }
};

export default ClothingProducts;
