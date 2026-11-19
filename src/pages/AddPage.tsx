import {useForm} from "react-hook-form"
import axios from "axios"
import { useNavigate } from "react-router-dom";
interface addTask {
    title: string,
    description: string,
    dueDate: string,
    priority: string,
    status: string
  }
function AddPage() {
  const nav = useNavigate()
  const {register, handleSubmit, formState: {errors}} = useForm<addTask>()
  const onSubmit = (data:addTask)=>{
    axios.post("http://localhost:3000/tasks",{
      ...data
    }).then(()=>{
      alert("Thêm thành công")
      nav("/")
    })
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Title
          </label>
          <input
          {...register("title", {required: "Tên không để trống", minLength: 8})}
            type="text"
            id="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && <span> {errors.title.message} </span> }
        </div>

         <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Description
          </label>
          <textarea
          rows={5}
          {...register("description", {required: "Không để trống", minLength: 8})}
            placeholder="Vui lòng nhập..."
            id="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.description && <span> {errors.description.message} </span> }
        </div>

        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            DueDate
          </label>
          <input
          {...register("dueDate", {required: "Ngày tháng không để trống"})}
            type="date"
            id="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.dueDate && <span> {errors.dueDate.message} </span> }
        </div>

        <div>
          <label htmlFor="selectOption" className="block font-medium mb-1">
            Priority
          </label>
          <select
           {...register("priority", {required: "Không để trống"})}
            id="selectOption"
            className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="low">Low</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
          </select>
        </div>
        <div>
          <label htmlFor="selectOption" className="block font-medium mb-1">
            Status
          </label>
          <select
           {...register("status", {required: "Không để trống"})}
            id="selectOption"
            className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="pending">Pending</option>
            <option value="done">Done</option>
          </select>
        </div>
       
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPage;
