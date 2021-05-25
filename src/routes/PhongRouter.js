import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import PageLoader from "../@jumbo/components/PageComponents/PageLoader";

const PhongRouter = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, "");
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect
          exact
          from={`${requestedUrl}/`}
          to={`${requestedUrl}/thong-ke`}
        />
        <Route
          path={`${requestedUrl}/thong-ke`}
          component={lazy(() => import("../components/ThongKe"))}
        />
        <Route
          path={`${requestedUrl}/danh-sach-cv`}
          component={lazy(() => import("../components/DanhSachCongViec"))}
        />
        <Route
          path={`${requestedUrl}/tao-cv`}
          component={lazy(() => import("../components/TaoCongViec"))}
        />
        <Route
          path={`${requestedUrl}/sua-cv/:id`}
          component={lazy(() => import("../components/TaoCongViec"))}
        />
        <Route
          path={`${requestedUrl}/tiep-nhan-cv`}
          component={lazy(() => import("../components/TiepNhanCongViec"))}
        />
        <Route
          path={`${requestedUrl}/xu-ly-cv`}
          component={lazy(() => import("../components/XuLyCongViec"))}
        />
        <Route
          path={`${requestedUrl}/van-phong-tgd`}
          component={lazy(() => import("../components/VanPhongTgd"))}
        />
        <Route
          path={`${requestedUrl}/tiepnhancongviec/xuly-cv/:id`}
          component={lazy(() =>
            import("../components/TiepNhanCongViec/ActionXuLy")
          )}
        />
        <Route
          path={`${requestedUrl}/CongViec-BTGD/xem-cv/:id`}
          component={lazy(() =>
            import("../components/VanPhongTgd/ActionXem")
          )}
        />
      </Switch>
    </Suspense>
  );
};

export default PhongRouter;
