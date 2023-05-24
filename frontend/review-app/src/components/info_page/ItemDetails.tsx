import React from "react";
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import InfoTable from "./InfoTable";
import itemDetails from "../../utils/itemDetails";

function ItemDetails(props: itemDetails) {
      
    return (
        <div>
            <Box sx={{ flexGrow: 1, paddingLeft: '30px', paddingRight: '30px' }}>
                <h1 style={{paddingBottom: '30px'}}>{`${props.itemName}`}</h1>
                <Grid container spacing={2} >
                    <Grid item xs={4} style={{
                        backgroundImage: `url("${props.image}")`,
                        backgroundSize: 'contain',
                        height:'300px',
                        backgroundRepeat: 'no-repeat',
                        marginTop: "16px"
                    }}>
                    </Grid>
                    <Grid item xs={8}>
                        <InfoTable 
                            itemName={props.itemName} 
                            itemId={props.itemId} 
                            image={props.image} 
                            itemPrice={props.itemPrice} 
                            itemBrand={props.itemBrand} 
                            itemButtons={props.itemButtons} 
                            itemAnalog={props.itemAnalog} 
                            compatibleSystems={props.compatibleSystems} 
                        />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default ItemDetails;