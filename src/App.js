import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Common/Navbar.jsx";
import { ThemeProvider } from "@mui/material";

import { defaultTheme } from "./Contexts/Theme.jsx";
import AuthProvider from "./Contexts/AuthProvider.jsx";
import SearchProvider from "./Contexts/SearchProdiver.jsx";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TrainSearchProvider from "./Contexts/TrainSearchProvider.jsx";
import Footer from "./components/Common/Footer.jsx";
import BusSearchProvider from "./Contexts/BusSearchProvider.jsx";
import HotelSearchProvider from "./Contexts/HotelSearchProvider.jsx";
import PaymentContextProvider from "./Contexts/PaymentContextProvider.jsx";
import GlobalLoader from "./components/Common/GlobalLoader.jsx";
import { Suspense, lazy } from "react";

const Flights = lazy(() => import("./components/Screen/Flights/Flights.jsx"));
const FlightSearch = lazy(() =>
	import("./components/Screen/Flights/Search/FlightSearch.jsx")
);
const FlightBooking = lazy(() =>
	import("./components/Screen/Flights/Booking/FlightBooking.jsx")
);
const Trains = lazy(() => import("./components/Screen/Trains/Trains.jsx"));
const TrainsSearch = lazy(() =>
	import("./components/Screen/Trains/Search/TrainsSearch.jsx")
);
const TrainBooking = lazy(() =>
	import("./components/Screen/Trains/Booking/TrainBooking.jsx")
);
const Buses = lazy(() => import("./components/Screen/Buses/Buses.jsx"));

const BusSearch = lazy(() => import("./components/Screen/Buses/Search/BusSearch.jsx"));
const BusBooking = lazy(() => import("./components/Screen/Buses/Booking/BusBooking.jsx"));
const Hotels = lazy(() => import("./components/Screen/Hotels/Hotels.jsx"));
const HotelsSearch = lazy(() => import("./components/Screen/Hotels/Search/Search.jsx"));
const HotelDetail = lazy(() =>
	import("./components/Screen/Hotels/HotelDetail/HotelDetail.jsx")
);
const HotelBooking = lazy(() =>
	import("./components/Screen/Hotels/HotelBooking/HotelBooking.jsx")
);
const Payment = lazy(() => import("./components/Screen/Payment/Payment.jsx"));

function App() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<ThemeProvider theme={defaultTheme}>
				<BrowserRouter>
					<AuthProvider>
						<SearchProvider>
							<TrainSearchProvider>
								<BusSearchProvider>
									<HotelSearchProvider>
										<PaymentContextProvider>
											<Suspense
												fallback={<GlobalLoader />}
											>
												<Navbar />
												<Routes>
													<Route
														path="/"
														element={<Flights />}
													/>
													<Route
														path="/flights"
														element={<Flights />}
													/>
													<Route
														path="/flights/search"
														element={
															<FlightSearch />
														}
													/>
													<Route
														path="/flights/booking/:progress/:details"
														element={
															<FlightBooking />
														}
													/>
													<Route
														path="/trains"
														element={<Trains />}
													/>
													<Route
														path="/trains/search"
														element={
															<TrainsSearch />
														}
													/>
													<Route
														path="/trains/booking/:details"
														element={
															<TrainBooking />
														}
													/>
													<Route
														path="/buses"
														element={<Buses />}
													/>
													<Route
														path="/buses/search"
														element={<BusSearch />}
													/>
													<Route
														path="/buses/booking/:details"
														element={<BusBooking />}
													/>
													<Route
														path="/hotels"
														element={<Hotels />}
													/>
													<Route
														path="/hotels/search"
														element={
															<HotelsSearch />
														}
													/>
													<Route
														path="/hotels/:id"
														element={
															<HotelDetail />
														}
													/>
													<Route
														path="/hotels/booking/:details"
														element={
															<HotelBooking />
														}
													/>
													<Route
														path="/payment"
														element={<Payment />}
													/>
												</Routes>
												<Footer />
											</Suspense>
										</PaymentContextProvider>
									</HotelSearchProvider>
								</BusSearchProvider>
							</TrainSearchProvider>
						</SearchProvider>
					</AuthProvider>
				</BrowserRouter>
			</ThemeProvider>
		</LocalizationProvider>
	);
}

export default App;
