import React from "react";
import { useLocation } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import ReviewsComponent from "./ReviewsComponent";

function InfoPage(){

    const location = useLocation();
    const {itemId, itemName, image, itemPrice, itemBrand, itemButtons, itemAnalog, compatibleSystems} = location.state;

    return (
        <>
            <ItemDetails
                itemId={itemId}
                itemName={itemName}
                image={image}
                itemPrice={itemPrice}
                itemBrand={itemBrand}
                itemButtons={itemButtons}
                itemAnalog={itemAnalog}
                compatibleSystems={compatibleSystems}
            />
            <ReviewsComponent 
                itemId={itemId}
                itemName={itemName}
                image={image}
                itemPrice={itemPrice}
                itemBrand={itemBrand}
                itemButtons={itemButtons}
                itemAnalog={itemAnalog}
                compatibleSystems={compatibleSystems}
            />
        </>
    );
}

export default InfoPage;