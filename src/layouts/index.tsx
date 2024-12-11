import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="px-4 py-8 bg-white flex flex-col justify-between mb-16">
      <div>
        <h4 className="text-primary font-bold tracking-tighter leading-5">
          Lets bring out the true YOU <br />
          Answer these questions to discover yourself
        </h4>
        <div></div>
      </div>
      <Outlet />
      <h5 className="text-primary font-bold tracking-tighter">
        Feeling confident about myself. Skip quiz and signup
      </h5>
    </div>
  );
};

export default Layout;
