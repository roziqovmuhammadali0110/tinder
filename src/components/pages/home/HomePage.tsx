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
        width={350} // Kenglikni 400px ga o'rnatamiz
        collapsedWidth={0} // Collapse qilinganda kengligini 0 ga o'rnatamiz
        breakpoint="lg"
        style={{ background: "#fbfcfc" }}>
        <div>
          <SidebarUser />
        </div>
      </Sider>
      <Layout className="min-h-screen">
        <Content className="w-full pl-[1%] h-full">
          <div
            style={{
              padding: 24,
              minHeight: "100%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
            className="flex items-center justify-center">
            <UserCardBox />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomePage;
