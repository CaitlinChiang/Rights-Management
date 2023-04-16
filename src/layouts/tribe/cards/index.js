import { Grid } from "@mui/material"
import Layout from "../../../components/Layout"
import Navbar from "../../../components/Navbar"
import SoftBox from "../../../components/SoftBox"
import CommunityCard from './CommunityCard'

// Data
import { testTribesData } from "./testData"

function CommunityCards() {
  return (
    <Layout>
      <Navbar />

      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          {testTribesData?.map((community, index) => {
            return (
              <Grid item xs={12} md={6} xl={3} key={index}>
                <CommunityCard
                  imageUrl={community?.imageUrl}
                  name={community?.name}
                  location={community?.location}
                  route={community?.route}
                />
              </Grid>
            )
          })}
        </Grid>
      </SoftBox>
    </Layout>
  )
}

export default CommunityCards
