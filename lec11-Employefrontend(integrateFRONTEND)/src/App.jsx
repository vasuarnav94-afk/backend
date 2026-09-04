import React, { useState } from 'react'
import ProductCard from './components/producrCard';
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";

const App = () => {
  let [toggle,Settoggle] = useState(false);

  const [formData, setFormData] = useState({
     employeeName: "",
    email: "",
    mobile: "",
    address: "",
    company: "",
    employeeId: "",
    designation: "",
  });

  const [employees, setEmployees] =  useState({});
  const [selectedEmployee, setSelectedEmployee] = useState(null);

   return (
     <div className="h-screen p-4">
      <Navbar Settoggle={Settoggle} toggle={toggle} />
      <div className=" h-full px-12 py-4 shadow-xl border border-gray-500 rounded-3xl">
        {toggle ? (
          <div className="h-full flex items-center justify-center">
            <Form
              formData={formData}
              setFormData={setFormData}
              selectedEmployee={selectedEmployee}
              setSelectedEmployee={setSelectedEmployee}
              Settoggle={Settoggle}
            />
          </div>
        ) : (
          <div className="h-full flex flex-wrap gap-4 overflow-hidden scroll-auto overflow-y-auto">
            <ProductCard
              employees={employees}
              setEmployees={setEmployees}
              Settoggle={Settoggle}
              setSelectedEmployee={setSelectedEmployee}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
