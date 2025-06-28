// SidebarPick.jsx
import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { Vertical, Horizontal } from "../../style/CommunalStyle";

const nextItemList = [1, 2, 3, 4, 5, 6];

export default function GleePick() {
  return (
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
              5,000원
            </Typography>
            <Horizontal alignItems="center" gap={0.5}>
              <Typography variant="caption" color="error">
                -4.66%
              </Typography>
              <PlaceholderBox width="12px" height="12px">
                ↓
              </PlaceholderBox>
            </Horizontal>
          </Vertical>
        </Horizontal>
        <PlaceholderBox height="60px" mt={1}>
          그래프 자리
        </PlaceholderBox>
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
          {nextItemList.map((_, idx) => (
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
                    당근
                  </Typography>
                  <Typography variant="caption" color="gray">
                    Carrot
                  </Typography>
                </Vertical>
              </Horizontal>
              <Typography variant="body2" fontWeight={700}>
                1,367 원
              </Typography>
            </Horizontal>
          ))}
        </Vertical>
      </Card>
    </Vertical>
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
