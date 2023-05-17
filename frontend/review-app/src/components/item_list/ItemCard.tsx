import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';


function ItemCard(){
    return (
        <div>
            <Link style={{ textDecoration: 'none', color: "black" }} to={{
            pathname: '/iteminfo',}}>
                <Box sx={{ flexGrow: 1, padding: "30px", "&:hover": {backgroundColor: "#e5e5e5", boxShadow: 10}}}>
                    <Grid container spacing={2} >
                        <Grid item xs={4} style={{
                            backgroundImage: 'url("https://cdn11.bigcommerce.com/s-tk3bsu7rib/images/stencil/1280x1280/products/133/570/Obsidian_2_ARCADE_JOYSTICKBLACK__49126.1681176700.jpg?c=2")',
                            backgroundSize: 'contain',
                            height:'150px',
                            backgroundRepeat: 'no-repeat'
                        }}>
                        </Grid>
                        <Grid item xs={8}>
                            <Box sx={{lineHeight: "35px"}}>
                                <h2>Qanba Obsidian 2</h2>
                                Qanba
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Link>
        </div>
    );
}

export default ItemCard;