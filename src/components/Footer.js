import './Footer.css';
import twitter_white from '../assets/twitter.png';
import discord_white from '../assets/discord.png';
import instagram_white from '../assets/instagram.png';

function Footer(props) {
    return (
        <footer className='footer'>
            <p>
                SMART CONTRACT ADDRESS:&nbsp;
                <br />
                <span>
                    <a className='contract-link' href={`https://mumbai.polygonscan.com/address/${props.address}`} target='_blank' rel='noreferrer'>
                        {props.address}
                    </a>
                </span>
            </p>
            <div className='footer-social-media-links'>
                <div>
                    <a href='PASTE-YOUR-DISCORD-LINK-HERE'>
                        <img src={discord_white} alt="Discord" />
                    </a>
                </div>
                <div>
                    <a href='PASTE-YOUR-INSTAGRAM-LINK-HERE' target='_blank' rel='noreferrer'>
                        <img src={instagram_white} alt="Instagram" />
                    </a>
                </div>
                <div>
                    <a href='PASTE-YOUR-TWITTER-LINK-HERE' target='_blank' rel='noreferrer'>
                        <img src={twitter_white} alt="Twitter" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
