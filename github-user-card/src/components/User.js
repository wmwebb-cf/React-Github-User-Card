import React from 'react';
import './User.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';


const User = (props) => {
    
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 240,
        },
      });
    
    const classes = useStyles();
    
    return (
        <div className='User'>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} image={props.image} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Name: {props.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Username: {props.userName}<br/>
                            Repos: {props.repos}<br/>
                            Followers: {props.followers}<br/>
                            Following: {props.following}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href={props.url}>
                        <Button size="medium" color="primary">
                        {props.name}'s Github Page
                        </Button>
                    </a> 
                </CardActions>
            </Card>
             
        </div>
    )
    
}

export default User;
