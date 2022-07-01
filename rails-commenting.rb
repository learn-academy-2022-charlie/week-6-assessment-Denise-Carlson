# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
  def index
    # This code creates a new class BlogPostsController(child) which is inherited from ApplicationController(parent)  and creates a variable named  index.
    # ---2)
    @posts = BlogPost.all
  end
  #  This lets you see all the BlogPost entered in the database. @ posts is an instance variable
  # ---3)
  #this is defining a method called Show which contains an instance variable @posts which is assigned to view  the BlogPost id argument or (parameter). It will only display the id no other information.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
   # This command is setting a new instance variable @ post which will contain a new BlogPost. It also makes a new method create as well.
  def new
    @post = BlogPost.new
  end

  def create
   
    # ---5)
    #This is an instance variable that is a creating a new method called blog_post_params if the instance variable @ post is valid. It will create an new BlogPost. If the instance variable @post is not valid it will go to new_blog_post_path. It then assigns a new method edit.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    #This defines an instance variable for the method edit which uses  id parameter in the database to edit a BlogPost. It also creates a method update.This creates an instance variable that uses the id parameter in the database to update a BlogPost.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #This command uses @Post instance variable to update blog_post_params if the @post is valid. If it is valid, it is directed to the blog_post_path if it is not valid the post is not updated and it returns to blog_post_path. It then defines a new method destroy which uses @post instance variable and finds the BlogPost by the id. If the @post instance variable is deleted, it goes back to blog_post_path. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # If the blog post is not deleted, it goes back to blog_post_path.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  #This command can only respond to a message with a implicit receiver The private is used outside of any other method and it defines a method called blog_post_params. 
  private
  def blog_post_params
    # ---10)
    #This command is within the private method blog_post_params and it adds a method that requires each object blog_post to contain a title and some content. 
    params.require(:blog_post).permit(:title, :content)
  end
end
