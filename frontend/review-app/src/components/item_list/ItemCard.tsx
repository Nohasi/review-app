import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import itemDetails from "../../utils/itemDetails";

function ItemCard(props: itemDetails){
    return (
        <div>
            <Link style={{ textDecoration: 'none', color: "black" }} to={{
            pathname: '/iteminfo'}} state={{itemId: props.itemId, itemName: 
                props.itemName, 
                image: props.image, 
                itemPrice: props.itemPrice, 
                itemBrand: props.itemBrand,
                itemButtons: props.itemButtons,
                itemAnalog: props.itemAnalog,
                compatibleSystems: props.compatibleSystems}}>
                <Box sx={{ flexGrow: 1, padding: "30px", "&:hover": {backgroundColor: "#e5e5e5", boxShadow: 10}}}>
                    <Grid container spacing={2} >
                        <Grid item xs={4} style={{
                            backgroundImage: `url("${props.image}")`,
                            backgroundSize: 'contain',
                            height:'150px',
                            backgroundRepeat: 'no-repeat'
                        }}>
                        </Grid>
                        <Grid item xs={8}>
                            <Box sx={{lineHeight: "35px"}}>
                                <h2>{`${props.itemName}`}</h2>
                                {`${props.itemBrand}`}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Link>
        </div>
    );
}

export default ItemCard;