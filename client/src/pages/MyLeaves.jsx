import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function MyLeaves() {
  const [leaves, setLeaves] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchLeaves = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${API_URL}/api/leaves/my`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLeaves(response.data);

    } catch (error) {
      // Error handled without exposing sensitive information
    }
  }, [API_URL]);

  useEffect(() => {
    fetchLeaves();
  }, [fetchLeaves]);

  return (
    <div className="d-flex">

      {/* Sidebar */}
      <Sidebar role="Employee" />


      {/* Main Content */}
      <div
        className="flex-grow-1 bg-light"
        style={{
          marginLeft: "260px",
          minHeight: "100vh",
          padding: "35px",
        }}
      >

        {/* Header */}
        <div className="mb-4">

          <h2 className="fw-bold text-dark mb-1">
            My Leaves
          </h2>

          <p className="text-muted mb-0">
            View your leave requests and their status
          </p>

        </div>


        {/* Leaves Card */}
        <div
          className="card border-0 shadow-sm"
          style={{
            borderRadius: "14px",
          }}
        >

          <div className="card-body p-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

              <h4 className="fw-bold mb-0">
                Leave History
              </h4>

              <span className="text-muted">
                {leaves.length} request
                {leaves.length !== 1 ? "s" : ""}
              </span>

            </div>


            {/* Table */}
            <div className="table-responsive">

              <table className="table table-hover align-middle">

                <thead className="table-dark">

                  <tr>
                    <th>Leave Type</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Reason</th>
                    <th>Status</th>
                  </tr>

                </thead>


                <tbody>

                  {leaves.length > 0 ? (

                    leaves.map((leave) => (

                      <tr key={leave._id}>

                        <td>
                          <strong>
                            {leave.leaveType}
                          </strong>
                        </td>

                        <td>
                          {new Date(
                            leave.startDate
                          ).toLocaleDateString()}
                        </td>

                        <td>
                          {new Date(
                            leave.endDate
                          ).toLocaleDateString()}
                        </td>

                        <td>
                          {leave.reason}
                        </td>

                        <td>

                          {leave.status === "Pending" && (
                            <span className="badge bg-warning text-dark">
                              Pending
                            </span>
                          )}

                          {leave.status === "Approved" && (
                            <span className="badge bg-success">
                              Approved
                            </span>
                          )}

                          {leave.status === "Rejected" && (
                            <span className="badge bg-danger">
                              Rejected
                            </span>
                          )}

                        </td>

                      </tr>

                    ))

                  ) : (

                    <tr>

                      <td
                        colSpan="5"
                        className="text-center py-5"
                      >

                        <div className="text-muted">

                          <h5>
                            No Leave Requests Found
                          </h5>

                          <p className="mb-0">
                            You have not applied for any
                            leaves yet.
                          </p>

                        </div>

                      </td>

                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MyLeaves;