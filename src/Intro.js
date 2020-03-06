import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Ladybug from "./Ladybug.png";
import Bee from "./Bee.png";
import Cricket3 from "./Cricket3.png"
import ButterflyPurple from "./ButterflyPurple.png"


const images = [
  {
    url: './Ladybug.png',
    title: 'Ladybug',
    width: '25%',
  },
  
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));
export default function Intro(props) {
  const classes = useStyles();
  return (
    <div id="introduction">
    <h3>Are you <strong>BUGGED </strong>by clutter?</h3>
    <div class="flexbox">
       {/* {image.map(image => ( */}
        <ButtonBase
          focusRipple
          //key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
           //width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              // backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {/* {image.title} */}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      
        <img src= {Ladybug} alt="ladybug"/>
        <img src= {Bee} alt="bee"/>
        <img src= {Cricket3} alt="cricket"/>
        <img src= {ButterflyPurple} alt="butterfly"/>
      
    </div>
    <div class="clear"></div>
                
    <h3>It's time for you to do the bugging by learning your <strong>ORGANIZING</strong> style!</h3>

    <p>Maybe you're using the wrong organizing style. When it comes to organizing, it is not a "one size fits all" situation. After years of trying and failing to stay tidy and organized, I discovered the Clutterbug method of organizing, and now my home is always clean. I became a certified personal organizer, and I would love to help you discover the organizing method that will work for your personality type.</p>
</div>
      
   
  );
}


