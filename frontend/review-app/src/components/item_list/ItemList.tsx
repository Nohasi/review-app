import { Container } from "@mui/system";
import ItemCard from "./ItemCard";

function ItemList() {
    return (
        <div>
            <Container>
                <h1> Item List</h1>
                <ItemCard />
            </Container>
        </div>
    );
}

export default ItemList;