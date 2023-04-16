import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TribeDetails from "./details";
import TribeAbout from "./about";

// data
import { testTribeData } from './testTribe'

function Tribe() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox my={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <TribeAbout 
                image={testTribeData?.image}
                title={testTribeData?.title}
                description={testTribeData?.description}
                researcher={testTribeData?.researcher}
                action={testTribeData?.action}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <TribeDetails 
                etymology={testTribeData?.etymology}
                history={testTribeData?.history}
                culture={testTribeData?.culture}
                education={testTribeData?.education}
                economy={testTribeData?.economy}
              />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Tribe;
