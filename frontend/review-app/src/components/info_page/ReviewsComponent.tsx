import { Box, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import itemDetails from "../../utils/itemDetails";
import ReviewCard from "./ReviewCard";

function ReviewsComponent(props: itemDetails){

    let [reviews, setReviews] = useState<any[]>([]);

    const getReviews = async () => {
        const { data } = await axios.get(`http://localhost:4090/getreviews`, {params: {itemId: props.itemId}});
        setReviews(data);
      };

    useEffect(() => {
        getReviews()
      }, []);

    return(
        <Box sx={{ flexGrow: 1, textAlign: 'center', padding: '30px'}}>
            <h1>Reviews</h1>
            <Link to={{pathname: '/addreview'}} state={{
                itemId: props.itemId, 
                itemName: props.itemName, 
                image: props.image, 
                itemPrice: props.itemPrice, 
                itemBrand: props.itemBrand,
                itemButtons: props.itemButtons,
                itemAnalog: props.itemAnalog,
                compatibleSystems: props.compatibleSystems}}>
                <Button variant="contained" sx={{marginBottom:"30px", backgroundColor:"#808080", "&:hover": {backgroundColor: "#6b6b6b", boxShadow: 5} }} className="Navbar-button">Add Review</Button>
            </Link>
            <div>
            {reviews.map((data, key) => {
                return <ReviewCard key={key} name={data.name} description={data.description} rating={data.rating}/>
            })}
            </div>
        </Box>
    );
}

export default ReviewsComponent;