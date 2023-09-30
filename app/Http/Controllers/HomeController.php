<?php

namespace App\Http\Controllers;

use App\Http\Resources\PlacesCollection;
use App\Models\Nilaipv;
use App\Models\Nilaialt;
use Illuminate\Http\Request;
use App\Models\Places;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;


$criteriaMatrix = [
    [1, 1/3, 1/3, 1/4],
    [3, 1, 1/2, 1/5],
    [3, 2, 1, 1/2],
    [4, 5, 2, 1]
];
class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $places = new PlacesCollection(Places::paginate(6));
        return Inertia::render('Client/Home',[ 
            'places'=> $places]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function wisata()
    {
        $places = new PlacesCollection(Places::paginate(15));
        return Inertia::render('Client/Wisata',[ 
            'places'=> $places]);
    }

    public function formreko()
    {
        //get kriteria untuk tampil di form 
        return Inertia::render('Client/Rekomendasi');
    }
    

    public function hitungbobot(Request $request)
    {
        //validasi nilai bobot yg dimasukan
        Validator::make($request->all(), [
            'fasilitas_pelayanan' => 'required',
            'fasilitas_ramah' => 'required',
            'fasilitas_akomodasi' => 'required',
            'pelayanan_ramah' => 'required',
            'pelayanan_akomodasi' => 'required',
            'ramah_akomodasi' => 'required',
          ], [
            'required'   => 'Bagian :attribute perbandingan tidak boleh kosong.',
          ],[
            
            'fasilitas_pelayanan'    => 'nilai',
            'fasilitas_ramah'    => 'nilai',
            'fasilitas_akomodasi'    => 'nilai',
            'pelayanan_ramah'    => 'nilai',
            'pelayanan_akomodasi'    => 'nilai',
            'ramah_akomodasi'    => 'nilai',
          ])->validate();

        //tampung nilai input dan koversi ke nilai bobot matrix
         /* $inMatrix = [];
        foreach(['fasilitas_pelayanan' ,   
        'fasilitas_ramah' ,   
        'fasilitas_akomodasi' ,   
        'pelayanan_ramah' ,   
        'pelayanan_akomodasi' ,   
        'ramah_akomodasi' ,] as $inMatrix){
            $value = $this->$request->all();
            $bobot[$inMatrix]=$this->convertCompareValue($value);
        } */


        //step 1 : definisikan array matrix dari input
        $inimatrixku = [
           /*  [1, 1/3, 1/3, 1/4],
            [3, 1, 1/2, 1/5],
            [3, 2, 1, 1/2],
            [4, 5, 2, 1] */
             [ 1  , 3  , 5  , 7],
            [ 1/3 ,1 ,  2  , 4],
            [ 1/5 ,1/2 ,1  , 3],
            [ 1/7, 1/4, 1/3, 1] 
        ];
        
        //step 2: panggil function normalisasi nilai matrix 
        $normalizedMatrix = $this->normalizeMatrixByColumnSum($inimatrixku);
        //step 3: panggil function hitung nilai pv
        $normalizedCriteriaPriorities = $this->calculateCriteriaPriorities($inimatrixku);
       
        //Step Verifikasi Nilai Bobot
        // step 4 cari nilai lambda
        //mengalikan matrix awal dengan nilai priority / hasil rata rata dari matrix norm
        $multiplied=$this->multiplyMatrix($inimatrixku,$normalizedCriteriaPriorities);
        $inilamdamax = array_sum($multiplied);
        // step 5 cari Consistency Index (CI) (cek konsistensi)
        // nilai 4 di dapat dari jumlah banyaknya kriteria 
        $ci = ($inilamdamax - 4) / (4 - 1);
        // step 6 cari cr Consistency Ratio (CR)
        // nilai 0.9 didapat dari IR dengan menggunakan 4 kriteria maka nilai ir = 0.9
        $cr = $ci/0.9;
        
        if($cr > 0.1){
            $temp="ulang bang nilai ga konsisten";
            dd($temp);  
        }
        else{
            $wisata_alt= Nilaialt::all();
            //dd($normalizedMatrix,$normalizedCriteriaPriorities,$multiplied,$inilamdamax,$ci,$cr,$wisata_alt);
            if (count($wisata_alt) == 0)
            abort(404);

            //$array[]=$normalizedCriteriaPriorities;
            
            
            // Perform calculations on each record
             foreach ($wisata_alt as $record) {
                $record->score = (
                    $record->rate_fasilitas * $normalizedCriteriaPriorities[0] +
                    $record->rate_pelayanan * $normalizedCriteriaPriorities[1] +
                    $record->rate_ramahkeluarga * $normalizedCriteriaPriorities[2] +
                    $record->rate_akomodasi * $normalizedCriteriaPriorities[3]
                );
            }

            // Sort the records by score in descending order
            $wisata_alt = $wisata_alt->sortByDesc('score');

            //dd($normalizedMatrix,$normalizedCriteriaPriorities,$multiplied,$inilamdamax,$ci,$cr,$wisata_alt);
            //create kriteria
             Nilaipv::where('nilaipv_id', 1)->update([
                'pv_fasilitas'      => $normalizedCriteriaPriorities[0],
                'pv_pelayanan'      => $normalizedCriteriaPriorities[1],
                'pv_ramahkeluarga'  => $normalizedCriteriaPriorities[2],
                'pv_akomodasi'      => $normalizedCriteriaPriorities[3],
            ]);
            //dd($wisata_alt);
            return redirect()->route('hasilrekomendasi')->with('message', 'Hasil Rekomendasi');
            
        }
                
    }

    private function calculateCriteriaPriorities($inimatrixku)
    {
        $criteriaCount = count($inimatrixku);

        // step 1: normalisais matrix
        $normalizedMatrix = $this->normalizeMatrixByColumnSum($inimatrixku);

        // step 2: Cari nilai rata rata (criteria priorities)
        $criteriaPriorities = [];
        for ($i = 0; $i < $criteriaCount; $i++) {
            $rowSum = array_sum($normalizedMatrix[$i]);
            $criteriaPriorities[] = $rowSum / $criteriaCount;
        }

        // step 3: normalisasi nilai dengan dibagi jumlah kriteria
        $sumCriteriaPriorities = array_sum($criteriaPriorities);
        $normalizedCriteriaPriorities = array_map(function ($value) use ($sumCriteriaPriorities) {
            return $value / $sumCriteriaPriorities;
        }, $criteriaPriorities);

        
        return $normalizedCriteriaPriorities;
    }
    
    private function normalizeMatrixByColumnSum($inimatrixku)
    {

        $rowCount = count($inimatrixku);
        $colCount = count($inimatrixku[0]);
        // 1: Hitung sum dari setip kolom matrix  contone: 3+1+1/2+1/4 = 4,75
        $columnSums = array_fill(0, $colCount, 0);

        for ($col = 0; $col < $colCount; $col++) {
            for ($row = 0; $row < $rowCount; $row++) {
                $columnSums[$col] += $inimatrixku[$row][$col];
            }
        }
        
        // 2: hitung normalisasi matrix berdasrkan sum  kolom
        $normalizedMatrix = [];

        for ($col = 0; $col < $colCount; $col++) {
            for ($row = 0; $row < $rowCount; $row++) {
                if ($columnSums[$col] != 0) {
                    $normalizedMatrix[$row][$col] = $inimatrixku[$row][$col] / $columnSums[$col];
                } else {
                    // Handle the case where the column sum is 0 (division by zero)
                    // You might want to set a default value or perform error handling here.
                }
            }
        }

        return ($normalizedMatrix);
        
    }

/*     private function multiplyMatrixRow ($row,$normalizedCriteriaPriorities){
        $total=0;
        foreach($row as $index =>$cell){
            $total += $cell*$normalizedCriteriaPriorities[$index];
        }
        
        return $total;
    } */

    private function multiplyMatrix($inimatrixku, $normalizedCriteriaPriorities)
    {
        $result = [];
        $rowCount = count($inimatrixku);
        $colCount = count($inimatrixku[0]);

        if ($colCount !== count($normalizedCriteriaPriorities)) {
            // Matrix and normalizedCriteriaPriorities dimensions are not compatible for multiplication
            return null;
        }

        for ($i = 0; $i < $rowCount; $i++) {
            $rowSum = 0;
            for ($j = 0; $j < $colCount; $j++) {
                $rowSum += $inimatrixku[$i][$j] * $normalizedCriteriaPriorities[$j];
            }
            $result[] = $rowSum;
        }

        return $result;
    }

    function hitungAlt($normalizedMatrix, $criteriaPriorities)
{
    $alternativeCount = count($normalizedMatrix);
    $criteriaCount = count($criteriaPriorities);

    $alternativePriorities = [];

    for ($i = 0; $i < $alternativeCount; $i++) {
        $rowSum = 0;

        for ($j = 0; $j < $criteriaCount; $j++) {
            $rowSum += $normalizedMatrix[$i][$j] * $criteriaPriorities[$j];
        }

        $alternativePriorities[] = $rowSum;
    }

    return $alternativePriorities;
}




    

    private function convertCompareValue($inMatrix)
    {
            switch($inMatrix){
                case -4:
                    return 5;
                case -3:
                    return 4;
                case -2:
                    return 3;
                case -1:
                    return 2;
                case 1:
                    return 0.5;
                case 2:
                    return 0.33;
                case 3:
                    return 0.25;
                case 4:
                    return 0.2;
                default:
                    return 1;
                    
            }
    }

    public function hasilrekomendasi(Request $request)
    {
        $wisata= [];
        
        //get rekomen 
        $places = new PlacesCollection(Places::paginate(15));
        return Inertia::render('Client/Hrekomendasi',[ 
            'places'=> $places]);
    }

              /* 
            $defmatrix= [
            [
                1,
                $inMatrix[$mfp],
                $inMatrix['fr'],
                $inMatrix['fa'],
            ],
            [
                1/$inMatrix['fp'],
                1,
                $inMatrix['pr'],
                $inMatrix['pa'],
            ],
            [
                1/$inMatrix['fr'],
                1/$inMatrix['pr'],
                1,
                $inMatrix['ra'],
            ],
            [
                1/$inMatrix['fa'],
                1/$inMatrix['pa'],
                1/$inMatrix['ra'],
                1,
            ],
        ]; */

}
