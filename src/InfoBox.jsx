import React from "react";
import Card from "@mui/material/Card";
//import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./InfoBox.css" ;
const InfoBox = ({info}) => {
  const INIT_URL="https://media.istockphoto.com/id/2171118613/photo/trees-on-landscape-against-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=LqLMzjwnqweW7Rj-8IKk2fF2rXQiZ5v92yqWwpdTAYs="
  let Info =info;
   return (
    <div className="cardContainer">
     <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={INIT_URL}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {Info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"} >
            <div>temprature={Info.temp}&deg;C</div>
            <div>Humidity = {Info.humidity}</div>
            <div>weather = {Info.weather}</div>
            <div>tempMin = {Info.tempMin}&deg;c</div>
            <div>tempMax = {Info.tempMax}&deg;c</div>
            <div>The weather feels like {Info.feelsLike}&deg;c</div>
          </Typography>
        </CardContent>

      </Card>
    </div>
  );
};

export default InfoBox;
