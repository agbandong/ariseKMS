@extends('layout')
  @section('content')

  <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Create a Project</h1>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <div class="container mt-2">
        <!-- Success message -->
        @if(Session::has('success'))
            <div class="alert alert-success">
                {{Session::get('success')}}
            </div>
        @endif
        <form action="" method="post" action="{{ route('project.store') }}">
            <!-- CROSS Site Request Forgery Protection -->
            @csrf
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" name="name" id="name">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea class="form-control" name="description" id="description" rows="4"></textarea>
            </div>
            <div class="form-group">
                <label>Project Files Path</label>
                <input type="text" class="form-control" name="project_files_path" id="project_files_path">
            </div>
            <input type="submit" name="send" value="Submit" class="btn btn-dark btn-block">
        </form>
    </div>


  @endsection