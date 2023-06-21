import blogModel from '../models/blog.models.js';

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getBlog = async (req, res) => {
    try {
        const blog = await blogModel.findAll({
            where: {
                id:req.params.id
            }
        })
        res.json(blog[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createBlog = async (req, res) => {
    try {
        const newBlog = blogModel.create(req.body)
        res.json({message: "registro creado"})
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateBlog = async (req, res) => {
    try {
        const updateBlog = await blogModel.update({
            where: { id: req.params.id}
        })
        res.json({message: "registro actualizado"})        
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteBlog = async (req, res) => {
    try {
        const deleteBlog = await blogModel.destroy({
            where: { id: req.params.id }
        })
        res.json({message: "registro eliminado"})    
    } catch (error) {
        res.json({ message: error.message })
    }
}