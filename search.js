import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://bfhldevapigw.healthrx.co.in/wp-cms/v1/posts/";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(API_URL, {
        params: {
          search,
          page
        }
      });
      setData(res.data);
      setTotalPages(res.headers["x-wp-totalpages"]);
    };
    fetchData();
  }, [search, page]);

  const handleSubmit = e => {
    e.preventDefault();
    setPage(1);
  };

  const handleChange
