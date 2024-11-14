import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DefaultLayout from "./components/layouts/DefaultLayout";
import Posts from "./pages/Posts";
import SinglePost from "./pages/SinglePost";
import CreatePost from "./pages/CreatePost";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./components/layouts/DashboardLayout";
import PrivatePage from "./components/middlewares/PrivatePage";
import Login from "./pages/Login";

export default function () {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="posts" element={<Posts />} />
                <Route path="posts/:slug" element={<SinglePost />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            {/* Private Routes */}
            <Route
                path="/"
                element={
                    <PrivatePage>
                        <DashboardLayout />
                    </PrivatePage>
                }
            >
                <Route path="create" element={<CreatePost />} />
            </Route>
        </Routes>
    );
}
