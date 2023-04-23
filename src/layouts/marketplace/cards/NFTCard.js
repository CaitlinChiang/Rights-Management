import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { Card, CardMedia } from "@mui/material"
import SoftBox from "../../../components/SoftBox"
import SoftTypography from "../../../components/SoftTypography"
import SoftButton from "../../../components/SoftButton"

function NFTCard({ imageUrl, name, price, route }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
        boxShadow: '0 4px 8px 0 rgba(150, 150, 150, 0.2), 0 6px 20px 0 rgba(173, 173, 173, 0.19)'
      }}
    >
      <SoftBox position="relative" width="100.25%" shadow="xl" borderRadius="xl">
        <CardMedia
          src={imageUrl}
          component="img"
          title={name}
          sx={{
            maxWidth: "100%",
            margin: 0,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center",

          }}
        />
      </SoftBox>

      <SoftBox px={0.5} p={2}>
        <SoftBox mb={1}>
          <SoftTypography
            component={Link}
            to={route}
            variant="h5"
            textTransform="capitalize"
          >
            {name}
          </SoftTypography>
        </SoftBox>

        <SoftBox mb={3} lineHeight={0}>
          <SoftTypography variant="button" fontWeight="regular" color="text">
            {price}
          </SoftTypography>
        </SoftBox>

        <SoftBox display="flex" justifyContent="space-between" alignItems="center">
          <SoftButton
            fullWidth
            component={Link}
            to={route}
            variant="outlined"
            size="small"
            color={'info'}
          >
            {'Know More'}
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

NFTCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
}

export default NFTCard
