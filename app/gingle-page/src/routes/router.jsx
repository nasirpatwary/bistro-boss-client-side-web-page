import { Route, Routes } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";

const router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
};

export default router;
