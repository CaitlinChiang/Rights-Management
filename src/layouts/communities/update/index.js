import { Grid } from "@mui/material"
import SoftBox from "../../../components/SoftBox"
import Layout from "../../../components/Layout"
import Navbar from "../../../components/Navbar"
import CommunityUpdateAbout from "./about"
import CommunityUpdateDetails from "./details"
import CommunityUpdateLockedInformation from "./locked"

// Data
import { testTribeData } from './testData'

function UpdateCommunity() {
  return (
    <Layout>
      <Navbar />

      <SoftBox mt={4}>
        <SoftBox my={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <CommunityUpdateAbout
                community={testTribeData}
              />
            </Grid>

            <Grid item xs={12} md={9}>
              <CommunityUpdateDetails 
                community={testTribeData}
              />
            </Grid>
          </Grid>

          <CommunityUpdateLockedInformation community={testTribeData} />
        </SoftBox>
      </SoftBox>
    </Layout>
  );
}

export default UpdateCommunity
