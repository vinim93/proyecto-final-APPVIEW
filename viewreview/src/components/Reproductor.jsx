import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import ReactPlayer from 'react-player';
import avengers from "../avengers.png";
//import jquery from "jquery";
//import $ from "jquery";
import * as $ from "jquery";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
 
import anime from '../anime.webp';
class Reproductor extends Component{
    render(){
        return (
            <div className="container clearfix">
              <div className="row">
              <img className="img-fluid zoom reproductor"src={"https://upload.wikimedia.org/wikipedia/commons/4/4f/Marvel%27s_The_Avengers_logo.svg"}></img>
                    <section className="col-md-7  d-flex  img-fluid">
                    
                  <ReactPlayer
                  url="https://www.youtube.com/watch?v=eD8USUvzEIc"
                  playing
                  controls
                  muted
                  />
                  
              </section>
              <aside className="col-md-4">
                 <div className="side-bar">
                     <h3 className="brd-title">Calificacion</h3>
                     <div className="content-side"></div>
                     <div className="side-day">
                         <h3>info</h3>
                         <div className="thumb">
                         <img className="img-fluid zoom" src={""} data-tip data-for="anime"></img> 
                         </div>
                         <div className="sinopsis">Plataforma sugerida</div>
                     </div>
                     <div className="content-side"></div>
                     <div className="side-day">
                         <a href="https://www.netflix.com"><h3>https://www.netflix.com</h3></a>
                         <div className="thumb">
                             <a href="https://www.youtube.com/watch?v=kjmWRYk9wsA">
                         <img  className="img-fluid zoom" src={avengers} data-tip data-for="anime"></img> </a>
                         </div>
                         <div className="sinopsis">description</div>
                     </div>

                 </div>
                </aside>
                </div>
                
            </div>
            
        )
        }
    }
    
    
    export  default Reproductor; 