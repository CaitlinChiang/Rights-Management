import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// data
import { testMoreData } from "./testData";

function TribeMoreDetails() {  
  const { lockedInformation } = testMoreData
  const formattedText = lockedInformation?.replace(/\n/g, "\n\n")

  return (
    <DashboardLayout>
      <DashboardNavbar />

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
    </DashboardLayout>
  );
}

export default TribeMoreDetails;
