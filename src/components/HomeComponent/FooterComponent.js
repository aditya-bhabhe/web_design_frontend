import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


const FooterPage = () => {
  return (
    <MDBFooter style={{backgroundColor: " #011422"}} className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-left text-md-left" style={{color: "grey"}} >
        <MDBRow>
          <MDBCol md="3">
            <p align="justify" className='ml-5'> 
            <FontAwesomeIcon icon="map-marked" color="grey" /> &nbsp;
                <span>405 Ell Hall, <br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Boston, Massachusetts, <br></br>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  USA - 02215</span><br></br>
              </p>
          </MDBCol>
          <MDBCol md="2" className='ml-5'>
            <FontAwesomeIcon icon="phone-alt" color="grey" /> &nbsp;
              <span>+1 789 456 1230</span><br></br>
          </MDBCol>
          <MDBCol md="3" className='ml-2'>
            
            <div>

              <FontAwesomeIcon icon="envelope" color="grey" /> &nbsp;
              <a href="mailto:bhabhe.a@northeastern.edu, chudi.d@northeastern.edu, ananthula.sh@northeastern.edu" target = "gmail.com" >movies@gmail.com</a>
            </div>
          </MDBCol> 
          <MDBCol md="2" className='ml-1'>
            <a href="https://www.youtube.com/"
              className="youtube social" style={{color: "grey"}}>
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>&nbsp;&nbsp;
            <a href="https://www.facebook.com/"
              className="facebook social" style={{color: "grey"}}>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>&nbsp;&nbsp;
            <a href="https://www.twitter.com/" 
              className="twitter social" style={{color: "grey"}}>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>&nbsp;&nbsp;
            <a href="https://www.instagram.com/"
              className="instagram social" style={{color: "grey"}}>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-2">
        <MDBContainer fluid style={{color: "grey"}}>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> Movies.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;