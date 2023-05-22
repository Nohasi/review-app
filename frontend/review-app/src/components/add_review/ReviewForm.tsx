import { Box, Container, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../../App.css';


function ReviewForm() {

    let [name, setName] = useState('');
    let [rating, setRating] = useState('');
    let [description, setDescription] = useState('');

    function submitForm(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        axios.post('localhost', {name, rating, description});
    }

    return(
        <div>
            <Container sx={{paddingBottom: "30px"}}>
                <Box sx={{ flexGrow: 1, marginLeft: "200px", marginRight: "200px", paddingBottom:"30px", backgroundColor: 'white', borderRadius: '16px', boxShadow: 4, textAlign: "left", paddingLeft: "20px", paddingRight: "20px" }}>
                    <div style={{paddingBottom: "20px"}}>
                        <TextField value={name} onChange={(e) => setName(e.target.value)} id="name" label="Name" variant="standard" fullWidth/>
                    </div>
                    <div style={{paddingBottom: "20px"}}>
                        <TextField value={rating} onChange={(e) => setRating(e.target.value)} id="rating" label="Rating" variant="standard" fullWidth/>
                    </div>
                    <div style={{paddingBottom: "20px"}}>
                        <TextField value={description} onChange={(e) => setDescription(e.target.value)} id="description" label="Description" variant="standard" fullWidth multiline/>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <Link to={{pathname: '/iteminfo'}}>
                            <Button onClick={(e) => submitForm(e)} variant="contained" sx={{marginBottom:"30px", backgroundColor:"#808080", "&:hover": {backgroundColor: "#6b6b6b", boxShadow: 5} }} className="Navbar-button">Submit Review</Button>
                        </Link>
                    </div>
                </Box>
            </Container>
        </div>
    );
}

export default ReviewForm;