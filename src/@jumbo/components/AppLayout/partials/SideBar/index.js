import React from "react";
import CmtVertical from "../../../../../@coremat/CmtNavigation/Vertical";
import PerfectScrollbar from "react-perfect-scrollbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IntlMessages from "../../../../utils/IntlMessages";
import { ArrowForward } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  perfectScrollbarSidebar: {
    height: "100%",
    transition: "all 0.3s ease",
    ".Cmt-sidebar-fixed &, .Cmt-Drawer-container &": {
      height: "calc(100% - 167px)",
    },
    ".Cmt-modernLayout &": {
      height: "calc(100% - 72px)",
    },
    ".Cmt-miniLayout &": {
      height: "calc(100% - 91px)",
    },
    ".Cmt-miniLayout .Cmt-sidebar-content:hover &": {
      height: "calc(100% - 167px)",
    },
  },
}));

const SideBar = () => {
  const classes = useStyles();
  const navigationMenus = [
    {
      name: <IntlMessages id={"sidebar.main"} />,
      type: "section",
      children: [
        {
          name: <IntlMessages id={"sidebar.jobs.report"} />,
          type: "item",
          link: "/phong/thong-ke",
        },
        {
          name: <IntlMessages id={"sidebar.jobs.create"} />,
          type: "item",
          link: "/phong/tao-cv",
        },
        {
          name: <IntlMessages id={"sidebar.jobs.list"} />,
          type: "item",
          link: "/phong/danh-sach-cv",
        },
        {
          name: <IntlMessages id={"sidebar.jobs.income"} />,
          type: "item",
          link: "/phong/tiep-nhan-cv",
        },
        {
          name: <IntlMessages id={"sidebar.jobs.process"} />,
          type: "item",
          link: "/phong/xu-ly-cv",
        },
        {
          name: <IntlMessages id={"sidebar.jobs.boss"} />,
          type: "item",
          link: "/phong/van-phong-tgd",
        },
      ],
    },
  ];

  return (
    <PerfectScrollbar className={classes.perfectScrollbarSidebar}>
      <CmtVertical menuItems={navigationMenus} />
    </PerfectScrollbar>
  );
};

export default SideBar;
