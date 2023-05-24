import React, { useEffect } from 'react'

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listner = (event) => {
        if(ref.current.contains(event.target)){
            return;
        }else{
            handler();
        }
    };
    document.addEventListener("mousedown", listner);
    document.addEventListener("toughstart", listner);
    return () => {
        document.removeEventListener("mousedown", listner);
        document.removeEventListener("toughstart", listner);
    };
  },[]);
}

export default useOnClickOutside