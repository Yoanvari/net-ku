import React, { useState } from "react";
import {
  Card,
  Space,
  Modal,
  Flex,
  Typography,
  Tag,
  Divider,
  Timeline,
} from "antd";
const { Text } = Typography;

const StreamingPackageCard = ({
  title,
  quota,
  type,
  price,
  duration,
  speed = "Up to 10 Mbps",
  quotaApp,
  app,
  feature,
  imageClassName,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card
        variant="borderless"
        hoverable
        className="bg-secondary"
        style={{
          width: 400,
          borderRadius: 20,
        }}
        onClick={showModal}
      >
        <Space direction="vertical" size={20} style={{ width: "100%" }}>
          <div
            className="rounded-container bg-primary text-white lato-black"
            style={{
              height: "60px",
              textAlign: "center",
              alignContent: "center",
              fontSize: "20px",
              letterSpacing: "1px",
            }}
          >
            {title}
          </div>
          <div
            className={"rounded-container " + imageClassName}
            style={{ height: "180px", backgroundColor: "gray" }}
          ></div>
        </Space>
      </Card>
      <Modal
        title="Detail plan"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Flex
          justify="space-between"
          className="lato-bold"
          style={{ marginBlock: 20 }}
        >
          <Text>
            {quotaApp} | {duration}
          </Text>
          <Text>{price}</Text>
        </Flex>
        <Flex style={{ marginBlock: 10 }}>
          <Tag>{quotaApp}</Tag>
          <Tag>{type}</Tag>
          <Tag>{app}</Tag>
        </Flex>
        <Card style={{ paddingBlockEnd: 0 }}>
          <Flex justify="space-between">
            <Text>Active Periode</Text>
            <Text>{duration}</Text>
          </Flex>
          <Divider style={{ marginBlock: 10 }} />
          <Flex justify="space-between">
            <Text>Speed</Text>
            <Text>{speed}</Text>
          </Flex>
          <Divider style={{ marginBlock: 10 }} />
          <Flex justify="space-between">
            <Text>Bonus</Text>
            <Text>{quota} Regular Data</Text>
          </Flex>
          <Divider style={{ marginBlock: 10 }} />
          <Flex vertical>
            <Text style={{ marginBlockEnd: 15 }}>Features:</Text>
            <Timeline
              style={{ marginInlineStart: 10 }}
              items={[
                { children: "Unlimited access to Netflix" },
                { children: "HD & 4K supported" },
                { children: "Multi-device streaming" },
                { children: "Ad-free experience" },
                { children: "Free access to selected movie channels" },
              ]}
            />
          </Flex>
        </Card>
      </Modal>
    </>
  );
};

export default StreamingPackageCard;
