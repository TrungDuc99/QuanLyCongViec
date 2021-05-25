import React from "react";
import TableVpTGD from "./VanPhongTgd/tableVpTGD";

  
const VanPhongTgd = () => {
 /*-----connect sever Api----
 useEffect(() => {
      PheDuyetService.getDashboard().then((res) => {
          setDashboard(res.data);
      });
  }, []);
*/
  return (
    <div>
      <h1>Văn phòng tổng giám đốc</h1>
      <TableVpTGD/>
    </div>
  );
};

export default VanPhongTgd;
