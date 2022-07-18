import { BiEnvelope } from 'react-icons/bi';

export default function Buttons() {
  return (
    <div className="mx-2 my-2 px-6 flex flex-wrap">
      <button className="mx-2 my-2 bg-blue-700 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-8 py-3 text-sm leading-6">Button</button>   

    <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-8 py-3 text-sm leading-6">Button</button>
  
    <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-gray-900 hover:text-gray-900 rounded border border-gray-800 text-gray-800 px-8 py-3 text-sm leading-6">Button</button>
   
    <button className="mx-2 my-2 bg-gray-100 transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-300 text-gray-600 px-8 py-3 text-sm leading-6">Button</button>
  
    <button className="mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-300 rounded text-indigo-700 px-8 py-3 text-sm leading-6">Button</button>

    <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-gray-700 hover:text-gray-600 rounded border border-gray-600 text-gray-500 px-8 py-3 text-sm leading-6">Button</button>

    <button className="mx-2 my-2 bg-gray-300 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-indigo-700 px-8 py-3 text-sm leading-6">Button</button>
  
    <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-8 py-3 text-sm leading-6">Button</button>
   
   
  
    <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out focus:outline-none hover:bg-gray-100 rounded text-indigo-700 px-8 py-3 text-sm leading-6">Button</button>
  
    {/* Button with icon starts (react-icons)*/}
    <a href="javascript: void(0)" className="mx-2 my-2 flex items-center bg-white transition duration-150 ease-in-out hover:border-gray-900 hover:text-gray-900 rounded border border-gray-800 text-gray-800 pl-3 pr-6 py-2 text-sm">
        <span className="h-4 w-4 mr-2">
        <BiEnvelope />
        </span>
        Button
    </a>
    {/* Button with icon ends */}
</div>
  )
}
