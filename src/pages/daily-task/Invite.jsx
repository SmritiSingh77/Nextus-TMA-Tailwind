import shareImg from "../../assets/images/icon/share-2.webp";
import copy from "../../assets/images/icon/copy.webp";
import shakeHands from "../../assets/images/icon/hands.png";

function Invite() {
    return (
        <div className="flex flex-col items-center gap-2 h-[100%] justify-center height-md:gap-5">
            <h3 className="text-2xl font-bold text-center text-white">
                Invite your friends <br />
                Reward yourself
            </h3>
            <img src={shakeHands} alt="" />
            <h6 className="text-xs font-semibold text-white">
                For every friend that plays, you both <br />
                Get up to 50,000 Points
            </h6>
            <button className="refer-btn">
                Refer your friends <img src={shareImg} alt="shareImg" />
            </button>
            <button className="copy-refer-btn">
                Copy Referral Link
                <img src={copy} style={{ filter: "brightness(10)" }} alt />
            </button>
        </div>
    )
}

export default Invite