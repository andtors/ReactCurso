const Photo = require("../models/Photo")

const mongoose = require("mongoose")
const User = require("../models/User")

// Insert a photo, with an user related to it
const insertPhoto = async(req, res) => {
    const {title} = req.body
    const image = req.file.filename

    const reqUser = req.user

    const user = await User.findById(reqUser._id)

    // create a photo
    const newPhoto = await Photo.create({
        image,
        title,
        userId: user.id,
        userName: user.name
    })

    // If a photo was created successfully, return data
    if(!newPhoto) {
        res.status(422).json({
            errors: ["Houve um problema, por favor tente novamente mais tarde."]
        })
    }

    res.status(201).json(newPhoto)
}

// Remove a photo from db
const deletePhoto = async(req, res) => {
    const {id} = req.params

    const reqUser = req.user
    
    const photo = Photo.findByIdAndDelete(new mongoose.Types.ObjectId(id))

    // Check if photo exists
    if(!photo){
        res.status(404).json({errors: ["Foto não encontrada"]})
        return
    }

    // Check if photo belongs to user
    if(!photo.userId.equals(reqUser._id)){
        res.status(422).json({
            errors:["Ocorreu um erro, por favor tente novamente mais tarde."]
        })
    }
    
    await Photo.findByIdAndDelete(photo._id)

    res.status(200).json({id: photo._id, message: "Foto excluida com sucesso."})
}


module.exports = {
    insertPhoto
}