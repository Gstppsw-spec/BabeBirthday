// import * as React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import { Nav } from "react-bootstrap";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// // import "bootstrap/dist/css/bootstrap.css";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <form className="formTambahBarang">
//         <h2>Tambah Barang</h2>
//         <div className="container">
//           <fieldset className="fieldset">
//             <legend className="legendMerk">
//               Merk <span style={{ color: "red" }}>*</span>
//             </legend>
//             <select name="cars" id="cars" placeholder="Masukkan merk" className="inputMerk" >
//               <option value="">Masukkan merk</option>
//               <option value="saab">Saab</option>
//               <option value="mercedes">Mercedes</option>
//               <option value="audi">Audi</option>
//             </select>
//           </fieldset>
//           <fieldset className="fieldset">
//           <legend className="legendMerk">
//               Kode <span style={{ color: "red" }}>*</span>
//             </legend>
//             <select name="cars" id="cars" placeholder="Masukkan Kode" className="inputMerk" >
//               <option value="">Masukkan kode</option>
//               <option value="saab">Saab</option>
//               <option value="mercedes">Mercedes</option>
//               <option value="audi">Audi</option>
//             </select>
//           </fieldset>
//         </div>

//         <div className="container">
//           <fieldset className="fieldset">
//             <legend className="legendMerk">
//               Seri <span style={{ color: "red" }}>*</span>
//             </legend>
//             <select name="cars" id="cars" placeholder="Masukkan Seri" className="inputMerk" >
//               <option value="">Masukkan seri</option>
//               <option value="saab">Saab</option>
//               <option value="mercedes">Mercedes</option>
//               <option value="audi">Audi</option>
//             </select>
//           </fieldset>
//           <fieldset className="fieldset">
//           <legend className="legendMerk">
//               Tipe <span style={{ color: "red" }}>*</span>
//             </legend>
//             <select name="cars" id="cars" placeholder="Masukkan Tipe" className="inputMerk" >
//               <option value="">Masukkan tipe</option>
//               <option value="saab">Saab</option>
//               <option value="mercedes">Mercedes</option>
//               <option value="audi">Audi</option>
//             </select>
//           </fieldset>
//         </div>

//         <div className="container">
//           <fieldset className="fieldset">
//             <legend className="legendMerk">
//               Kategori <span style={{ color: "red" }}>*</span>
//             </legend>
//             <select name="cars" id="cars" placeholder="Masukkan kategori" className="inputMerk" >
//               <option value="">Masukkan kategori</option>
//               <option value="saab">Saab</option>
//               <option value="mercedes">Mercedes</option>
//               <option value="audi">Audi</option>
//             </select>
//           </fieldset>
//           <fieldset className="fieldset">

//             <legend className="legendKode">
//               Nama <span style={{ color: "red" }}>*</span>
//             </legend>
//             <input
//               type="text"
//               placeholder="Masukkan nama"
//               className="inputMerk"
//             />
//           </fieldset>
//         </div>
//         <div className="container">
//           <fieldset className="fieldset">
//             <legend className="legendMerk">
//               Sparepart <span style={{ color: "red" }}>*</span>
//             </legend>
//             <select name="cars" id="cars" placeholder="Masukkan Sparepart" className="inputMerk" >
//               <option value="">Masukkan sparepart</option>
//               <option value="saab">Saab</option>
//               <option value="mercedes">Mercedes</option>
//               <option value="audi">Audi</option>
//             </select>
//           </fieldset>
//           <fieldset className="fieldset">
//           <legend className="legendMerk">
//               Satuan <span style={{ color: "red" }}>*</span>
//             </legend>
//             <select name="cars" id="cars" placeholder="Masukkan Satuan" className="inputMerk" >
//               <option value="">Masukkan satuan</option>
//               <option value="saab">Saab</option>
//               <option value="mercedes">Mercedes</option>
//               <option value="audi">Audi</option>
//             </select>
//           </fieldset>
//         </div>
//         <button type="submit">Tambahkan</button>
//       </form>
//     </div>
//   );
// }

// export default App;
// "homepage": "https://github.com/Gstppsw-spec/babeBirthday",

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageUltah from "./PageUltah";
import PageUcapan from "./PageUcapan";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageUltah/>}/>
            <Route path="/ucapan" element={<PageUcapan/>}/>
        </Routes>
    </BrowserRouter>
   
  );
};

export default App;
