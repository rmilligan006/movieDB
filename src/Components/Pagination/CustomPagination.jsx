import * as React from "react";
import Pagination from "@mui/material/Pagination";

export default function CustomPagination({ setPage, numOfPages = 10 }) {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        color: "#fff",
      }}
    >
      <Pagination
        color="primary"
        count={numOfPages}
        variant="outlined"
        onChange={(e) => handlePageChange(e.target.textContent)}
        hideNextButton
        hidePrevButton
      />
    </div>
  );
}
