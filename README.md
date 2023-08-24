# Blog API

This is a simple Express.js API for managing blog posts and comments with authentication using JSON Web Tokens (JWT).

## Getting Started

### Installation
1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blog-api.git
   cd blog-api


### Install dependecies
 --npm i

 ### start server
--nodemon index.js

POST /api/v1/createuserr: Register a new user.
POST /api/v1/login: Login and receive a JWT token.
GET /api/v1/logout: Logout User.
POST /api/createblog: Create a new blog post (requires authentication).
GET /api/posts: List all blog posts.
PUT /api/posts/:postId: Update a blog post (requires authentication and ownership)..
POST /api/posts/:postId/comments: Create a new comment on a blog post (requires authentication).
GET /api/posts/:postId/comments: List all comments on a blog post.
