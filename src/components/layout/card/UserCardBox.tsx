import React from "react";
import { Card } from "antd";
import { AiTwotoneInfoCircle } from "react-icons/ai";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";
import { BsLightningCharge } from "react-icons/bs";

const UserCardBox: React.FC = () => (
  <Card
    style={{ maxWidth: 380, border: "none" }} // Borderni olib tashlaymiz
    bodyStyle={{ padding: 0 }} // Paddingni 0 qilib o'zgartiramiz
    cover={
      <div className="relative">
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          className="rounded-lg"
        />
        <div className="">
          <div className="absolute bottom-20 text-white px-2">
            <h1 className="font-bold text-[25px]">Shahzoda 25</h1>
            <div className="gap-2 flex items-center justify-center font-medium">
              <div className="gap-2 flex items-center justify-center flex-wrap font-medium">
                <code className="bg-slate-700 px-2 rounded-md">Yoga</code>
                <code className="bg-slate-700 px-2 rounded-md">Netflix</code>
                <code className="bg-slate-700 px-2 rounded-md">Art</code>
                <code className="bg-slate-700 px-2 rounded-md">
                  Photography
                </code>
                <code className="bg-slate-700 px-2 rounded-md">Dog lover</code>
              </div>
              <div>
                <AiTwotoneInfoCircle
                  style={{ width: "28px", height: "28px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-2">
          <div className="w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-slate-100 cursor-pointer">
            <MdOutlineSettingsBackupRestore
              style={{ width: "24px", height: "24px", fontWeight: "bold" }}
            />
          </div>
          <div className="w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-slate-100 cursor-pointer">
            <IoMdClose
              style={{ width: "24px", height: "24px", fontWeight: "bold" }}
            />
          </div>
          <div className="w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-slate-100 cursor-pointer">
            <FaRegStar
              style={{ width: "24px", height: "24px", fontWeight: "bold" }}
            />
          </div>
          <div className="w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-slate-100 cursor-pointer">
            <FcLikePlaceholder
              style={{ width: "24px", height: "24px", fontWeight: "bold" }}
            />
          </div>
          <div className="w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-slate-100 cursor-pointer">
            <BsLightningCharge
              style={{ width: "24px", height: "24px", fontWeight: "bold" }}
            />
          </div>
        </div>
      </div>
    }
  />
);

export default UserCardBox;
