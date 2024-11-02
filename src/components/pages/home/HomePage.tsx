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
    <Layout className="min-h-screen w-full">
      <Sider
        width={350}
        collapsedWidth={0}
        breakpoint="lg"
        style={{ background: "#fbfcfc" }}
        className="hidden lg:block" // `lg`dan kichik ekranlarda yashirish uchun
      >
        <div>
          <SidebarUser />
        </div>
      </Sider>
      <Layout className="min-h-screen">
        <Content className="w-full lg:pl-[1%] h-full p-0">
          <div
            style={{
              padding: 24,
              minHeight: "100%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
            className="flex items-center justify-center xs:w-screen xs:h-screen">
            <UserCardBox />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomePage;
