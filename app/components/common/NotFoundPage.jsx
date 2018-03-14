import React from "react";

export default class NotFoundPage extends React.Component {
  static getProps() {
    return {};
  }

  render() {
    return <div>
      <h2 style={{color:'#fff',margin:'0',padding:'0',lineHeight:'50px'}}>Not found</h2>
      <p style={{color:'#fff',margin:'0',padding:'0',lineHeight:'50px'}}>The page you requested was not found.</p>
    </div>;
  }
}
