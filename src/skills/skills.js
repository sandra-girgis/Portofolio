import React from "react";
import "./skills.css";

class Skills extends React.Component {
  constructor() {
    console.log("CONSTRUCTOR SKILLS");
    super();
  }

  render() {
    let myCourse = [
      { corNmae: "HTML", progress: 90 },
      { corNmae: "CSS", progress: 70 },
      { corNmae: "JS", progress: 60 },
      { corNmae: "React", progress: 35 },
      { corNmae: "PS", progress: 20 },
      { corNmae: "NodeJS", progress: 30 },
    ];
    console.log("RENDER SKILLS");
    return (
      <>
        <div className=" bg-dark pt-5 pb-5">
          <div className="container text-white">
            <div className="text-center">
              <h2>Skills</h2>
            </div>
            <div className="row">
              <div className="offset-2 col-8 text-center">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was
                </p>
              </div>
            </div>

            <div className="row p-3">
              <div className="offset-2 col-2 text-center">
                <h4>MY FOCUS</h4>
                <hr></hr>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">UI/UX Design</li>
                  <li className="list-group-item">Responsive Design</li>
                  <li className="list-group-item">Web Design</li>
                  <li className="list-group-item">Mobile App Desine</li>
                </ul>
              </div>

              <div className="offset-1 col-7 row">
                {myCourse.map((item) => {
                  return (
                    <>
                      <div className="progress bg-secondary col-10 mt-2 ">
                      <span className="col-2 fs-5 pt-1">{item.corNmae}</span>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${item.progress}%` }}
                          aria-valuenow={item.progress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Skills;