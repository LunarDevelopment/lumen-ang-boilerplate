<?php

namespace App\Http\Controllers;

use App\Goal;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GoalController extends Controller
{

  public function index(){

    $Goals  = Goal::all();

    return response()->json($Goals);

  }

  public function getGoal($id){

    $Goal  = Goal::find($id);

    return response()->json($Goal);
  }

  public function createGoal(Request $request){

    $Goal = Goal::create($request->all());

    return response()->json($Goal);

  }

  public function deleteGoal($id){
    $Goal  = Goal::find($id);
    $Goal->delete();

    return response()->json('deleted');
  }

  public function updateGoal(Request $request,$id){
    $Goal  = Goal::find($id);
    $Goal->title = $request->input('title');
    $Goal->author = $request->input('author');
    $Goal->status = $request->input('status');
    $Goal->save();

    return response()->json($Goal);
  }
  
}
