import Header from "../components/Header/header";
import SquareBanner from "../components/SquareBanner/SquareBanner";
import BannerText from "../components/BannerText/BannerText";
import avatar from "../assets/images/avatar.jpg"
const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-800 text-white items-center justify-center h-screen">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </div>
        <div className="w-full h-full relative">
          <SquareBanner
            speed={0.3}
            squareSize={40}
            direction="diagonal" // up, down, left, right, diagonal
            borderColor="#414141"
            hoverFillColor="#222"
          />

          {/* Text overlay */}
          <div className="absolute inset-28 flex items-center justify-between z-10">
            {/* Left side - Text content */}
            <div className="flex flex-col items-start space-y-6 max-w-2xl">
              <BannerText
                text="Hi, I'm Huynh Ngoc Nhan"
                className="text-4xl font-semibold text-white"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
              />
              <p className="font-semibold text-5xl text-orange-600">
                Fullstack Web Developer
              </p>
              <div className="flex flex-col items-start space-y-3 text-gray-300">
                <p>
                  I am a Developer with extensive experience for over 4 years.
                </p>
                <p>
                  My goal is to build user-friendly and high-performance web
                  applications that make a difference.
                </p>
              </div>
              <button className="bg-red-600 hover:bg-red-500 rounded-lg px-6 py-3 font-semibold transition duration-300 text-white">
                Hire me now
              </button>
            </div>

            {/* Right side - Avatar */}
            <div className="flex items-center justify-center pr-10">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl shadow-orange-500/50">
                  <img
                    src={avatar}
                    alt="Huynh Ngoc Nhan"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-500 rounded-full animate-bounce"></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
