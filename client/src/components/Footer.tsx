import InstagramLogo from "../images/instagram-logo.png";
import DiscordLogo from "../images/discord.png";
import TwitterLogo from "../images/twitter.png";

function Footer() {
  return (
    <>
      <div className="bg-slate-800 w-full h-[30vh] mt-3 flex justify-center">
        <div className="w-[75%] h-full py-2 flex flex-col justify-between">
          <div className="w-full h-full">
            <div className="text-2xl text-gray-200 ml-2">
              We in social media
            </div>
            <hr className="w-full h-px bg-gray-200 my-3" />
            <div className="text-gray-200 ml-1 text-lg mb-2 flex items-center">
              <img
                src={InstagramLogo}
                alt="instagram logo"
                className="w-[18px] h-[18px]"
              />
              <a href="#" className="ml-2">
                Instagram
              </a>
            </div>
            <div className="text-gray-200 ml-1 text-lg mb-2 flex items-center">
              <img
                src={DiscordLogo}
                alt="instagram logo"
                className="w-[18px] h-[18px]"
              />
              <a href="#" className="ml-2">
                Discord
              </a>
            </div>
            <div className="text-gray-200 ml-1 text-lg mb-2 flex items-center">
              <img
                src={TwitterLogo}
                alt="instagram logo"
                className="w-[18px] h-[18px]"
              />
              <a href="#" className="ml-2">
                Twitter
              </a>
            </div>
            <hr className="w-full h-px bg-gray-200 my-3" />
            <div className="text-gray-200 font-light italic">
              JoDiFo-blog-site 2023
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
