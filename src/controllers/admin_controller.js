const JobPost = require('../models/jobPost')

//create form
exports.createPost = async (req, res) => {
  const { title, description, forms, applications } = req.body;
  const adminId = req.user.id; // Assuming you have middleware to extract the logged-in admin's ID

  try {
      const newPost = await JobPost.create({
          title,
          description,
          forms,
          applications: [],
          createdBy: adminId, // Pass the createdBy field
      });

      res.send({
          title: newPost.title,
          description: newPost.description,
          forms: newPost.forms,
          applications: newPost.applications,
          createdBy: newPost.createdBy,
      });
  } catch (err) {
      console.log(err.message);
      res.status(400).json({ message: 'Error creating job post', error: err.message });
  }
};

// Update a post by ID
exports.updatePost = async (req, res) => {

    const { id } = req.params;
    const { title, description, forms, applications } = req.body;
  
    try {
      const updatedPost = await JobPost.findByIdAndUpdate(
        id,
        { title, description, forms, applications },
        { new: true } // Return the updated document
      );
  
      if (!updatedPost) {
        return res.status(404).json({
          success: false,
          message: "Post not found",
        });
      }
  
      res.status(200).json({
        success: true,
        data: updatedPost,
        message: "Post updated successfully",
      });
    } catch (err) {
      console.error("Error updating post:", err.message);
      res.status(500).json({
        success: false,
        message: "Failed to update post",
        error: err.message,
      });
    }
  };
  
  // Delete a post by ID
  exports.deletePost = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedPost = await JobPost.findByIdAndDelete(id);
  
      if (!deletedPost) {
        return res.status(404).json({
          success: false,
          message: "Post not found",
        });
      }
  
      res.status(200).json({
        success: true,
        data: deletedPost,
        message: "Post deleted successfully",
      });
    } catch (err) {
      console.error("Error deleting post:", err.message);
      res.status(500).json({
        success: false,
        message: "Failed to delete post",
        error: err.message,
      });
    }
  };

  exports.getAllPosts = async (req, res) => {
    try {
        // Retrieve the admin's ID from the request (assumes the admin is authenticated)
        const adminId = req.user.id;

        // Retrieve only the job posts created by this admin
        const posts = await JobPost.find({ createdBy: adminId }).populate("applications");

        // Send the retrieved posts as the response
        res.status(200).json({
            success: true,
            data: posts,
            message: "All posts created by the admin retrieved successfully",
        });
    } catch (error) {
        // Handle any errors that occur during retrieval
        console.error("Error retrieving posts:", error.message);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve posts",
            error: error.message,
        });
    }
};
