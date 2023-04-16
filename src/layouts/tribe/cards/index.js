import { Grid } from "@mui/material"
import DashboardLayout from "../../../components/DashboardLayout"
import DashboardNavbar from "../../../components/DashboardNavbar"
import SoftBox from "../../../components/SoftBox"
import TribeCard from './TribeCard'

// Data
import { testTribesData } from "./testData"

function TribeCards() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          {testTribesData?.map((community, index) => {
            return (
              <Grid item xs={12} md={6} xl={3} key={index}>
                <TribeCard
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
    </DashboardLayout>
  )
}

export default TribeCards
