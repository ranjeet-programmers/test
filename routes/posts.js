const express=require('express');


const router=express.Router();
const Post=require('../models/Post');


// Get all posts
router.get('/', (req,res)=>{
    const posts= Post.find();
    console.log(posts);
    res.json(posts);
    try{
        
    }catch(err){
        res.json({message:err});
    }
});

// Get specific post
router.get('/:postId',async (req,res)=>{
       
    try{
        const post=await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message:err});
    }
});
// Submit a post
router.post('/',async (req,res)=>{
    // console.log(req.body);
    const post=new Post({
        title: req.body.title,
        description: req.body.description
    });
     try {
         const savedPost=await post.save();
         res.json(savedPost);
         
     } catch (error) {
         res.json({message:error});
     }
    // post.save()
    // .then(data=>{
    //     res.json(data);
    // })
    // .catch(err=>{
    //  res.json({message:err}); 
    // });
});

// Delete specific post
router.delete('/:postId',async (req,res)=>{
       
    try{
        const deletedPost=await Post.remove({_id : req.params.postId});
        res.json(deletedPost);
    }catch(err){
        res.json({message:err});
    }
});

// Update a post
router.patch('/:postId',async (req,res)=>{

    try{
        const updatedPost=await Post.updateOne(
            {_id : req.params.postId},
            {$set:{title: req.body.title}}
            );

        res.json(updatedPost);
    }catch(err){
        res.json({message:err});
    }

})
module.exports=router;