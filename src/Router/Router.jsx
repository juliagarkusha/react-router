import { Routes, Route } from "react-router-dom";
import Albums from "../pades/Albums";
import Photos from "../pades/Photos";
import Users from "../pades/Users";
import AlbumsList from "../components/common/albums/AlbumsList";
import PhotosList from "../components/common/PhotosList";

function Router () {
  return(
    <Routes>
      <Route path="/users" element={<Users />}/>
      <Route path="/albums" element={<Albums />}/>
      <Route path="/photos" element={<Photos />}/>
      <Route path="/users/:id/albums" element={<AlbumsList />}/>
      <Route path="/users/:id/albums/:albumId" element={<PhotosList />}/>
    </Routes>
  )
}

export default Router;
