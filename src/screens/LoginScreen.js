import React,{ useState, useEffect} from 'react'
import "./LoginScreen.css";
import SignupScreen from './SignupScreen';
import AddIcon from '@material-ui/icons/Add';
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import netflixLoading from '../assets/netflix_loading.gif';


function LoginScreen() {

    const [signIn, setSignIn] = useState(false);
    const [email, setEmail] = useState("");

    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <div className="our-story-header-wrapper">
                <img className="loginScreen_logo" 
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt="BackgroundImage"/>
                <button 
                onClick={() => setSignIn(true)}
                className="loginScreen_button">Sign In</button>
            
                <div className="loginScreen_gradient" />
                </div>

            </div>

            <div className="loginScreen_body">
                {signIn ? (
                    <SignupScreen setEmail={setEmail} email={email}/>
                ): (
                    <>
                    <h1>Unlimited films, TV programmes and More.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                    <div className="loginScreen_input">
                        <form class="email-form">
                            <input type="email" placeholder="Email Address" />
                            <button 
                                onClick={() => setSignIn(true)}
                                className="loginScreen_getStarted">GET STARTED
                            </button>
                        </form>
                    </div>


                    {/* //Additional LoginScreen */}
                    <div className="moreSignUpScreen">
                            <div className="moreScreenSection">
                                <div className="smallLoginScreenSection">
                                    <h1>Enjoy on your TV.</h1>
                                    <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                                </div>
                                <video playsinline muted autoPlay loop>
                                    <source type="video/mp4" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" />
                                </video>
                            </div>
                            <div className="moreScreenSection">
                                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt=""/>
                                <div className="smallLoginScreenSection">
                                    <h1>Download your shows to watch offline.</h1>
                                    <h2>Save your favorites easily and always have something to watch.</h2>
                                </div>
                                
                            </div>
                            <div className="moreScreenSection">
                                <div className="smallLoginScreenSection">
                                    <h1>Watch everywhere.</h1>
                                    <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
                                </div>
                                <video playsinline muted autoPlay loop>
                                    <source type="video/mp4" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" />
                                </video>
                            </div>
                            <div className="faqSection">
                                <h1>Frequently Asked Questions</h1>
                                <div className="faqContainer">
                                    <div className="questionActual">
                                        <h2>What is Netflix?</h2>
                                        <AddIcon />
                                    </div>
                                    <div className="questionActual">
                                        <h2>How much does Netflix cost?</h2>
                                        <AddIcon />
                                    </div>
                                    <div className="questionActual">
                                        <h2>Where can I awtch?</h2>
                                        <AddIcon />
                                    </div>
                                    <div className="questionActual">
                                        <h2>How do I cancel?</h2>
                                        <AddIcon />
                                    </div>
                                    <div className="questionActual">
                                        <h2>What can I watch on Netflix?</h2>
                                        <AddIcon />
                                    </div>
                                    <div className="questionActual">
                                        <h2>Why am I seeing this language?</h2>
                                        <AddIcon />
                                    </div>
                                </div>
                                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                                <div className="loginScreen_input">
                                    <form>
                                        <input className="loginScreenFooterInput" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"/>
                                        <button onClick={() => setSignIn(true)} className="loginScreen_getStarted">GET STARTED</button>
                                    </form>
                                </div>
                            </div>

                            <div className="loginPageFooter">
                                <h5>Questions? Contact us.</h5>
                                <div className="loginScreenFooterRowContainer">
                                    <div className="loginPageFooterLinkRow">
                                        <p>FAQ</p>
                                        <p>Investor Relations</p>
                                        <p>Privacy</p>
                                        <p>Speed Test</p>
                                    </div>
                                    <div className="loginPageFooterLinkRow">
                                        <p>Help Center</p>
                                        <p>Jobs</p>
                                        <p>Cookie Preferences</p>
                                        <p>Legal Notices</p>
                                    </div>
                                    <div className="loginPageFooterLinkRow">
                                        <p>Account</p>
                                        <p>Ways to Watch</p>
                                        <p>Corporate Information</p>
                                        <p>Netflix Originals</p>
                                    </div>
                                    <div className="loginPageFooterLinkRow">
                                        <p>Media Center</p>
                                        <p>Terms of Use</p>
                                        <p>Contact Us</p>
                                    </div>
                                </div>
                                <div className="loginPageLanguageSelection">
                                    <LanguageIcon />
                                    <p>English</p>
                                    <ArrowDropDownIcon />
                                </div>
                                <p className="copyrightTextLoginPage">NETFLIX Clone developed by dhruvthakor234@gmail.com</p>
                            </div>
                        </div>
                    </>
                )}
                
            </div>
        </div>
    )
}

export default LoginScreen;
