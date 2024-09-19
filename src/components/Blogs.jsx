import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../Redux/apiSlice";
import PageBlogs from "./PageBlogs";

const Blogs = () => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store);
  console.log(selector.api, "---- blogs");
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (selector.api.isLoading) return <h1>Loading...</h1>;
  if (selector.api.isError) return <h1>Error...</h1>;
  return (
    <div className="p-5">
      {" "}
      {selector.api.data && selector.api.data.length > 0 && (
        <PageBlogs data={selector.api.data} />
      )}
    </div>
  );
};

export default Blogs;
