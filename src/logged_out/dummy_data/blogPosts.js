import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import blogPost1 from "./images/ElGaaas.png";
import blogPost2 from "./images/nsacademy.png";


const content = (
  <Fragment>
    <Typography variant="h6" paragraph>
      iOS developer at Edison Effect  (February 2018 - August 2019)
    </Typography>
    <Typography paragraph>
    I implemented the purchase process using OpenPay API, also I redesign the application
     with the new brand design. The most that I used was UIkit, Push Notifications, 
     Core Data, Bluetooth low energy, UserDefaults, AFNetworking, CocoaPods, TestFlight 
     and deliver the application on iTunnes Connect.
    </Typography>
   
    <Typography variant="h6" paragraph>
      Redesign application
    </Typography>
    <Typography paragraph>
      I did the UI with the new brand design, I practice Autolayout and I used Xib files.
      For the chart I use chartjs and also I convert the XDAdobe designs to UIviews in the application.
    </Typography>

    <Typography paragraph>
      The most important participation in this project was did the purchase process in where I make request
      to OpenPay API and the backend. I used AFNetworking for the request. And practice with postman to
      test them.
    </Typography>

   
    <Typography paragraph>
     I was initially web developer but I ask for the opportunity to learn ios development and I got it.
     I am enthusiastic ios developer I really want to continue practice and become a master in mobile development. 
    </Typography>
    
  </Fragment>
);

const content2 = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Internship Nearsoft Academy  (September 2019 - March 2019)
    </Typography>
    <Typography paragraph>
    The Nearsoft Academy is a program for college seniors and recent graduates. 
    It’s an opportunity for talented students to learn from seasoned software engineers. 
    The program has 6 phases and each member of the program has a senior developer as a 
    mentor to go through soft and technical skills in software development. 
    This program allows participating in real projects and open source contributions.
    </Typography>
   
    <Typography variant="h6" paragraph>
    Pipeline App(Ruby, Rails, PostgreSQL, Javascript)
    </Typography>

    <Typography paragraph>
    Is an application to manage the recruitment process of the candidates at Nearsoft. 
    Developed by 7 members  in where I participated with:
    </Typography>

    <Typography paragraph >
    - Model design database
    </Typography>

    <Typography paragraph>
    - Views design with materialize CSS framework
    </Typography>

    <Typography paragraph>
    - Add business rules with javascript validations on the frontend
    </Typography>
    

    <Typography variant="h6" paragraph>
    Contributions Open Source projects (MaterialUI framework)
    </Typography>
    <Typography paragraph>
      I got three contribution in these repository open source
    </Typography>

    <Typography variant="h6" paragraph>
    Reports Module (NodeJs, MongoDB, React)
    </Typography>


    <Typography paragraph>
    As a team, we add the Reports module in a web application management where we 
    implemented scrum methodology and unit testing with a mocha framework. 
    I participated in adding:
    </Typography>


    <Typography paragraph>
    - Create queries to obtain information from the database to display in a view/report.
    </Typography>

    <Typography paragraph>
    - Add endpoints to each of the charts, each endpoint must return the information in 
    two kinds of objects because each of them will be using a different kind of chart. 
    Some of them are dictionaries and other arrays.
    </Typography>

    <Typography paragraph>
    - Design  one component in React for the reports module
    </Typography>
  </Fragment>
);

export default [
  {
    title: "iOS Developer at Edison Effect",
    id: 1,
    date: 1518739200,
    imageSrc: blogPost1,
    snippet:
      "Swift and Objective C. Core Data, User Defaults, Push Notifications, AFNetworking, Bluetooth Low Energy",
    content: content
  },
  {
    title: "Nearsoft Academy",
    id: 2,
    date: 1568678400,
    imageSrc: blogPost2,
    snippet:
      "Contributions open source, Patterns design, agile methodologies, testing, CI/CD, Teamwork",
    content: content2
  },
  /*
  {
    title: "Post 3",
    id: 3,
    date: 1577391600,
    imageSrc: blogPost3,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: content
  },
  {
    title: "Post 4",
    id: 4,
    date: 1572281600,
    imageSrc: blogPost4,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: content
  },
  {
    title: "Post 5",
    id: 5,
    date: 1573281600,
    imageSrc: blogPost5,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: content
  },
  {
    title: "Post 6",
    id: 6,
    date: 1575281600,
    imageSrc: blogPost6,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: content
  }*/
];
