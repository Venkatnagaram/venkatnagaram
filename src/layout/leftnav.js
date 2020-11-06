import React,{Component} from 'react';

class LeftNav extends Component{

	render(){
		return(
			<div>
				<a id="show-sidebar" className="btn btn-sm btn-venkat" href="#">
					<i className="fas fa-bars"></i>
				</a>
				<nav id="sidebar" className="sidebar-wrapper">
					<div className="sidebar-content">
					  <div className="sidebar-brand">
					    <a href="#">Portfolio</a>
					    <div id="close-sidebar">
					      <i className="fas fa-times"></i>
					    </div>
					  </div>
					  <div className="sidebar-header">
					    <div className="user-pic">
					      <img className="img-responsive img-rounded" src="img/VenkatNagaram-Full-Stack-Developer-icon.png" alt="Venkatnagaram" />
					    </div>
					    <div className="user-info">
					      <span className="user-name">VenkatNagaram</span>
					      <span className="user-role">Full Stack Developer</span>
					      <span className="user-status">
					        <i className="fa fa-circle"></i>
					        <span>Online</span>
					      </span>
					    </div>
					  </div>      
					  <div className="sidebar-menu">
					    <ul>
					      <li className="sidebar-dropdown">
					        <a href="#"><i className="fa fa-th-large"></i><span>ReactJs</span></a>
					        <div className="sidebar-submenu">
					          <ul>
					            <li><a href="#">Data Table</a></li>
					          </ul>
					        </div>
					      </li>
					    </ul>
					  </div>
					</div>
				</nav>
			</div>
		)
	}

}
export default LeftNav;