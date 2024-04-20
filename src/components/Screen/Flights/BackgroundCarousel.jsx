import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import flightLogo from "../../../assests/images/flight-booking.png";
import { useLocation } from "react-router-dom";

function BackgroundCarousel() {
  const location = useLocation();
  return (
    <>
      <Box component={"div"} position={"absolute"} sx={{ width: "100%" }}>
        <Box className="background-carousel-top">
          <img
            loading="lazy"
            src={"//imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg1.jpg"}
          />
        </Box>
      </Box>
      <Box>
        <div style={{ position: "relative" }}>
          <Stack direction={"row"} gap={1} className="overlay">
            <img src={flightLogo} />
            <Typography
              variant="h5"
              color={"#fff"}
              fontWeight={600}
              sx={{ display: { xs: "none", md: "initial" } }}
            >
              {location.pathname !== "/" ? (
                "Flight Booking"
              ) : (
                <>
                  search
                  <span className="whitedot"></span>
                  book
                  <span className="whitedot"></span>
                  go
                </>
              )}
            </Typography>
          </Stack>
        </div>
      </Box>
    </>
  );
}
export default React.memo(BackgroundCarousel);
