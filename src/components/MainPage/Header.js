import React from "react";
import GridContainer from "../@jumbo/components/GridContainer";
import PageContainer from "../@jumbo/components/PageComponents/layouts/PageContainer";
import Grid from "@material-ui/core/Grid";
import AppWrapper from "../@jumbo/components/AppWrapper";
const breadcrumbs = [
  { label: "Thẩm định tài sản", link: "/" },
  { label: "Phê duyệt", isActive: true },
];
const MainLayout = ({ children }) => {
  return (
    <AppWrapper>
      <PageContainer heading="Phê duyệt" breadcrumbs={breadcrumbs}>
        <GridContainer>
          <Grid item xs={12}>
            {children}
          </Grid>
        </GridContainer>
      </PageContainer>
    </AppWrapper>
  );
};

export default MainLayout;