import React from 'react';
import Followers from './Followers';
import './User.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



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
            </Card>
             
        </div>
    )
    
}

export default User;
// <Followers image={`${attr.avatar_url}`} name={attr.name} userName={attr.login} repos={attr.public_repos} followers={attr.followers} following={attr.following}/>