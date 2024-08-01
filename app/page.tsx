import Image from "next/image";
import Link from "next/link";


export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24x   ">

      <h1 className="text-white text-4xl mb-4 ">Welcome</h1>

      <div className="flex items-center mb-50">
        <Image
          src="/logo.png" // La ruta a tu imagen
          alt="eiPet Food Logo"
          width={63.2} // Ajusta el ancho según sea necesario
          height={63.2} // Ajusta la altura según sea necesario
          className="mr-0"
        />
        <Link className=" text-7xl text-[#f0bd00] font-bold" href={'/about'}>iPet <samp className="text-[#ffffff]">food</samp></Link>
      </div>

    </main>
  );
}

/* import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen p-24">
      <Image
        src="/logo.png"
        alt="eiPet logo"
        width={110}
        height={110}
      />
      <Link className="text-7xl text-[#f0bd00] font-bold" href={'/about'}>eiPet <samp className="text-[#ffffff]">food</samp></Link>
    </main>
  );
} */
