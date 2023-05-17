import { Box, Container, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import '../../App.css';


function ReviewForm() {
    return(
        <div>
            <Container sx={{paddingBottom: "30px"}}>
                <Box sx={{ flexGrow: 1, marginLeft: "200px", marginRight: "200px", paddingBottom:"30px", backgroundColor: 'white', borderRadius: '16px', boxShadow: 4, textAlign: "left", paddingLeft: "20px", paddingRight: "20px" }}>
                    <div style={{paddingBottom: "20px"}}>
                        <TextField id="name" label="Name" variant="standard" fullWidth/>
                    </div>
                    <div style={{paddingBottom: "20px"}}>
                        <TextField id="rating" label="Rating" variant="standard" fullWidth/>
                    </div>
                    <div style={{paddingBottom: "20px"}}>
                        <TextField id="description" label="Description" variant="standard" fullWidth multiline/>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <Button href="iteminfo" variant="contained" sx={{marginBottom:"30px", backgroundColor:"#808080", "&:hover": {backgroundColor: "#6b6b6b", boxShadow: 5} }} className="Navbar-button">Submit Review</Button>
                    </div>
                </Box>
            </Container>
        </div>
    );
}

export default ReviewForm;