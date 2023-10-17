import { useState } from "react";

export default function App() {

  const [file, setFile] = useState<string | null | undefined>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>): void {
    if (e.target.files) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }

  function handleRemoveFile(): void {
    setFile(null);
  }

  return (
    <div className="flex flex-col bg-gray-50/10 p-10 font-sans-serif items-center justify-center min-h-screen">
      <div className="relative h-auto bg-white rounded-lg shadow-lg w-4/5">
        <div className="relative border-b-2">
          <h1 className="text-3xl m-4 text-gray-600">Biobotanix</h1>
        </div>
        <div className="relative p-4" >
          <form className="relative" action="" >
            <div className="pt-0 flex flex-col">
              <label className="mb-4 text-gray-600 text-lg font-light" htmlFor="product_image">Image</label>
              {file ? (
                <div className={`relative flex justify-center container mx-auto w-full h-full rounded-2xl border border-gray-300`}>
                  <img className="rounded-2xl" src={file ? file : 'https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'} />
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="absolute -top-4 border -right-3 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset border-gray-300"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ) : (
                <label htmlFor="product_image" className="flex flex-col items-center justify-center border-4 border-gray-300 border-dashed rounded h-36 px-6 text-lg text-gray-600 focus:outline-none focus:ring focus:border-blue-300 cursor-pointer">
                  <svg className="w-8 h-8 text-gray-600
          " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                  <span className="mt-2 text-base leading-normal text-blue-500 font-bold">Upload your image</span>
                  <input type="file" id="product_image" className="hidden" onChange={handleFileChange} />
                </label>
              )}
              <p className="py-2 text-gray-400">Upload your image files in jpg or png.</p>
            </div>
            <div className="mb-4 pt-0 flex flex-col">
              <label className="mb-2 text-gray-800 text-lg font-light">Name</label>
              <input type="text" className="border-2 rounded h-10 px-6 text-lg text-gray-600 focus:outline-none focus:ring focus:border-blue-300" disabled />
            </div>
            <div className="mb-4 pt-0 flex flex-col">
              <label className="mb-2 text-gray-800 text-lg font-light">Category</label>
              <input type="text" className="border-2 rounded h-10 px-6 text-lg text-gray-600 focus:outline-none focus:ring focus:border-blue-300" disabled />
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}