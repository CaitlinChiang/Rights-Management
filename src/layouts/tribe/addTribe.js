import { useState } from "react";
import Card from '@mui/material/Card'
import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import ImageUploader from "components/ImageUploader";

function AddTribe() {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [file, setFile] = useState(null)

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SoftBox mt={4}>
        <Card sx={{ padding: 2 }}>
          <SoftBox mb={2} mt={2}>
            <ImageUploader file={file} setFile={setFile} />
            
            <Grid container spacing={1}>
              <Grid item xs={12} md={2}>
                <SoftTypography
                  variant="h6"
                >
                  {'Name'}
                </SoftTypography>
              </Grid>
              <Grid item xs={12} md={10}>
                <SoftInput value={name} onChange={(e) => setName(e.target.value)} placeholder={'Enter the name of the community.'} />
              </Grid>
            </Grid>

            <Grid container spacing={1} sx={{ mt: 2 }}>
              <Grid item xs={12} md={2}>
                <SoftTypography
                  variant="h6"
                >
                  {'Location'}
                </SoftTypography>
              </Grid>
              <Grid item xs={12} md={10}>
                <SoftInput value={location} onChange={(e) => setLocation(e.target.value)} placeholder={'Where does the community live?'} />
              </Grid>
            </Grid>

            <SoftButton variant="gradient" color="info" fullWidth sx={{ mt: 5 }}>
              {'Add Community'}
            </SoftButton>
          </SoftBox>
        </Card>
      </SoftBox>
    </DashboardLayout>
  );
}

export default AddTribe;
