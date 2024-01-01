import { Box, Card, CardMedia } from "@mui/material";
import React, { useState } from "react";
import DetailsComponent from "./DetailsComponent";

const MovieCard = ({ props }) => {
  const { data, movieKey, genreKey } = props;

  const [hoveredIndices, setHoveredIndices] = useState(
    Array(props.length).fill(null)
  );

  const handleMouseEnter = (genreIndex, movieIndex) => {
    const newHoveredIndices = [...hoveredIndices];
    newHoveredIndices[genreIndex] = movieIndex;
    setHoveredIndices(newHoveredIndices);
  };

  const handleMouseLeave = (genreIndex) => {
    const newHoveredIndices = [...hoveredIndices];
    newHoveredIndices[genreIndex] = null;
    setHoveredIndices(newHoveredIndices);
  };
  return (
    <Box key={movieKey}>
      <Card
        sx={{
          position: "relative",

          width: "17vw",
          height: 370,
          m: 2,
          transition: "transform 0.7s ease-in-out",
          zIndex:999,
          transform: `scale(${
            hoveredIndices[genreKey] === movieKey ? 1.05 : 1
          })`,
        }}
        onMouseEnter={() => handleMouseEnter(genreKey, movieKey)}
        onMouseLeave={() => handleMouseLeave(genreKey)}
      >
        <CardMedia
          component="img"
          height={hoveredIndices[genreKey] === movieKey ? "70%" : "100%"}
          image={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
          style={{
            background: "linear-gradient(#0003, #000)",
            transition: "height 0.7s ease",  // Add this line for the transition effect

          }}
        />
        {hoveredIndices[genreKey] === movieKey && (
          <DetailsComponent props={data}/>
        )}
      </Card>
    </Box>
  );
};

export default MovieCard;
