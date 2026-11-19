import { useState, useEffect } from "react";
import axios from "axios"
function ListPage() {
  interface listTask { 
    id: string,
    title: string,
    description: string,
    dueDate: number,
    priority: string,
    status: string
  }
  const [tasks, setTask] = useState<listTask[]>([])
  const getTasks = async()=>{
    const res = await axios.get("http://localhost:3000/tasks")
    setTask(res.data)
  }
  const handleDelete = async(id:string)=>{
    if(!confirm("Bạn chắc chắn muốn xóa"))return;
    await axios.delete(`http://localhost:3000/tasks/${id}`).then(()=>{
      getTasks()
      alert("Xóa thành công")
    })
  }
  useEffect(()=>{
    getTasks()
  })


  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Title
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Description
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                DueDate
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Priority
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Status
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Delete
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Edit
              </th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((item, index)=>(
              <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300"> {index + 1} </td>
              <td className="px-4 py-2 border border-gray-300"> {item.title} </td>
              <td className="px-4 py-2 border border-gray-300"> {item.description} </td>
              <td className="px-4 py-2 border border-gray-300"> {item.dueDate} </td>
              <td className="px-4 py-2 border border-gray-300"> {item.priority} </td>
              <td className="px-4 py-2 border border-gray-300"> {item.status} </td>
              <td className="px-4 py-2 border border-gray-300"> <button onClick={()=> handleDelete(item.id)} >Delete</button> </td>
              <td className="px-4 py-2 border border-gray-300"> <a href={`/edit/${item.id}`}>Edit</a> </td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;
