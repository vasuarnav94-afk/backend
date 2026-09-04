import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BadgeCheck,
  Mail,
  Phone,
  Building2,
  MapPin,
  Briefcase,
} from "lucide-react";

const ProductCard = ({
  employees,
  setEmployees,
  Settoggle,
  setSelectedEmployee,
}) => {
  // alldatashow ke liye:-
  useEffect(() => {
    const getallemployee = async () => {
      let res = await axios.get("http://localhost:3000/api/employes");
      setEmployees(res.data.data);
      console.log("all employees sucessfully shows", res);
    };
    getallemployee();
  }, []);

  // delete ke liya hai ye:-
  const deleteemployee = async (id) => {
    if (window.confirm("Are you sure you want to delete it?")) {
      try {
        let res = await axios.delete(
          `http://localhost:3000/api/employes/delete/${id}`,
        );
        console.log("deleted data sucessfully:", res);
        getallemployee();
      } catch (error) {
        console.log("deleted error:", error);
      }
    }
  };

  return (
    <div className="h-full w-full flex gap-12 flex-wrap">
      {employees.map((employees) => {
        return (
          <div
            key={employees._id}
            className="w-[22%] h-[64%] max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                {employees.employeeName?.charAt(0)}
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {employees.employeeName}
                </h2>

                <span
                  className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                    employees.designation === "MANAGER"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {employees.designation}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <BadgeCheck size={18} />
                <span>{employees.employeeId}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <Mail size={18} />
                <span>{employees.email}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <Phone size={18} />
                <span>{employees.mobile}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <Building2 size={18} />
                <span>{employees.company}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <MapPin size={18} />
                <span>{employees.address}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <Briefcase size={18} />
                <span>{employees.designation}</span>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => {
                  Settoggle(true);
                  setSelectedEmployee(employees);
                }}
                className="bg-green-500 text-white px-3 py-2 rounded-2xl"
              >
                Update
              </button>
              <button
                onClick={() => {
                  deleteemployee(employees._id);
                }}
                className="bg-red-500 text-white px-3 py-2 rounded-2xl"
              >
                delete
              </button>
              <button className="bg-blue-500 text-white px-3 py-2 rounded-2xl">
                singleid
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;