import React from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";
import { blogs } from "./BlogContent";

const TeacherBlog = () => {
  return (
    <>
      <div className="flex-center fd-c">
        <h1 className="page-heading">Blogs</h1>

        <div className="container container-flex">
          <main role="main" className="blogs-main">
            <article className="article-featured rounded-shadow">
              <h2 className="article-title sub-heading">
                Importance of skilled Teachers in Schools
              </h2>
              <hr />
              <img
                src="assets\blogs\teacherskills.jpg"
                alt="Importance of skilled Teachers in Schools"
                className="article-image"
              />
              <p className="article-info">{blogs.teacherskills.date}</p>
              <p className="article-body">
                 {blogs.teacherskills.desc1}
              </p>
              <p className="article-body">
                 {blogs.teacherskills.desc2}
              </p>
              <p className="article-body">
              <strong>Empathy:</strong>
                 {blogs.teacherskills.desc3}
              </p>
              <p className="article-body">
              <strong>Grounded in Values:</strong>
                 {blogs.teacherskills.desc4}
              </p>
              <p className="article-body">
              <strong>Knowledge of Content: </strong>
                 {blogs.teacherskills.desc5}
              </p>
              <p className="article-body">
              <strong>Competency in Latest Technology: </strong>
                 {blogs.teacherskills.desc6}
              </p>
              <p className="article-body">
              <strong> Knowledge of SDGs: </strong>
                 {blogs.teacherskills.desc7}
              </p>
              <p className="article-body">
              <strong> A Unified Global Outlook: </strong>
                 {blogs.teacherskills.desc8}
              </p>
              <p className="article-body">
              <strong> Health Consciousness: </strong>
                 {blogs.teacherskills.desc9}
              </p>
              <p className="article-body">
                 {blogs.teacherskills.desc10}
              </p>
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
              <div className="widget-recent-post rounded-shadow">
                <h3 className="widget-recent-post-title">
                {blogs.management.title}
                </h3>
                <img
                  src= {blogs.management.img}
                  alt= {blogs.management.title}
                  className="widget-image"
                />
                <p>
                {blogs.management.desc1.slice(0,150)}........
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

export default TeacherBlog;
