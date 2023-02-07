import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <div className="blogsite-btn-div">
                  <Button
                    text="Visit My Blogsite"
                    newTab={true}
                    href={"#"}
                    theme={theme}
                  />
                </div>
                <br />
                <br />
                <div className="blog-heading-div">
                  <h3>What's Reat JS?</h3>
                  <p>
                    React is a free and open-source front-end JavaScript library
                    for building user interfaces based on UI components. It is
                    maintained by Meta and a community of individual developers
                    and companies.
                  </p>
                </div>
                <div className="blog-heading-div">
                  <h3>What's Next JS?</h3>
                  <p>
                    Next.js is an open-source web development framework created
                    by Vercel enabling React-based web applications with
                    server-side rendering and generating static websites
                  </p>
                </div>
                <div className="blog-heading-div">
                  <h3>What's JavaScript?</h3>
                  <p>
                    JavaScript, often abbreviated as JS, is a programming
                    language that is one of the core technologies of the World
                    Wide Web, alongside HTML and CSS. As of 2022, 98% of
                    websites use JavaScript on the client side for webpage
                    behavior, often incorporating third-party libraries.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <br />
          <br />
          <br />
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
