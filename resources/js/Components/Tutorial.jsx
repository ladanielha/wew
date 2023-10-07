import { Link } from "@inertiajs/react"

const Tutorial = ({ }) => {


  return (
    <>
      <div className="relative mt-5 text-left">

        <div className="flex items-center relative">
          <div className="hidden md:block w-20">
            <div className="font-bold italic">1</div>
            <div className="md:flex space-x-1 text-xs">

            </div>
          </div>

          <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
            <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
          </div>

          <div className="ml-10">
            <div className="font-bold">Cara Menggunakan</div>
            <div className="mb-4 mt-2 md:hidden">
            </div>
            <div className="mb-10">Terdapat 4 kriteria : Fasilitas, Palayanan, Ramah keluarga, Akomodasi</div>
          </div>
        </div>

        <div className="flex items-center relative">
          <div className="hidden md:block w-20">
            <div className="font-bold italic">2</div>
            <div className="md:flex space-x-1 text-xs">
            </div>
          </div>

          <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
            <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
          </div>

          <div className="ml-10">
            <div className="font-bold">Keterangan Nilai</div>
            <div className="mb-4 mt-2 md:hidden">
              <div className="font-bold">3</div>
            </div>
            <div className="">Nilai 1 memiliki arti kedua kriteria memiliki kepantingan yang sama  </div>
            <div className="">Nilai 2 memiliki arti salah satu kriteria memiliki nilai sedikit lebih penting dibanding kriteria </div>
            <div className="">Nilai 3 memiliki arti salah satu kriteria memiliki nilai sedikit lebih dari sedikit lebih penting dibanding kriteria lawan</div>
            <div className="">Nilai 4 memiliki arti salah satu kriteria memiliki nilai lebih penting dibanding kriteria lawan</div>
            <div className="">Nilai 5 memiliki arti salah satu kriteria memiliki nilai dua kali lebih penting dibanding kriteria lawan</div>
            <div className="">Nilai 6 memiliki arti salah satu kriteria memiliki nilai antara 5 dan 7</div>
            <div className="">Nilai 7 memiliki arti salah satu kriteria memiliki nilai sangat lebih penting dibanding kriteria lawan</div>
            <div className="">Nilai 8 memiliki arti salah satu kriteria memiliki nilai antara 7 dan 9 </div>
            <div className="mb-10">Nilai 9 memiliki arti salah satu kriteria memiliki nilai mutal lebih penting dibanding kriteria lawan</div>

          </div>
        </div>
        <div className="flex items-center relative">
          <div className="hidden md:block w-20">
            <div className="font-bold italic">3</div>
            <div className="md:flex space-x-1 text-xs">
            </div>
          </div>

          <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
            <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
            <i className="fas fa-circle bottom-0 -ml-2 absolute"></i>
          </div>

          <div className="ml-10">
            <div className="font-bold">Hasil 3</div>
            <div className="mb-4 mt-2 md:hidden">
            </div>
            {/* <div className="">Untuk mendapatkan nilai yang kosisten dan valid masukan nilai kriteria yang di anggap paling penting dan memasukan angka 1 jika krieria tersebut tidak sesuai dengan keinginan kamu  </div> */}
            <div className="mb-10">Jika nilai yang di masukan tidak konsisten , masukan nilai kembali </div>
          </div>
        </div>
      </div>



        
        
    </>
  )
}
export default Tutorial
