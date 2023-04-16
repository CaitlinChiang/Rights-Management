import PropTypes from "prop-types"
import { Card, CardMedia } from "@mui/material"
import SoftBox from "../../../components/SoftBox"
import SoftTypography from "../../../components/SoftTypography"
import SoftButton from "../../../components/SoftButton"
import ImageUploader from "../../../components/ImageUploader"

function CommunityAbout(community) {
  const { imageUrl, name, location, researcher, route } = community.community

  return (
    <Card>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <CardMedia
          src={imageUrl}
          component="img"
          title={name}
          sx={{
            maxWidth: "100%",
            margin: 0,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
      </SoftBox>

      <SoftBox pt={3} pb={2} px={2}>
        <SoftBox mb={2}>
          <SoftTypography
            variant="h5"
            fontWeight="bold"
          >
            {name}
          </SoftTypography>

          <SoftTypography
            variant="h6"
            color="text"
            fontWeight="bold"
            sx={{ mt: 5 }}
          >
            {'Located At: ' + location}
          </SoftTypography>

          <SoftTypography
            variant="h6"
            color="text"
            fontWeight="bold"
            sx={{ mt: 2 }}
          >
            {'Assigned Researcher: ' + researcher}
          </SoftTypography>

          <SoftButton
            sx={{ mt: 3 }}
            component="a"
            href={route}
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            size="small"
            color={'info'}
            fullWidth
          >
            {'Know More'}
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

CommunityAbout.propTypes = { community: PropTypes.any }

export default CommunityAbout;
