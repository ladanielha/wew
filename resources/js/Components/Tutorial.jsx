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
            <div className="mb-10">Pilih nilai perbandingan terhadap masing-masing kriteria </div>
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
            <div className="font-bold">Cara Pemilihan Nilai</div>
            <div className="mb-4 mt-2 md:hidden">
              <div className="font-bold">3</div>
            </div>
            <div className="">Nilai 1 memiliki arti kedua kriteria memiliki kepantingan yang sama  </div>
            <div className="">Nilai 2 memiliki arti salah satu kriteria memiliki nilai sedikit lebih penting </div>
            <div className="">Nilai 3 memiliki arti salah satu kriteria memiliki nilai cukup lebih penting </div>
            <div className="">Nilai 4 memiliki arti salah satu kriteria memiliki nilai lebih penting </div>
            <div className="mb-10">Nilai 5 memiliki arti salah satu kriteria memiliki nilai sangat lebih penting </div>

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
            <div className="mb-10">Bila nilai yang di masukan tidak konsisten maka masukan nilai kembali </div>
          </div>
        </div>
      </div>
    
        
        
    </>
  )
}
export default Tutorial
