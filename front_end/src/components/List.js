import { useState,useEffect } from "react"
import axios from 'axios';
import { NavLink } from "react-router-dom";

export default function List() {
    const [userData, setUserData] = useState([])

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async()=> {
    try {
        const result = await axios("http://127.0.0.1:8000/api/users")
        // console.log(result)
        // console.log(result.data)
        // console.log(result.data.result)
        setUserData(result.data.result)
    } catch (error) {
        console.log("Somthing went wrong")
    }
}
    const handleDelete = async(id)=> {
        // console.log(id)
        // await axios.delete("http://127.0.0.1:8000/api/delete_user/"+id)
        await axios.delete(`http://127.0.0.1:8000/api/delete_user/${id}`)
        const newUserData = userData.filter((item)=>{
            return(
                item.id !==id
            )
        })
        setUserData(newUserData)
    }

    return(
        <div className="container">
            <h3>Users Details</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user, i)=>{
                            return(
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <NavLink to={`/view/${user.id}`} className="btn btn-success mx-1">view</NavLink>
                                        <NavLink to={`/edit/${user.id}`} className="btn btn-warning mx-1">Edit</NavLink>
                                        <button className="btn btn-danger" onClick={()=>handleDelete(user.id)}>Delete</button>
                                        {/* Add Edit Delete */}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}