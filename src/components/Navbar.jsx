import React, { Component } from "react";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import "./Navbar.css";
import logo from "./logo.svg";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: "c",
      fontSize: "16",
    };
    // this.props.triggerLanguageUpdate(this.state.language);
    // this.props.triggerFontSizeUpdate(this.state.fontSize);
  }

  languageName = {
    c: "C (GCC 9.2.0)",
    cpp: "C++ (GCC 9.2.0)",
    java: "Java (OpenJDK 13.0.1)",
    python: "Python (3.8.1)",
  };

  sizeName = {
    14: "14px",
    16: "16px",
    18: "18px",
    20: "20px",
  };

  // handleLanguage = (language) => {
  //   this.setState({
  //     language: language,
  //   });
  //   this.props.triggerLanguageUpdate(language);
  // };

  // handleFontSize = (fontSize) => {
  //   this.setState({
  //     fontSize: fontSize,
  //   });
  //   this.props.triggerFontSizeUpdate(fontSize);
  // };

  // handleShareCode = () => {
  //   if (this.props.code) {
  //     this.props.shareCode();
  //   } else {
  //     alert("Editor is empty!");
  //   }
  // };

  render() {
    const { language, fontSize } = this.state;
    return (
      <header className="IdeNavbar">
        <div className="logo-wrapper">
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.8 181.79">
            <title>pk 192</title>
            <path d="M13.47,85.33v55.38c39,6.57,69.36-17.74,78.71-49.12C97.41,74,96,56.42,87.47,40,79,23.69,65.79,12.46,48.17,6.06h54.5V187.73H6.07v-1.61c0-36.92-.07-73.83.06-110.74,0-5.65,1.15-11.21,4.41-16.09,2.94-4.41,7.12-6.4,12.28-7A18.49,18.49,0,0,1,36.44,56a18,18,0,0,1,7.47,11.71A18.66,18.66,0,0,1,37.27,85.9c-6.41,5.48-14.4,5.89-21.55,1Z" transform="translate(-6.05 -6.06)" />
            <path d="M179,55.21c-.91,1.86-1.78,3.7-2.7,5.52L160.94,91.08c-1.92,3.78-3.9,7.53-5.79,11.33a2.38,2.38,0,0,0-.07,1.74c3.62,8.55,7.31,17.09,11,25.63q6.59,15.43,13.15,30.86,4.81,11.25,9.68,22.46c.64,1.49,1.25,3,2,4.74h-1.72q-26.08,0-52.16,0c-1,0-1.52-.14-1.92-1.29-2.64-7.59-5.44-15.13-8.16-22.7-4.29-12-8.54-23.93-12.84-35.89-3.06-8.5-6.1-17-9.28-25.47-.57-1.53.07-2.59.62-3.73,2.38-4.89,4.86-9.74,7.28-14.62q4.52-9.12,9-18.27c1.58-3.22,3.06-6.49,4.69-9.69a2.14,2.14,0,0,1,1.54-1q25.32-.07,50.64,0A3.28,3.28,0,0,1,179,55.21Z" transform="translate(-6.05 -6.06)" />
          </svg>
        </div>
        <p>Pravin Kanna</p>
        <nav>
          <ul className="NavItems">
            <li>
              <DropdownButton className="languageBtn">
                <Dropdown.Item className={language === "c" ? "selected" : ""} eventKey="c">
                  C (GCC 9.2.0)
                </Dropdown.Item>
                <Dropdown.Item className={language === "cpp" ? "selected" : ""} eventKey="cpp">
                  C++ (GCC 9.2.0)
                </Dropdown.Item>
                <Dropdown.Item className={language === "python" ? "selected" : ""} eventKey="python">
                  Python (3.8.1)
                </Dropdown.Item>
                <Dropdown.Item className={language === "java" ? "selected" : ""} eventKey="java">
                  Java (OpenJDK 13.0.1)
                </Dropdown.Item>
              </DropdownButton>
            </li>
            <li>
              <DropdownButton className="fontSizeBtn" title={this.sizeName[fontSize]} onSelect={this.handleFontSize}>
                <Dropdown.Item className={fontSize === "14" ? "selected" : ""} eventKey="14">
                  14px
                </Dropdown.Item>
                <Dropdown.Item className={fontSize === "16" ? "selected" : ""} eventKey="16">
                  16px
                </Dropdown.Item>
                <Dropdown.Item className={fontSize === "18" ? "selected" : ""} eventKey="18">
                  18px
                </Dropdown.Item>
                <Dropdown.Item className={fontSize === "20" ? "selected" : ""} eventKey="20">
                  20px
                </Dropdown.Item>
              </DropdownButton>
            </li>
            <li>
              <Button className="share" onClick={this.handleShareCode}>
                <i className="fas fa-share-alt"></i>
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
