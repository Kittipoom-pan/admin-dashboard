import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/images/icons/logo.svg" alt="" />
        <span>Admin Dashboard</span>
      </div>
      <div className="icons">
        <img src="/images/icons/search.svg" alt="" className="icon" />
        <img src="/images/icons/app.svg" alt="" className="icon" />
        <img src="/images/icons/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/images/icons/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span>Jane</span>
        </div>
        <img src="/images/icons/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
