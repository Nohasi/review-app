import { Box, Button } from "@mui/material";
import '../../App.css';

function ReviewsComponent(){

    const reviews = [
        {
            name: "Mohammed Alhosani",
            rating: "10",
        },
        {
            name: "Skill Issue",
            rating: "3",
        },
        {
            name: "John Athan",
            rating: "9",
        },
        {
            name: "Snoop Dogg",
            rating: "10",
        }
    ];

    return(
        <Box sx={{ flexGrow: 1, textAlign: 'left', padding: '30px'}}>
            <h1>Reviews</h1>
            <Button href="addreview" variant="contained" sx={{marginBottom:"30px", backgroundColor:"#808080", "&:hover": {backgroundColor: "#6b6b6b", boxShadow: 5} }} className="Navbar-button">Add Review</Button>
            <div>
            {reviews.map((data, key) => {
                return <li><strong>{data.name}</strong>&nbsp;&nbsp;&nbsp;{data.rating}/10</li>
            })}
            </div>
        </Box>
    );
}

export default ReviewsComponent;