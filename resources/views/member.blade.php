@extends('layout')
  @section('content')

  <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Members</h1>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Users</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Roles</th>
                  <th>Organization</th>
                  <th>Last Access</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Brenda</td>
                  <td>Roberts</td>
                  <td>Admin</td>
                  <td>AM Prime Holdings Inc.</td>
                  <td>12.2.2022</td>
                </tr>
                <tr>
                  <td>David</td>
                  <td>Bullard</td>
                  <td>Secretariat</td>
                  <td>PwC Philippines</td>
                  <td>5.22.2022</td>
                </tr>
                <tr>
                  <td>James</td>
                  <td>Alvarez</td>
                  <td>Admin</td>
                  <td>Philippine Disaster Resilience Foundation</td>
                  <td>6.23.2022</td>
                </tr>
                <tr>
                  <td>Sandra</td>
                  <td>Weinberg</td>
                  <td>Member</td>
                  <td>SM Prime Holdings Inc.</td>
                  <td>5.6.2021</td>
                </tr>
                <tr>
                  <td>Kathy</td>
                  <td>Grove</td>
                  <td>WMember</td>
                  <td>Aboitiz Foundation</td>
                  <td>6.2.2019</td>
                </tr>
                <tr>
                  <td>Michael</td>
                  <td>Robertson</td>
                  <td>Member</td>
                  <td>SM Prime Holdings Inc.</td>
                  <td>5.6.2021</td>
                </tr>
                <tr>
                  <td>Roy</td>
                  <td>Dirke</td>
                  <td>Secretariat</td>
                  <td>Philippine Disaster Resilience Foundation</td>
                  <td>9.10.2021</td>
                </tr>
                <tr>
                  <td>Javier</td>
                  <td>Montiel</td>
                  <td>Member</td>
                  <td>Philippine Disaster Resilience Foundation</td>
                  <td>5.21.2020</td>
                </tr>
                <tr>
                  <td>Alice</td>
                  <td>Manson</td>
                  <td>Member</td>
                  <td>Asia Pacific College</td>
                  <td>4.2.2020</td>
                </tr>
                <tr>
                  <td>Joseph</td>
                  <td>Gilliland</td>
                  <td>Member</td>
                  <td>Aboitiz Foundation</td>
                  <td>6.7.2022</td>
                </tr>
                <tr>
                  <td>Rick</td>
                  <td>Quintero</td>
                  <td>Member</td>
                  <td>SM Prime Holdings Inc.</td>
                  <td>12.2.2022</td>
                </tr>
                <tr>
                  <td>Jerry</td>
                  <td>Wood</td>
                  <td>Member</td>
                  <td>Unilever Philippines</td>
                  <td>8.4.2022</td>
                </tr>
                <tr>
                  <td>Robert</td>
                  <td>Taylor</td>
                  <td>Secretariat</td>
                  <td>Unilever Philippines</td>
                  <td>12.2.2022</td>
                </tr>
                <tr>
                  <td>Susan</td>
                  <td>Walleace</td>
                  <td>Member</td>
                  <td>Asia Pacific College</td>
                  <td>11.26.2021</td>
                </tr>
                <tr>
                  <td>Jimmy</td>
                  <td>Smith</td>
                  <td>Member</td>
                  <td>PwC Philippines</td>
                  <td>8.2.2019</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Adamski</td>
                  <td>Member</td>
                  <td>Aboitiz Foundation</td>
                  <td>2.3.2022</td>
                </tr>
                <tr>
                  <td>Daniel</td>
                  <td>Lily</td>
                  <td>Member</td>
                  <td>PwC Philippines</td>
                  <td>7.5.2022</td>
                </tr>
                <tr>
                  <td>Edwina</td>
                  <td>Ewing</td>
                  <td>Admin</td>
                  <td>National Resilience Council</td>
                  <td>10.3.2022</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Roles</th>
                  <th>Organization</th>
                  <th>Last Access</th>
                </tr>
                </tfoot>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>

  @endsection