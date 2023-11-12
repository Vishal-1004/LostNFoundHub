import React from 'react';
import styled from 'styled-components';

function Contact() {
  return (
    <ContactStyled>
    <div className='form-container'>
        <img src="./images/profile-flat.png" alt="contact" />
        <h2>Contact Us.</h2>
        <textarea placeholder='Your Query Here'>
        </textarea>
    </div>
    </ContactStyled>
  )
}


const ContactStyled = styled.section`
img{
    width:300px;
    height:300px;
    display:inline;
    margin-right:-300px;
    margin-left:280px;
}
h2{
    padding:1rem;
    margin-left:300px;
    display:inline-block;
    margin-top: -100px !important;
}

textarea{
    display:inline-block;
    width:400px;
    margin-left:570px;
    margin-top: -420px;
    padding:20px;

    
}

.form-container{
    margin-top:100px;
    background-color:black;
    color:white;
    width:1184px;
    margin-left:150px;
    margin-bottom:50px;
    padding: 1rem;
}

`
export default Contact