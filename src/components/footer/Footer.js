import React from "react";
import "./Footer.css";
import {SocialMediaIconsReact} from 'social-media-icons-react';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
      <div className="row">
    
          <div className="col">
            <h6 className="list-unstyled">
             <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url="https://some-website.com/my-social-media-url" size="20" />

             <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)"  borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,150,233,1)" url="https://some-website.com/my-social-media-url" size="20" />
             <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)"  borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,150,233,1)" url="https://some-website.com/my-social-media-url" size="20" />

            </h6>
            </div>
            </div>
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Leen Nusir 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
