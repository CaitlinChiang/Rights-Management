import { Grid } from "@mui/material"
import Layout from "../../../components/Layout"
import Navbar from "../../../components/Navbar"
import SoftBox from "../../../components/SoftBox"
import NFTCard from './NFTCard'

// Data
import { testMarketData } from "./testData"

function NFTCards() {
  return (
    <Layout>
      <Navbar />

      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          {testMarketData?.map((nft, index) => {
            return (
              <Grid item xs={12} md={6} xl={3} key={index}>
                <NFTCard
                  imageUrl={nft?.imageUrl}
                  name={nft?.name}
                  price={nft?.price}
                  route={nft?.route}
                />
              </Grid>
            )
          })}
        </Grid>
      </SoftBox>
    </Layout>
  )
}

export default NFTCards
