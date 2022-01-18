import React from "react";
import "./Portfolio.css";
class Portfolio extends React.Component {
  constructor() {
    console.log("CONSTRUCTOR ABOUTUS");
    super();
  }

  render() {
    let cards = [
      { cardTitle: "WEB DESIGN", color: "#676867" },
      { cardTitle: "MOBILE DESIGN", color: "#494949" },
      { cardTitle: "LOGO DESIGN", color: "#676867" },
      { cardTitle: "WEB APPLICATION DEVELOPMENT", color: "#494949" },
      { cardTitle: "MOBILE APPLICATION DEVELOPMENT", color: "#676867" },
      { cardTitle: "PWA DEVELOPMENT", color: "#494949" },
    ];
    console.log("RENDER ABOUTUS");
    return (
      <>
        <h3 className="offset-1 p-5 pb-2 fs-2 text-start"> Portfolio</h3>
        <div className="container mb-5 portcards">
          {cards.map((item) => {
            return (
              <div className="col-3 m-3">
                <div className="card h-100" style={{ backgroundColor: `${item.color}` }} >
                  <div className="card-body">
                    <h1 className="card-text fs-3 text-align-center">
                        {item.cardTitle}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Portfolio;
