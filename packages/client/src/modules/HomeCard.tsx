import { SvgIconComponent } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

export interface HomeCardProps {
  body: string;
  button_text: string;
  endpoint: string;
  icon: SvgIconComponent;
  orange: boolean;
}

export const HomeCard: FC<HomeCardProps> = ({
  body,
  button_text,
  endpoint,
  icon: Icon,
  orange,
}) => {
  const nav = useNavigate();

  const navigate = (endpoint: string) => () => {
    console.log("nav");
    nav(`${endpoint}`);
  };

  return (
    <Box sx={{ backgroundColor: "rgba(255,255,255,0.8)", padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1" textAlign={"left"} width={"75%"}>
          {body}
        </Typography>
        <Icon
          sx={{
            width: "20%",
            fontSize: "50px",
            color: orange ? "#EA7200" : "rgb(63 62 136)",
          }}
        />
      </Box>
      <Box height={"20px"} />
      <Button
        sx={{
          backgroundColor: orange ? "#EA7200" : "rgb(63 62 136)",
          borderRadius: 0.5,
        }}
        variant="contained"
        fullWidth
        onClick={navigate(endpoint)}
      >
        {button_text}
      </Button>
    </Box>
  );
};
