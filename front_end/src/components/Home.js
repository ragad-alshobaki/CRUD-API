import React, { useState } from 'react';
import List from './List';
import axios from 'axios';
 
export default function Home() {
 
    const [userField, setUserField] = useState({
        name: "",
        email: "",
        password: ""
    });
 
    const changeUserFieldHandler = (e) => {
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        });
        //console.log(userField);
 
    }
    const [loading,setLoading]=useState()
 
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const responce= await axios.post("http://127.0.0.1:8000/api/add_user", userField);
            console.log(responce)
            setLoading(true);
        } catch (err) {
            console.log("Something Wrong");
        }
    }
    if(loading){
        return <Home/>
    }
 
    return (
        <div className="container">
                <div className='row'>
                    <div className='col-md-4'>
                        <h3>Add New User</h3>
                        <form>
                            <div className="mb-3 mt-3">
                                <label className="form-label"> Full Name:</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Your Full Name" name="name" onChange={e => changeUserFieldHandler(e)} />
                            </div>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={e => changeUserFieldHandler(e)} required/>
                            </div>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Password:</label>
                                <input type="text" className="form-control" id="password" placeholder="Enter password" name="password" onChange={e => changeUserFieldHandler(e)} required/>
                            </div>
                             
                            <button type="submit" className="btn btn-primary" onClick={e => onSubmitChange(e)}>Add User</button>
                        </form>
                    </div>
                    <div className='col-md-8'>
                        <List />
                    </div>
                </div>
        </div>
    )
};








// import React, { useState } from 'react';
// import List from './List'
// import axios from 'axios';

// export default function Home() {
//     const [userField, setUserField] = useState({
//         name: "",
//         email: "",
//         password: ""
//     });
 
//     const changeUserFieldHandler = (e) => {
//         setUserField({
//             ...userField,
//             [e.target.name]: e.target.value
//         });
//         //console.log(userField);
 
//     }
//     const [loading,setLoading]=useState()
 
//     const onSubmitChange = async (e) => {
//         e.preventDefault();
//         try {
//             const responce= await axios.post("http://127.0.0.1:8000/api/add_user", userField);
//             console.log(responce)
//             setLoading(true);
//         } catch (err) {
//             console.log("Something Wrong");
//         }
//     }
//     if(loading){
//         return <Home/>
//     }

//     return(
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-4">
//                     <h3>Add New User</h3>
//                     <form>
//                         <div className="mb-3 mt-3">
//                             <label className="form-lable">Full Name:</label>
//                             <input type="text" className="form-control" name="name" placeholder="Enter Your Full Name"></input>
//                         </div>
//                         <div className="mb-3 mt-3">
//                             <label className="form-lable">Email:</label>
//                             <input type="email" className="form-control" name="email" placeholder="Enter Your Email"></input>
//                         </div>
//                         <div className="mb-3 mt-3">
//                             <label className="form-lable">Password:</label>
//                             <input type="text" className="form-control" name="password" placeholder="Enter Password"></input>
//                         </div>
//                         <button type="submit" className="btn btn-primary" onClick={e => onSubmitChange(e)}>Add</button>
//                     </form>
//                 </div>
//                 <div className="col-md-8">
//                     <List />
//                 </div>

//             </div>

//         </div>
//     )
// }