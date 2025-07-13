import React, { useContext, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LinkIcon from "@mui/icons-material/Link";
import RefreshIcon from "@mui/icons-material/Refresh";
import { MdAbc, MdLiveHelp, MdFileDownload } from 'react-icons/md';
import { AuthContext } from "../context/AuthProvider";

 
const initialColumns = [
  { field: "id", headerName: "#", width: 50 },
  { field: "jobRequest", headerName: <><AssignmentIcon fontSize="small" sx={{mr:0.5}}/>Job Request</>, width: 180, editable: true },
  { field: "submitted", headerName: <><CalendarTodayIcon fontSize="small" sx={{mr:0.5}}/>Submitted</>, width: 120, editable: true },
  { field: "status", headerName: <><CheckCircleIcon fontSize="small" sx={{mr:0.5}}/>Status</>, width: 120, editable: true },
  { field: "submitter", headerName: <><PersonIcon fontSize="small" sx={{mr:0.5}}/>Submitter</>, width: 140, editable: true },
  { field: "url", headerName: <><PublicIcon fontSize="small" sx={{mr:0.5}}/>URL</>, width: 180, editable: true },
  { field: "assigned", headerName: "Assigned", width: 120, editable: true, headerClassName: "assigned-header" },
  { field: "priority", headerName: "Priority", width: 120, editable: true, headerClassName: "priority-header"},
  { field: "dueDate", headerName: "Due Date", width: 120, editable: true, headerClassName: "priority-header" },
  { field: "estValue", headerName: "Est. Value", width: 120, editable: true, headerClassName: "value-header" }
];


const transformDataToRows = (data) => {
  const rows = [];
  if (data) {
    Object.entries(data).forEach(([key, value], idx) => {
      rows.push({
        id: idx + 1,
        jobRequest: value.job_request,
        submitted: value.submitted_date,
        status: value.status,
        submitter: value.submitter,
        url: value.url,
        assigned: value.assigned,
        priority: value.priority,
        dueDate: value.due_date,
        estValue: value.estimated_value,
        
      });
    });
  }

  for (let i = rows.length; i < 25; i++) {
    rows.push({
      id: i + 1,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    });
  }
  return rows;
};

const HandleAnswer=()=>{
 prompt('Enter Your Answer')
}

const Sheet = () => {

const userData = useContext(AuthContext)



  const [columns, setColumns] = useState(initialColumns);

  const rowData = transformDataToRows(userData);

  // Add new column handler
  const handleAddColumn = () => {
    const colName = prompt("Enter new column name:");
    if (!colName) return;
    const field = colName.toLowerCase().replace(/\s+/g, "_");
    setColumns((prev) => [
      ...prev,
      {
        field,
        headerName: colName,
        width: 120,
        editable: true
      }
    ]);

  
  };

  return (
    <div id="main" className="w-full">
      <div className="bg-white border rounded-lg shadow overflow-hidden w-full">
        {/* Custom top bar */}
        <div className="flex items-center justify-between px-4 py-2 w-screen h-8  border-b  bg-slate-100">
          {/* Left: Overview box only */}
          <div className="flex items-center">
            <div className="flex items-center bg-gray-300 rounded px-3 py-1 h-6 font-semibold text-base w-[450px] mr-3 ml-5">
              <LinkIcon fontSize="small" sx={{ mr: 0.5, color: "#87CEFA" }} />
              Q3 Financial Overview
              <RefreshIcon onClick={()=>{
                alert('Sorry, you can not refresh this!!' )
              }}  fontSize="small" sx={{ ml: 1, cursor: "pointer", color: "orange" }}  />
            </div>
          </div>
          {/* Right: Action buttons and + */}
          <div className="flex items-center  h-10 w-1/2 pl-28">
            <button className="bg-green-100 text-green-900 font-semibold  px-8 py-1  h-full flex items-center "><MdAbc className="mr-2"/>ABC</button>
            <button onClick={()=>{
              HandleAnswer()
            }} className="bg-purple-100 text-purple-800 font-semibold w-[240px] px-4 py-1 h-full flex items-center "><MdLiveHelp className="mr-2"/>Answer a question</button>
            <button className="bg-yellow-100 text-yellow-700 font-semibold  w-[120px] px-4 py-1 h-full flex items-center mr-2"><MdFileDownload className="mr-2"/>Extract</button>
            {/* + Button */}
            <div
              className="flex items-center justify-center  rounded-full w-8 h-8 ml-4 cursor-pointer"
              onClick={handleAddColumn}
              title="Add new column"
            >
              <AddIcon />
            </div>
          </div>
        </div>
        {/* Use default DataGrid headers for sorting/filtering/search */}
        <DataGrid
          rows={rowData}
          columns={columns}
          rowHeight={26}
          autoHeight
         columnHeaderHeight={30}
          
          hideFooter
          disableRowSelectionOnClick
     
          experimentalFeatures={{ newEditingApi: true }}
          components={{ Toolbar: undefined }} // You can use GridToolbar for search/filter UI
          sx={{
            "& .MuiDataGrid-cell": { fontSize: "0.95rem", border: '0.5px solid #f3f3f3' },
            // Remove row border for minimal look
            "& .MuiDataGrid-row.": { border: 'none' , },
            "& .MuiDataGrid-root": { border: "none" },
            // Header colors for specific columns (force override)
            "& .MuiDataGrid-columnHeaders .MuiDataGrid-columnHeader[data-field='assigned']": { backgroundColor: '#e6f4ea !important' },
            "& .MuiDataGrid-columnHeaders .MuiDataGrid-columnHeader[data-field='priority']": { backgroundColor: '#f3e8ff !important' },
            "& .MuiDataGrid-columnHeaders .MuiDataGrid-columnHeader[data-field='dueDate']": { backgroundColor: '#f3e8ff !important' },
            "& .MuiDataGrid-columnHeaders .MuiDataGrid-columnHeader[data-field='estValue']": { backgroundColor: '#fff7e6 !important' },
            
          }}
        />
      </div>
    </div>
  );
};

export default Sheet;