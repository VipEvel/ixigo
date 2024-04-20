import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Grid from "@mui/material/Grid";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import "../../styles/Footer.css";
export default function Footer() {
  return (
    <footer>
      <Box className="top-section">
        <Box className="top-section-body">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <div>
                <Typography fontSize={"18px"} fontWeight={700}>
                  Why MakeMyTrip?
                </Typography>
                <Typography fontSize={"12px"}>
                  Established in 2000, MakeMyTrip has since positioned itself as
                  one of the leading companies, providing great offers,
                  competitive airfares, exclusive discounts, and a seamless
                  online booking experience to many of its customers. The
                  experience of booking your flight tickets, hotel stay, and
                  holiday package through our desktop site or mobile app can be
                  done with complete ease and no hassles at all. We also deliver
                  amazing offers, such as Instant Discounts, Fare Calendar,
                  MyRewardsProgram, MyWallet, and many more while updating them
                  from time to time to better suit our customers’ evolving needs
                  and demands.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div>
                <Typography fontSize={"18px"} fontWeight={700}>
                  Booking Flights with MakeMyTrip
                </Typography>
                <Typography fontSize={"12px"}>
                  At MakeMyTrip, you can find the best of deals and cheap air
                  tickets to any place you want by booking your tickets on our
                  website or app. Being India’s leading website for hotel,
                  flight, and holiday bookings, MakeMyTrip helps you book flight
                  tickets that are affordable and customized to your
                  convenience. With customer satisfaction being our ultimate
                  goal, we also have a 24/7 dedicated helpline to cater to our
                  customer’s queries and concerns. Serving over 5 million happy
                  customers, we at MakeMyTrip are glad to fulfill the dreams of
                  folks who need a quick and easy means to find air tickets. You
                  can get a hold of the cheapest flight of your choice today
                  while also enjoying the other available options for your
                  travel needs with us.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div>
                <Typography fontSize={"18px"} fontWeight={700}>
                  Domestic Flights with MakeMyTrip
                </Typography>
                <Typography fontSize={"12px"}>
                  MakeMyTrip is India's leading player for flight bookings. With
                  the cheapest fare guarantee, experience great value at the
                  lowest price. Instant notifications ensure current flight
                  status, instant fare drops, amazing discounts, instant refunds
                  and rebook options, price comparisons and many more
                  interesting features.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className="bottom-section">
        <div className="flex-corner-align">
          <div className="vertical-align-center">
            <a
              class="flex-center-align"
              href="https://twitter.com/makemytrip/"
            >
              <FaTwitter size={30}/>
            </a>
            <a
              class="flex-center-align"
              href="https://www.facebook.com/makemytrip/"
            >
              <FaFacebookF size={25}/>
            </a>
          </div>
          <div className="text-right">
            <p>© 2024 MAKEMYTRIP PVT. LTD.</p>
            <p>
              Country
              <span>
                <a href="/"> India </a>
                <a href="/?ccde=US">USA</a> <a href="/?ccde=AE">UAE</a>
              </span>
            </p>
          </div>
        </div>
      </Box>
    </footer>
  );
}
