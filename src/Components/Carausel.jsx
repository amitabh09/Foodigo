import { useState } from "react";

  export default function Carousel(arg) {
    const {carouselArray} = arg;
    const[carArray,setCarArray] = useState(carouselArray);
    return (
      <div className="marginTotal">
        <div className="flexRow justifyBetween alignCenter">
          <p>What's on your mind?</p>
          <div>
            <button onClick={()=>{
              const arr = [...carArray];
                let x = arr.pop();
                arr.unshift(x);
                setCarArray(arr);
              }}>{"Prev"}</button>
            <button onClick={()=>{
              const arr = [...carArray];
              let x = arr.shift();
              arr.push(x);
              setCarArray(arr);
            }}>{"Next"}</button>
          </div>
        </div>
        <div className="carouselContainer pt2">
            {carArray.map((ele, index) => (
              <div className="carauselCard"><img key={index} className="carouselImage" src={ele} alt="not working" /></div>
            ))}
        </div>
      </div>
    );
  }
