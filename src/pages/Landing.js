import React, { useState } from "react";
import {
  Card,
  FloatButton,
  Typography,
  Button,
  Flex,
  Layout,
  Col,
  Row,
  Space,
  Carousel,
  Modal,
  Divider,
  Tag,
  Timeline,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import "../App.css";
const { Header, Footer, Content } = Layout;
const { Text } = Typography;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 80,
  paddingInline: 30,
  lineHeight: "64px",
};
const contentStyle = {
  minHeight: 120,
  paddingInline: 0,
  lineHeight: "120px",
  backgroundColor: "#fff",
};
const footerStyle = {
  color: "#fff",
};
const layoutStyle = {
  borderRadius: 8,
  width: "100%",
  height: "1200px",
  maxWidth: "100%",
};
const buttonStyle = {
  paddingInline: 20,
  marginInline: 20,
};
const buttonSigninStyle = {
  padding: 20,
};

const Landing = () => {
  const onChange = (key) => {
    console.log(key);
  };
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
    <Layout style={layoutStyle}>
      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="primary"
        style={{
          insetInlineEnd: 60,
          insetBlockEnd: 80,
          blockSize: 60,
          inlineSize: 60,
        }}
      ></FloatButton>
      {/* Header */}
      <Header className="bg-primary" style={headerStyle}>
        <Row style={{ height: "100%" }}>
          <Col span={4}>
            <Flex justify="center" align="center" style={{ height: "100%" }}>
              <span
                className="lato-black text-black"
                style={{ fontSize: "30px" }}
              >
                Netku
              </span>
            </Flex>
          </Col>
          <Col span={18}>
            <Flex
              justify="flex-start"
              align="center"
              style={{ height: "100%" }}
            >
              <Button
                type="text"
                variant="link"
                color="default"
                style={buttonStyle}
              >
                Text
              </Button>
              <Button
                type="text"
                variant="link"
                color="default"
                style={buttonStyle}
              >
                Text
              </Button>
              <Button
                type="text"
                variant="link"
                color="default"
                style={buttonStyle}
              >
                Text
              </Button>
              <Button
                type="text"
                variant="link"
                color="default"
                style={buttonStyle}
              >
                Text
              </Button>
              <Button
                type="text"
                variant="link"
                color="default"
                style={buttonStyle}
              >
                Text
              </Button>
            </Flex>
          </Col>
          <Col span={2}>
            <Flex justify="center" align="center" style={{ height: "100%" }}>
              <Button
                type="text"
                variant="solid"
                shape="round"
                style={buttonSigninStyle}
                className="bg-secondary text-black lato-bold"
              >
                Sign In
              </Button>
            </Flex>
          </Col>
        </Row>
      </Header>
      {/* Content */}
      <Content style={contentStyle}>
        <Flex
          justify="center"
          align="center"
          vertical
          style={{ paddingBlockStart: 40 }}
        >
          <Text
            className="lato-black"
            style={{ fontSize: "32px", latterspacing: 0 }}
          >
            Enjoy your favorite movies and shows without limits.
          </Text>
          <Text className="lato-bold" style={{ fontSize: "16px" }}>
            Choose the perfect plan below:
          </Text>
        </Flex>
        <Flex
          justify="space-evenly"
          style={{ marginBlock: 40, paddingInline: 30 }}
        >
          {/* netflix */}
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
                Unlimited Streaming Plan
              </div>
              <div
                className="rounded-container image-netflix"
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
              <Text>Unlimited | 30 days</Text>
              <Text>Rp.160.000</Text>
            </Flex>
            <Flex style={{ marginBlock: 10 }}>
              <Tag>Unlimited</Tag>
              <Tag>Streaming</Tag>
              <Tag>netflix</Tag>
            </Flex>
            <Card style={{ paddingBlockEnd: 0 }}>
              <Flex justify="space-between">
                <Text>Active Periode</Text>
                <Text>30 days</Text>
              </Flex>
              <Divider style={{ marginBlock: 10 }} />
              <Flex justify="space-between">
                <Text>Speed</Text>
                <Text>Up to 10 Mbps</Text>
              </Flex>
              <Divider style={{ marginBlock: 10 }} />
              <Flex justify="space-between">
                <Text>Bonus</Text>
                <Text>2 GB Regular Data</Text>
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
          {/* disney */}
          <Card
            variant="borderless"
            hoverable
            className="bg-secondary"
            style={{
              width: 400,
              borderRadius: 20,
            }}
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
                Unlimited Streaming Plan
              </div>
              <div
                className="rounded-container image-disney"
                style={{ height: "180px", backgroundColor: "gray" }}
              ></div>
            </Space>
          </Card>
          <Card
            hoverable
            variant="borderless"
            className="bg-secondary"
            style={{
              width: 400,
              borderRadius: 20,
            }}
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
                Unlimited Streaming Plan
              </div>
              <div
                className="rounded-container image-prime"
                style={{ height: "180px", backgroundColor: "gray" }}
              ></div>
            </Space>
          </Card>
        </Flex>
        {/* caraousel */}
        <Row
          className="bg-primary"
          style={{ marginBlock: 60, height: "400px", paddingInline: 30 }}
        >
          <Col span={6}>
            <Flex
              style={{
                alignItems: "center",
                justifyContent: "center",
                justifyItems: "center",
                height: "100%",
              }}
              vertical
            >
              <div
                className="lato-black"
                style={{
                  fontSize: "24px",
                  latterspacing: "1px",
                  paddingBlockEnd: 15,
                  lineHeight: "54px",
                }}
              >
                REGULAR DATA PACKAGES
              </div>
              <div
                className="lato-bold text-center"
                style={{
                  fontSize: "24px",
                  width: "180px",
                  lineHeight: "28px",
                }}
              >
                Stay connected for work, chat, or browsing.
              </div>
            </Flex>
          </Col>
          <Col span={18}>
            <Carousel
              arrows
              draggable
              infinite={false}
              autoplay={{ dotDuration: true }}
              autoplaySpeed={5000}
            >
              <div>
                <Row className="carousel-container">
                  <Col span={6} className="carousel-content-container">
                    <Card hoverable className="carousel-content">
                      <Flex
                        className="bg-secondary carousel-content-top"
                        align="center"
                        justify="space-between"
                        vertical
                      >
                        <Text
                          className="lato-bold"
                          style={{ paddingBlockStart: 20 }}
                        >
                          Serba Lima Ribu
                        </Text>
                        <Text
                          className="lato-black"
                          style={{ paddingBlockEnd: 10, fontSize: "23px" }}
                        >
                          Up to 5 GB
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
                          <Text>5 GB</Text>
                        </Flex>
                        <Flex
                          justify="space-between"
                          className="lato-bold"
                          style={{ paddingBlockEnd: 20 }}
                        >
                          <Text>Active Period</Text>
                          <Text>30 days</Text>
                        </Flex>
                        <Text
                          className="text-primary lato-black"
                          style={{ fontSize: "20px" }}
                        >
                          Rp5.000
                        </Text>
                      </div>
                      <Flex style={{ padding: 10, paddingBlockStart: 15 }}>
                        <Button
                          block
                          type="primary"
                          shape="round"
                          className="lato-bold"
                        >
                          Buy
                        </Button>
                      </Flex>
                    </Card>
                  </Col>
                  <Col span={6} className="carousel-content-container">
                    <Card hoverable className="carousel-content">
                      <Flex
                        className="bg-secondary carousel-content-top"
                        align="center"
                        justify="space-between"
                        vertical
                      >
                        <Text
                          className="lato-bold"
                          style={{ paddingBlockStart: 20 }}
                        >
                          Serba Lima Ribu
                        </Text>
                        <Text
                          className="lato-black"
                          style={{ paddingBlockEnd: 10, fontSize: "23px" }}
                        >
                          Up to 5 GB
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
                          <Text>5 GB</Text>
                        </Flex>
                        <Flex
                          justify="space-between"
                          className="lato-bold"
                          style={{ paddingBlockEnd: 20 }}
                        >
                          <Text>Active Period</Text>
                          <Text>30 days</Text>
                        </Flex>
                        <Text
                          className="text-primary lato-black"
                          style={{ fontSize: "20px" }}
                        >
                          Rp5.000
                        </Text>
                      </div>
                      <Flex style={{ padding: 10, paddingBlockStart: 15 }}>
                        <Button
                          block
                          type="primary"
                          shape="round"
                          className="lato-bold"
                        >
                          Buy
                        </Button>
                      </Flex>
                    </Card>
                  </Col>
                  <Col span={6} className="carousel-content-container">
                    <Card hoverable className="carousel-content">
                      <Flex
                        className="bg-secondary carousel-content-top"
                        align="center"
                        justify="space-between"
                        vertical
                      >
                        <Text
                          className="lato-bold"
                          style={{ paddingBlockStart: 20 }}
                        >
                          Serba Lima Ribu
                        </Text>
                        <Text
                          className="lato-black"
                          style={{ paddingBlockEnd: 10, fontSize: "23px" }}
                        >
                          Up to 5 GB
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
                          <Text>5 GB</Text>
                        </Flex>
                        <Flex
                          justify="space-between"
                          className="lato-bold"
                          style={{ paddingBlockEnd: 20 }}
                        >
                          <Text>Active Period</Text>
                          <Text>30 days</Text>
                        </Flex>
                        <Text
                          className="text-primary lato-black"
                          style={{ fontSize: "20px" }}
                        >
                          Rp5.000
                        </Text>
                      </div>
                      <Flex style={{ padding: 10, paddingBlockStart: 15 }}>
                        <Button
                          block
                          type="primary"
                          shape="round"
                          className="lato-bold"
                        >
                          Buy
                        </Button>
                      </Flex>
                    </Card>
                  </Col>
                  <Col span={6} className="carousel-content-container">
                    <Card hoverable className="carousel-content">
                      <Flex
                        className="bg-secondary carousel-content-top"
                        align="center"
                        justify="space-between"
                        vertical
                      >
                        <Text
                          className="lato-bold"
                          style={{ paddingBlockStart: 20 }}
                        >
                          Serba Lima Ribu
                        </Text>
                        <Text
                          className="lato-black"
                          style={{ paddingBlockEnd: 10, fontSize: "23px" }}
                        >
                          Up to 5 GB
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
                          <Text>5 GB</Text>
                        </Flex>
                        <Flex
                          justify="space-between"
                          className="lato-bold"
                          style={{ paddingBlockEnd: 20 }}
                        >
                          <Text>Active Period</Text>
                          <Text>30 days</Text>
                        </Flex>
                        <Text
                          className="text-primary lato-black"
                          style={{ fontSize: "20px" }}
                        >
                          Rp5.000
                        </Text>
                      </div>
                      <Flex style={{ padding: 10, paddingBlockStart: 15 }}>
                        <Button
                          block
                          type="primary"
                          shape="round"
                          className="lato-bold"
                        >
                          Buy
                        </Button>
                      </Flex>
                    </Card>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className="carousel-container">
                  <Col span={6} className="carousel-content-container">
                    <Card hoverable className="carousel-content">
                      <Flex
                        className="bg-secondary carousel-content-top"
                        align="center"
                        justify="space-between"
                        vertical
                      >
                        <Text
                          className="lato-bold"
                          style={{ paddingBlockStart: 20 }}
                        >
                          Serba Lima Ribu
                        </Text>
                        <Text
                          className="lato-black"
                          style={{ paddingBlockEnd: 10, fontSize: "23px" }}
                        >
                          Up to 5 GB
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
                          <Text>5 GB</Text>
                        </Flex>
                        <Flex
                          justify="space-between"
                          className="lato-bold"
                          style={{ paddingBlockEnd: 20 }}
                        >
                          <Text>Active Period</Text>
                          <Text>30 days</Text>
                        </Flex>
                        <Text
                          className="text-primary lato-black"
                          style={{ fontSize: "20px" }}
                        >
                          Rp5.000
                        </Text>
                      </div>
                      <Flex style={{ padding: 10, paddingBlockStart: 15 }}>
                        <Button
                          block
                          type="primary"
                          shape="round"
                          className="lato-bold"
                        >
                          Buy
                        </Button>
                      </Flex>
                    </Card>
                  </Col>
                  <Col span={6} className="carousel-content-container">
                    <Card hoverable className="carousel-content">
                      <Flex
                        className="bg-secondary carousel-content-top"
                        align="center"
                        justify="space-between"
                        vertical
                      >
                        <Text
                          className="lato-bold"
                          style={{ paddingBlockStart: 20 }}
                        >
                          Serba Lima Ribu
                        </Text>
                        <Text
                          className="lato-black"
                          style={{ paddingBlockEnd: 10, fontSize: "23px" }}
                        >
                          Up to 5 GB
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
                          <Text>5 GB</Text>
                        </Flex>
                        <Flex
                          justify="space-between"
                          className="lato-bold"
                          style={{ paddingBlockEnd: 20 }}
                        >
                          <Text>Active Period</Text>
                          <Text>30 days</Text>
                        </Flex>
                        <Text
                          className="text-primary lato-black"
                          style={{ fontSize: "20px" }}
                        >
                          Rp5.000
                        </Text>
                      </div>
                      <Flex style={{ padding: 10, paddingBlockStart: 15 }}>
                        <Button
                          block
                          type="primary"
                          shape="round"
                          className="lato-bold"
                        >
                          Buy
                        </Button>
                      </Flex>
                    </Card>
                  </Col>
                  <Col span={6} className="carousel-content-container"></Col>
                  <Col span={6} className="carousel-content-container"></Col>
                </Row>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Content>
      <Footer className="bg-primary" style={footerStyle}>
        Footer
      </Footer>
    </Layout>
  );
};

export default Landing;
