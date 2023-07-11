import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from "axios";
import { useState,useEffect} from "react";


export default function Homepage() {
  const [posts,setPosts]=useState([]);
  const location=useLocation();
  const {search}=useLocation();

  useEffect(()=>{

    const fetchPosts=async ()=>{
      const res=await axios.get("/post/"+search)
      setPosts(res.data)
    }
    fetchPosts();
  },[search])

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
}