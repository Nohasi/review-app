import { Box, Container } from "@mui/material";
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

interface reviewProps {
    name: string,
    description: string,
    rating: number,
}

function ReviewCard(props: reviewProps) {
    return(
        <div>
            <Container>
                <Box sx={{ flexGrow: 1, marginLeft: "50px", marginRight: "50px", backgroundColor: 'white', boxShadow: 4, textAlign: "left", padding: "20px"}}>
                    <Grid container spacing={2}>
                            <Grid item xs={6} sx={{fontSize: 20}}>
                                {props.name}
                            </Grid>
                            <Grid item xs={6} sx={{textAlign: "right", fontSize: 20}}>
                                {`${props.rating}/10`}<Rating name="read-only" value={1} max={1} readOnly sx={{transform: "translate(0, 4px)"}} />
                            </Grid>
                        <Grid item xs={12}>
                            {props.description}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}

export default ReviewCard;