import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import { getRegularPackage } from "../api/packageApi";
import RegularPackageCard from "../components/RegularPackageCard";
import { getStreamingPackage } from "../api/packageApi";
import StreamingPackageCard from "../components/StreamingPackageCard";
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
  const navigate = useNavigate();
  const [regularPackages, setRegularPackages] = useState([]);
  const [streamingPackages, setStreamingPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const data = await getRegularPackage();
        console.log(data);
        setRegularPackages(data);
      } catch (error) {
        console.error("Error fetching regular packages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const data = await getStreamingPackage();
        console.log(data);
        setStreamingPackages(data);
      } catch (error) {
        console.error("Error fetching regular packages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const divPackages = chunkArray(regularPackages, 4);

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
          <StreamingPackageCard
            title={"Unlimited Netflix Plan"}
            quota={"2 GB"}
            type={"Streaming"}
            price={"Rp160000"}
            duration={"30 days"}
            quotaApp={"Unlimited"}
            app={"Netflix"}
            imageClassName={"image-netflix"}
          />
          {/* disney */}
          <StreamingPackageCard
            title={"Unlimited Disney Plan"}
            quota={"2 GB"}
            type={"Streaming"}
            price={"Rp160000"}
            duration={"30 days"}
            quotaApp={"Unlimited"}
            app={"Disney"}
            imageClassName={"image-disney"}
          />
          {/* Prime */}
          <StreamingPackageCard
            title={"Unlimited Prime Plan"}
            quota={"2 GB"}
            type={"Streaming"}
            price={"Rp160000"}
            duration={"30 days"}
            quotaApp={"Unlimited"}
            app={"Prime"}
            imageClassName={"image-prime"}
          />
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
              {divPackages.map((group, Index) => (
                <div key={Index}>
                  <Row className="carousel-container">
                    {group.map((pkg) => (
                      <Col
                        span={6}
                        className="carousel-content-container"
                        key={pkg.id}
                      >
                        <RegularPackageCard
                          title={pkg.namePackage}
                          quota={pkg.quota}
                          duration={pkg.duration}
                          price={pkg.price}
                          onBuy={() => navigate("/transaksi/" + pkg.id)}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              ))}
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
