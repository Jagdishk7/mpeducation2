import * as React from "react";
// import './SchoolCard.css';
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './Cards.css'

export default function BlogCard({ title,src }) {
  return (
    <>
      <Card sx={{ display: "flex", width: "100%" }} className="tab-card">
        <Box sx={{ width:'30%', display: "flex", alignItems: "center", p: 2}} className='tabcard-image'>
          <CardMedia
            component="img"
            sx={{ width: "100%", borderRadius:'1rem' , boxShadow:'0 0 .5rem #35353574'}}
            image={src}
            alt="Live from space album cover"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "70%" }} className='tabcard-desc-box'>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              className="tabcard-desc"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              placeat atque aut deserunt quia vero? Eligendi veniam dolore
              cumque dolores ex optio sed ad minus perspiciatis consequuntur
              reprehenderit, non molestiae, similique possimus! Adipisci
              repudiandae explicabo facere tenetur labore id necessitatibus
              quibusdam velit molestiae magni sapiente hic, molestias quod? Sint
              delectus natus voluptas voluptatum porro eos!
            </Typography>


          </CardContent>
        </Box>
      </Card>
    </>
  );
}
