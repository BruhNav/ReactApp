import React from "react";
import ServicesInformation from "./ServicesInformation";
import Header from "./Header";
import './style.css'


const data = require('./blockInfo.json');//used json file to read data

class App extends React.Component{
  render(){
    return(
      <div className="container">
          <Header/>
          <div className="siteinfo">Start building with simple wizards and automated workflows</div>
          <ServicesInformation service={data.block1.name} time={data.block1.time} text={data.block1.used_tool} imageSrc={data.block1.icon_src}/>

          <ServicesInformation service={data.block2.name} time={data.block2.time} text={data.block2.used_tool} imageSrc={data.block2.icon_src}/>

          <ServicesInformation service={data.block3.name} time={data.block3.time} text={data.block3.used_tool} imageSrc={data.block3.icon_src}/>

          <ServicesInformation service={data.block4.name} time={data.block4.time} text={data.block4.used_tool} imageSrc={data.block4.icon_src}/>

          <ServicesInformation service={data.block5.name} time={data.block5.time} text={data.block5.used_tool} imageSrc={data.block5.icon_src}/>

          <ServicesInformation service={data.block6.name} time={data.block6.time} text={data.block6.used_tool} imageSrc={data.block6.icon_src}/>

      </div>
    )
  }
}

export default App;