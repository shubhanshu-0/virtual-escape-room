import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './RitualRoom.css'

const RitualRoom1 = () => {

  const navigate = useNavigate();
    const handleClick = () => {
        navigate("/page14", {
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

  return (
    <div className="ritual-room-bg1">
      <div className="ritual-room-table" onClick={handleClick}>
      </div>
    </div>
  )
}

export default RitualRoom1
