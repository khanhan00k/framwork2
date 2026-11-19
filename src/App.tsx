import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
             Thêm Danh sách
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
      </div>
      {/* <ListPage/> */}
      <Toaster />
      <Routes>
        <Route path="/add" element = {<AddPage/>} />
        <Route path="/" element = {<ListPage/>} />
        <Route path="/edit/:id" element = {<EditPage/>} />
      </Routes>
    </>
  );
}

export default App;
