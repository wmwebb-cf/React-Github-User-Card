import React from 'react';
import './Followers.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const Followers = (props) => {
    // console.log(props);
    const useStyles = makeStyles({
        root: {
          minWidth: 245,
        },
        media: {
          height: 140,
        },
      });
    
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image={props.image} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Name: <br/>{props.userName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <a href={props.url}>
                    <Button size="medium" color="primary">
                    {props.userName}'s Github Page
                    </Button>
                </a> 
            </CardActions>
        </Card>
    )
}

export default Followers;