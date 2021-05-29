import { Grid, Paper } from "@material-ui/core";
import React from "react";
import CounterCard from "../@jumbo/components/Common/CounterCard";

const ThongKe = () => {
  return (
    <div>
      <Paper>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <CounterCard
              icon={"/images/dashboard/projectIcon.svg"}
              number="457"
              label="Tasks"
              labelProps={{
                fontSize: 16,
              }}
              backgroundColor={["#5AB9FE -18.96%", "#1372B7 108.17%"]}
              gradientDirection="180deg"
            />
          </Grid>

          <Grid item xs={3}>
            <CounterCard
              icon={"/images/dashboard/projectIcon.svg"}
              number="09"
              label="Projects"
              labelProps={{
                fontSize: 16,
              }}
              backgroundColor={["#8E49F0 -18.96%", "#4904AB 108.17%"]}
              gradientDirection="180deg"
            />
          </Grid>
          <Grid item xs={3}>
            <CounterCard
              icon={"/images/dashboard/filesIcon.svg"}
              number="42"
              label="Files"
              labelProps={{
                fontSize: 16,
              }}
              backgroundColor={["#F25247 -18.96%", "#B72D23 108.17%"]}
              gradientDirection="180deg"
            />
          </Grid>

          <Grid item xs={3}>
            <CounterCard
              icon={"/images/dashboard/teamsIcon.svg"}
              number="13"
              label="Teams"
              labelProps={{
                fontSize: 16,
              }}
              backgroundColor={["#C076FB -18.96%", "#7717C2 108.17%"]}
              gradientDirection="180deg"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}></Grid>
      </Paper>
    </div>
  );
};

export default ThongKe;
