import { useState } from "react";
import { Card, Grid } from "@mui/material"
import Layout from "../../../components/Layout"
import Navbar from "../../../components/Navbar"
import SoftBox from "../../../components/SoftBox"
import SoftInput from "../../../components/SoftInput"
import SoftTypography from "../../../components/SoftTypography"
import SoftButton from "../../../components/SoftButton"
import ImageUploader from "../../../components/ImageUploader"

function CreateNFT() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [file, setFile] = useState(null)

  return (
    <Layout>
      <Navbar />

      <SoftBox mt={4}>
        <Card sx={{ padding: 2 }}>
          <SoftBox mb={2} mt={2}>
            <ImageUploader file={file} setFile={setFile} supportingText={'Upload NFT'} />
            
            <Grid container spacing={1}>
              <Grid item xs={12} md={2}>
                <SoftTypography
                  variant="h6"
                >
                  {'Name'}
                </SoftTypography>
              </Grid>
              <Grid item xs={12} md={10}>
                <SoftInput 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder={'Enter NFT Name.'} 
                />
              </Grid>
            </Grid>

            <Grid container spacing={1} sx={{ mt: 2 }}>
              <Grid item xs={12} md={2}>
                <SoftTypography
                  variant="h6"
                >
                  {'Price'}
                </SoftTypography>
              </Grid>
              <Grid item xs={12} md={10}>
                <SoftInput value={price} onChange={(e) => setPrice(e.target.value)} placeholder={'Enter Pricing of NFT.'} />
              </Grid>
            </Grid>

            <SoftButton variant="gradient" color="info" fullWidth sx={{ mt: 5 }}>
              {'Create NFT'}
            </SoftButton>
          </SoftBox>
        </Card>
      </SoftBox>
    </Layout>
  );
}

export default CreateNFT
