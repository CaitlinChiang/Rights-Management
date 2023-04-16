import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TribeDetails from "./details";
import TribeAbout from "../tribe/about";
import TribeMoreDetails from "./moreInformation";

// data
import { testTribeData } from './testTribes'

function EditTribeInfo() {
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
                viewOnly={true}
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

          <TribeMoreDetails />
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default EditTribeInfo;
