export function formatToKRW(number) {
  return number?.toLocaleString("ko-KR");
}

export function isNumeric(value) {
  return value !== "" && !isNaN(value);
}

export function KoreanDate() {
  const date = new Date();

  // 한국 시간으로 변환
  const koreaDate = new Date(
    date.toLocaleString("en-US", { timeZone: "Asia/Seoul" })
  );

  const year = koreaDate.getFullYear();
  const month = koreaDate.getMonth() + 1;
  const day = koreaDate.getDate();
  const weekdayNames = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const weekday = weekdayNames[koreaDate.getDay()];

  const formattedDate = `${year}년 ${month}월 ${day}일 ${weekday}`;

  return formattedDate;
}
