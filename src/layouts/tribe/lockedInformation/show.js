import { Card } from "@mui/material"
import Layout from "../../../components/Layout"
import Navbar from "../../../components/Navbar"
import SoftBox from "../../../components/SoftBox";
import SoftTypography from "../../../components/SoftTypography"

// data
import { testMoreData } from "./testData"

function ShowInformation() {  
  const { lockedInformation } = testMoreData
  const formattedText = lockedInformation?.replace(/\n/g, "\n\n")

  return (
    <Layout>
      <Navbar />

      <SoftBox mt={4}>
        <Card id="delete-account">
          <SoftBox pt={3} px={2} pb={2}>
            <SoftTypography
              variant="h5"
            >
              {'More Information'}
            </SoftTypography>
            <SoftTypography
              variant="h6"
              color="text"
              sx={{ mt: 2, whiteSpace: 'pre-wrap' }}
            >
              {formattedText}
            </SoftTypography>
          </SoftBox>
        </Card>
      </SoftBox>
    </Layout>
  )
}

export default ShowInformation
