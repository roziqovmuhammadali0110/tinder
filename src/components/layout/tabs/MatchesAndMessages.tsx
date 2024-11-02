import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Matches from "@/components/matches/Matches";
import Messages from "@/components/messages/Messages";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Matches",
    children: <Matches />
  },
  {
    key: "2",
    label: "Messages",
    children: <Messages />
  }
];

const MatchesAndMessages: React.FC = () => (
  <Tabs
    defaultActiveKey="1"
    items={items}
    onChange={onChange}
    className=" h-full min-w-screen"
  />
);

export default MatchesAndMessages;
