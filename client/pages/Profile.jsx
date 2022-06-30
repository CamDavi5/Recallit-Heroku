import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, RedditShareButton, TumblrShareButton, EmailShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon, RedditIcon, TumblrIcon, EmailIcon } from "react-share";


const Profile = () => {
  let { id } = useParams();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [savedTitle, setSavedTitle] = useState("");
  const [savedLink, setSavedLink] = useState("");
  const [savedHazard, SetSavedHazard] = useState("");
  const [savedImage, setSavedImage] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/api/user/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          setUsername(json[0].username);
          setEmail(json[0].email);
          setBirthdate(json[0].birthdate);
          setPassword(json[0].password);
          // console.log(json[0]);
        });
      }
    }, []);
  });

  useEffect(() => {
    fetch(`http://localhost:3000/api/suggestions/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          let itemid = json[0].CPSCid;
          console.log(itemid);
          console.log(json[0]);
          fetch(
            `https://www.saferproducts.gov/RestWebServices/Recall?format=json&RecallID=${itemid}`
          ).then((response) => {
            if (response.ok) {
              response.json().then((json) => {
                console.log(json[0]);
                setSavedTitle(json[0].Title);
                setSavedLink(json[0].URL);
                SetSavedHazard(json[0].Hazards[0].Name);
                setSavedImage(json[0].Images[0].URL);
                console.log(json[0].Images.URL);
              });
            } else {
              console.log(error);
            }
          });
        });
      }
    });
  });

  return (
    <>
      <div className="page-content" id="page-content">
        <div className="page-container">
          <div className="row container justify-content-center">
            <div className="col-sm-6 ">
              <div className="card user-card-full">
                <div className="row">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div>
                        {" "}
                        <img
                          src='../assets/profilepic.png'
                          className="img-radius"
                          alt="User-Profile-Image"
                        />{" "}
                      </div>
                      <h5 className="f-w-600">
                        <br></br>Welcome Back!<br></br> {username}{" "}
                      </h5>
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card-block">
                      <h6 className="b-b-default f-w-600">Information</h6>
                      <div className="profile-row">
                        <div className="col-sm-6">
                          <p className="f-w-400">Email</p>
                          <h6 className="text-muted f-w-400">{email}</h6>
                          <p className="f-w-400">Password</p>
                          <h6 className="text-muted f-w-400">
                            {" "}
                            ****************
                          </h6>
                          <p className=" f-w-400">Birthday</p>
                          <h6 className="text-muted f-w-400">{birthdate}</h6>
                          <p className="text">Mobile Number</p>
                          <h6 className="text-muted f-w-400">888-888-8888</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="saveditem-container">
            <h2 className="mt-3 text-center">Saved Items</h2>
            <div className="card text-center">
              <div className="card-header">Featured</div>
              <div>
                <img
                  className="card-img-top"
                  src={savedImage}
                  alt="Card image cap"
                ></img>
              </div>
              <div className="card-body">
                <h4 className="card-title">{savedTitle}</h4>
                <p className="card-text">Hazard: {savedHazard}</p>
                <a href={savedLink} target="_blank" className="btn btn-success">
                  Learn More
                </a>
              </div>
              <div>
                <p>
                  <a
                    className="btn btn-outline-success mt-2"
                    data-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Share
                  </a>
                </p>
                <div className="collapse" id="collapseExample">
                  <div className="card card-body">
                    <container>
                      <segment>
                        <FacebookShareButton
                          url={savedLink}
                          quote={
                            "Hello, Please look and be aware of this recall.Thanks"
                          }
                          hashtag="#Recall"
                        >
                          <FacebookIcon
                            logoFillColor="White"
                            round={true}
                          ></FacebookIcon>
                        </FacebookShareButton>

                        <TwitterShareButton
                          title={savedTitle}
                          url={savedLink}
                          hashtags="#Recall"
                        >
                          <TwitterIcon
                            logoFillColor="White"
                            round={true}
                          ></TwitterIcon>
                        </TwitterShareButton>

                        <WhatsappShareButton title={savedTitle} url={savedLink}>
                          <WhatsappIcon
                            logoFillColor="White"
                            round={true}
                          ></WhatsappIcon>
                        </WhatsappShareButton>

                        <RedditShareButton title={savedTitle} url={savedLink}>
                          <RedditIcon
                            logoFillColor="White"
                            round={true}
                          ></RedditIcon>
                        </RedditShareButton>

                        <TumblrShareButton
                          title={savedTitle}
                          url={savedLink}
                          tag="Recall"
                        >
                          <TumblrIcon
                            logoFillColor="White"
                            round={true}
                          ></TumblrIcon>
                        </TumblrShareButton>

                        <EmailShareButton
                          subject={`Please View this recall : savedTitle`}
                          body={savedLink}
                        >
                          <EmailIcon
                            logoFillColor="White"
                            round={true}
                          ></EmailIcon>
                        </EmailShareButton>
                      </segment>
                    </container>
                  </div>
                </div>
              </div>
              <div className="card-footer text-muted">2 days ago</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
