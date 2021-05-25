import React from "react";
import TableDsTn from "./TiepNhanCongViec/TableDsTn";
import ActionXuLy from "./TiepNhanCongViec/ActionXuLy";

const TiepNhanCongViec = () => {
  /*-----connect sever Api----
 useEffect(() => {
      PheDuyetService.getDashboard().then((res) => {
          setDashboard(res.data);
      });
  }, []);
*/
  return (
    <div>
      <h1>Tiếp nhận công việc</h1>
      <TableDsTn />
    </div>
  );
};

export default TiepNhanCongViec;
