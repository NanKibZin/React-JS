
const ChangeAddress = () => {
  return (
    <div>
      <input type="text" placeholder="Input Your new address"/>
      <div className="flex justify-end">
        <button className=" bg-gray-500 text-white px-4 rounded mr-2">Cancel</button>
        <button className=" bg-blue-500 to-white py-2 px-4 rounded">Save Address</button>
      </div>
    </div>
  )
}

export default ChangeAddress
