import {ContentWrapper, MainWrapper} from "./app/style/global.styled.js";
import { Analytics } from "@vercel/analytics/react"

import React from "react";

import {CustomRouter} from "./app/index.js";
import {Navigation} from "./widgets/index.js";


function App() {

  return (
  <React.Fragment>
    <Analytics/>
    <MainWrapper>
      <Navigation />
      <ContentWrapper>
        <CustomRouter />
      </ContentWrapper>
    </MainWrapper>
  </React.Fragment>
  )
}

export default App
