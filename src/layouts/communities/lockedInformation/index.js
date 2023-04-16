import LockedInformation from "./locked";
import ShowInformation from './show'

// data
import { userTestData } from "./testData";

function CommunityLockedInformation() {
  if (userTestData?.locked === true) {
    return <LockedInformation />
  } else {
    return <ShowInformation />
  }
}

export default CommunityLockedInformation
