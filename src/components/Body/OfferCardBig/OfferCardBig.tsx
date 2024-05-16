import * as React from "react";
import { FC } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";
import firstBigCardLogo from "../../../assets/pic-block-1-300x213.jpeg";

interface IOfferCardBig {}

export const OfferCardBig: FC<IOfferCardBig> = () => {
  return (
    <Card
      sx={{
        display: "flex",
        position: "relative",
        height: "230px",
        width: "560px",
        marginTop: "-120px",
        borderRadius: "15px",
        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <CardContent sx={{ display: "block", width: "100%", height: "50%" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          padding={"10px 0 0 10px"}
        >
          RCA
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          padding={"0px 0 0 10px"}
        >
          Asigurarea obligatorie a vehiculelor în RM
        </Typography>
      </CardContent>

      <CardMedia
        sx={{
          position: "absolute",
          bottom: "0",
          right: "0",
          height: "170px",
          width: "270px",
          backgroundImage: `url(${firstBigCardLogo})`,
          margin: "0 -10px 0 0",
        }}
      />
      <CardActions>
        <Button
          variant="contained"
          size="small"
          sx={{
            position: "absolute",
            bottom: "0",
            left: "0",
            margin: "0 0px 20px 20px",
            backgroundColor: "#01ad4033",
            color: "#01ad40",
          }}
        >
          Calculează preț
        </Button>
      </CardActions>
    </Card>
  );
};
