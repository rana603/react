import React from 'react';
import { useEffect } from "react";
import { useState, useRef } from "react";
import './forms.css';


let inputObj = {
    name: "",
    gender :"",
    role: "",
    ismarried: ""

}

function Forms() {
    const [formData, setformData] = useState(inputObj);
    const [DataList, SetDataList] = useState([]);
    let [showflg, setshowflg] = useState(false);

    useEffect(() => {
        setshowflg(true);
        getData();

    }, [showflg]);


    const getData = () => {
        let inputdata = JSON.parse(localStorage.getItem("inputData")) || [];
        SetDataList(inputdata);
         setshowflg(true);
    }
   

    const handleSubmit = (e) => {
        e.preventDefault();
        let { name, gender, role } = formData;
        if(name=="" || gender==""|| role=="" ){
           alert("Enter complete details");
        }else{
            let updatedData = JSON.parse(localStorage.getItem("inputData")) || [];
            updatedData.push(formData);
            localStorage.setItem("inputData", JSON.stringify(updatedData));
            getData();
        }  
    }

    const handleChangeInput = (e) => {
        // console.log(e.target)
        let { name, value, type, checked } = e.target;
        value = type === "checkbox" ? checked : value;
        setformData((prevData) => ({ ...prevData, [name]: value }))
    }

    let { name, gender, role, ismarried } = formData;
    return (
        <>
            <div className='cont'>
                <h1>Form</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Name :
                        <input onChange={handleChangeInput} type="text" value={name} name="name" />
                    </label>
                    <label htmlFor="">Gender :
                        <input onChange={handleChangeInput} type="text" value={gender} name="gender" />
                    </label>
                    <label htmlFor="">Role :
                    <select  onChange={handleChangeInput}  name="role" value={role} >
                        <option value="">select</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backand">Backand</option>
                    </select>
                    </label>
                    
                    <label htmlFor="">Martial Status :
                        <input onChange={handleChangeInput} type="checkbox" value="married" checked={ismarried} name="ismarried" />
                    </label>

                    <br />
                    <button name="submit" >Submit</button>

                </form>
            </div>
            <h1>Data</h1>
            <hr />
            <div id="ShowData_div">
                <table>
                    <thead>
                        <tr>
                            <th>Sr.No.</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Role</th>
                            <th>Martial Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showflg ?
                            (
                                DataList.map((user, ind) => {
                                    return <tr>
                                        <td>{ind}</td>
                                        <td>{user.name}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.role}</td>
                                        <td>{user.ismarried ? "Married" : "Unmarried"}</td>
                                    </tr>
                                })
                            ) : ""}
                    </tbody>
                </table>


            </div>
        </>
    )
}

export default Forms;
