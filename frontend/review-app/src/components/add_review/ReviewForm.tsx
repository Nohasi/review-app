import { Box, Container, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import '../../App.css';


function ReviewForm() {

    const location = useLocation();
    const {itemId, itemName, image, itemPrice, itemBrand, itemButtons, itemAnalog, compatibleSystems} = location.state;

    let [name, setName] = useState('');
    let [description, setDescription] = useState('');
    const [rating, setRating] = useState<number | null>(0);
    const [hover, setHover] = useState(-1);

    function submitForm(e: React.MouseEvent<HTMLButtonElement>) {
        let returnedRating = Number(rating)*2;
        axios.post('http://localhost:4090/addreview', {itemId, name, returnedRating, description});
    }

    const labels: { [index: string]: string } = {
        0: '0',
        0.5: '1',
        1: '2',
        1.5: '3',
        2: '4',
        2.5: '5',
        3: '6',
        3.5: '7',
        4: '8',
        4.5: '9',
        5: '10',
      };

      function getLabelText(value: number) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
      }

    return(
        <div>
            <Container sx={{paddingBottom: "30px"}}>
                <Box sx={{ flexGrow: 1, marginLeft: "200px", marginRight: "200px", paddingBottom:"30px", backgroundColor: 'white', borderRadius: '16px', boxShadow: 4, textAlign: "left", paddingLeft: "20px", paddingRight: "20px" }}>
                    <div style={{paddingBottom: "20px"}}>
                        <TextField value={name} onChange={(e) => setName(e.target.value)} id="name" label="Name" variant="standard" fullWidth/>
                    </div>
                    <div style={{paddingBottom: "20px"}}>
                    <Typography component="legend">Rating{`${rating}`}</Typography>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            precision={0.5}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                            setRating(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            sx={{transform: "translate(0, 7px)"}}
                        />
                        <span style={{paddingLeft: "15px"}}>
                            {rating !== null && (
                                labels[hover !== -1 ? hover : rating]
                            )}
                        </span>
                    </div>
                    <div style={{paddingBottom: "20px"}}>
                        <TextField value={description} onChange={(e) => setDescription(e.target.value)} id="description" label="Description" variant="standard" fullWidth multiline/>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <Link to={{pathname: '/iteminfo'}} state={{
                            itemId: itemId, 
                            itemName: itemName, 
                            image: image, 
                            itemPrice: itemPrice, 
                            itemBrand: itemBrand,
                            itemButtons: itemButtons,
                            itemAnalog: itemAnalog,
                            compatibleSystems: compatibleSystems}}
                        >
                            <Button onClick={(e) => submitForm(e)} variant="contained" sx={{marginBottom:"30px", backgroundColor:"#808080", "&:hover": {backgroundColor: "#6b6b6b", boxShadow: 5} }} className="Navbar-button">Submit Review</Button>
                        </Link>
                    </div>
                </Box>
            </Container>
        </div>
    );
}

export default ReviewForm;