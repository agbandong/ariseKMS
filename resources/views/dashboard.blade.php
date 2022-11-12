@extends('layout')
  @section('content')

  <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Dashboard</h1>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card card-primary">
              <div class="card-header">
                <div class="card-title">
                  Projects
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="btn-group w-100 mb-2">
                    <a class="btn btn-info active" href="javascript:void(0)" data-filter="all"> All Projects </a>
                    <a class="btn btn-info" href="javascript:void(0)" data-filter="1"> Ongoing </a>
                    <a class="btn btn-info" href="javascript:void(0)" data-filter="2"> Upcoming </a>
                    <a class="btn btn-info" href="javascript:void(0)" data-filter="3"> Completed </a>
                  </div>
                  <div class="mb-2">
                    <div class="float-right">
                    </div>
                  </div>
                </div>
                <div>
                  <div class="filter-container p-0 row">
                    <div class="filtr-item col-sm-2" data-category="1" data-sort="white sample">
                      <a href="https://via.placeholder.com/1200/FFFFFF.png?text=1" data-toggle="lightbox" data-title="Project 1">
                        <img src="https://via.placeholder.com/300/FFFFFF?text=1" class="img-fluid mb-2" alt="white sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="2" data-sort="black sample">
                      <a href="https://via.placeholder.com/1200/D3D3D3.png?text=2" data-toggle="lightbox" data-title="Project 2">
                        <img src="https://via.placeholder.com/300/D3D3D3?text=2" class="img-fluid mb-2" alt="black sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="3" data-sort="red sample">
                      <a href="https://via.placeholder.com/1200/F8C8DC/FFFFFF.png?text=3" data-toggle="lightbox" data-title="Project 3">
                        <img src="https://via.placeholder.com/300/F8C8DC/FFFFFF?text=3" class="img-fluid mb-2" alt="red sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="4" data-sort="red sample">
                      <a href="https://via.placeholder.com/1200/F8C8DC/FFFFFF.png?text=4" data-toggle="lightbox" data-title="Project 4">
                        <img src="https://via.placeholder.com/300/F8C8DC/FFFFFF?text=4" class="img-fluid mb-2" alt="red sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="5" data-sort="black sample">
                      <a href="https://via.placeholder.com/1200/D3D3D3.png?text=5" data-toggle="lightbox" data-title="Project 5">
                        <img src="https://via.placeholder.com/300/D3D3D3?text=5" class="img-fluid mb-2" alt="black sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="6" data-sort="white sample">
                      <a href="https://via.placeholder.com/1200/FFFFFF.png?text=6" data-toggle="lightbox" data-title="Project 6">
                        <img src="https://via.placeholder.com/300/FFFFFF?text=6" class="img-fluid mb-2" alt="white sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="7" data-sort="white sample">
                      <a href="https://via.placeholder.com/1200/FFFFFF.png?text=7" data-toggle="lightbox" data-title="Project 7">
                        <img src="https://via.placeholder.com/300/FFFFFF?text=7" class="img-fluid mb-2" alt="white sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="8" data-sort="black sample">
                      <a href="https://via.placeholder.com/1200/D3D3D3.png?text=8" data-toggle="lightbox" data-title="Project 8">
                        <img src="https://via.placeholder.com/300/D3D3D3?text=8" class="img-fluid mb-2" alt="black sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="9" data-sort="red sample">
                      <a href="https://via.placeholder.com/1200/F8C8DC/FFFFFF.png?text=9" data-toggle="lightbox" data-title="Project 9">
                        <img src="https://via.placeholder.com/300/F8C8DC/FFFFFF?text=9" class="img-fluid mb-2" alt="red sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="10" data-sort="white sample">
                      <a href="https://via.placeholder.com/1200/FFFFFF.png?text=10" data-toggle="lightbox" data-title="Project 10">
                        <img src="https://via.placeholder.com/300/FFFFFF?text=10" class="img-fluid mb-2" alt="white sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="11" data-sort="white sample">
                      <a href="https://via.placeholder.com/1200/FFFFFF.png?text=11" data-toggle="lightbox" data-title="Project 11">
                        <img src="https://via.placeholder.com/300/FFFFFF?text=11" class="img-fluid mb-2" alt="white sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="12" data-sort="black sample">
                      <a href="https://via.placeholder.com/1200/D3D3D3.png?text=12" data-toggle="lightbox" data-title="Project 12">
                        <img src="https://via.placeholder.com/300/D3D3D3?text=12" class="img-fluid mb-2" alt="black sample"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="card card-primary">
              <div class="card-header">
                <div class="card-title">
                  Reports
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="mb-2">
                    <div class="float-right">
                    </div>
                  </div>
                </div>
                <div>
                  <div class="filter-container p-0 row">
                    <div class="filtr-item col-sm-2" data-category="1" data-sort="white sample">
                      <a href="https://via.placeholder.com/1200/FFFFFF.png?text=1" data-toggle="lightbox" data-title="Report 1">
                        <img src="https://via.placeholder.com/300/FFFFFF?text=1" class="img-fluid mb-2" alt="white sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="2" data-sort="black sample">
                      <a href="https://via.placeholder.com/1200/D3D3D3.png?text=2" data-toggle="lightbox" data-title="Report 2">
                        <img src="https://via.placeholder.com/300/D3D3D3?text=2" class="img-fluid mb-2" alt="black sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="3" data-sort="red sample">
                      <a href="https://via.placeholder.com/1200/F8C8DC/FFFFFF.png?text=3" data-toggle="lightbox" data-title="Report 3">
                        <img src="https://via.placeholder.com/300/F8C8DC/FFFFFF?text=3" class="img-fluid mb-2" alt="red sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="4" data-sort="red sample">
                      <a href="https://via.placeholder.com/1200/F8C8DC/FFFFFF.png?text=4" data-toggle="lightbox" data-title="Report 4">
                        <img src="https://via.placeholder.com/300/F8C8DC/FFFFFF?text=4" class="img-fluid mb-2" alt="red sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="5" data-sort="black sample">
                      <a href="https://via.placeholder.com/1200/D3D3D3.png?text=5" data-toggle="lightbox" data-title="Report 5">
                        <img src="https://via.placeholder.com/300/D3D3D3?text=5" class="img-fluid mb-2" alt="black sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="6" data-sort="white sample">
                      <a href="https://via.placeholder.com/1200/FFFFFF.png?text=6" data-toggle="lightbox" data-title="Report 6">
                        <img src="https://via.placeholder.com/300/FFFFFF?text=6" class="img-fluid mb-2" alt="white sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="7" data-sort="white sample">
                      <a href="https://via.placeholder.com/1200/FFFFFF.png?text=7" data-toggle="lightbox" data-title="Report 7">
                        <img src="https://via.placeholder.com/300/FFFFFF?text=7" class="img-fluid mb-2" alt="white sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="8" data-sort="black sample">
                      <a href="https://via.placeholder.com/1200/D3D3D3.png?text=8" data-toggle="lightbox" data-title="Report 8">
                        <img src="https://via.placeholder.com/300/D3D3D3?text=8" class="img-fluid mb-2" alt="black sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="9" data-sort="red sample">
                      <a href="https://via.placeholder.com/1200/F8C8DC/FFFFFF.png?text=9" data-toggle="lightbox" data-title="Report 9">
                        <img src="https://via.placeholder.com/300/F8C8DC/FFFFFF?text=9" class="img-fluid mb-2" alt="red sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="10" data-sort="white sample">
                      <a href="https://via.placeholder.com/1200/FFFFFF.png?text=10" data-toggle="lightbox" data-title="Report 10">
                        <img src="https://via.placeholder.com/300/FFFFFF?text=10" class="img-fluid mb-2" alt="white sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="11" data-sort="white sample">
                      <a href="https://via.placeholder.com/1200/FFFFFF.png?text=11" data-toggle="lightbox" data-title="Report 11">
                        <img src="https://via.placeholder.com/300/FFFFFF?text=11" class="img-fluid mb-2" alt="white sample"/>
                      </a>
                    </div>
                    <div class="filtr-item col-sm-2" data-category="12" data-sort="black sample">
                      <a href="https://via.placeholder.com/1200/D3D3D3.png?text=12" data-toggle="lightbox" data-title="Report 12">
                        <img src="https://via.placeholder.com/300/D3D3D3?text=12" class="img-fluid mb-2" alt="black sample"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

  @endsection