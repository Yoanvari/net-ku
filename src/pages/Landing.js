import React from "react";
import { FloatButton, Typography, Button, Flex, Layout, Col, Row } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 80,
  paddingInline: 30,
  lineHeight: "64px",
  backgroundColor: "#fff",
};
const contentStyle = {
  minHeight: 120,
  paddingInline: 30,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};
const footerStyle = {
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100%",
  height: "100vh",
  maxWidth: "100%",
};
const bgPrimary = {
  backgroundColor: "#0958d9",
};
const bgSecondary = {
  backgroundColor: "#4096ff",
};
const buttonStyle = {
  paddingInline: 20,
  marginInline: 20,
};
const buttonSigninStyle = {
  padding: 20,
};

const Landing = () => {
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
      <Header style={headerStyle}>
        <Row style={{ height: "100%" }}>
          <Col span={4} style={bgPrimary}>
            <Flex justify="center" align="center" style={{ height: "100%" }}>
              <Text strong style={{ fontSize: "30px" }}>
                NetKu
              </Text>
            </Flex>
          </Col>
          <Col span={18} style={bgSecondary}>
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
          <Col span={2} style={bgPrimary}>
            <Flex justify="center" align="center" style={{ height: "100%" }}>
              <Button
                type="text"
                variant="solid"
                color="default"
                shape="round"
                style={buttonSigninStyle}
              >
                Sign In
              </Button>
            </Flex>
          </Col>
        </Row>
      </Header>
      <Content style={contentStyle}>
        <h1>Landing Page</h1>
        <p>Welcome to the landing page!</p>
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export default Landing;
