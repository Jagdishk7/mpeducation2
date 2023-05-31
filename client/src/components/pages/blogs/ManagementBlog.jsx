import React from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";
import { blogs } from "./BlogContent";

const ManagementBlog = () => {
  return (
    <>
      <div className="flex-center fd-c">
        <h1 className="page-heading">Blogs</h1>

        <div className="container container-flex">
          <main role="main" className="blogs-main">
            <article className="article-featured rounded-shadow">
              <h2 className="article-title sub-heading">
              {blogs.management.title}
              </h2>
              <hr />
              <img
                src={blogs.management.img}
                alt={blogs.management.title}
                className="article-image"
              />
              <p className="article-info">{blogs.management.date}</p>
              <h1>{blogs.management.title}</h1>
              <p className="article-body">{blogs.management.desc1}</p>
              <h1>{blogs.management.desc2head}</h1>
              <p className="article-body">{blogs.management.desc2}</p>
              <h1>{blogs.management.desc3head}</h1>
              <p className="article-body">{blogs.management.desc3}</p>
              <h1>{blogs.management.desc4head}</h1>
              <p className="article-body">{blogs.management.desc4}</p>
              <h1>{blogs.management.desc5head}</h1>
              <p className="article-body">{blogs.management.desc5}</p>
              <h1>{blogs.management.desc6head}</h1>
              <p className="article-body">{blogs.management.desc6}</p>
              <h1>{blogs.management.desc7head}</h1>
              <p className="article-body">{blogs.management.desc7}</p>
              <h1>{blogs.management.desc8head}</h1>
              <p className="article-body">{blogs.management.desc8}</p>
            </article>

            
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
                {blogs.education.desc1.slice(0,150)}........
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
                {blogs.teacherskills.desc1.slice(0,150)}........
                </p>
                <Link to={'/teacherBlog'} className="article-read-more">
                  CONTINUE READING
                </Link>
              </div>
              <div className="widget-recent-post rounded-shadow">
                <h3 className="widget-recent-post-title">
                {blogs.sku.title}
                </h3>
                <img
                  src={blogs.sku.img}
                  alt={blogs.sku.title}
                  className="widget-image"
                />
                <p>
                {blogs.sku.desc1.slice(0,150)}........
                </p>
                <Link to={'/blogs'} className="article-read-more">
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

export default ManagementBlog;
