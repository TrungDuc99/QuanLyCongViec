import React from "react";
import TableXlCv from "./XuLyCongViec/TableXlCv";
const XuLyCongViec = () => {
  /*-----connect sever Api----
 useEffect(() => {
      PheDuyetService.getDashboard().then((res) => {
          setDashboard(res.data);
      });
  }, []);
*/
  return (
    <div>
      <h1>Xử lý công việc</h1>
      <TableXlCv />
    </div>
  );
};

export default XuLyCongViec;
