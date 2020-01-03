import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import NavBar from './component/navBar/NavBar';
import Nav from './component/DocPlanner/DocPlanner';
import './component/DocPlanner/Docplanner.css';
import Text from './component/DocPlanner/Text.js';
import Box from './component/DocPlanner/Box.js'
import Links from './component/DocPlanner/Links';
import BigBox from './component/DocPlanner/bigBox';
import Image from './component/DocPlanner/Image';
import Footer from './component/DocPlanner/Footer';
const item = [{title: 'About Us'},{title: 'Carreer'},{title: 'Department',dropdown:['Marketing & PR','Customer Success & Sales','IT, Product, Design & UX','Finance & Administration','HR & more']}]
const text=[
  {b:'For patient' , p:'Find a doctor, book a visit and solve any health-related doubt',chose:'true',image:'https://www.docplanner.com/img/screen-marketplace@2x.png',class:'box1'},
  {b:'For doctors' , p:'Save time managin visits and cut no-shows by half',image:'https://www.docplanner.com/img/screen-saas@2x.png',class:'box2'}
]
const box1=[{img:'https://www.docplanner.com/img/flag.png',title:'Leader in 10 countries',p:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'},
{img:'https://www.docplanner.com/img/patients.png',title:'30 million unique patients',p:'visit us every month'}]

const box2=[{img:'https://www.docplanner.com/img/visits.png',title:'1.5 million appointments',p:'booked last month'},
{img:'https://www.docplanner.com/img/doctors.png',title:'2 million active doctors',p:'trust in our solutions'}]

const image1=[{img:'https://www.docplanner.com/images/warsaw.png',title:'Warsaw'},
{img:'https://www.docplanner.com/images/barcelona.png',title:'Barcelona'},
{img:'https://www.docplanner.com/images/istanbul.png',title:'Istanbul'}]

const image2=[{img:'https://www.docplanner.com/images/rome.png',title:'Rome'},
{img:'https://www.docplanner.com/images/mexico-city.png',title:'Mexico City'},
{img:'https://www.docplanner.com/images/curitiba.png',title:'Curtiba'}]

function App() {
  return (
    <div >
      
<Nav items={item}/>
<Text/>
<Box items={text}/>
<Links/>
<BigBox box={box1} box1={box2}/>
<Image img={image1} img1={image2}/>
<Footer/>
    </div>
    
  );

}




export default App;

