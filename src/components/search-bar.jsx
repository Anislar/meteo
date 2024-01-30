import { AimOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";
import PropTypes from "prop-types";

function SearchBar({ handleChange }) {
  return (
    <div className=" flex md:flex-row space-y-0 sm:space-y-0  flex-col items-center space-x-3 justify-center w-full ">
      <Input
        prefix={<SearchOutlined />}
        suffix={<AimOutlined />}
        placeholder="Search for place"
        className="md:w-1/3 w-full bg-transparent"
      />
      <Select
        defaultValue={{ value: "rainy", label: "rainy" }}
        onChange={(e) => {
          console.log(e);
          handleChange(e);
        }}
        options={[
          { value: "rainy", label: "rainy" },
          { value: "cloudy", label: "cloudy" },
          { value: "sunny", label: "sunny" },
          { value: "mostly_sunny", label: "mostly sunny" },
        ]}
        bordered={false}
        placeholder="Select by..."
        className="md:w-1/3 w-full placeholder:text-gray-500 bg-transparent"
      />
    </div>
  );
}
SearchBar.prototype = {
  handleChange: PropTypes.func,
};

export default SearchBar;
