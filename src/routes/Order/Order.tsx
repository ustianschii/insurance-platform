import { Layout } from "../../components/Layout/Layout";
import { Outlet } from "react-router-dom";

const Order = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Order;
