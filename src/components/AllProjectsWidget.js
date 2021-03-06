import React, {Component} from 'react';
import {
    Link,
  } from 'react-router-dom';



export default class AllProjectsWidget extends Component {
    render(){
        return (
            <>
                <div className="allProjWidgPackage">
                    <Link  style={{ textDecoration: 'none', color: 'white' }} to="/allprojects"> 
                        <div className='allProjWidgDiv'>
                            <i className="fas fa-thumbtack"></i>
                        </div>
                    </Link>
                    <span className="allProjWidgSpan">projekty</span>
                </div>
            </>
        )
    }
}