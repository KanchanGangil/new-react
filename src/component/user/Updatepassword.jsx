import React, { useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { clearErrors, loadUser, updateUserPassword } from '../../redux/action/UserAction'
import { UPDATE_PASSWORD_RESET } from '../../redux/constants/UserConstants'
import Loading from '../layouts/Loading'
import MetaData from '../layouts/MetaData'

function Updatepassword() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const alert = useAlert()
    const { user } = useSelector(
        (state) => state.auth
    );
    const { error, isUpdated, loading } = useSelector(state => state.user)

    const [old_password, setOld_password] = useState()
    const [new_password, setNew_password] = useState()
    const [cpassword, setCpassword] = useState()

    useEffect(() => {
        if (user) {
            setOld_password(user.old_password)
            setNew_password(user.new_password)
            setCpassword(user.cpassword)
        }
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (isUpdated) {
            alert.success('User Password Update Successfully')
            dispatch(loadUser())
            navigate('/profile')

            dispatch({
                type: UPDATE_PASSWORD_RESET
            })
        }
    }, [dispatch, alert, error, isUpdated, navigate])

    const submitHandle = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("old_password", old_password);
        formData.append('new_password', new_password);
        formData.append("cpassword", cpassword);
        dispatch(updateUserPassword(formData))

    }
    return (
        <>
            {
                loading ? (
                    <Loading />
                ) : (
                    <>
                        <MetaData title={'updatepassword'} />
                    </>
                )
            }
            <div className='container'>
                <div className='px-5'>
                    <center><h3 className='mb-3'>Change password</h3></center>
                    <form onSubmit={submitHandle}>
                        <div className="form-group">
                            <label >Old Password</label>
                            <input type="password" name='old_password' className="form-control" placeholder="Password" onChange={(e) => setOld_password(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label >New Password</label>
                            <input type="password" name='new_password' className="form-control" placeholder="Confirm Password" onChange={(e) => setNew_password(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label >Confirm Password</label>
                            <input type="password" name='cpassword' className="form-control" placeholder="Password" onChange={(e) => setCpassword(e.target.value)} />
                        </div>

                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Updatepassword