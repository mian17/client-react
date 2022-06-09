import React from "react";
import blog_1 from "../../Assets/img/blog/blog-1.jpg";
import blog_2 from "../../Assets/img/blog/blog-2.jpg";
import blog_3 from "../../Assets/img/blog/blog-3.jpg";

const Blog = () => {
  return (
    <section className="from-blog spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title from-blog__title">
              <h2>Góc nội trợ</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="blog__item">
              <div className="blog__item__pic">
                <img src={blog_1} alt="" />
              </div>
              <div className="blog__item__text">
                <ul>
                  <li>
                    <i className="fa fa-calendar-o"></i> 4/5/2019
                  </li>
                  <li>
                    <i className="fa fa-comment-o"></i> 5
                  </li>
                </ul>
                <h5>
                  <a href="/">Các tuyệt chiêu nấu ăn đơn giản</a>
                </h5>
                <p>
                  Sed quia non numquam modi tempora indunt ut labore et dolore
                  magnam aliquam quaerat{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="blog__item">
              <div className="blog__item__pic">
                <img src={blog_2} alt="" />
              </div>
              <div className="blog__item__text">
                <ul>
                  <li>
                    <i className="fa fa-calendar-o"></i> 4/5/2019
                  </li>
                  <li>
                    <i className="fa fa-comment-o"></i> 5
                  </li>
                </ul>
                <h5>
                  <a href="/">
                    6 cách chuẩn bị bữa sáng chỉ trong vòng 30 phút
                  </a>
                </h5>
                <p>
                  Sed quia non numquam modi tempora indunt ut labore et dolore
                  magnam aliquam quaerat{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="blog__item">
              <div className="blog__item__pic">
                <img src={blog_3} alt="" />
              </div>
              <div className="blog__item__text">
                <ul>
                  <li>
                    <i className="fa fa-calendar-o"></i> 4/5/2019
                  </li>
                  <li>
                    <i className="fa fa-comment-o"></i> 5
                  </li>
                </ul>
                <h5>
                  <a href="/">Tham quan nông trại tại Việt Nam</a>
                </h5>
                <p>
                  Sed quia non numquam modi tempora indunt ut labore et dolore
                  magnam aliquam quaerat{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
