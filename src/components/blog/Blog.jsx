import React from "react";

const Blog = () => {
  const Blogs = [
    {
      id: 1,
      img: "https://lp-cms-production.imgix.net/2020-10/GettyRF_1082399820.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=35&dpr=3",
      userImage:
        "https://i.pinimg.com/originals/8b/7f/aa/8b7faa231ff109ad6fa5801fffcff0c5.jpg",
      userName: "Alex Martin",
      title: "7 best places in udaipur",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1pTRAImZPG9Vif3nobRO7f1INu2YMg_DaBzEs2fLqg&s",
      userImage:
        "https://th.bing.com/th/id/OIP.PHBQnuiYq-3HsbHksU99SgHaEW?rs=1&pid=ImgDetMain",
      userName: "Charlie Smith",
      title: "Elephant Jungle Sanctuary Chiang Mai",
    },
    {
      id: 3,
      img: "https://lp-cms-production.imgix.net/2020-10/GettyRF_1082399820.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=35&dpr=3",
      userImage:
        "https://i.pinimg.com/originals/8b/7f/aa/8b7faa231ff109ad6fa5801fffcff0c5.jpg",
      userName: "Alex Martin",
      title: "7 best places in udaipur",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1pTRAImZPG9Vif3nobRO7f1INu2YMg_DaBzEs2fLqg&s",
      userImage:
        "https://th.bing.com/th/id/OIP.PHBQnuiYq-3HsbHksU99SgHaEW?rs=1&pid=ImgDetMain",
      userName: "Charlie Smith",
      title: "Top 50 best places to visit in 2024",
    },
  ];

  return (
    <>
      {Blogs.map((blog) => (
        <div className="blog" key={blog.id} id={`blog-${blog.id}`}>
          <img src={blog.img} alt="" id={`blog-image-${blog.id}`} />
          <div className="profiledetails" id={`profiledetails-${blog.id}`}>
            <img
              src={blog.userImage}
              alt=""
              className="profile"
              id={`profile-image-${blog.id}`}
            />
            <span id={`profile-name-${blog.id}`}>{blog.userName}</span>
          </div>
          <div className="titleofblog" id={`titleofblog-${blog.id}`}>
            <p id={`blog-title-${blog.id}`}>{blog.title}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog;
