import { Box, makeStyles } from "@mui/material";
import Grid from '@mui/material/Grid';

function ItemCard(){

    const useStyles = makeStyles({
        Card:{
            '&:hover': {
                backgroundColor: '#fff',
            },
        }
    })

    const classes = useStyles();

    return (
        <div>
            <Box sx={{ flexGrow: 1, borderTop: 1, borderBottom:1, padding: "30px"}}>
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
        </div>
    );
}

export default ItemCard;