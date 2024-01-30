import PropTypes from "prop-types";
function Card({
  title,
  onlyImage,
  subtitle1,
  subtitle2,
  image,
  subImage1,
  subImage2,
  image2,
  image1,
}) {
  return (
    <div
      className={` ${
        onlyImage ? " justify-center" : "justify-between"
      }  flex items-center flex-col   h-60  w-72 bg-[#97A3AB]  rounded-md border-gray-200 border-solid `}>
      {title && (
        <p className=" text-2xl text-[#3E4246]">
          {title} <br />
        </p>
      )}
      <div className="flex items-center">
        {subtitle1 && (
          <p className=" text-3xl text-center  text-white">
            {subtitle1} <br />
          </p>
        )}
        {image && (
          <div>
            <img
              src={image}
              className={
                onlyImage ? "h-32 w-32  object-contain" : "h-20 w-20  "
              }
              alt="cloud_desktop"
            />
          </div>
        )}
        {image1 && image2 && (
          <div className="flex w-full justify-between space-x-1">
            <div className="flex items-center justify-center flex-col">
              <img
                src={image1}
                className="h-14 w-14  object-fill p-2"
                alt="cloud_desktop"
              />
              <p>{subImage1}</p>
            </div>

            <div className="flex items-center justify-center flex-col">
              <img
                src={image2}
                className="h-14 w-14  object-fill p-2"
                alt="cloud_desktop"
              />
              <p>{subImage2}</p>
            </div>
          </div>
        )}
      </div>
      <div>
        {subtitle2 && (
          <p className=" text-lg w-full tex-center text-white">
            {subtitle2} <br />
          </p>
        )}
      </div>
    </div>
  );
}
Card.prototype = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subtitle1: PropTypes.string,
  subtitle2: PropTypes.string,
  image: PropTypes.string,
  subImage1: PropTypes.string,
  subImage2: PropTypes.string,
  image2: PropTypes.string,
  image1: PropTypes.string,
};
export default Card;
