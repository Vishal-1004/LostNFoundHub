import React from "react";
import { useEffect,useState } from "react";


function BackToTop(){


    const [backToTop,setBackToTop] = useState(false);


    useEffect(()=>{
            window.addEventListener("scroll",()=>{
                if (window.scrollY>100){
                    setBackToTop(true);
                } else{
                    setBackToTop(false);
                }
            })
    },[])

    const scrollUp = ()=>{
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        })
    }

  return(<div>
      {backToTop&& (
            <button style={{
                position:"fixed",
                bottom:"37px",
                right:"16px",
                background:"transparent",
                border:"none",
            }} onClick={scrollUp}> <svg xmlns="http://www.w3.org/2000/svg" position="fixed"  width="42" height="42" fill="Back" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" stroke="black" strokeWidth="0.25"/>
          </svg> </button>
        )}
  </div>)
}

export default BackToTop
