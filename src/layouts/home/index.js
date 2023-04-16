import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox"
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Data
import { testTribesData } from "./testTribes";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          {testTribesData?.map((tribe, index) => {
            return (
              <Grid item xs={12} md={6} xl={3} key={index}>
                <DefaultProjectCard
                  image={tribe?.image}
                  title={tribe?.title}
                  description={tribe?.description}
                  action={tribe?.action}
                />
              </Grid>
            )
          })}
          <Grid item xs={12} md={6} xl={3}>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
          </Grid>
        </Grid>
      </SoftBox>
    </DashboardLayout>
  )
}

export default Dashboard
