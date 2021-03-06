import React from "react";
import $ from 'jquery';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import Footer from "components/Footer/Footer.jsx";
// core components
import Header from "components/Header/Header.jsx";
//import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/StaticHeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/profile.jpg";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Email from "@material-ui/icons/Email";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import {Link} from "react-router-dom";


const dashboardRoutes = [];

class FollowUser extends React.Component {
  static propTypes = {
        /** Current user */
        profileInfo: PropTypes.oneOfType([PropTypes.object,PropTypes.array])
    }
  

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      first_name: '',
      last_name: '',
      email:'',
      gender: '',
      locations: '',
    }
      

  }

 

  handleFollow = event => {
    var userToken = localStorage.getItem('token');
    console.log(userToken);
    var body = {
      id: this.props.profileInfo.id
    }

    $.ajax({
      url: "http://ec2-18-234-162-48.compute-1.amazonaws.com:8000/auth/follow/",
      data: JSON.stringify(body),
      type: "POST",
      crossDomain : true,
      headers: {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization' : 'JWT ' + userToken,
      },
      beforeSend: () => {
        console.log();
      },
      success: (res) => {
       
        console.log("SUCCESS! " + res);
      },
      error: (res, err) => {
        console.log(body);
      
        console.log("ERR " + res);
      }
    });
  };

  render() {
    console.log(this.props.profileInfo);
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
     
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="MEMORIST"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/bg7.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}></h3>
                      
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              
              
              
                  <label htmlFor="username">Username</label>
                  <br/>
                  <label htmlFor="username">{this.props.profileInfo.username}</label>
                  <br/>
                  <br/>

                  <label htmlFor="email">Email Address</label>
                  <br/>
                  <label htmlFor="email">{this.props.profileInfo.email}</label>

                  <br/>
                  <br/>    
                  <label htmlFor="first_name">First Name</label>
                  <br/>
                  <label htmlFor="first_name">{this.props.profileInfo.first_name}</label>
                  <br/>
                  <br/>    
                  <label htmlFor="last_name">Lastname</label>
                  <br/>
                  <label htmlFor="last_name">{this.props.profileInfo.last_name}</label>
                  <br/>
                  <br/> 
                  <label htmlFor="locations">Locations</label>
                  <br/>
                  <label htmlFor="locations">{this.props.profileInfo.locations}</label>
                  <br/>
                  <br/> 
                  <label htmlFor="gender">Gender</label>
                  <br/>

                  <label htmlFor="gender">{this.props.profileInfo.gender}</label>
                  <br/>
                  <br/>                     

                <Button simple color="primary" size="lg" onClick={this.handleFollow}>
                        Follow
                </Button>
                <Link
                    to={{
                        pathname: "/home-page"
                    }}
                    className={classes.link}
                >&nbsp; &nbsp;
                    <Button default color="primary" size="lg">
                        Back to Home
                    </Button>
                </Link>
                      
            </div>
            
          </div>
          <Footer

           />
        </div>
      
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(FollowUser);
