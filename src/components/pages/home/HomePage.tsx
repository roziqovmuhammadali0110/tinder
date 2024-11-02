"use client";

import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import SidebarUser from "@/components/side/SidebarUser";
import UserCardBox from "@/components/layout/card/UserCardBox";

const { Content, Footer, Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`
}));

const HomePage: React.FC = () => {
  const { token: { colorBgContainer = "#fff", borderRadiusLG = "4px" } = {} } =
    theme.useToken();

  return (
    <div className="min-h-screen w-full flex items-center">
      <Sider
        width={"22%"}
        collapsedWidth={0}
        breakpoint="md"
        style={{ background: "#fbfcfc" }}
        className=" hidden md:block" // `lg`dan kichik ekranlarda yashirish uchun
      >
        <div>
          <SidebarUser />
        </div>
      </Sider>
      <div className="w-[100%]">
        <Content className="w-full lg:pl-[1%] h-full p-0">
          <div
            style={{
              minHeight: "100%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
            className="flex items-center justify-center">
            <UserCardBox />
          </div>
        </Content>
      </div>
    </div>
  );
};

export default HomePage;
