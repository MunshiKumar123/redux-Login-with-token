import React, { memo, useCallback, useEffect, useState } from "react";
import { Button, Input } from '../child'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLocation, postLocation } from '../redux/Action/LocationAction'
import { toast } from 'react-toastify';



const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const location = useSelector(state => state.location)
    const logOut = () => {
        toast.success("Logout Successfully");
        localStorage.clear('')
        navigate('/')
    }
    const [formData, setFormData] = useState({
        noOfPlants: "",
        noOfOffices: "",
        InNoOfPlants: "",
        InNoOfOffices: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const saveData = useCallback(() => {
        let data = {
            noOfPlants: formData.noOfPlants,
            noOfOffices: formData.noOfOffices,
            InNoOfPlants: formData.InNoOfPlants,
            InNoOfOffices: formData.InNoOfOffices
        }
        dispatch(postLocation(data)).then(() => {
            getApi()
        })
    }, [formData])

    const getApi = () => {
        dispatch(getLocation())
    }
    useEffect(() => {
        getApi()
    }, [])


    return (
        <main>
            <div className="row">
                <div className="col-sm-6">
                    <table>
                        <thead className="table">
                            <tr>
                                <th>Location</th>
                                <th>Number of Plants</th>
                                <th>Number of Offices</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>National</b></td>
                                <td><Input type='number' className='form-control' name='noOfPlants' onChange={handleChange} /></td>
                                <td><Input type='number' className='form-control' name='noOfOffices' onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td><b>International</b></td>
                                <td><Input type='number' className='form-control' name='InNoOfPlants' onChange={handleChange} /></td>
                                <td><Input type='number' className='form-control' name='InNoOfOffices' onChange={handleChange} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <Button className='btn btn-success btn-sm' onClick={saveData}> save </Button>
                </div>
                <div className="col-sm-6"></div>
            </div>
            <Button className='btn btn-danger btn-sm mt-5' onClick={logOut}> Logout </Button>

        </main>
    )
}

export default memo(Home);