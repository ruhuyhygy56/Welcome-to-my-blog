class BlogpostsController < 
    ApplicationController
    def index
        @blogposts = Post.all
    end
end