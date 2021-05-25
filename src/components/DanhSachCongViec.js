import React from "react";
import XemCtCv from "./DanhSachCongViec/TableDsCv";
const DanhSachCvPhong = () => {
  /*-----connect sever Api----
 useEffect(() => {
      PheDuyetService.getDashboard().then((res) => {
          setDashboard(res.data);
      });
  }, []);
*/
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Danh sách công việc
      </h1>
      <XemCtCv />
    </div>
  );
};
export default DanhSachCvPhong;
