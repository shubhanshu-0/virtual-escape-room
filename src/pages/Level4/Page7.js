import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import { useScore } from "../../components/ScoreContext";
import { gameover } from "../Dead/gameover";

const Page7 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { score, decreaseScore , isDead } = useScore();
    if(isDead){
      gameover(navigate);
    }

    useEffect(()=>{
      if(!location.state || !location.state.auth){
        navigate('/');
      }
    },[]);
    const handleClick = () => {
        navigate('/Page8', {
            state: {
              auth: true
            },
          });
      };
  
  return (
    <>
    <div className='page7-bg'>
      <div style={{position:'absolute' , top:'200px ' , left:'370px'}}>
        <div className="title" style={{fontSize:"6rem"}}>
        THE ROOM OF HOPE<br />
          <div className="sub-title">LEVEL &nbsp; FOUR</div>
        </div>
        <p style={{margin:"0 4rem" , marginTop:'50px' ,textAlign:'center'}}>WHAT AWAITS YOU NEXT IS THE HOPE OF SUCCESSFUL ESCAPE !</p>
        <button onClick={handleClick} style={{marginLeft:'500px' , marginTop:'30px'}}>PLAY</button>
       {/* <button onClick={handleClick} style={{marginLeft:'49%' , marginTop:'31%'}}>PLAY</button> */}
      </div>
    </div>
    </>
  )
}

export default Page7