import { Typography } from "@mui/material";
import {
  ShortDescription,
  TextContainer,
  WalppaperContainer,
} from "./mainWallpaperStyles";

const MainWallpaper = () => {
  return (
    <WalppaperContainer>
      <TextContainer>
        <Typography variant="h3" marginTop={"75px"}>
          Asigurări online într-o clipă
        </Typography>
        <ShortDescription>
          Calculează și procură polițe de asigurare pentru automobilul și
          familia ta, într-un mod securizat, interactiv și rapid. Livrăm polița
          în aceeași zi în raza orașului Chișinău!
        </ShortDescription>
      </TextContainer>
    </WalppaperContainer>
  );
};

export default MainWallpaper;
