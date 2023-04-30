import ServiceModel from '../models/serviceModel.js';

export const postService = async(req,res)=>{
    console.log("service made");
    const service = req.body
    const newService = new ServiceModel(service)
    console.log("service made 1");
    try {
        const result = await ServiceModel.create({name:`${firstName} ${lastName}`,email,contact,country,city,category,description,logo,address})
        console.log("service added");
        res.status(200).json(result)
    } catch (error) {
        res.status(409).json({message:error.message})   
    }
}

// export const getCategory = async(req,res)=>{
//     try {
//         const categories = await PostCategory.find()
//         res.status(200).json(categories)
//     } catch (error) {
//         res.status(409).json({message:error.message})   
//     }
// }
