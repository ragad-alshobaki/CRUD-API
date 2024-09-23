import axios from "axios";
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function Edit() {
    const {id} = useParams()
    const navigate = useNavigate()

    const[userField, setUserField] = useState({
        name: "",
        email: "",
        password: "",
    })

    useEffect(()=>{
        fetchUser();
    }, [id])

    const fetchUser = async()=>{
        try {
            const result = await axios.get('http://127.0.0.1:8000/api/users/'+id)
            // console.log(result.data.users)
            setUserField(result.data.users)
        } catch (error) {
            console.log('Somthing wrong')
        }
    }
    
    const changeUserField = (e)=>{
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        })
        console.log(userField)
    }
    
    const onSubmit = async(e)=>{
        e.preventDefault()
        try {
            await axios.put("http://127.0.0.1:8000/api/update_user/"+id, userField)
            alert("User info Updated successfully!")
            navigate('/')
        } catch (error) {
            // console.log('Somthing wrong')
            alert("All Fields are required!!")
        }
    }

    return(
        <div className="container">
            <h1>Edit Information</h1>
            <form>
            <div className="mb-3 mt-3">
                    <label className="form-lable">ID:</label>
                    <input type="text" className="form-control" name="id" value={id} placeholder="Enter Your Full Name" disabled></input>
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-lable">Full Name:</label>
                    <input type="text" className="form-control" name="name" value={userField.name} onChange={e=>changeUserField(e)} placeholder="Enter Your Full Name"></input>
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-lable">Email:</label>
                    <input type="email" className="form-control" name="email" value={userField.email} onChange={e=>changeUserField(e)} placeholder="Enter Your Email"></input>
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-lable">Password:</label>
                    <input type="password" className="form-control" name="password" value={userField.password} onChange={e=>changeUserField(e)} placeholder="Enter Password"></input>
                </div>
            </form>
            <div className="container d-flex justify-content-center gap-2">
                <button type="submit" className="btn btn-success" onClick={e=>onSubmit(e)}>Save</button>
                <button className="btn btn-danger" >Back</button>
            </div>
        </div>
    )
}