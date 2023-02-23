import { Routes, Route } from "react-router-dom";
import Users from "../pades/Users";
import AlbumsList from "../components/common/albums/AlbumsList";
import PhotosList from "../components/common/PhotosList";

function Router () {
  return(
    <Routes>
      <Route path="/users" element={<Users />}/>
      <Route path="/users/:userId/albums" element={<AlbumsList />}/>
      <Route path="/users/:userId/albums/:albumId" element={<PhotosList />}/>
    </Routes>
  )
}

export default Router;
