// /*
//   Class block
//     - id: string
//     - data: any
// */
// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// class BlockBase<T> {
//   id: string;
//   data: T;
//   constructor(data: T) {
//     this.id = uuidv4();
//     this.data = data;
//   }

//   getId() {
//     return this.id;
//   }
//   getData() {
//     return this.data;
//   }
//   setData(_data: T) {
//     this.data = data;
//   }


// }

// // Show and Edit the block data using form and input tag
// function BlockForm({ data }: { data: any; }) {
//   const [inputValue, setInputValue] = useState('');
//   let bb = new BlockBase<typeof data>(data);
//   const handleSubmit = (event:Event) => {
//     event.preventDefault(); // Prevent the default form submission behavior
//     bb.setData(inputValue); // Set the submitted value
//   };
//   return (
//     <form action={bb.getData()}>
//       <input type="text" value={inputValue} />
//       <button type="submit">OK</button>
//       <button type="reset">X</button>
//     </form>
//   );
// }
// const FormComponent = () => {
//   // State variables to manage form inputs
//   const [inputValue, setInputValue] = useState('');
//   const [submittedValue, setSubmittedValue] = useState('');

//   // Handle input change
//   const handleInputChange = (event:Event) => {
//     if(event.target==null){
//       return;
//     }
//     setInputValue(event.target.value);
//   };

//   // Handle form submission
//   const handleSubmit = (event:Event) => {
//     event.preventDefault(); // Prevent the default form submission behavior
//     setSubmittedValue(inputValue); // Set the submitted value
//   };

//   return (
//     <div className="flex flex-col items-center p-4 bg-gray-100">
//       <form onSubmit={handleSubmit} className="flex flex-col items-center">
//         <label className="mb-2">
//           Enter Value:
//           <input
//             type="text"
//             value={inputValue}
//             onChange={handleInputChange}
//             className="ml-2 p-1 border rounded"
//           />
//         </label>
//         <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
//           Submit
//         </button>
//       </form>
//       {submittedValue && (
//         <div className="mt-4">
//           <h2>Submitted Value:</h2>
//           <p>{submittedValue}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default function Block({ data }: { data: any; }) {
//   return (
    
//   );
// }
