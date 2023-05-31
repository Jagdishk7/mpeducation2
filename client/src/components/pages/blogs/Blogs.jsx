import React from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";
import { blogs } from "./BlogContent";

const Blogs = () => {
  return (
    <>
      <div className="flex-center fd-c">
        <h1 className="page-heading">Blogs</h1>

        <div className="container container-flex">
          <main role="main" className="blogs-main">
            <article className="article-featured rounded-shadow">
              <h2 className="article-title sub-heading">
                {blogs.sku.title}
              </h2>
              <hr />
              <img
                src={blogs.sku.img}
                alt={blogs.sku.title}
                className="article-image"
              />
              <p className="article-info">{blogs.sku.date}</p>
              <p className="article-body">
                {blogs.sku.desc1}
              </p>
              <p className="article-body">
                {blogs.sku.desc2}
              </p>
              <p className="article-body">
                {blogs.sku.desc3}
              </p>
            </article>

            {/* <article className="article-recent">
              <div className="article-recent-main">
                <h2 className="article-title">Keeping cooking simple </h2>
                <p className="article-body">
                  Food is a very important part of everyone's life. If you want
                  to be healthy, you have to eat healthy. One of the easiest
                  ways to do that is to keep your cooking nice and simple.
                </p>
                <a href="/" className="article-read-more">
                  CONTINUE READING
                </a>
              </div>
              <div className="article-recent-secondary">
                <img
                  src="assets\CollegeUniversities\sku.jpg"
                  alt="Shri Krishna University"
                  className="article-image"
                />
                <p className="article-info">July 19, 2019</p>
              </div>
            </article>
            <article className="article-recent">
              <div className="article-recent-main">
                <h2 className="article-title">Keeping cooking simple </h2>
                <p className="article-body">
                  Food is a very important part of everyone's life. If you want
                  to be healthy, you have to eat healthy. One of the easiest
                  ways to do that is to keep your cooking nice and simple.
                </p>
                <a href="/" className="article-read-more">
                  CONTINUE READING
                </a>
              </div>
              <div className="article-recent-secondary">
                <img
                  src="assets\CollegeUniversities\sku.jpg"
                  alt="Shri Krishna University"
                  className="article-image"
                />
                <p className="article-info">July 19, 2019</p>
              </div>
            </article>
            <article className="article-recent">
              <div className="article-recent-main">
                <h2 className="article-title">Keeping cooking simple </h2>
                <p className="article-body">
                  Food is a very important part of everyone's life. If you want
                  to be healthy, you have to eat healthy. One of the easiest
                  ways to do that is to keep your cooking nice and simple.
                </p>
                <a href="/" className="article-read-more">
                  CONTINUE READING
                </a>
              </div>
              <div className="article-recent-secondary">
                <img
                  src="assets\CollegeUniversities\sku.jpg"
                  alt="Shri Krishna University"
                  className="article-image"
                />
                <p className="article-info">July 19, 2019</p>
              </div>
            </article> */}
          </main>

          <aside className="sidebar">
            <div className="sidebar-widget">
              <h2 className="widget-title sub-heading">RECENT POSTS</h2>
              <div className="widget-recent-post rounded-shadow ">
                <h3 className="widget-recent-post-title">
                  {blogs.education.title}
                </h3>
                <img
                  src={blogs.education.img}
                  alt={blogs.education.title}
                  className="widget-image"
                />
                <p>
                  {blogs.education.desc1.slice(0,150)}.........
                </p>
                <Link to={'/educationBlog'} className="article-read-more">
                  CONTINUE READING
                </Link>
              </div>
              <div className="widget-recent-post rounded-shadow">
                <h3 className="widget-recent-post-title">
                  {blogs.teacherskills.title}
                </h3>
                <img
                  src={blogs.teacherskills.img}
                  alt={blogs.teacherskills.title}
                  className="widget-image"
                />
                <p>
                {blogs.teacherskills.desc1.slice(0,150)}.........
                </p>
                <Link to={'/teacherBlog'} className="article-read-more">
                  CONTINUE READING
                </Link>
              </div>
              <div className="widget-recent-post rounded-shadow">
                <h3 className="widget-recent-post-title">
                  {blogs.management.title}
                </h3>
                <img
                  src={blogs.management.img}
                  alt={blogs.management.title}
                  className="widget-image"
                />
                <p>
                {blogs.management.desc1.slice(0,150)}.........
                </p>
                <Link to={'/managementBlog'} className="article-read-more">
                  CONTINUE READING
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Blogs;
