import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Card, CardMedia } from "@mui/material"
import SoftBox from "../../../components/SoftBox"
import SoftInput from "../../../components/SoftInput"
import SoftTypography from "../../../components/SoftTypography"
import ImageUploader from "../../../components/ImageUploader"

function CommunityUpdateAbout(community) {
  const { imageUrl, researcher } = community.community

  const [file, setFile] = useState(null)
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')

  useEffect(() => {
    setName(community.community.name)
    setLocation(community.community.location)
  }, [community])
  
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

        <ImageUploader file={file} setFile={setFile} />
      </SoftBox>

      <SoftBox pt={3} pb={2} px={2}>
        <SoftBox mb={2}>
          <SoftTypography
            variant="h6"
          >
            {'Name'}
          </SoftTypography>
          <SoftInput
            value={name}
            multiline
            onChange={(e) => setName(e.target.value)}
          />

          <SoftTypography
            variant="h6"
            color="text"
            fontWeight="bold"
            sx={{ mt: 5 }}
          >
            {'Location'}
          </SoftTypography>
          <SoftInput
            value={location}
            multiline
            onChange={(e) => setLocation(e.target.value)}
          />

          <SoftTypography
            variant="h6"
            color="text"
            fontWeight="bold"
            sx={{ mt: 5 }}
          >
            {'Assigned Researcher'}
          </SoftTypography>
          <SoftInput
            value={researcher}
            multiline
            disabled
          />
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

CommunityUpdateAbout.propTypes = { community: PropTypes.any }

export default CommunityUpdateAbout
