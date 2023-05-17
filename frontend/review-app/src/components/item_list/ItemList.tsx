import { Container } from "@mui/system";
import ItemCard from "./ItemCard";

function ItemList() {
    return (
        <div>
            <Container sx={{paddingBottom: "30px"}}>
                <h1> Item List</h1>
                <ItemCard />
            </Container>
        </div>
    );
}

export default ItemList;