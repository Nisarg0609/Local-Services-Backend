import PostCategory from '../models/categoryModel.js'

export const postCategory = async(req,res)=>{
    const category = req.body
    const newCategory = new PostCategory(category)
    try {
        await newCategory.save()

        res.status(200).json(newCategory)
    } catch (error) {
        res.status(409).json({message:error.message})   
    }
}

export const getCategory = async(req,res)=>{
    try {
        const categories = await PostCategory.find()
        res.status(200).json(categories)
    } catch (error) {
        res.status(409).json({message:error.message})   
    }
}
