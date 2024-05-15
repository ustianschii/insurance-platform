import * as React from "react";
import { FC } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { OfferCardWrapper } from "./offerCardStyles";

interface IOfferCard {}

export const OfferCard: FC<IOfferCard> = () => {
  return (
    <OfferCardWrapper sx={{ marginTop: "-100px" }}>
      <CardMedia sx={{ height: 140 }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          RCA
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Asigurarea obligatorie a vehiculelor în RM
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">
          Calculează preț
        </Button>
      </CardActions>
    </OfferCardWrapper>
  );
};
