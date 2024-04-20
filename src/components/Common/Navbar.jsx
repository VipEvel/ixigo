import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import logo from "../../assests/images/logo.webp";
import { NavLink } from "react-router-dom";
import userSVG from "../../assests/svgs/user.svg";
import DashboardMenu from "./DashboardMenu";
import { useAuthContext } from "../../Contexts/AuthProvider";
import LoginSignupForm from "./LoginSignupForm";
import { TABS } from "../../constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu, MenuItem } from "@mui/material";

export default function Navbar() {
  const { isLoggedIn, setShowLoginSignupForm } = useAuthContext();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event?.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar sx={{ backgroundColor: "#fff", py: 1.5, px: { md: 11, xs: 2 } }}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack
          direction="row"
          gap={6}
          alignItems={"center"}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <NavLink to="/">
            <img
              src={
                "//imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png"
              }
              alt="mmt logo"
              width={113}
              height={36}
            />
          </NavLink>
          <Stack
            direction="row"
            gap={3}
            alignItems="center"
            className="nav-tabs"
          >
            {TABS.map(({ tabLogo, tabTitle }) => {
              return (
                <NavLink
                  style={{ textDecoration: "none" }}
                  key={tabTitle}
                  activeClassName="active"
                  to={`/${tabTitle.toLowerCase()}`}
                >
                  <Stack direction="row" gap={0.5} alignItems="center">
                    <span className={`iconPack ${tabLogo}`}></span>
                    <Typography>{tabTitle}</Typography>
                  </Stack>
                </NavLink>
              );
            })}
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          gap={4}
          alignItems={"center"}
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        >
          <GiHamburgerMenu
            color="#005fce"
            size={24}
            onClick={handleOpenNavMenu}
            style={{ cursor: "pointer" }}
          />
          <NavLink to="/">
            <img
              src={
                "//imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png"
              }
              alt="mmt logo"
              width={113}
              height={36}
            />
          </NavLink>
          {/* SideBar for small screens */}
          <Menu
            anchorEl={anchorElNav}
			PopoverClasses={{'paper':'wid-140'}}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {TABS.map(({ tabLogo, tabTitle }) => (
              <MenuItem
                key={tabTitle}
                onClick={handleCloseNavMenu}
                sx={{ display: "flex", gap: 1 }}
              >
                <NavLink
                  style={{ textDecoration: "none" }}
                  key={tabTitle}
				  className={'flex-corner-align full-width'}
                  activeClassName="active"
                  to={`/${tabTitle.toLowerCase()}`}
                >
                  <span className={`iconPack ${tabLogo} vertical-align-center`}></span>
                  <Typography textAlign="left" classes={{root:'wid-60p'}}>{tabTitle}</Typography>
                </NavLink>
              </MenuItem>
            ))}
          </Menu>
        </Stack>
        {!isLoggedIn && (
          <>
            <Button
              disableRipple
              onClick={() => setShowLoginSignupForm(true)}
              sx={{
                mr: 2.5,
                textTransform: "none",
                transition: "none",
                color: "secondary.light",
                fontSize: "16px",
                color: "secondary.light",
                fontWeight: 400,
                "&:hover": {
                  background: "none",
                  color: "secondary.hover",
                  filter:
                    "invert(40%) sepia(40%) saturate(4229%) hue-rotate(210deg) brightness(90%) contrast(100%)",
                },
              }}
            >
              <img src={userSVG} width={"30px"} height={"30px"} />

              <Typography sx={{ ml: 1 }} variant="string">
                LogIn/SignUp
              </Typography>
            </Button>
            <LoginSignupForm />
          </>
        )}
        {isLoggedIn && <DashboardMenu />}
      </Stack>
    </AppBar>
  );
}
