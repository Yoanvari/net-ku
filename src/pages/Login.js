import React, { useState } from "react";
import {
  Flex,
  Row,
  Col,
  Typography,
  Input,
  Button,
  ConfigProvider,
} from "antd";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { loginUser } from "../api/userApi";
import { useAuth } from "../context/AuthContext";
import { createStyles } from "antd-style";
const { Title, Text } = Typography;
const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(
        .${prefixCls}-btn-dangerous
      ) {
      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { styles } = useStyle();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const user = await loginUser(email, password);
      login(user);
      navigate("/landing");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Flex
      justify="flex-start"
      align="flex-end"
      className="gradient-bottom fullh"
    >
      <Row className="fullw">
        <Col
          span={12}
          offset={6}
          className="container-login"
          style={{ backgroundColor: "white" }}
        >
          <Col span={16} offset={4} className="">
            <Title
              level={1}
              style={{ paddingBlockEnd: "50px", paddingBlockStart: "25px" }}
            >
              <Text className="text-primary" style={{ fontSize: "50px" }}>
                Login.
              </Text>
            </Title>
            <form onSubmit={handleLogin}>
              <Input
                size="large"
                placeholder="Email"
                style={{ paddingBlock: 12 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
              <br />
              <br />
              <br />
              <Input
                size="large"
                placeholder="Password"
                style={{ paddingBlock: 12 }}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Input>
              <br />
              <br />
              <br />
              <ConfigProvider
                button={{
                  className: styles.linearGradientButton,
                }}
              >
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  size="large"
                  style={{ paddingBlock: 25 }}
                >
                  Login
                </Button>
              </ConfigProvider>
            </form>
          </Col>
        </Col>
      </Row>
    </Flex>
  );
};

export default Login;
