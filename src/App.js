import { useState,useEffect } from "react";
import Cookies from 'universal-cookie';
import "./App.css";

const cookies = new Cookies();

const DUMMY_VALUE="dummyvalue"

function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    const hadValueInCookies=cookies.get(DUMMY_VALUE)
    if(hadValueInCookies)setData(hadValueInCookies)
  },[])
  return (
    <div className="App">
      <main className="mainlayout">
        <article class="card">
          <h3>Cookies Value from first app</h3>
          <p>
            {
              data.length? data.map((item)=>{
                return(
                  <>
                  <p>{item?.name}</p>
                  <p>{item?.designation}</p>
                  <p>{item?.experience}</p>
                  </>
                )
              }):null
            }
          </p>
          <span class="top"></span>
          <span class="right"></span>
          <span class="bottom"></span>
          <span class="left"></span>
        </article>
      </main>
    </div>
  );
}

export default App;
