import { AimOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";

function SearchBar() {
  return (
    <div className=" flex md:flex-row space-y-3 flex-col items-center space-x-3 justify-center w-full ">
      <Input
        prefix={<SearchOutlined />}
        suffix={<AimOutlined />}
        placeholder="Search for place"
        className="md:w-1/3 w-full bg-transparent"
      />
      <Select
        placeholder="Select by..."
        className="md:w-1/3 w-full placeholder:text-gray-500 bg-transparent"
      />
    </div>
  );
}

export default SearchBar;
