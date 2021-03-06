import React, { useState } from "react";
import { Link } from "react-router-dom";
function CategoryItems({ ...props }) {
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);
  return (
    <tr>
      <td>{props.title}</td>
      {/* <td className={props.status === true ? "text-success" : "text-danger"}>
        {props.status === true ? "تایید شده" : "تایید نشده"}
      </td> */}
      <td>
        <Link
          to={`/admin/update-category/${props.id}`}
          className="btn btn-primary pt-2 hint--top"
          aria-label="ویرایش"
        >
          <i className="icon-pencil"></i>
        </Link>
        <button
          className="btn btn-danger pt-2 hint--top"
          aria-label="حذف"
          onClick={async (e) => {
            setIsDisabledBtn(true);
            setIsDisabledBtn(await props.DeleteItem(e, props.id));
          }}
          disabled={isDisabledBtn}
        >
          <i className="icon-trash"></i>
        </button>
      </td>
    </tr>
  );
}
export default CategoryItems;
