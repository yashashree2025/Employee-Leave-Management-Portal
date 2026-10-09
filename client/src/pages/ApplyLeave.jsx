import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Sidebar from "../components/Sidebar";

function ApplyLeave() {
  const navigate = useNavigate();

  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${API_URL}/api/leaves/apply`,
        {
          leaveType,
          startDate,
          endDate,
          reason,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response.data.message);

      navigate("/employee-dashboard");

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

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

        {/* Page Header */}
        <div className="mb-4">

          <h2 className="fw-bold text-dark mb-1">
            Apply Leave
          </h2>

          <p className="text-muted mb-0">
            Submit your leave request
          </p>

        </div>


        {/* Apply Leave Form */}
        <div className="row justify-content-center">

          <div className="col-lg-8 col-xl-7">

            <div
              className="card border-0 shadow-sm"
              style={{
                borderRadius: "14px",
              }}
            >

              <div className="card-body p-4 p-md-5">

                <h4 className="fw-bold mb-4">
                  Leave Request Details
                </h4>


                <form onSubmit={handleSubmit}>

                  {/* Leave Type */}
                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      Leave Type
                    </label>

                    <select
                      className="form-select"
                      value={leaveType}
                      onChange={(e) =>
                        setLeaveType(e.target.value)
                      }
                      required
                    >

                      <option value="">
                        Select Leave Type
                      </option>

                      <option value="Sick">
                        Sick Leave
                      </option>

                      <option value="Casual">
                        Casual Leave
                      </option>

                      <option value="Earned">
                        Earned Leave
                      </option>

                    </select>

                  </div>


                  {/* Dates */}
                  <div className="row">

                    {/* Start Date */}
                    <div className="col-md-6 mb-4">

                      <label className="form-label fw-semibold">
                        Start Date
                      </label>

                      <input
                        type="date"
                        className="form-control"
                        value={startDate}
                        onChange={(e) =>
                          setStartDate(e.target.value)
                        }
                        required
                      />

                    </div>


                    {/* End Date */}
                    <div className="col-md-6 mb-4">

                      <label className="form-label fw-semibold">
                        End Date
                      </label>

                      <input
                        type="date"
                        className="form-control"
                        value={endDate}
                        onChange={(e) =>
                          setEndDate(e.target.value)
                        }
                        required
                      />

                    </div>

                  </div>


                  {/* Reason */}
                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      Reason
                    </label>

                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Enter your leave reason"
                      value={reason}
                      onChange={(e) =>
                        setReason(e.target.value)
                      }
                      required
                    ></textarea>

                  </div>


                  {/* Buttons */}
                  <div className="d-flex gap-3">

                    <button
                      type="submit"
                      className="btn btn-primary px-4"
                    >
                      Apply Leave
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary px-4"
                      onClick={() =>
                        navigate("/employee-dashboard")
                      }
                    >
                      Cancel
                    </button>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ApplyLeave;