import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { AIRPORTS, FLIGHT_PASSENGERS } from "../../../constants";
import { FILTER_AIRPORTS } from "../../../utils";

const ControlledCustomInput = React.forwardRef(
  (
    { type = "text", value, setValue, label, placeholder, removeError },
    ref
  ) => {
    return (
      <>
        {type == "text" && (
          <Autocomplete
            sx={{ width: "200px" }}
            disablePortal
            disableClearable
            openOnFocus
            filterOptions={FILTER_AIRPORTS}
            options={AIRPORTS}
            value={AIRPORTS[value]}
            ref={ref}
            onChange={(e, v) => {
              removeError();
              setValue(
                v
                  ? AIRPORTS.findIndex((item) => item.iata_code == v.iata_code)
                  : ""
              );
            }}
						getOptionLabel={(option) =>
							option.iata_code + " - " + option.city
						}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                type={type}
                variant="standard"
                placeholder={placeholder}
                InputLabelProps={{ shrink: true }}
              />
            )}
            renderOption={(props, option) => {
              const { iata_code, name, city, country } = option;
              return (
                <Stack
                  {...props}
                  sx={{
                    "&:hover": {
                      borderLeft: "2px soild #065af3 !important",
                    },
                  }}
                >
                  <div className="corner-align full-width">
                    <div>
                      <Typography sx={{ mx: 0 }}>
                        {city}, {country}
                      </Typography>
                      <Typography fontSize={"12px"} color="rgba(0,0,0,0.6)">
                        {name}
                      </Typography>
                    </div>
                    <Typography fontSize={"12px"} color="rgba(0,0,0,0.6)">
                      {iata_code}
                    </Typography>
                  </div>
                </Stack>
              );
            }}
          />
        )}
        {type == "date" && (
          <TextField
            sx={{ width: 200 }}
            label={label}
            variant="standard"
            inputRef={ref}
            value={value}
            onChange={(e) => {
              removeError();
              setValue(e.target.value);
            }}
            type={type}
            placeholder={placeholder}
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
        {type == "number" && (
          <Autocomplete
            sx={{
              width: "200px",
            }}
            disablePortal
            disableClearable
            openOnFocus
            onChange={(e, v) => {
              removeError();
              setValue(v - 1);
            }}
            value={FLIGHT_PASSENGERS[value]}
            ref={ref}
            options={FLIGHT_PASSENGERS}
            getOptionLabel={(option) =>
              option + " Passenger" + (option == 1 ? "" : "s")
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                variant="standard"
                placeholder={placeholder}
                InputLabelProps={{ shrink: true }}
              />
            )}
            renderOption={(props, option) => {
              return (
                <Typography {...props}>
                  {option} Passenger{option == 1 ? "" : "s"}
                </Typography>
              );
            }}
          />
        )}
      </>
    );
  }
);

export default ControlledCustomInput;
