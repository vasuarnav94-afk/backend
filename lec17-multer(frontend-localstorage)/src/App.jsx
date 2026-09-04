import axios from 'axios'

import { useState } from 'react'

const App = () => {
const [file,setfile] = useState(null)
console.log(file)

const handleSubmit = async()=>{
  if(!file) return console.log("file is not found")
    try {
      let formData = new formData();
      formData.append("image", file)

      let res = await axios.post("http://localhost:3000/api/post",formData);
      console.log(res);
    } catch (error) {
      console.log("frontend",error.message);
    }
}

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 p-6'>
      <div className='bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-gray-100'>
        <h1 className='text-3xl font-bold text-blue-600 mb-8 text-center '>
          MULTER DATA FOR FTTP
        </h1>

        <input 
        onChange={(e) => setfile(e.target.files[0]) }
        type='file'
        className='w-full border-2 border-gray-200 rounded-lg py-3 px-4 focus:border-blue-500 outline-none transition-all' />

      <button onClick={handleSubmit}
      className='mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer shadow-md'>

        submit
      </button>

      </div>
      
    </div>
  )
}

export default App
