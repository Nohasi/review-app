import { Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

function ItemList() {

    const [items, setItems] = useState<any[]>([]);
    const getItems = async () => {
      const { data } = await axios.get(`http://localhost:4090/getitems`);
      setItems(data);
    };
    useEffect(() => {
      getItems();
    }, []);

    return (
        <div>
            <Container sx={{paddingBottom: "30px"}}>
                <h1>Item List</h1>
                <div>
                    {items.map((data, key) => {
                        return <ItemCard key={key} itemId={data.itemId} itemName={data.itemName} image={data.itemImage}  itemPrice={data.itemPrice}itemBrand={data.itemBrand} itemButtons={data.itemButtons} itemAnalog={data.itemAnalog} compatibleSystems={data.compatibleSystems}/>;
                    })}
                </div>
            </Container>
        </div>
    );
}

export default ItemList;