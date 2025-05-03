import React, { useState, useEffect } from "react";
import { Layout, Card, Space, Button, Flex, Typography, Modal } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";
import { storeTransaction } from "../api/transactionApi";
import { getPackageById } from "../api/packageApi";

const { Text } = Typography;
const { Header, Footer, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 80,
  paddingInline: 30,
  lineHeight: "64px",
};
const footerStyle = {
  color: "#fff",
};
const layoutStyle = {
  borderRadius: 8,
  width: "100%",
  height: "100vh",
  maxWidth: "100%",
};

const Transaksi = () => {
  const [modal, contextHolder] = Modal.useModal();
  const navigate = useNavigate();
  const { id } = useParams();
  const [packageData, setPackageData] = useState(null);

  const countDown = () => {
    let secondsToGo = 5;
    const instance = modal.success({
      title: "Transaction Succesfully",
      content: `Close after ${secondsToGo} second.`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      instance.update({
        content: `Close after ${secondsToGo} second.`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
      navigate("/landing");
    }, secondsToGo * 1000);
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pkg = await getPackageById(id);
        setPackageData(pkg);
      } catch (error) {
        console.error("Gagal mengambil data paket:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!packageData) return <p>Loading...</p>;

  const handleConfirm = async () => {
    try {
      await storeTransaction("2", packageData.id);
      countDown();
    } catch (error) {
      console.error("Error transaksi:", error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Layout style={layoutStyle}>
      <Header className="bg-primary" style={headerStyle}></Header>
      <Content className="bg-accent">
        <Flex justify="center" align="center" style={{ height: "100%" }}>
          <Card style={{ width: "600px" }}>
            <Flex align="center" vertical>
              <Text className="lato-regular" style={{ paddingBlock: "20px" }}>
                {formattedDate}
              </Text>
              <Text className="lato-bold" style={{ fontSize: "20px" }}>
                {packageData.namePackage}
              </Text>
              <Text
                className="lato-black"
                style={{
                  fontSize: "50px",
                  paddingBlockStart: "10px",
                  paddingBlockEnd: "20px",
                }}
              >
                Rp{packageData.price}
              </Text>
            </Flex>
            <Flex justify="center">
              <Button block onClick={handleBack}>
                Kembali
              </Button>
              <div style={{ width: "30px" }}></div>
              {contextHolder}
              <Button block type="primary" onClick={handleConfirm}>
                Confirm
              </Button>
            </Flex>
          </Card>
        </Flex>
      </Content>
      <Footer className="bg-primary" style={footerStyle}></Footer>
    </Layout>
  );
};

export default Transaksi;
