<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Http\Requests\UserRequest;
use App\Mail\WelcomeMail;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use PhpParser\Node\Expr\Cast\Object_;

class UserController extends Controller
{
    public function store(UserRequest $request)
    {
        $request->merge(['password' => Hash::make($request->password)]);
       
        $image=time().'.'.$request->image->extension();  
           User::create([
                'firstname' => request()->firstname,
                'lastname'=>request()->lastname,
                'email'=>request()->email,
                'password' => $request->password,
                'city' => $request->city,
                'address'=>$request->address,
                'mobile'=>$request->mobile,
                'image'=>$image,
               
            ]); 
            $request->image->move(public_path('public/'), $image);
            Mail::to(request()->email)->send(new WelcomeMail());  
    }

    public function index()
    {
        $users = User::all();
        return UserResource::collection($users);
    }

    public function _index(){
        $users=User::all();
        $counter2022Cairo=$counter2022Alex=$counter2022Giza=$counter2022Port=$counter2022Suez=$counter2022Luxor=$counter2022Man=$counter2022Tanta=$counter2022Asyut=$counter2022Ism=$counter2022Fay=$counter2022Zag=$counter2022Dam=$counter2022Asw=$counter2022Min=$counter2022Damn=$counter2022Ben=$counter2022Qena=$counter2022Soh=$counter2022Ban=$counter2022Ar=0;

        $counter2021Cairo=$counter2021Alex=$counter2021Giza=$counter2021Port=$counter2021Suez=$counter2021Luxor=$counter2021Man=$counter2021Tanta=$counter2021Asyut=$counter2021Ism=$counter2021Fay=$counter2021Zag=$counter2021Dam=$counter2021Asw=$counter2021Min=$counter2021Damn=$counter2021Ben=$counter2021Qena=$counter2021Soh=$counter2021Ban=$counter2021Ar=0;

        $counter2020Cairo=$counter2020Alex=$counter2020Giza=$counter2020Port=$counter2020Suez=$counter2020Luxor=$counter2020Man=$counter2020Tanta=$counter2020Asyut=$counter2020Ism=$counter2020Fay=$counter2020Zag=$counter2020Dam=$counter2020Asw=$counter2020Min=$counter2020Damn=$counter2020Ben=$counter2020Qena=$counter2020Soh=$counter2020Ban=$counter2020Ar=0;

        $counter2019Cairo=$counter2019Alex=$counter2019Giza=$counter2019Port=$counter2019Suez=$counter2019Luxor=$counter2019Man=$counter2019Tanta=$counter2019Asyut=$counter2019Ism=$counter2019Fay=$counter2019Zag=$counter2019Dam=$counter2019Asw=$counter2019Min=$counter2019Damn=$counter2019Ben=$counter2019Qena=$counter2019Soh=$counter2019Ban=$counter2019Ar=0;

        $counter2018Cairo=$counter2018Alex=$counter2018Giza=$counter2018Port=$counter2018Suez=$counter2018Luxor=$counter2018Man=$counter2018Tanta=$counter2018Asyut=$counter2018Ism=$counter2018Fay=$counter2018Zag=$counter2018Dam=$counter2018Asw=$counter2018Min=$counter2018Damn=$counter2018Ben=$counter2018Qena=$counter2018Soh=$counter2018Ban=$counter2018Ar=0;

        $counter2017Cairo=$counter2017Alex=$counter2017Giza=$counter2017Port=$counter2017Suez=$counter2017Luxor=$counter2017Man=$counter2017Tanta=$counter2017Asyut=$counter2017Ism=$counter2017Fay=$counter2017Zag=$counter2017Dam=$counter2017Asw=$counter2017Min=$counter2017Damn=$counter2017Ben=$counter2017Qena=$counter2017Soh=$counter2017Ban=$counter2017Ar=0;

        $counter2016Cairo=$counter2016Alex=$counter2016Giza=$counter2016Port=$counter2016Suez=$counter2016Luxor=$counter2016Man=$counter2016Tanta=$counter2016Asyut=$counter2016Ism=$counter2016Fay=$counter2016Zag=$counter2016Dam=$counter2016Asw=$counter2016Min=$counter2016Damn=$counter2016Ben=$counter2016Qena=$counter2016Soh=$counter2016Ban=$counter2016Ar=0;
        $BigChartArray=array();
        for ($index=0; $index < count($users); $index++) { 
          $element=$users[$index];
          $Allcity=array();
          array_push($Allcity,$element['city']);
          for ($i=0; $i < count($Allcity); $i++) { 
            # code...
            if($Allcity[$i]=='cairo'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Cairo++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Cairo++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Cairo++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Cairo++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Cairo++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Cairo++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Cairo++;}
            }
            if($Allcity[$i]=='alex'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Alex++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Alex++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Alex++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Alex++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Alex++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Alex++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Alex++;}
            }
            if($Allcity[$i]=='giza'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Giza++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Giza++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Giza++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Giza++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Giza++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Giza++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Giza++;}
            }
            if($Allcity[$i]=='portSaid'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Port++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Port++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Port++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Port++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Port++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Port++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Port++;}
            }
            if($Allcity[$i]=='suez'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Suez++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Suez++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Suez++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Suez++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Suez++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Suez++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Suez++;}
            }
            if($Allcity[$i]=='luxor'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Luxor++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Luxor++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Luxor++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Luxor++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Luxor++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Luxor++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Luxor++;}
            }
            if($Allcity[$i]=='mansoura'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Man++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Man++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Man++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Man++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Man++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Man++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Man++;}
            }
            if($Allcity[$i]=='tanta'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Tanta++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Tanta++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Tanta++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Tanta++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Tanta++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Tanta++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Tanta++;}
            }
            if($Allcity[$i]=='asyut'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Asyut++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Asyut++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Asyut++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Asyut++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Asyut++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Asyut++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Asyut++;}
            }
            if($Allcity[$i]=='ismailia'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Ism++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Ism++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Ism++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Ism++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Ism++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Ism++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Ism++;}
            }
            if($Allcity[$i]=='faiyum'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Fay++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Fay++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Fay++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Fay++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Fay++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Fay++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Fay++;}
            }
            if($Allcity[$i]=='zagazig'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Zag++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Zag++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Zag++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Zag++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Zag++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Zag++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Zag++;}
            }
            if($Allcity[$i]=='damietta'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Dam++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Dam++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Dam++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Dam++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Dam++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Dam++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Dam++;}
            }
            if($Allcity[$i]=='aswan'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Asw++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Asw++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Asw++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Asw++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Asw++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Asw++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Asw++;}
            }
            if($Allcity[$i]=='minya'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Min++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Min++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Min++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Min++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Min++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Min++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Min++;}
            }
            if($Allcity[$i]=='damanhur'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Damn++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Damn++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Damn++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Damn++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Damn++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Damn++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Damn++;}
            }
            if($Allcity[$i]=='beniSuef'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Ben++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Ben++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Ben++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Ben++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Ben++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Ben++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Ben++;}
            }
            if($Allcity[$i]=='qena'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Qena++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Qena++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Qena++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Qena++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Qena++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Qena++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Qena++;}
            }
            if($Allcity[$i]=='sohag'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Soh++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Soh++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Soh++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Soh++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Soh++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Soh++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Soh++;}
            }
            if($Allcity[$i]=='banha'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Ban++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Ban++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Ban++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Ban++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Ban++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Ban++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Ban++;}
            }
            if($Allcity[$i]=='arish'){
                if($users[$index]['created_at']->year=='2022'){$counter2022Ar++;}
                if($users[$index]['created_at']->year=='2021'){$counter2021Ar++;}
                if($users[$index]['created_at']->year=='2020'){$counter2020Ar++;}
                if($users[$index]['created_at']->year=='2019'){$counter2019Ar++;}
                if($users[$index]['created_at']->year=='2018'){$counter2018Ar++;}
                if($users[$index]['created_at']->year=='2017'){$counter2017Ar++;}
                if($users[$index]['created_at']->year=='2016'){$counter2016Ar++;}
            }

          }
        }
        $data['name']='cairo';
        $data['data']=array($counter2016Cairo,$counter2017Cairo,$counter2018Cairo,$counter2019Cairo,$counter2020Cairo,$counter2021Cairo,$counter2022Cairo);
        array_push($BigChartArray,(object)$data);
        $data['name']='alex';
        $data['data']=array($counter2016Alex,$counter2017Alex,$counter2018Alex,$counter2019Alex,$counter2020Alex,$counter2021Alex,$counter2022Alex);
        array_push($BigChartArray,(object)$data);
        $data['name']='giza';
        $data['data']=array($counter2016Giza,$counter2017Giza,$counter2018Giza,$counter2019Giza,$counter2020Giza,$counter2021Giza,$counter2022Giza);
        array_push($BigChartArray,(object)$data);
        $data['name']='portSaid';
        $data['data']=array($counter2016Port,$counter2017Port,$counter2018Port,$counter2019Port,$counter2020Port,$counter2021Port,$counter2022Port);
        array_push($BigChartArray,(object)$data);
        $data['name']='suez';
        $data['data']=array($counter2016Suez,$counter2017Suez,$counter2018Suez,$counter2019Suez,$counter2020Suez,$counter2021Suez,$counter2022Suez);
        array_push($BigChartArray,(object)$data);
        $data['name']='luxor';
        $data['data']=array($counter2016Luxor,$counter2017Luxor,$counter2018Luxor,$counter2019Luxor,$counter2020Luxor,$counter2021Luxor,$counter2022Luxor);
        array_push($BigChartArray,(object)$data);
        $data['name']='mansoura';
        $data['data']=array($counter2016Man,$counter2017Man,$counter2018Man,$counter2019Man,$counter2020Man,$counter2021Man,$counter2022Man);
        array_push($BigChartArray,(object)$data);
        $data['name']='tanta';
        $data['data']=array($counter2016Tanta,$counter2017Tanta,$counter2018Tanta,$counter2019Tanta,$counter2020Tanta,$counter2021Tanta,$counter2022Tanta);
        array_push($BigChartArray,(object)$data);
        $data['name']='asyut';
        $data['data']=array($counter2016Asyut,$counter2017Asyut,$counter2018Asyut,$counter2019Asyut,$counter2020Asyut,$counter2021Asyut,$counter2022Asyut);
        array_push($BigChartArray,(object)$data);
        $data['name']='ismailia';
        $data['data']=array($counter2016Ism,$counter2017Ism,$counter2018Ism,$counter2019Ism,$counter2020Ism,$counter2021Ism,$counter2022Ism);
        array_push($BigChartArray,(object)$data);
        $data['name']='faiyum';
        $data['data']=array($counter2016Fay,$counter2017Fay,$counter2018Fay,$counter2019Fay,$counter2020Fay,$counter2021Fay,$counter2022Fay);
        array_push($BigChartArray,(object)$data);
        $data['name']='zagazig';
        $data['data']=array($counter2016Zag,$counter2017Zag,$counter2018Zag,$counter2019Zag,$counter2020Zag,$counter2021Zag,$counter2022Zag);
        array_push($BigChartArray,(object)$data);
        $data['name']='damietta';
        $data['data']=array($counter2016Dam,$counter2017Dam,$counter2018Dam,$counter2019Dam,$counter2020Dam,$counter2021Dam,$counter2022Dam);
        array_push($BigChartArray,(object)$data);
        $data['name']='aswan';
        $data['data']=array($counter2016Asw,$counter2017Asw,$counter2018Asw,$counter2019Asw,$counter2020Asw,$counter2021Asw,$counter2022Asw);
        array_push($BigChartArray,(object)$data);
        $data['name']='minya';
        $data['data']=array($counter2016Min,$counter2017Min,$counter2018Min,$counter2019Min,$counter2020Min,$counter2021Min,$counter2022Min);
        array_push($BigChartArray,(object)$data);
        $data['name']='damanhur';
        $data['data']=array($counter2016Damn,$counter2017Damn,$counter2018Damn,$counter2019Damn,$counter2020Damn,$counter2021Damn,$counter2022Damn);
        array_push($BigChartArray,(object)$data);
        $data['name']='beniSuef';
        $data['data']=array($counter2016Ben,$counter2017Ben,$counter2018Ben,$counter2019Ben,$counter2020Ben,$counter2021Ben,$counter2022Ben);
        array_push($BigChartArray,(object)$data);
        $data['name']='qena';
        $data['data']=array($counter2016Qena,$counter2017Qena,$counter2018Qena,$counter2019Qena,$counter2020Qena,$counter2021Qena,$counter2022Qena);
        array_push($BigChartArray,(object)$data);
        $data['name']='sohag';
        $data['data']=array($counter2016Soh,$counter2017Soh,$counter2018Soh,$counter2019Soh,$counter2020Soh,$counter2021Soh,$counter2022Soh);
        array_push($BigChartArray,(object)$data);
        $data['name']='banha';
        $data['data']=array($counter2016Ban,$counter2017Ban,$counter2018Ban,$counter2019Ban,$counter2020Ban,$counter2021Ban,$counter2022Ban);
        array_push($BigChartArray,(object)$data);
        $data['name']='arish';
        $data['data']=array($counter2016Ar,$counter2017Ar,$counter2018Ar,$counter2019Ar,$counter2020Ar,$counter2021Ar,$counter2022Ar);
        array_push($BigChartArray,(object)$data);
        return $BigChartArray;   
    }
    public function newusers(){
        $users=User::all();
        $counter2022=$counter2021=$counter2020=$counter2019=$counter2018=$counter2017=$counter2016=0;
      
        for ($index=0; $index < count($users); $index++) { 
            # code...
                  if($users[$index]['created_at']->year=='2022'){$counter2022++;}
                  if($users[$index]['created_at']->year=='2021'){$counter2021++;}
                  if($users[$index]['created_at']->year=='2020'){$counter2020++;}
                  if($users[$index]['created_at']->year=='2019'){$counter2019++;}
                  if($users[$index]['created_at']->year=='2018'){$counter2018++;}
                  if($users[$index]['created_at']->year=='2017'){$counter2017++;}
                  if($users[$index]['created_at']->year=='2016'){$counter2016++;}
          }
          $noOfUsers=array($counter2016,$counter2017,$counter2018,$counter2019,$counter2020,$counter2021,$counter2022);
          return $noOfUsers;
    }
    

    public function show($id)
    {
        $user = User::find($id);
        if ($user) {
            return new UserResource($user);
        } else {
            return null;
        }
    }

    public function update($id, UserRequest $request)
    {
        $user = User::find($id);
        if (!Hash::check($request->password, $user->password)) {
            $request->merge(['password' => Hash::make($request->password)]);
        }
        if ($request->image) {
            $path=public_path('public/').$user->image;
            if(file_exists($path)){
                @unlink($path);
            }
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('public/'), $imageName);
        }else{
            $imageName=$user->image;
        }
      
            $user->update([
                'firstname' => $request->firstname,
                'lastname'=>$request->lastname,
                'email'=>$request->email,
                'password' => $request->password,
                'city' => $request->city,
                'address'=>$request->address,
                'mobile'=>$request->mobile,
               'image'=>$imageName,
               'newsletter'=>$request->newsletter
              
        ]);  
       
            
    }

    public function destroy($id)
    {
        $user=User::find($id);
        $path=public_path('public/').$user->image;
        @unlink($path);
        $user->delete();
    }
}
