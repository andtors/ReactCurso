import React from 'react'

import './Profile.css'

import { uploads } from '../../utils/config'

// Components
import Message from '../../components/Message'
import { Link } from 'react-router-dom'
import { BsFillEyeFill, BsPencilFill, BsXLg } from 'react-icons/bs'

// Hooks
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

// Redux
import { getUserDetails } from '../../slices/userSlice'

const Profile = () => {

    const { id } = useParams()

    const dispatch = useDispatch()

    const { user, loading } = useSelector((state) => state.user)
    const { user: userAuth } = useSelector((state) => state.auth)

    // New form and edit form refs
    const newPhotoForm = useRef()
    const editPhotoForm = useRef()

    const submitHandle = (e) => {
        e.preventDefault()
    }

    // Load user data
    useEffect(() => {
        dispatch(getUserDetails(id))
    }, [dispatch])

    if (loading) {
        return <p>Carregando...</p>
    }

    return (
        <div id="profile">
            <div className="profile-header">
                {user.profileImage && (
                    <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
                )}
                <div className="profile-description">
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                </div>
                {id === userAuth._id && (
                    <>
                    <div className="new-photo" ref={newPhotoForm}>
                        <h3>Compartilhe algum momento seu:</h3>
                        <form onSubmit={submitHandle}>
                            <label>
                                <span>Titulo para a foto:</span>
                                <input type="text" placeholder="Insira um titulo"/>
                            </label>
                            <label>
                                <span>Imagem:</span>
                                <input type="file" />
                            </label>
                            <input type="submit" value="Postar"/>
                        </form>
                    </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Profile