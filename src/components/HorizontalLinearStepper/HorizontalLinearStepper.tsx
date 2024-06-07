import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Autocomplete, Divider, TextField } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import NameTextField from "../common/NameTextField/NameTextField";

const steps = ["Datele de bază", "Datele asiguratului", "Finalizarea comenzii"];
const vehicleBrands = [
  { label: "Audi" },
  { label: "BMW" },
  { label: "Mercedes" },
];
const productionYears = [
  { label: "2000" },
  { label: "2010" },
  { label: "2020" },
];
const currency = [{ label: "€" }, { label: "$" }, { label: "MDL" }];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          <Divider />
          <Box p={"10px"}>
            <Typography variant="h5">Datele de bază</Typography>
            <Typography variant="body1">Tipul vehiculului: *</Typography>

            <Box display={"flex"}>
              <Button variant="outlined">
                <DirectionsCarIcon />
                Autoturism
              </Button>
              <Button variant="outlined">
                <LocalShippingIcon />
                Camion
              </Button>
              <Button variant="outlined">
                <DirectionsBusIcon />
                Autobuz de pasageri
              </Button>
            </Box>
            <Box display={"flex"}>
              <Box>
                <Typography variant="body1">Marca vehiculului: *</Typography>
                <Autocomplete
                  disablePortal
                  id="vehicle-brand"
                  options={vehicleBrands}
                  size="small"
                  sx={{ width: "250px" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Alege marca" />
                  )}
                />
              </Box>
              <Box>
                <Typography variant="body1">Modelul vehiculului: *</Typography>
                <NameTextField fullWidth={false} label="Scrie modelul" />
              </Box>
            </Box>
            <Box display={"flex"}>
              <Box>
                <Typography variant="body1">
                  Anul de fabricație a vehiculului: *
                </Typography>
                <Autocomplete
                  disablePortal
                  id="vehicle-brand"
                  options={productionYears}
                  size="small"
                  sx={{ width: "250px" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Anul" />
                  )}
                />
              </Box>
              <Box>
                <Typography variant="body1">
                  Valoarea de piață a vehiculului *
                </Typography>
                <Box display={"flex"}>
                  <NameTextField fullWidth={false} label="" />
                  <Autocomplete
                    disablePortal
                    id="vehicle-brand"
                    options={currency}
                    size="small"
                    sx={{ width: "100px" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Valuta" />
                    )}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              variant="outlined"
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button variant="outlined" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
