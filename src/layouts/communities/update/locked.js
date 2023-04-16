import { useState, useEffect } from "react"
import { Card } from "@mui/material"
import SoftBox from "../../../components/SoftBox"
import SoftTypography from "../../../components/SoftTypography"
import SoftInput from "../../../components/SoftInput"

function CommunityUpdateLockedInformation(community) {  
  const { lockedInformation } = community.community
  const formattedText = lockedInformation?.replace(/\n/g, "\n\n")

  const [moreInfo, setMoreInfo] = useState('')

  useEffect(() => {
    setMoreInfo(formattedText)
  }, [lockedInformation])

  return (
    <SoftBox mt={4}>
      <Card id="delete-account">
        <SoftBox pt={3} px={2} pb={2}>
          <SoftTypography
            variant="h5"
          >
            {'More Information'}
          </SoftTypography>
          <SoftInput
            value={moreInfo}
            multiline
            onChange={(e) => setMoreInfo(e.target.value)}
            sx={{ mt: 2, whiteSpace: 'pre-wrap' }}
          >
            {formattedText}
          </SoftInput>
        </SoftBox>
      </Card>
    </SoftBox>
  );
}

export default CommunityUpdateLockedInformation
