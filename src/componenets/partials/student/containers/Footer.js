import React, { Fragment } from "react";

export default function StudentFooter() {
  return (
    <Fragment>
      <footer className="footer dashboard-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6">
              <p>&copy; کلیه حقوق برای آموزشگاه بعثت محفوظ است</p>
            </div>
            <div className="col-sm-6 d-none d-sm-block col">
              <p className="text-left">
                <a
                  href="https://zobdeganweb.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow external"
                >
                  پیاده سازی توسط زبدگان
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
