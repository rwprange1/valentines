import { useState } from "react";

import "./app.css";

import anvil from "./assets/anvil-hamster.gif";
import thumbsDown from "./assets/chomik-zly.gif";
import bomb from "./assets/hamster-hamster-meme.gif";
import cry from "./assets/hamster-meme-silly-hamster.gif";
import loves from "./assets/love-you-hamster.gif";
import mad from "./assets/stupid-hamster-hamster-meme.gif";
import kiss from "./assets/kiss.gif";


function App() {
  const [clicks, setClicks] = useState<number>(0);
  const [image, setImage] = useState<string>(loves);
  const [done, setDone ] = useState<boolean>(false);

  const [text, setText] = useState<string>("Andrea, will you be my valentines?");
  const [yesButton, setYesButton] = useState<string>("text-3xl");
  const [noButton, setNoButton] = useState<string>(" text-xl");



  function handleNo(){
    let newClicks = clicks + 1;

    switch (newClicks){
      case 1:
        setImage(thumbsDown);
        setText("Andrea... that was not nice.. will you be my valentines?");
        setYesButton("text-4xl");
        setNoButton("text-lg");
        break;

      case 2:
        setImage(anvil);
        setText("WOW!!! Really!? will you?");
        setYesButton("text-5xl");
        setNoButton("text-lg");
        break;


      case 3:
        setImage(bomb);
        setText("Ok that just hurts :( please?");
        setYesButton("text-6xl");
        setNoButton("text-md");
        break;
      
      case 4:
        setImage(mad);
        setText("I would appreciate you saying yes! PLEASEE!?");
        setYesButton("text-7xl");
        setNoButton("text-sm");
        break;
      case 5:
        setImage(cry);
        setText("Okay, last chance (Seriously) will you be my valentines?")
        setYesButton("text-8xl");
        setNoButton("text-xs");
        break;
    }

    setClicks(newClicks);
    console.log(newClicks);
  }


  return (
    <div className='flex justify-center items-center bg-blue-300 w-full h-full'>
      <div className="heart w-2/5 h-3/5 flex justify-center items-center relative">
        <div className="flex flex-col gap-2 items-center -mt-50 justify-center w-full h-full">
          
          <div className="h-1/4 w-1/3 mb-10 mt-3 ml-8">
            <img src={image} alt="Anvil" />
          </div>

          <h2 className="mt-7 text-2xl text-white] font-bold">{text}</h2>
          
          <div className="flex gap-2 mt-5 items-center ">
            
            {!done ? 
              <button className={`bg-blue-300 rounded-2xl p-2 px-5 hover:bg-blue-400 ${yesButton}`} onClick={()=>{
              setImage(kiss);
              setText("YAYYYYYYY!");
              setDone(true);
              setYesButton("text-[12xl]");

            }} >Yes</button>
            :
            <></>
            }
            

            {clicks !== 5  && !done ?
            <button  className={`bg-blue-300 rounded-2xl p-2 px-3  hover:bg-blue-400 ${noButton}`} onClick={handleNo}>No</button> 
            :
            <></>
          
            }

            
          </div>


        </div>
      </div>
    </div>
  )
}

export default App
