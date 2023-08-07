/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Avatar, Card, Col, Collapse, Image, List, Row, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import DashBalance from "../../assets/cases/balance.png";
import DashBalanceDash from "../../assets/cases/balance_dashboard.png";
import ec1 from "../../assets/cases/ecomerce/screen1.png";
import ec2 from "../../assets/cases/ecomerce/screen2.png";
import ec3 from "../../assets/cases/ecomerce/screen3.png";
import DashLogin from "../../assets/cases/login.png";
import Loupen from "../../assets/icons/Loupen.jpg";
import Paybrokers from "../../assets/icons/Paybrokers.jpg";
import Background from "../../assets/icons/background.png";
import Cubos from "../../assets/icons/cubos_academy.jpg";
import Front from "../../assets/icons/front.png";
import Ironhack from "../../assets/icons/iron_hack.jpg";
import Javascript from "../../assets/icons/javascript.png";
import Mui from "../../assets/icons/mui.png";
import Perfil from "../../assets/icons/perfil.png";
import ReactIcon from "../../assets/icons/react.png";
import Typescript from "../../assets/icons/typescript.png";
import AnimatedTextCharacter from "../../components/TextSpring";
import "../App.css";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";

export const Desktop = () => {
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

  const scale = 1 + scrollProgress.get() * 0.3;
  const blur = scrollProgress.get() * 10;
  const position = scrollProgress.get() * 20;
  const translateX = useTransform(scrollProgress, [0, 1], ["0%", "-25%"]);

  const Tags = [
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
  ];

  const academic = [
    {
      institution: "Desenvolvimento web full-stack | Ironhack 💻",
      link: "https://www.ironhack.com/br/pt/web-development/sao-paulo",
      course: "Capacitação Profissional em Desenvolvimento web full-stack",
      description: {
        institution:
          "Ironhack é o 3º melhor bootcamp de programação do mundo de acordo com a Swichup. Com campus em 12 cidades ao redor do mundo e mais de 5000 alunos formados.",
        course: "400 horas de curso em um período de 9 semanas.",
        learn: [
          "HTML",
          "CSS",
          "JavaScript (ES6)",
          "React.js",
          "RESTful API",
          "Express.js",
          "Node.js",
          "Mongo db",
        ],
      },
      logo: Ironhack,
    },
    {
      institution: "UX/UI Design | Cubos Academy 🚀",
      link: "https://cubos.academy/cursos/design-uxui",
      course: "Capacitação Profissional em UX/UI Design",
      description: {
        institution:
          "Ironhack é o 3º melhor bootcamp de programação do mundo de acordo com a Swichup. Com campus em 12 cidades ao redor do mundo e mais de 5000 alunos formados.",
        course: "128 horas de curso em um período de 4 meses.",
        learn: [
          "Matriz CSD",
          "Desk Research",
          "UX Research",
          "Design Thinking",
          "Design Sprint",
          "Double-diamond",
          "Atomic design",
          "Figma",
          "Miro",
        ],
      },
      logo: Cubos,
    },
  ];
  const professional = [
    {
      institution: "Paybrokers",
      link: "https://paybrokers.com.br/",
      position: "Desenvolvedor de front-end pleno",
      time: "jan de 2023 - atualmente · 8 meses",
      description: {
        institution:
          "A PayBrokers presta serviços de Facilitação de Pagamentos (eFX), para depósitos e retiradas de valores, facilitando compras online em sites internacionais.",
        competitions: [
          "Responsável pela prototipação e desenvolvimento de componentes, telas e dashboards em uma aplicação de pagamentos nacionais e internacionais",
          "Responsável pela tradução das telas em 3 idiomas, sendo eles: Inglês, Espanhol e Português;",
          "Responsável por manter a responsividade da aplicação;",
          "Criação de componentes e telas com Figma",
        ],
      },
      logo: Paybrokers,
    },
    {
      institution: "Loupen",
      link: "https://loupen.com.br/",
      position: "Desenvolvedor full-stack júnior",
      time: "jul de 2022 - jan de 2023 · 7 meses",
      description: {
        institution:
          "Hub de tecnologia com diversos produtos na área de gestão de clientes",
        competitions: [
          "Criação de componentes e páginas para uma ferramenta de disparo de mensagens proativas por WhatsApp;",
          "Implementação de regras de negócio e criação de backend integrando API's do WhatsApp e Freshchat.",
          "Costumizações em mais de 5 produtos Freshworks: Freshdesk, Freshchat, FreshService, Freshsales, Freshconnect e Freshcaller",
        ],
      },
      logo: Loupen,
    },
  ];
  return (
    <Row style={{ width: "100vw" }}>
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
            <Col span={13} style={{ marginLeft: "15px", marginTop: "-20px" }}>
              <Row>
                {Tags.map((stack, i) => (
                  <Col style={{ margin: 5 }}>
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
            <Col span={9} style={{ marginLeft: "15px" }}>
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
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    backdropFilter: `blur(${blur}px)`,
                    WebkitBackdropFilter: `blur(${blur}px)`,
                  }}
                />
                <motion.img
                  src={Perfil}
                  style={{
                    scale,
                    height: "87%",
                    marginRight: position,
                    translateX,
                    borderRadius: "30%",
                  }}
                />
              </motion.div>
            </Col>
            <Row
              style={{
                position: "absolute",
                left: 40,
                top: 300,
                width: "100vw",
              }}
            >
              <Col span={14} style={{ marginLeft: "15px" }}>
                <Collapse
                  style={{ color: "#fff", width: "100%" }}
                  items={[
                    {
                      key: "1",
                      label: "Formações acadêmicas",
                      children: (
                        <List
                          itemLayout="horizontal"
                          dataSource={academic}
                          renderItem={(item) => (
                            <List.Item>
                              <List.Item.Meta
                                avatar={<Avatar src={item.logo} />}
                                title={
                                  <a href={item.link} target="_blank">
                                    {item.institution}
                                  </a>
                                }
                                description={
                                  <div>
                                    <p>{item.course}</p>
                                    <p>- {item.description.institution}</p>
                                    <ul
                                      style={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        flexWrap: "wrap",
                                      }}
                                    >
                                      {item.description.learn.map((hab) => (
                                        <li
                                          style={{
                                            width: "auto",
                                            paddingLeft: "30px",
                                            paddingRight: "30px",
                                            fontWeight: "600",
                                          }}
                                        >
                                          {hab}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                }
                              />
                            </List.Item>
                          )}
                        />
                      ),
                    },
                  ]}
                />
              </Col>
              <Col span={14} style={{ margin: "15px" }}>
                <Collapse
                  style={{ color: "#fff", width: "100%" }}
                  defaultActiveKey={"1"}
                  items={[
                    {
                      key: "2",
                      label: "Experiências profissionais",
                      children: (
                        <List
                          itemLayout="horizontal"
                          dataSource={professional}
                          renderItem={(item) => (
                            <List.Item>
                              <List.Item.Meta
                                avatar={<Avatar src={item.logo} />}
                                title={
                                  <a href={item.link} target="_blank">
                                    {item.institution}
                                  </a>
                                }
                                description={
                                  <div>
                                    <p>
                                      <span style={{ fontWeight: "700" }}>
                                        {item.position}
                                      </span>{" "}
                                      - {item.time}
                                    </p>
                                    <p>- {item.description.institution}</p>
                                    <ul>
                                      {item.description.competitions.map(
                                        (hab) => (
                                          <li
                                            style={{
                                              width: "auto",
                                              paddingLeft: "30px",
                                              paddingRight: "30px",
                                            }}
                                          >
                                            {hab}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                }
                              />
                            </List.Item>
                          )}
                        />
                      ),
                    },
                  ]}
                />
              </Col>
              <Col span={23} style={{ marginLeft: "45px" }}>
                <h1>Cases:</h1>
                <Row style={{ width: "100%" }}>
                  <Col span={8}>
                    <Card
                      style={{ width: "100%" }}
                      cover={
                        <Image.PreviewGroup
                          items={[DashLogin, DashBalance, DashBalanceDash]}
                        >
                          <Image
                            alt="example"
                            src={DashLogin}
                            style={{ width: "100%" }}
                          />
                        </Image.PreviewGroup>
                      }
                    >
                      <Meta description="Dashboard" />
                    </Card>
                  </Col>
                </Row>

                <Row style={{ width: "100%", marginTop: "16px" }}>
                  <Col span={8}>
                    <Card
                      style={{ width: "100%" }}
                      cover={
                        <Image.PreviewGroup items={[ec1, ec2, ec3]}>
                          <Image
                            alt="example"
                            src={ec1}
                            style={{ width: "100%" }}
                          />
                        </Image.PreviewGroup>
                      }
                    >
                      <Meta
                        description={
                          <div>
                            <p style={{ marginBottom: 0, paddingBottom: 0 }}>
                              Ecomerce
                            </p>
                            <a
                              href="https://roadevil.netlify.app/"
                              target="_blank"
                            >
                              https://roadevil.netlify.app/
                            </a>
                          </div>
                        }
                      />
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </div>
        <div
          id="part-2"
          style={{
            height: "100vh",
            opacity: 1,
            backgroundImage:
              "radial-gradient(#404949 1.4500000000000002px, #242424 1.4500000000000002px)",
            backgroundSize: "29px 29px",
          }}
        />
        <div
          id="part-3"
          style={{
            height: "100vh",
            opacity: 1,
            backgroundImage:
              "radial-gradient(#404949 1.4500000000000002px, #242424 1.4500000000000002px)",
            backgroundSize: "29px 29px",
          }}
        />
      </Col>

      <ul style={{ position: "fixed", right: 50, top: 20, listStyle: "none" }}>
        <li style={{ marginBottom: "8px" }}>
          <motion.a
            whileHover={{ color: "#818181", textDecoration: "underline" }}
            style={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
              fontSize: 20,
            }}
            href="https://www.linkedin.com/in/leonardo-araujo-/"
            target="_blank"
          >
            <LinkedinFilled style={{ fontSize: "34px", marginRight: "8px" }} />
            Linkedin
          </motion.a>
        </li>
        <li>
          <motion.a
            whileHover={{ color: "#818181", textDecoration: "underline" }}
            style={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
              fontSize: 20,
            }}
            href="https://github.com/leoopardo"
            target="_blank"
          >
            <GithubFilled style={{ fontSize: "34px", marginRight: "8px" }} />
            Github
          </motion.a>
        </li>
      </ul>
    </Row>
  );
};
