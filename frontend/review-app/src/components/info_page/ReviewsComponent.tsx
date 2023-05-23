import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import '../../App.css';
import ReviewCard from "./ReviewCard";

function ReviewsComponent(){

    const reviews = [
        {
            name: "Mohammed Alhosani",
            rating: 10,
            description: "Amazing wonderful",
        },
        {
            name: "Skill Issue",
            rating: 3,
            description: "my wrists will curse the day I bought this stick",
        },
        {
            name: "John Athan",
            rating: 9,
            description: "Amazing wonderful very very good wow love it so much",
        },
        {
            name: "Snoop Dogg",
            rating: 10,
            description: `What's happenin y'all? Big Snoop Dogg
            Shootin a shout out to all the lil' rascals out there man
            The lil' homies, y'knahmsayin?
            Niggaz keep talkin they ain't gon' grow up to be shit
            Don't trip, I used to be a lil' rascal too
            Look at this lil' rascal now!
            Yeah, the lil' rascal done became the Big Snoop Dogg
            Follow your dreams lil' homies`,
        },
        {
            name: "Johnny GGXrdRev2",
            rating: 10,
            description: "I am Johnny from GG Xrd Rev2"
        }
    ];

    return(
        <Box sx={{ flexGrow: 1, textAlign: 'center', padding: '30px'}}>
            <h1>Reviews</h1>
            <Link to={{pathname: '/addreview'}}>
                <Button variant="contained" sx={{marginBottom:"30px", backgroundColor:"#808080", "&:hover": {backgroundColor: "#6b6b6b", boxShadow: 5} }} className="Navbar-button">Add Review</Button>
            </Link>
            <div>
            {reviews.map((data, key) => {
                return <ReviewCard name={data.name} description={data.description} rating={data.rating}/>
            })}
            </div>
        </Box>
    );
}

export default ReviewsComponent;