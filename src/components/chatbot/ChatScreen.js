import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import NullPost from './NullPost';
import PostData from './PostData';



function ChatScreen() {

    // Styled Component's Props
    const theme = {
        background: '#A7C1E6',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#98DCE7',
        headerFontColor: '#fff',
        headerFontSize: '19px',
        botBubbleColor: '#328CE5',
        botFontColor: '#ffff',
        botFontSize:'30px',
        userBubbleColor: '#F5F5F5',        
        userFontColor: '#4a4a4a',
        // width:"100%",
        
       
        

      };

      const config ={
        width:"100%",
        
        // height:"100vh",
        // height:"",
        //   height:"auto",
        //   marginLleft:"auto",
        //   marginRight:"auto",
        //   margin:"0,auto",
        //   floating:"true",
        // padding:"10px",
          botAvatar:"bot.png",
          userAvatar:"user.png"
      };

    return (
        <div>
           
  <ThemeProvider theme={theme}>
            <ChatBot steps={[

              
                {
                    id: 'intro',
                    message: 'Hi, I am a Frontend Developer, Looking for Oppurtunities',
                    trigger: 'q-contact',
                },

                {
                    id: 'q-contact',
                    message:'Do you like to get my contact Details',
                    placeholder:'Please Select from the options',
                    trigger:'giveContactDetails'
                },

                {
                    id:"giveContactDetails",
                    options:[
                        {value:'y', label:"Yes", trigger:'myEmail'},
                        {value: 'n', label:"No", trigger:"share-contact"}
                    ],
                    placeholder:'Please Select from the above options',

                },

                {
                    id:"myEmail",
                    message:"My Email :  jasimaha@gmail.com",
                    trigger:"myPhone"
                },

                {
                    id:"myPhone",
                    message:"My Phone: 0097154-4712863",
                    trigger:"reply-message"
                
                },

                  {
                    id: 'reply-message',
                    message:'Thank You, Hope you will contact me soon',
                    trigger:'share-contact'
                },

                {
                    id: 'share-contact',
                    message:'Do you like to share your Email ID with me',
                    trigger:"getContactDetails"
                },

                {
                    id:"getContactDetails",
                    options:[
                        {value:'y', label:"Yes", trigger:'q-email'},
                        {value: 'n', label:"No", trigger:"noShare"}
                    ],
                    placeholder:'Please Select from the above options',

                },


                {
                    id: "q-email",
                    message:"Please enter your email",
                    trigger:"getEmail",

                    },
        
                    {
                        id:'getEmail',
                        user:true,
                        validator:(value) => {
                            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) 
                               {
                                return true;
                               } 
                               else{
                                   return 'Please enter a valid email'
                               }
                            
        
                        },
                    placeholder:'Please Enter Your Email',

                        trigger: "endMessage"
                    },


                    // {
                    //     id: 'thanks-message',
                    //     message:'Thank you for sharing your Email ID',
                    //     end:true
                    // },


                    {
                        id:"endMessage",
                        // message:'Its Okay, Thank you for visiting this page',
                        
                        component:<PostData/>,
                        asMessage:true,  
                    placeholder:'Chat Ended',

                        end: true,

                        
                    },

                    {
                        id: 'noShare',
                        component:<NullPost/>,
                        // message:'Its Okay, Thank you for visiting this page',
                        asMessage:true, 
                    placeholder:'Chat Ended',

                        end:true
                    },

                 

                    
            // {

            //     id:"qsubmit",
            //     message:"Do you wish to submit",
            //     trigger:"submit"
            // },

            // {
            //     id:"submit",
            //     options:[
            //         {value:'y', label:"Yes", trigger:'endMessage'},
            //         {value: 'n', label:"No", trigger:"noSubmit"}
            //     ]
            // },

            // {
            //     id:"noSubmit",
            //     message:"Your selected no for submit",
            //     end: true,
            // },

           




  

]}
{...config}
  />
  </ThemeProvider>
        </div>
    )
}

export default ChatScreen
                // Validation Only Alphabets
            //     {
            //         id: 'firstname',
            //         user: true,
            //         validator: (value) => {
            //             if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value)) {
            //                 return true;
            //             }
            //             else {
            //                 return 'Please input alphabet characters only'
            //             }
                    
            //     },

            //     trigger:'q-lastname',

               

            // },
        //     {
        //         id: 'q-lastname',
        //         message: 'Hello, What is your name?',
        //         trigger: 'lastname',
        //     },
        //     {
        //         id: 'lastname',
        //         user: true,
        //         validator: (value) => {
        //             if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value)) {
        //                 return true;
        //             }
        //             else {
        //                 return 'Please input alphabet characters only'
        //             }
                
        //     },

        
        //     trigger:"qsubmit",

           

        // },

            // validate email

            // {
            // id: "qemail",
            // message:"Please enter your email",
            // trigger:"qsubmit",
            // },

            // {
            //     id:'emailValidate',
            //     user:true,
            //     validator:(value) => {
            //         if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) 
            //            {
            //             return true;
            //            } 
            //            else{
            //                return 'Please enter a valid email'
            //            }
                    

            //     },
            //     trigger: "qzip"
            // },

            // {
            //     id: "qzip",
            //     message: "Please Enter your Zip code",
            //     trigger:'zipValidate',

            // },

            // {
            //     id:"zipValidate",
            //     user:true,
            //     validator:(value) => {
            //     if (/^[0-9]{5}(?:-[0-9]{4})?$/.test(value))
            //     {
            //         return true;
            //     }
            //     else{
            //         return "Please enter a valid zip code"
            //     }
                
            // },
            // trigger:"qphoneNumber"      
            // },

            // {
            //     id:"qphoneNumber",
            //     message:"Please share your mobile number",
            //     trigger:'phoneNumberValidate'
            // },

            // {
            //     id:"phoneNumberValidate",
            //     user:true,
            //     validator:(value) => {
            //         if(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value))
            //         {
            //             return true;
            //         }

            //         else{
            //             return "Please enter a valid phone number";
            //         }

   
            //     },
            //     trigger:"qsubmit"
            // },


