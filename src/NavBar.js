'use strict'; 
import React, {Component} from 'react'
import "./NavBar.css" 


class NavBar extends React.Component {
  
    render() {  
      return (
          <div className="sticky">
            <div className="header-nav">
                    <figure className="header-figure">
                    <a href="../index.html" target="_blank"> {/*NOTE: Get link to work */}
                    <img src={require("./images/unpluggedlogo.png")} alt="unplugged logo" />
                    </a>
                    </figure>
                    <div className="header-divider"></div>
                    
                    <nav>
                    <ul className="header-list ">
                    <li className="header-list-item"><a href="../faq/index.html" target="_blank">FAQ</a></li> {/*NOTE: Get link to work */}
                    <li className="header-list-item"><a href="../about/index.html" target="_blank">ABOUT</a></li> {/*NOTE: Get link to work */}
                    </ul>
                    </nav>
                </div>
            </div>
       
      
      );
    }
  }
  
  let domContainer = document.querySelector('#nav-bar');
  ReactDOM.render(<NavBar />, domContainer);

