import React from "react";
import { Typography, withWidth } from "@material-ui/core";

function Aboutme(props) {

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
      <Typography variant="h3" align="center" className="lg-mg-bottom">
          Something about me
       </Typography>
        <Typography variant="h5" align="center" className="lg-mg-bottom">
        I am an enthusiastic person that loves learning from others, be collaborative, support other people as well as
share my knowledge. I want to improve my skills and become an amazing girl programming. I am interest in mobile development.  As for hobbies, I love to participate as a volunteer in organizations about science and technology. 
        </Typography>
       
      </div>
    </div>
  );
}


export default withWidth()(Aboutme);
