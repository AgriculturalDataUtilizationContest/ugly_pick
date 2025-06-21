import React from "react";
import { Horizontal, Vertical } from "../../../style/CommunalStyle";
import { Box, Typography } from "@mui/material";
import { predictInfo } from "../../../utils/common";
import PriceChart from "./PriceChart";
import Itemlist from "./Itemlist";

export default function PricePredict() {
  return (
    <Vertical>
      <Horizontal
        sx={{
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          mb: "20px",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Typography variant="title" sx={{ mr: "30px" }}>
            {predictInfo.title}
          </Typography>
          <Typography variant="caption">{predictInfo.subtitle}</Typography>
        </Box>
        <Typography variant="sub" sx={{ mb: "5px" }}>
          어떻게 예측했는지 궁금해요
        </Typography>
      </Horizontal>
      <PriceChart />
      <Itemlist />
    </Vertical>
  );
}
