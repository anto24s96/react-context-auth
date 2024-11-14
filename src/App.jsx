import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DefaultLayout from "./pages/DefaultLayout";
import Posts from "./pages/Posts";
import SinglePost from "./pages/SinglePost";
import CreatePost from "./pages/CreatePost";

export default function () {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="posts" element={<Posts />} />
                <Route path="posts/:slug" element={<SinglePost />} />
                <Route path="create" element={<CreatePost />} />
            </Route>
        </Routes>
    );
}
