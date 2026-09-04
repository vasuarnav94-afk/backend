import { useEffect ,useState } from "react";
import axios from "axios";

const Form = ({
    formData,
  setFormData,
  Settoggle,
  selectedEmployee,
  setSelectedEmployee,
}) =>{
    let handleChange = (e) => {
        let {name,value} = e.target;
        setFormData({...formData, [name] : value});

    }

    //ye update + code send karne bala hain :-
    useEffect(()=>{
        setFormData(selectedEmployee);
    }, [selectedEmployee]);

    const handlesubmit = async (e)=>{
        e.preventDefault();
        try {
            if(selectedEmployee){
                let res = await axios.patch(
                    `http://localhost:3000/api/employes/update/${selectedEmployee._id}`,
                    formData,
                );
                console.log("postdatacreate successfully",res);
            }
            else{
                let res = await axios.post(
                    "http://localhost:3000/api/employes/create",
                    formData, 
                )
                console.log("postdatacreate successfully:", res)
            }
            setSelectedEmployee(null);
            setFormData({});
            Settoggle(false);
        } catch (error) {
            console.log("form (update & delete) Error:",error)
        }
    };



    const  getvalue = (name) => (form ? formData[name] || "" : "");

    return (
      <div className="flex flex-col items-center text-center gap-10 shadow-xl border border-gray-300 rounded-3xl px-8 py-6">
      <h1 className="text-5xl font-semibold text-blue-500">
        {selectedEmployee ? "Update Employee Details" : "Add Employee Details"}
      </h1>
      <form onSubmit={hadelSubmit} className="flex flex-col gap-5 " action="">
        <input
          value={getValue("employeeName")}
          onChange={handleChange}
          name="employeeName"
          type="text"
          placeholder="Name"
          className="border-2 text-xl rounded-xl border-gray-300 py-1 px-4"
        />
        <input
          value={getValue("email")}
          onChange={handleChange}
          name="email"
          type="text"
          placeholder="email"
          className="border-2 text-xl rounded-xl border-gray-300 py-1 px-4"
        />
        <input
          value={getValue("mobile")}
          onChange={handleChange}
          name="mobile"
          type="text"
          placeholder="mobile"
          className="border-2 text-xl rounded-xl border-gray-300 py-1 px-4"
        />
        <input
          value={getValue("address")}
          onChange={handleChange}
          name="address"
          type="text"
          placeholder="address"
          className="border-2 text-xl rounded-xl border-gray-300 py-1 px-4"
        />
        <input
          value={getValue("company")}
          onChange={handleChange}
          name="company"
          type="text"
          placeholder="company"
          className="border-2 text-xl rounded-xl border-gray-300 py-1 px-4"
        />
        <input
          value={getValue("employeeId")}
          name="employeeId"
          onChange={handleChange}
          type="text"
          placeholder="Employee id"
          className="border-2 text-xl rounded-xl border-gray-300 py-1 px-4"
        />
        <div className="flex items-center justify-around gap-4">
          <div className="flex gap-3">
            <span>MANAGER</span>
            <input
              name="designation"
              onChange={handleChange}
              value="MANAGER"
              checked={getValue("designation") === "MANAGER"}
              type="radio"
            />
          </div>
          <div className="flex gap-3">
            <span>DEVELOPER</span>
            <input
              name="designation"
              onChange={handleChange}
              checked={getValue("designation") === "DEVELOPER"}
              value="DEVELOPER"
              type="radio"
            />
          </div>
        </div>
        <button className="rounded-xl bg-green-600 w-full text-white py-4 cursor-pointer">
          Add Employe
        </button>
      </form>
    </div>  
    )
}

export default Form