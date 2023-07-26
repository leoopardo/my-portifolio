import { ConfigProvider } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#df1759",
          colorTextHeading: "#fff",
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
