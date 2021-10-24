import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "../Header/logo.jpg"



const Menu = () =>  {
	const styleButton={
		backgroundColor:'#ea8118',
		borderColor:'#ea8118'
	}

  	return (

  		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			<img src={logo} width="40" height="40" className="d-inline-block align-top"/>
		    <NavLink to="/" className="navbar-brand"> Vida y Café </NavLink>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav mr-auto">

			        <li className="nav-item">
			          	<NavLink to="/" className="nav-link">Home </NavLink>
			        </li>
			        <li className="nav-item">
			        	<NavLink to="/nosotros" className="nav-link">Nosotros </NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/platillos" className="nav-link">Menú </NavLink>
			        </li>
					<li className="nav-item">
			          	<NavLink to="/reservaciones" className="nav-link">Reservaciones </NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/contacto" className="nav-link">Contacto </NavLink>
			        </li>
					<li className="nav-item">
			          	<NavLink to="/blog" className="nav-link">Blog </NavLink>
			        </li>

			    </ul>

			    <form className="form-inline mt-2 mt-md-0">
			        <input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar"/>
			        <button className="btn btn-success my-2 my-sm-0" style={styleButton}type="submit">Buscar</button>
			    </form>
		    </div>		    

		</nav>

  	)
    
  }



export default Menu;