import { Grid } from "@mui/material"
import Layout from "../../../components/Layout"
import Navbar from "../../../components/Navbar"
import SoftBox from "../../../components/SoftBox"
import CommunityAbout from "./about"
import CommunityDetails from "./details"

// data
import { testTribeData } from './testData'

function CommunityMoreInformation() {
  return (
    <Layout>
      <Navbar />

      <SoftBox mt={4}>
        <SoftBox my={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <CommunityAbout 
                community={testTribeData}
              />
            </Grid>

            <Grid item xs={12} md={9}>
              <CommunityDetails 
                community={testTribeData}
              />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </Layout>
  )
}

export default CommunityMoreInformation
