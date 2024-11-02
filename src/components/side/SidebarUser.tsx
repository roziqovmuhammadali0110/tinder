import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { PiSuitcaseSimple } from "react-icons/pi";
import AvatarImg from "../../assets/images/photo_2024-11-02_12-26-43.jpg";
import Image from "next/image";
import MatchesAndMessages from "../layout/tabs/MatchesAndMessages";
const SidebarUser = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full p-2 bg-slate-400 flex items-center justify-between">
        <div className="flex items-center justify-center gap-2 font-bold cursor-pointer">
          <Image
            src={AvatarImg}
            alt="img"
            className="w-[50px] h-[50px] rounded-[50%]"
          />
          <div>
            <h1>My Profile</h1>
          </div>
        </div>
        <div className=" w-[30px] h-[30px] border-gray-800 cursor-pointer border-2 rounded-[50%] text-center flex items-center justify-center ">
          <PiSuitcaseSimple className="" />
        </div>
      </div>
      {/* ///////////////////////////////////////////////////// Matches and Messages /////// */}
      <div className="px-2 h-[663px] bg-slate-500">
        <MatchesAndMessages />
      </div>
    </div>
  );
};
export default SidebarUser;
