import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";
import ViewColumnOutline from "mdi-react/ViewColumnOutlineIcon";
import classes from "../commonGrid.module.css";
import axios from "axios";
// import urls from "../../../Utils/urls";
// import { useSelector } from "react-redux";
import { toast } from "react-toastify";
// import { commonToast } from "../../../Utils";

const ColumnHidePopOver = ({ allColumns }) => {
 return <div>test</div>
  // const selectSPApi = useSelector(
  //   (state) => state.reportDocument.runNewReport?.report
  // );
  // const userId = localStorage.getItem("apex_userid");
  // const userRole = JSON.parse(localStorage.getItem("account")).selectedRole
  //   .value;
  // const handleSave = async () => {
  //   const id =  toast.loading("Run New Report Pending");
  //   try {
  //     const columnHideByDefault = allColumns?.map((data) => ({
  //       key: data.id,
  //       isVisible: data.isVisible,
  //     }));
  //     const userPrefResp = await axios.get(
  //       urls.reportsNDocuments.getUserPrefrence(userId, userRole)
  //     );
  //     const reportColumnHideAvailable =
  //       userPrefResp?.data?.user_preferences?.filter(
  //         (data) => data?.reportName === selectSPApi?.value
  //       )?.[0];
  //     if (reportColumnHideAvailable?.reportName?.length > 0) {
  //       await axios.get(
  //         urls.reportsNDocuments.deleteUserPrefrence(
  //           userId,
  //           userRole,
  //           reportColumnHideAvailable.id
  //         )
  //       );
  //       await axios.post(
  //         urls.reportsNDocuments.postSaveUserPrefrence(),
  //         {
  //           user_id: userId,
  //           user_role: userRole,
  //           user_preferences: {
  //             reportName: selectSPApi?.value,
  //             columnData: columnHideByDefault,
  //           },
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       toast.update(id, {
  //         render: "Succesfuly Report Saved",
  //         type: "success",
  //         isLoading: false,
  //         ...commonToast,
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setTimeout(() => {
  //       toast.dismiss();
  //     }, 1000);
  //   }
  // };
  // return (
  //   <>
  //     <OverlayTrigger
  //       placement={"bottom"}
  //       rootClose={true}
  //       trigger="click"
  //       overlay={
  //         <Popover
  //           className="w-5 border-0 shadow-lg rounded"
  //           style={{ zIndex: "1080" }}
  //         >
  //           <Popover.Header className={classes.pOHeader}>
  //             <div className="d-flex justify-content-between">
  //               <div className="d-flex">Toggle Column</div>
  //             </div>
  //           </Popover.Header>
  //           <Popover.Body className={classes.pOHeader}>
  //             {allColumns?.map((column, index) => (
  //               <Form.Check
  //                 key={index}
  //                 type="checkbox"
  //                 {...column.getToggleHiddenProps()}
  //                 id={column.id}
  //                 label={column.Header}
  //                 className={classes.checkbox}
  //                 style={{ fontSize: "1.1rem" }}
  //               />
  //             ))}
  //             <Button onClick={() => handleSave()}>Save</Button>
  //           </Popover.Body>
  //         </Popover>
  //       }
  //     >
  //       <Button variant="secondary">
  //         <ViewColumnOutline size={27} />
  //       </Button>
  //     </OverlayTrigger>
  //   </>
  // );
};
export default ColumnHidePopOver;
