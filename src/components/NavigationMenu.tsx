import {RefObject, useRef,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  fnsetSearchText: (searchText : string) => void,
  newTabClick : (newTab : 'movies-in-theaters' | 'movies-coming' | 'top-rated-india' | 'top-rated-movies' | 'favourit') => void
}
const NavigationMenu = ({fnsetSearchText,newTabClick} : Props) =>
{

  const searchRef = useRef<HTMLInputElement>( null ); 
  const moviesInTheartreRef = useRef<HTMLAnchorElement>( null ); 
  const moviescomingRef = useRef<HTMLAnchorElement>( null ); 
  const topRatedIndiaRef = useRef<HTMLAnchorElement>( null ); 
  const topRatedMovieRef = useRef<HTMLAnchorElement>( null ); 
  const favouriteRef = useRef<HTMLAnchorElement>( null ); 

  const changeColor = (value : RefObject<HTMLAnchorElement>) =>
  {
    document.querySelectorAll("a").forEach(a => a.className=`links-style`);
    console.log(value);
    if(value.current != null)
    {
    let classType = value.current;
    classType.className += ' active';
    }
  }
  
    return (
     
      <Navbar  bg="light" variant="light"  className='links'>
       <Container>  
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Nav className="me-auto">
          
      <Nav.Link ref={moviesInTheartreRef} className={ `links-style active`} onClick={() => {newTabClick('movies-in-theaters'); changeColor(moviesInTheartreRef)}}  >Movies in a theaters</Nav.Link>
      <Nav.Link ref={moviescomingRef} className={ `links-style`}  onClick={() => {newTabClick('movies-coming'); changeColor(moviescomingRef) }} >Coming soon</Nav.Link>
      <Nav.Link ref={topRatedIndiaRef}  className={ `links-style`}  onClick={() => {newTabClick('top-rated-india');  changeColor(topRatedIndiaRef) }}>Top rated Indian</Nav.Link>
      <Nav.Link ref={topRatedMovieRef}  className={ `links-style`}  onClick={() => {newTabClick('top-rated-movies'); changeColor(topRatedMovieRef)}}>Top rated Movies</Nav.Link>
      <Nav.Link  ref={favouriteRef} className={ `links-style`}  onClick={() => {newTabClick('favourit'); changeColor(favouriteRef)}}>Favourites</Nav.Link>
      
          </Nav>
          <Form className="d-flex">
  <Form.Control
    type="search"
   ref={searchRef}
    placeholder="Search"
    className="me-2"
    aria-label="Search"
   onChange={ () => fnsetSearchText(searchRef?.current?.value as string)}
  />
  <Button variant="outline-success"> <FontAwesomeIcon icon={faSearch} style={ {color : 'black'}} /></Button>
</Form> 
      </Container>
      </Navbar>

    )
}

export  {NavigationMenu};
