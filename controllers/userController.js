import userModel from "../models/user.js"

class userController {
  // Create Document
  static createDoc = async (req, res) => {
    // console.log(req.body)
    try {
      const {name, age, phone} = req.body
      const doc = new userModel({
        name:name,
        age:age,
        phone:phone
      })
      // Saving Document
      const result = await doc.save()
      // console.log(result)
      res.redirect("/user")
    } catch (error) {
      console.log(error)
    }
  }

  // Retrieve All Document
  static getAllDoc = async (req, res) =>{
    try {
      const result = await userModel.find()
      // console.log(result)
      res.render("index", {data: result})      
    } catch (error) {
      console.log(error)
    }
    
  }

  // Show Edit Form with Data
  static editDoc = async (req, res) =>{
    // console.log(req.params.id)
    try {
      const result = await userModel.findById(req.params.id)
      // console.log(result)
      res.render("edit", {data:result})
    } catch (error) {
      console.log(error)
    }
    
  }

  // Update Document
  static updateDocById = async (req, res) =>{
    // console.log(req.params.id)
    // console.log(req.body)
    try {
      const result = await userModel.findByIdAndUpdate(req.params.id, req.body)
      // console.log(result)
    } catch (error) {
      console.log(error)
    }
    res.redirect("/user")
  }

  // Delete Document
  static deleteDocById = async (req, res) =>{
    // console.log(req.params.id)
    try {
      const result = await userModel.findByIdAndDelete(req.params.id)
      res.redirect("/user")
    } catch (error) {
      console.log(error)
    }  
  }
}

export default userController