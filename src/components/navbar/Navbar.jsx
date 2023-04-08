import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Sandamal",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text"> Fiverr</span>
          </Link>
          <span className="dot"> .</span>
        </div>
        <div className="links">
          <span> Fiverr Business</span>
          <span> Explore</span>
          <span> English</span>
          <span> Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller </span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3-3zj8G9gN1nMK6CygVjfsQN3auL1oeaE2g&usqp=CAU"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options ">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphic & Design
            </Link>

            <Link className="link" to="/">
              Video & Animation
            </Link>

            <Link className="link" to="/">
              Writing & Translations
            </Link>

            <Link className="link" to="/">
              AI Services
            </Link>

            <Link className="link" to="/">
              Digital Marketing
            </Link>

            <Link className="link" to="/">
              Music & Audio
            </Link>

            <Link className="link" to="/">
              Programming & Tech
            </Link>

            <Link className="link" to="/">
              Business
            </Link>

            <Link className="link" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
