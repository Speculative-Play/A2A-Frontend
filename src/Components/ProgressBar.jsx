import React from "react";
import AuntiesAlgosColorPalette from "./AuntiesAlgosColorPalette";

const ProgressBar = (props) => {
    
    const containerStyles = {
      height: 5,
      width: '75%',
      backgroundColor: AuntiesAlgosColorPalette.progressBarBackground,
      borderRadius: 50,
      margin: 50
    }
  
    const fillerStyles = {
      height: '75%',
      width: `${props.completed}%`,
      backgroundColor: AuntiesAlgosColorPalette.progressBarForeground,
      borderRadius: 'inherit',
      textAlign: 'right', 
      transition: 'width 1s ease-in-out'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
        </div>
      </div>
    );
  };

export default ProgressBar;