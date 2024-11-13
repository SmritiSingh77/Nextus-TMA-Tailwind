
import bird from "../assets/images/bird.webp";
import logo from "../assets/images/logo.webp";

const Welcome = () => {
  return (
    <div className="h-screen bg-[url('../../public/images/bg.webp')] bg-cover bg-center flex flex-col justify-center bg-[#161514] p-[18px]" >
        <img src={logo} alt="logo" className="w-[200px] mx-auto" />
        <img src={bird} alt="bird" className="w-[315px] h-[315px] mt-[21px]" />
        <h1 className="text-white text-[36px] relative mt-[21px]">
          Buy, Sell &amp; Trade{" "}
          <svg
            className="absolute right-[45px]"
            xmlns="http://www.w3.org/2000/svg"
            width={96}
            height={14}
            viewBox="0 0 96 14"
            fill="none"
          >
            <path
              d="M76.7081 1.49066C43.4243 2.90569 1.1263 1.63232 1.1263 1.63232C1.1263 1.63232 75.0819 5.20665 94.8006 13.1537C94.8006 13.1537 69.233 8.00352 52.6593 8.11298C38.9595 8.20345 33.8276 7.84343 17.8186 11.9773"
              stroke="url(#paint0_linear_1_12708)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_12708"
                x1="84.3689"
                y1="3.43022"
                x2="81.0885"
                y2="21.5252"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFE24D" />
                <stop offset={1} stopColor="#FFBE18" />
              </linearGradient>
            </defs>
          </svg>
          more efficient
        </h1>
        <p className="text-[14px] text-[#fff9] mt-[16px]">
          Instantly invest in cryptocurrencies, exchange it and pay online with
          us
        </p>
      </div>
  )
}

export default Welcome