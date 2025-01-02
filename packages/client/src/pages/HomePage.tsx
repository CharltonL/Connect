import Box from "@mui/material/Box";
import { FC } from "react";
import backgroundPic from "./backgroundPic.jpeg";
import useTheme from "@mui/material/styles/useTheme";
import {
  EmojiObjects,
  CalendarMonth,
  QrCode2,
  Newspaper,
  HelpOutline,
  Map,
  Person,
} from "@mui/icons-material";
import { HomeCard } from "../modules/HomeCard";

export interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100%",
        backgroundImage: `url(${backgroundPic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // If you want a fixed background that doesn't scroll:
        backgroundAttachment: "fixed",
      }}
    >
      <Box sx={{ ...theme.mixins.toolbar }} />

      <HomeCard
        body="Nine things you may not know about Jewish Home Rochester"
        button_text="Learn More"
        endpoint="nine-things"
        icon={EmojiObjects}
        orange={false}
      />

      <Box height={"20px"} />

      <HomeCard
        body="Explore activities and events across our campus. Visitors are always welcome."
        button_text="calendar"
        endpoint="calendar"
        icon={CalendarMonth}
        orange={true}
      />

      <Box height={"20px"} />

      <HomeCard
        body="Get answers to common questions asked by residents and families."
        button_text="Frequestly Asked Questions"
        endpoint="faq"
        icon={HelpOutline}
        orange={false}
      />

      <Box height={"20px"} />

      <HomeCard
        body="Find out about new things happening across Jewish Home of Rochester."
        button_text="News"
        endpoint="news"
        icon={Newspaper}
        orange={true}
      />

      <Box height={"20px"} />

      <HomeCard
        body="See a QR code? Scan to learn more about special places here."
        button_text="SCAN A QR CODE"
        endpoint="qr"
        icon={QrCode2}
        orange={false}
      />

      <Box height={"20px"} />

      <HomeCard
        body="Access community sesources available in our region."
        button_text="RESOURCES"
        endpoint="resources"
        icon={Map}
        orange={true}
      />

      <Box height={"20px"} />

      <HomeCard
        body="With this account, you can request access to a resident profile."
        button_text="REGISTER"
        endpoint="register"
        icon={Person}
        orange={false}
      />

      <Box height={"20px"} />
    </Box>
  );
};
