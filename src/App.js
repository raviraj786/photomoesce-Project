import React, { useState  } from "react";
import "./App.css";
import capture from "./screens/WebcamImage";
import WebcamImage from "./screens/WebcamImage";



function App() {
  const [picture, setPicture] = useState(null);

  const takePicture = () => {
    const openimg = capture()
    console.log(setPicture(openimg))
  }


  const [name, setName] = useState('');
  console.log(name)
  const [des, setDes] = useState('');
  console.log(des)


  function handleFileSelect(event) {


    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "image/gif") {
    
    } else {

    }
  }








  function handleSubmit(event) {
    event.preventDefault();
    // handle form submission logic here
    console.log('sumit')
  }










  return (
    
      <div>
        <h3>Smile! Be a part of the BIG PICTURE</h3>



        {/* <WebcamImage/> */}
        <form onSubmit={handleSubmit}>
      <label htmlFor="file-input">take a camera:</label>
      <input
       type='file' 
       accept="image/*"
       capture="environment"
       
        onChange={handleFileSelect}
      />

<div style={{alignSelf:'center'}}>
  <WebcamImage 
  onChange={handleFileSelect}
  />
</div>







<label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
      </label>

      <label>Enter your description:
        <input
          type="text" 
          value={des}
          onChange={(e) => setDes(e.target.value)}
          placeholder="message"
        />
      </label>



      <div>
      <video id="camera" autoPlay></video>
      <button onClick={takePicture}>Take Picture</button>
      {picture && (
        <div>
          <img src={picture} alt="Camera" />
          {/* <button onClick={sendMessage}>Send Message</button> */}
        </div>
      )}
    </div>




{/* 
<V */}





      <button type="submit">Submit</button>
    </form>
       
      </div>
    
  );
}

export default App;
