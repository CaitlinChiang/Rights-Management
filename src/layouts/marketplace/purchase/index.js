import { Card, CardMedia } from "@mui/material"
import Layout from "../../../components/Layout"
import Navbar from "../../../components/Navbar"
import SoftBox from "../../../components/SoftBox"
import SoftTypography from "../../../components/SoftTypography"
import SoftButton from "../../../components/SoftButton"

// data
import { testNFTCard } from './testData'

function PurchaseNFT() {
  const { imageUrl, name, price } = testNFTCard

  return (
    <Layout>
      <Navbar />

      <SoftBox mt={4}>
        <SoftBox my={3}>
          <Card>
            <SoftBox display="flex" justifyContent="center" alignItems="center" pt={3} px={2}>
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
                  variant="h3"
                  fontWeight="bold"
                >
                  {name}
                </SoftTypography>

                <SoftTypography
                  variant="h4"
                  color="text"
                  fontWeight="bold"
                  sx={{ mt: 2 }}
                >
                  {price}
                </SoftTypography>

                <SoftButton
                  sx={{ mt: 3 }}
                  component="a"
                  target="_blank"
                  rel="noreferrer"
                  variant="outlined"
                  size="small"
                  color={'info'}
                  fullWidth
                >
                  {'Purchase'}
                </SoftButton>
              </SoftBox>
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
    </Layout>
  )
}

export default PurchaseNFT
