import React from "react";
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import InfoTable from "./InfoTable";

function ItemDetails() {
      
    return (
        <div>
            <Box sx={{ flexGrow: 1, paddingLeft: '30px', paddingRight: '30px' }}>
                <h1 style={{paddingBottom: '30px'}}>Qanba Obsidian 2</h1>
                <Grid container spacing={2} >
                    <Grid item xs={4} style={{
                        backgroundImage: 'url("https://cdn11.bigcommerce.com/s-tk3bsu7rib/images/stencil/1280x1280/products/133/570/Obsidian_2_ARCADE_JOYSTICKBLACK__49126.1681176700.jpg?c=2")',
                        backgroundSize: 'contain',
                        height:'300px',
                        backgroundRepeat: 'no-repeat',
                        marginTop: "16px"
                    }}>
                    </Grid>
                    <Grid item xs={8}>
                        <InfoTable />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default ItemDetails;