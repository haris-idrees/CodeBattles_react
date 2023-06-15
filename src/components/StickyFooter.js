import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import '../components/StickyFooter.css';
    

export default class StickyFooter extends React.Component{
    render(){
        return(
            
            <footer className="sticky-footer">
                <div className="sticky-footer-content">
                    <h3>Code <span>Battles</span></h3>
                </div>
            </footer>
        );
    }
}