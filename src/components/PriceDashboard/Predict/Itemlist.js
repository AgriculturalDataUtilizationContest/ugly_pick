import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Paper,
} from "@mui/material";

const rawData = {
  retailPrice: ["06/12: 4000", "06/13: 3000", "06/14: 3000", "06/15: 3000"],
  uglyPrice: ["06/12: 4000", "06/13: 3000", "06/14: 3000", "06/15: 3000"],
};

const formatData = (dataArray) => {
  return dataArray.reduce((acc, item) => {
    const [date, value] = item.split(":").map((s) => s.trim());
    acc[date] = Number(value);
    return acc;
  }, {});
};

const retailData = formatData(rawData.retailPrice);
const uglyData = formatData(rawData.uglyPrice);
const dates = Object.keys(retailData);
const today = "06/13"; // 현재 시점 강조용

export default function Itemlist() {
  return (
    <TableContainer component={Paper} sx={{ border: "1px solid #2196f3" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>ITEM LIST</TableCell>
            {dates.map((date) => (
              <TableCell key={date} align="center" sx={{ fontWeight: "bold" }}>
                {date}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* 못난이 상품 */}
          <TableRow sx={{ backgroundColor: "rgba(44, 151, 119, 0.04)" }}>
            <TableCell>
              <Box display="flex" alignItems="center" gap={1}>
                <span style={{ fontSize: "20px" }}>🥕</span>
                <Typography>못난이 상품 소매 가격</Typography>
              </Box>
            </TableCell>
            {dates.map((date) => (
              <TableCell
                key={date}
                align="center"
                sx={{
                  fontWeight: date === today ? "bold" : "normal",
                  backgroundColor:
                    date === today ? "rgba(44, 151, 119, 0.2)" : "transparent",
                }}
              >
                {uglyData[date].toLocaleString()}
              </TableCell>
            ))}
          </TableRow>

          {/* 시장 상품 */}
          <TableRow>
            <TableCell>
              <Box display="flex" alignItems="center" gap={1}>
                <span style={{ fontSize: "20px", filter: "grayscale(100%)" }}>
                  🥕
                </span>
                <Typography>시장 상품 소매 가격</Typography>
              </Box>
            </TableCell>
            {dates.map((date) => (
              <TableCell key={date} align="center">
                {retailData[date].toLocaleString()}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
