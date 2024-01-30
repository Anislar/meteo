import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import Card from "./components/Card";
import SearchBar from "./components/search-bar";
import { useMemo } from "react";

function App() {
  const weather_status = "rainy";
  const array = [
    {
      title: "Uv index",
      image: "/assets/components/uv 7.png",
      subtitle2: "High level",
    },
    {
      title: "Wind status",
      subtitle1: "137 Km/H",
    },
    {
      title: "Sunrise &  Sunset",
      image1: "/assets/components/sunrise.png",
      image2: "/assets/components/sunset.png",
      subImage1: "07:32",
      subImage2: "07:32",
    },
    {
      title: "Predictions",
      subtitle1: "100mm in the last 24h",
      subtitle2: "650 mm in the next 6 days",
    },
    {
      title: "Humidity",
      subtitle1: "71%",
      subtitle2: "the dew point is 3°c",
    },
    {
      title: "Visiblity",
      subtitle1: "10km",
      subtitle2: "the sky is partially clear",
    },
  ];
  const backGroundImage = useMemo(() => {
    let bg = "";
    if (weather_status === "rainy")
      bg = "/assets/backgrounds/background_rainy.png";
    else if (weather_status === "cloudy")
      bg = "/assets/backgrounds/background_cloudy.png";
    else if (weather_status === "sunny")
      bg = "/assets/backgrounds/background_sunny.png";
    else if (weather_status === "mostly_sunny")
      bg = "/assets/backgrounds/background_mostly_sunny.png";

    return bg;
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${backGroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-full
        md:justify-normal  justify-center
      
      w-full items-center p-10 flex flex-col ">
      <SearchBar />
      <div className=" flex-col justify-center gap-x-10 md:flex-row flex  w-full">
        <div className=" items-center  flex flex-col ">
          <p className=" text-2xl text-white">
            Thursday, 21 January 2021 <br />
          </p>
          <Card
            onlyImage={true}
            image={"assets/weather-types/cloud_desktop.png"}
          />
          <div className="flex flex-col space-y-5">
            <span className=" text-6xl mt-1 text-white">
              16° C <br />
            </span>
            <span className=" text-4xl text-white">
              Cloudy <br />
            </span>

            <div className=" flex items-center text-white  text-lg space-x-4">
              <div className="flex items-center">
                <ArrowUpOutlined /> <kbd>22°C</kbd> <br />
              </div>
              <div className="flex items-center">
                <ArrowDownOutlined /> <kbd> 12°C</kbd> <br />
              </div>
            </div>
          </div>
        </div>
        <div className=" justify-start  flex flex-col ">
          <p className=" text-2xl text-white">
            {"Today's highlists"} <br />
          </p>
          <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 ">
            {array.map((item, key) => (
              <Card
                key={key}
                title={item.title}
                subtitle1={item.subtitle1}
                subtitle2={item.subtitle2}
                image={item.image}
                subImage1={item.subImage1}
                subImage2={item.subImage2}
                image1={item.image1}
                image2={item.image2}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
