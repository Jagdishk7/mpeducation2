import React from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";
import { blogs } from "./BlogContent";

const EducationBlog = () => {
  return (
    <>
      <div className="flex-center fd-c">
        <h1 className="page-heading">Blogs</h1>

        <div className="container container-flex">
          <main role="main" className="blogs-main">
            <article className="article-featured rounded-shadow">
              <h2 className="article-title sub-heading">
                {blogs.education.title}
              </h2>
              <hr />
              <img
                src={blogs.education.img}
                alt={blogs.education.title}
                className="article-image"
              />
              <p className="article-info">{blogs.sku.date}</p>
              <h1>{blogs.education.title}</h1>
              <p className="article-body">{blogs.education.desc1}</p>
              <h1>{blogs.education.desc2head}</h1>
              <p className="article-body">{blogs.education.desc2}</p>
              <h1>{blogs.education.desc3head}</h1>
              <p className="article-body">{blogs.education.desc3}</p>
              <h1>{blogs.education.desc4head}</h1>
              <p className="article-body">{blogs.education.desc4}</p>
              <h1>{blogs.education.desc5head}</h1>
              <p className="article-body">{blogs.education.desc5}</p>
              <h1>{blogs.education.desc6head}</h1>
              <p className="article-body">{blogs.education.desc6}</p>
              <h1>{blogs.education.desc7head}</h1>
              <p className="article-body">{blogs.education.desc7}</p>
              <h1>{blogs.education.desc8head}</h1>
              <p className="article-body">{blogs.education.desc8}</p>
              <h1>{blogs.education.desc9head}</h1>
              <p className="article-body">{blogs.education.desc9}</p>
              <h1>{blogs.education.desc10head}</h1>
              <p className="article-body">{blogs.education.desc10}</p>
            </article>
          </main>

          <aside className="sidebar">
            <div className="sidebar-widget">
              <h2 className="widget-title sub-heading">RECENT POSTS</h2>
              <div className="widget-recent-post rounded-shadow ">
                <h3 className="widget-recent-post-title">{blogs.sku.title}</h3>
                <img
                  src={blogs.sku.img}
                  alt={blogs.sku.title}
                  className="widget-image"
                />
                <p>{blogs.sku.desc1.slice(0, 150)}........</p>
                <Link to={"/blogs"} className="article-read-more">
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
                <Link to={"/teacherBlog"} className="article-read-more">
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
                {blogs.management.desc1.slice(0,150)}........
                </p>
                <Link to={"/managementBlog"} className="article-read-more">
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

export default EducationBlog;
