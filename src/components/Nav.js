import React, {useEffect, useState} from 'react';
import "./Nav.css";
import { useNavigate } from 'react-router-dom';

export const Nav = () => {

  const [show, setShow] = useState(false);
  const [searchValue,setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50){
        setShow(true);
      }else{
        setShow(false);
      }
    })

    return() => {
      window.removeEventListener("scroll", () => {});
    }
  }, [])

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  }

  
  return (
    <nav className={`nav ${show && "nav_black"}`}>
        <img 
            alt="Netflix logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            className="nav_logo"
            onClick={() => window.location.href = "/"}
            style={{width:"150px", height : "60px", cursor : "pointer"}}
        />

        <input 
          value={searchValue} 
          onChange={handleChange} 
          className='nav__input' 
          type="text" 
          placeholder='영화를 검색해주세요.' 
        />

        <img 
            alt="User logged"
            src="https://upload.wikimedia.org/wikipedia/commons/7/79/Face-smile.svg"
            className='nav_avatar'
            style={{cursor : "pointer"}}
        />

    </nav>
  )
}
