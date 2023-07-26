/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useMediaQuery } from "react-responsive";
import "./App.css";
import { Desktop } from "./components/desktop";
import { Mobile } from "./components/mobile";

export const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: "800px" });

  return <>{!isMobile ? <Desktop /> : <Mobile />}</>;
};
