// SidebarPick.jsx
import React, { useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { Vertical, Horizontal } from "../../style/CommunalStyle";
import { fetchCropRetailAndSimilar } from "../../api/api";
import { formatToKRW, getCropEngName } from "../../utils/utils";
import PriceCardChart from "./PriceCardChart";

export default function GleePick() {
  const [otherItem, setOtherItem] = useState(null);
  const [retailPrice, setRetailPrice] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchCropRetailAndSimilar(getCropEngName("양파"));
      console.log(response);
      setOtherItem(response.data.otherCrops);
      setRetailPrice(response.data.retailPrice);
    };
    fetchData();
  }, []);
  return (
    otherItem &&
    retailPrice && (
      <Vertical sx={{ gap: "24px" }}>
        <Card>
          <Typography
            variant="subtitle"
            fontWeight={700}
            textAlign="center"
            mb={2}
          >
            GLEE PICK
          </Typography>
          <PlaceholderBox height="120px">이미지 자리</PlaceholderBox>
          <Vertical sx={{ textAlign: "center", mt: 2, mb: 3 }}>
            <Typography variant="h6" fontWeight={700}>
              당근
            </Typography>
            <Typography variant="caption" color="gray">
              Carrot
            </Typography>
          </Vertical>
          <Horizontal sx={{ justifyContent: "space-between", px: 2 }}>
            <Vertical>
              <Typography variant="body2" fontWeight={600}>
                소매가격
              </Typography>
              <Typography variant="caption" color="gray">
                Market Price
              </Typography>
            </Vertical>
            <Vertical alignItems="flex-end">
              <Typography variant="body2" fontWeight={700}>
                {formatToKRW(retailPrice[retailPrice.length - 1])}원
              </Typography>
            </Vertical>
          </Horizontal>
          <Box sx={{ height: "60px" }}>
            <PriceCardChart data={retailPrice} />
          </Box>
        </Card>

        <Card>
          <Typography
            variant="subtitle"
            fontWeight={700}
            textAlign="center"
            mb={2}
          >
            NEXT ITEM
          </Typography>
          <Vertical sx={{ gap: 2 }}>
            {otherItem.map((itm, idx) => (
              <Horizontal
                key={idx}
                sx={{ justifyContent: "space-between", px: 2 }}
              >
                <Horizontal gap={1}>
                  <PlaceholderBox width="28px" height="28px">
                    🥕
                  </PlaceholderBox>
                  <Vertical>
                    <Typography variant="body2" fontWeight={600}>
                      {itm.cropKorName}
                    </Typography>
                    <Typography variant="caption" color="gray">
                      {itm.cropEngName}
                    </Typography>
                  </Vertical>
                </Horizontal>
                <Typography variant="body2" fontWeight={700}>
                  {itm.cropCost} 원
                </Typography>
              </Horizontal>
            ))}
          </Vertical>
        </Card>
      </Vertical>
    )
  );
}

const Card = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
}));

const PlaceholderBox = styled(Box)(({ height, width, mt }) => ({
  height: height || "auto",
  width: width || "100%",
  backgroundColor: "#f3f3f3",
  border: "1px dashed #ccc",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#999",
  marginTop: mt || 0,
}));
