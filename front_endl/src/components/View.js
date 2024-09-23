import { useState,useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom"
import axios from "axios"


export default function View() {

    const [user, setUser] = useState([])
    const navigate = useNavigate()

    const {id} = useParams()
    useEffect(()=> {
        fetchUser()
    },[id])
    
    const fetchUser = async() => {
        try {
            const result = await axios.get("http://127.0.0.1:8000/api/users/"+id)
            // console.log(result.data.users)
            setUser(result.data.users)
        } catch (error) {
            console.log("Somthing went wrong")
        }
    }
    
    const backHandler = ()=>{
        navigate('/')
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 style={{textAlign: "center"}}>User Details</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Full Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container d-flex justify-content-center">
                <div>
                    <button className="btn btn-info" onClick={backHandler}>Back</button>
                </div>
            </div>

        </div>
    )
}