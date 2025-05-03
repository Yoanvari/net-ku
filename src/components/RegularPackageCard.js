import React from "react";
import { Card, Flex, Button, Typography } from "antd";
const Text = Typography;

const RegularPackageCard = ({ title, quota, duration, price, onBuy }) => {
  return (
    <Card hoverable className="carousel-content">
      <Flex
        className="bg-secondary carousel-content-top"
        align="center"
        justify="space-between"
        vertical
      >
        <Text className="lato-bold" style={{ paddingBlockStart: 20 }}>
          {title}
        </Text>
        <Text
          className="lato-black"
          style={{ paddingBlockEnd: 10, fontSize: "23px" }}
        >
          Up to {quota}
        </Text>
      </Flex>
      <div
        style={{
          paddingInline: 10,
          paddingBlockStart: 10,
          width: "100%",
        }}
      >
        <Flex
          justify="space-between"
          style={{ paddingBlockEnd: 20 }}
          className="lato-bold"
        >
          <Text>Internet</Text>
          <Text>{quota}</Text>
        </Flex>
        <Flex
          justify="space-between"
          className="lato-bold"
          style={{ paddingBlockEnd: 20 }}
        >
          <Text>Active Period</Text>
          <Text>{duration}</Text>
        </Flex>
        <Text className="text-primary lato-black" style={{ fontSize: "20px" }}>
          Rp{price}
        </Text>
      </div>
      <Flex style={{ padding: 10, paddingBlockStart: 15 }}>
        <Button
          block
          type="primary"
          shape="round"
          className="lato-bold"
          onClick={onBuy}
        >
          Buy
        </Button>
      </Flex>
    </Card>
  );
};

export default RegularPackageCard;
