import { Link } from "react-router-dom";
import './global.css'
import { useRef, useState } from "react";


function App() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  // ... (restante do código)
  const name = useRef<HTMLInputElement | null>(null)
  const image = useRef<HTMLInputElement | null>(null)
  const [nameRis, setNameRis] = useState('')
  const [imgRis, setImgRis] = useState('')
  const keyLocal = 'valuesUsers'
  const values: { name: string; imgUrl: string; }[] = []
  const entrar = () => {
    if(name.current && image.current){
     setNameRis(name.current.value)
     values.push({
       name: name.current.value,
       imgUrl: imgRis
     })

     localStorage.setItem(keyLocal, JSON.stringify(values))
    }
  }
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setImgRis(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <>
      <div className="w-screen h-screen bg-[#000] overflow-hidden">
        <h1 className="text-white text-[30px] font-bold absolute top-5 left-8">Build<span className="text-violet-600">UI</span></h1>
        <div className="absolute flex flex-col gap-4 top-[60%] left-[470px] w-auto h-auto z-10">
        <input type="text" 
           placeholder="Digite o seu nome"
           ref={name}
           className="px-3 w-[350px] py-3 rounded-sm outline-none bg-[#dedede]"
          />
         <input ref={image} type="file" accept="image/*" 
          className="px-3 w-[350px] py-3 rounded-sm outline-none bg-[#dedede]"
         onChange={handleImageChange} />

      <Link to={"/home"}>
      <button onClick={entrar} className='bg-blue-800 w-[350px] py-3 rounded-md text-white font-semibold'>Entrar</button>
      </Link>
      <div className='text-white'>
        
       
        </div>
        </div>
        <h1
         className="text-white font-semibold text-[50px] text-center mt-[200px]"
        >Faça o seu Login! E começa <br /> a a sua <span className="textR text-violet-600">criatividade</span></h1>
        <div className="relative top-[-450px]">
          <img src="/bola.svg"  />
        </div>
        
		
      </div>
    </>
  );
}

export default App;