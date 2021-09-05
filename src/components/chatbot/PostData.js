import React, { Component } from 'react';
// import { database } from "../../firebase"
import axiosInstance from "../../axiosInstance"




class PostData extends Component {


    constructor(props) {
        super(props);
        const { steps } = this.props;
        const { giveContactDetails, getContactDetails, getEmail,  } = steps;

        this.state = { giveContactDetails, getContactDetails, getEmail,  };
    }



    //Post method using axiosInstance
    componentDidMount() {
        const userObject = {
            give_contact: this.state.giveContactDetails.value,             
            get_contact: this.state.giveContactDetails.value,
            get_email: this.state.getEmail.value
         
        };
        axiosInstance.post('/results.json', userObject)
      .then(res => {
        console.log(res.status)
      }).catch(function (error) {
        console.log(error);
      });
  }

    render() {
        return (
            <div>Thank you , Have a Nice Day !</div>
        );
    }
};


export default PostData;