import { Box, Rating, Typography } from "@mui/material";
import React from "react";

const DetailsComponent = ({ props }) => {
  //   console.log(props);

  return (
    <Box
      sx={{
        width: "100%",
        height: "30%",
        display: "flex",
        justifyContent: "center",
        mt: 2,
      }}
    >
      <Box sx={{ width: "70%", display: "flex", justifyContent: "center" }}>
        <Box>
          <Rating
            name="read-only"
            sx={{ fontSize: 28,textAlign:'center' }}
            value={parseInt(props.vote_average / 2)}
            readOnly
          />
          <Typography sx={{ fontSize: 15,textAlign:'center' }}>{props.original_title}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailsComponent;
