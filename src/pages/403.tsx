// ** React Imports
import { ReactNode } from "react";

// ** Next Import
import Link from "next/link";

// ** MUI Components

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box, { BoxProps } from "@mui/material/Box";

// ** Layout Import
import BlankLayout from "../configs/layouts/BlankLayout";

// ** Demo Imports
import FooterIllustrations from "../configs/layouts/footer/FooterIllustrations";
import { useAuth } from "src/configs/g_hooks/useAuth";
import { Button } from "@mui/material";

// ** Styled Components
const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "90vw",
  },
}));

const Img = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    height: 450,
    marginTop: theme.spacing(10),
  },
  [theme.breakpoints.down("md")]: {
    height: 400,
  },
  [theme.breakpoints.up("lg")]: {
    marginTop: theme.spacing(20),
  },
}));

const Error403 = () => {
  const auth = useAuth();

  const logoutdata = () => {
    auth.logout();
  };

  return (
    <Box className="content-center">
      <Box
        sx={{
          p: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <BoxWrapper>
          <Typography variant="h4" sx={{ mb: 1.5 }}>
            Your session is expired
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            You do not have permission to view this page using the credentials
            that you have provided while login.
          </Typography>
          <Typography sx={{ mb: 6, color: "text.secondary" }}>
            Please contact your site administrator.
          </Typography>
          <Button onClick={logoutdata} variant="contained">
            Back to Login
          </Button>
        </BoxWrapper>
        <Img
          height="500"
          alt="error-illustration"
          src="/images/pages/401.png"
        />
      </Box>
      <FooterIllustrations />
    </Box>
  );
};

Error403.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default Error403;
