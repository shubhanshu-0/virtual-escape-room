import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import map2 from "../../assets/map2.webp"

const Page35 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/page4a", {
      state: {
        auth: true,
      },
    });
  };

  const location = useLocation();
  useEffect(() => {
    if (!location.state || !location.state.auth) {
      navigate("/");
    }
  }, []);

  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`fade-in-panel2 bg level2 ${fadeIn ? "fade-in" : ""}`}>
        {/* <div className="title">
        Terror Trail<br />
          <div className="sub-title">LEVEL &nbsp; TWO</div>
        </div> */}

        {/* <p style={{margin:"0 4rem"}}>Sketch the Map and Choose the Gate wisely: One door leads to the next room, the other returns you to the first room with blood sacrifice.</p> */}
        <img src={map2} width={800} alt="" />
        <button onClick={handleClick} style={{marginTop:'1rem'}}>Play</button>
      </div>
    </>
  );
};

export default Page35;