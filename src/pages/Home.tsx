/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Col, Row, Tag } from "antd";
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ReactIcon from "../assets/icons/react.png";
import Javascript from "../assets/icons/javascript.png";
import Typescript from "../assets/icons/typescript.png";
import Front from "../assets/icons/front.png";
import Mui from "../assets/icons/mui.png";
import Background from "../assets/icons/background.png";
import Perfil from "../assets/icons/perfil.png";
import AnimatedTextCharacter from "../components/TextSpring";
import "./App.css";

export const Home = () => {
  const Mobile = useMediaQuery({ maxWidth: "750px" });
  const [, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const { scrollY } = useViewportScroll();
  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const progress = scrollY.get() / scrollHeight;
      scrollProgress.set(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, scrollProgress]);

  // Set a soft scaling effect based on the scroll progress (adjust these values as desired)
  const scale = 1 + scrollProgress.get() * 0.3; // You can experiment with different values here

  const blur = scrollProgress.get() * 20; // You can experiment with different values here

  // Set a 3D rotation to the left based on the scroll progress
  const rotateY = scrollProgress.get() * -30; // You can experiment with different values here

  return (
    <>
      {!Mobile ? (
        <Row style={{ width: "99vw" }}>
          <Col span={24}>
            <div
              id="part-1"
              style={{
                height: "100vh",
                opacity: 1,
                backgroundImage:
                  "radial-gradient(#404949 1.4500000000000002px, #242424 1.4500000000000002px)",
                backgroundSize: "29px 29px",
              }}
            >
              <div style={{ height: 30 }} />
              <Row style={{ marginLeft: "30px" }}>
                <Col span={18}>
                  <AnimatedTextCharacter text="Leonardo Araujo" />
                  <AnimatedTextCharacter
                    text="Desenvolvedor de Front-end"
                    style={{ marginTop: "-80px" }}
                  />
                </Col>
                <Col
                  span={13}
                  style={{ marginLeft: "15px", marginTop: "-20px" }}
                >
                  <Row>
                    {[
                      {
                        name: "Javascript",
                        icon: Javascript,
                      },
                      {
                        name: "Typescript",
                        icon: Typescript,
                      },
                      {
                        name: "Front-end",
                        icon: Front,
                      },
                      {
                        name: "React.js",
                        icon: ReactIcon,
                      },
                      {
                        name: "Material-UI",
                        icon: Mui,
                      },
                      {
                        name: "API RESTful",
                        icon: ReactIcon,
                      },
                    ].map((stack, i) => (
                      <Col>
                        <motion.div
                          variants={{
                            hidden: { y: 50, opacity: 0 },
                            visible: {
                              y: 0,
                              opacity: 1,
                            },
                          }}
                          initial="hidden"
                          animate={window.scrollY < 300 ? "visible" : "hidden"}
                          transition={{
                            bounce: 2,
                            easings: ["easeIn", "easeOut"],
                            duration: i + 0.5,
                          }}
                        >
                          <Tag
                            icon={
                              <img
                                src={stack.icon}
                                style={{ height: "22px", margin: "5px" }}
                              />
                            }
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            color="#df1759"
                          >
                            {stack.name}
                          </Tag>
                        </motion.div>
                      </Col>
                    ))}
                  </Row>
                </Col>
                <Col
                  span={9}
                  style={{ marginLeft: "15px", marginTop: "-20px" }}
                >
                  <motion.div
                    style={{
                      width: "100%",
                      height: "45%",
                      backgroundImage: `url(${Background})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      scale,
                      marginTop: "10px",
                    }}
                  >
                    <motion.img
                      src={Perfil}
                      style={{
                        scale,
                        height: "87%",
                        filter: `blur(0px, ${blur}px)`, // Apply the blur effect on the bottom
                        transform: `perspective(600px) rotateY(${rotateY}deg)`, // Apply 3D rotation
                        transformOrigin: "center center", 
                      }}
                    />
                  </motion.div>
                </Col>
              </Row>
            </div>
            <div
              id="part-2"
              style={{ height: "100vh", background: "#2b2b2b" }}
            />
            <div
              id="part-3"
              style={{ height: "100vh", background: "#2e2e2e" }}
            />
          </Col>
        </Row>
      ) : (
        <Row style={{ width: "99vw" }}>
          <div
            id="part-1"
            style={{
              width: "100vw",
              height: "100vh",
              textAlign: "center",
              opacity: 1,
              backgroundImage: "radial-gradient(#404949 0.9px, #242424 0.9px)",
              backgroundSize: "18px 18px",
            }}
          >
            <Col
              span={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <AnimatedTextCharacter text="Olá, é um prazer tê-lo aqui" />
            </Col>
          </div>
          <div
            id="part-2"
            style={{
              width: "100vw",
              height: "100vh",
              textAlign: "center",
              background: "rgba(0,0,255,0.02)",
            }}
          />
          <div
            id="part-3"
            style={{
              width: "100vw",
              height: "100vh",
              textAlign: "center",
              background: "#FFFBE9",
            }}
          />
        </Row>
      )}
    </>
  );
};
