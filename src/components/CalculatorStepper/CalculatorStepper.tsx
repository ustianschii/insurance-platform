import * as React from "react";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Autocomplete, Divider, TextField } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import NameTextField from "../common/NameTextField/NameTextField";
import { steps, vehicleBrands, productionYears, currency } from "./consts";
import { CustomStepper } from "./calculatorStepperStyles";

export default function CalculatorStepper() {
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
    <Box width={"100%"}>
      <CustomStepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </CustomStepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography margin={"2 0 1 0"}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box display={"flex"} flexDirection={"row"} pt={"2"}>
            <Box flex={"1 1 auto"} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          <Divider />
          <Box p={"10px"}>
            <Typography variant="h5" mt={"20px"} mb={"10px"}>
              Datele de bază
            </Typography>
            <Typography variant="body1" mb={"10px"}>
              Tipul vehiculului: *
            </Typography>

            <Box display={"flex"} justifyContent={"space-between"} mb={"20px"}>
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
            <Box display={"flex"} justifyContent={"space-between"} mb={"20px"}>
              <Box>
                <Typography variant="body1" mb={"10px"}>
                  Marca vehiculului: *
                </Typography>
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
                <Typography variant="body1" mb={"10px"}>
                  Modelul vehiculului: *
                </Typography>
                <NameTextField
                  fullWidth={false}
                  label="Scrie modelul"
                  width="250"
                />
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
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
                  Valoarea de piață a vehiculului: *
                </Typography>
                <Box display={"flex"} mb={"10px"}>
                  <NameTextField fullWidth={false} label="" width="125" />
                  <Autocomplete
                    disablePortal
                    id="vehicle-brand"
                    options={currency}
                    size="small"
                    sx={{ width: "120px", ml: "5px" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Valuta" />
                    )}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"row"} pt={"2"}>
            <Button
              variant="outlined"
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Pasul anterior
            </Button>
            <Box flex={"1 1 auto"} />
            <Button variant="outlined" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Trimite" : "Pasul urmator"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
