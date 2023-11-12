import React from 'react'
import styled from 'styled-components';


function Foundinfo() {
  return (
    <FoundinfoStyle>
    <div className='Foundinfo-container'>
        <div>
            <img src='./images/search-line.png' alt='search'></img>
            <h1>Found An Item?</h1>

            <div className='steps-contain'>
                <img src='./images/profile.png' alt='som'></img>
                <h2> Step 1 </h2>
                <h3>Create A Profile.</h3>
                <br />
                <img src='./images/workflow.png' alt='som'></img>
                <h2>Step 2 </h2>
                <h3>Check if your lost/found item has been reported.</h3>
                <br />
                <img src='./images/manager.png' alt='som'></img>
                <h2>Step 3</h2>
                <h3>Post a photo after submitting to the Office.</h3>
                <br />
                <img src='./images/notification-bell.png' alt='som'></img>
                <h2>Step 4</h2>
                <h3>You will get notified when the owner gets his item!</h3>
                
                

            </div>

        </div>
    </div>
    </FoundinfoStyle>
  )
}

const FoundinfoStyle = styled.section`
    img{
        width:170px;
        height:170px;
        margin-left:400px;
        background-color:rgba(42,42,255,0.4);
    }
    h1{
        display:inline;
        padding:2rem;
        color:black;
        text-align:center;
        padding-top:46px;
        padding-bottom:71px;
        background-color:rgba(42,42,255,0.4);
        
    }
    h2{
        padding:1rem;
        margin-left:20px;
        display:inline;
    }

    h3{
        padding:1rem;
        margin-left:20px;
        display: inline;
    }

    .steps-contain{
        margin-top:50px;
        width: 80%;
        margin-left:150px;
        border: solid 2px rgba(42,42,255,0.55);
        padding:1rem;
        box-shadow: 1px solid black;
        background-color: rgba(42,42,255,0.3)
    }

    .steps-contain img{
        display:inline;
        margin-left:40px;
        background-color: rgba(42,42,255,0.2);
        margin:2px;
    }

`;
export default Foundinfo;