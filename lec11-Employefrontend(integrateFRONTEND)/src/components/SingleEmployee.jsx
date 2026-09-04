import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleEmployee = () => {
  const { empid } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    let singleiddata = async() => {
      try {
        let res = await axios.get(`http://localhost:3000/api/employes/${empid}`);
      } catch (error) {
        console.log("singaliderror hai:", error);
      }
    };
    singleiddata();
  }, [empid]);

    if (!employee) return <h1>Loading...</h1>;

  return (
    <div className="min-h-screen bg-linear-to-r from-blue-100 via-purple-100 to-pink-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full bg-blue-500 flex items-center justify-center text-white text-4xl font-bold">
            {employee?.name?.charAt(0).toUpperCase()}
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            {employee?.name}
          </h1>

          <span className="mt-2 px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
            {employee?.role}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Email</span>
            <span className="text-gray-800">{employee?.email}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Mobile</span>
            <span className="text-gray-800">{employee?.mobile}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Designation</span>
            <span className="text-gray-800">{employee?.designation}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEmployee;