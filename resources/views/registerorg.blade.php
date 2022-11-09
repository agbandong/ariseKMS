@extends('layout')
  @section('content')

  <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Partnership Application Form</h1>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <!-- <div class="row"> -->
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Company Information</h3>

              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="inputName">Name</label>
                <input type="text" id="inputName" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputStreet">Street</label>
                <input type="text" id="inputStreet" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputCity">City</label>
                <input type="text" id="inputCity" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputProvince">Province/State</label>
                <input type="text" id="inputProvince" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputPostalCode">Postal/ZIP code</label>
                <input type="text" id="inputPostalCode" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputCountry">Country</label>
                <input type="text" id="inputCountry" class="form-control">
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkTrade">
                <label class="form-check-label" for="checktrade">Are you a trade organization</label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkBusiness">
                <label class="form-check-label" for="checkBusiness">Are you a business association/alliance or network</label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkPublickTrade">
                <label class="form-check-label" for="checkPublicTrade">Are you a publicly traded company</label>
              </div>
              <div class="form-group">
                <label for="inputExchangeName">Exchange Name</label>
                <input type="text" id="inputExchangeName" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputExchangeSymbol">Exchange Symbol</label>
                <input type="text" id="inputExchangeSymbol" class="form-control">
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkSubsidiary">
                <label class="form-check-label" for="checkSubsidiary">Are you a subsidiary of a company</label>
              </div>
              <div class="form-group">
                <label for="inputDetails">Explain details</label>
                <textarea id="inputDetails" class="form-control" rows="4"></textarea>
              </div>
              <div class="form-group">
                <label for="inputStaffNo">What is your total number of staff</label>
                <input type="number" id="inputStaffNo" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputRevenue">Please indicate your annual revenue in the past fiscal year</label>
                <input type="number" id="inputrevenue" class="form-control">
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkSubsidiary">
                <label class="form-check-label" for="checkUNGlobalCompact">Are you a member of the UN Global Compact</label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkSubsidiary">
                <label class="form-check-label" for="checkUnitedNations">Are you a member/affiliated with any other United Nations agency</label>
              </div>
              <div class="form-group">
                <label for="inputPlatforms">Please list any other organizations or platforms in the area of DRR, CSR or sustainable development that you are a member of:</label>
                <textarea id="inputPlatforms" class="form-control" rows="4"></textarea>
              </div>
              <div class="form-group">
                <label for="inputStatus"></label>
                <select class="form-control custom-select">
                  <option selected disabled>Select one sector</option>
                  <option>Administrative, support, waste management & remediation service</option>
                  <option>Agriculture</option>
                  <option>Arts, entertainment & recreation</option>
                  <option>Construction</option>
                  <option>Consumer goods</option>
                  <option>Educational services</option>
                  <option>Energy</option>
                  <option>Engineering</option>
                  <option>Finance</option>
                  <option>Health care</option>
                  <option>Hospitality</option>
                  <option>Information & communication technology</option>
                  <option>Insurance and reinsurance</option>
                  <option>Management of companies & enterprises</option>
                  <option>Manufacturing</option>
                  <option>Media</option>
                  <option>Mining</option>
                  <option>Other services (except public administration)</option>
                  <option>Professional, scientific & technical services (incl. consulting)</option>
                  <option>Real estate, rental and leasing</option>
                  <option>Retail trade</option>
                  <option>Social assistance</option>
                  <option>Transportation</option>
                  <option>Tourism</option>
                  <option>Wholesale trade</option>
                  <option>Utilities</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <div class="col-md-12">
          <div class="card card-secondary">
            <div class="card-header">
              <h3 class="card-title">Legal Representative</h3>

              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="inputTitle">Title</label>
                <input type="text" id="inputTitle" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputFirstname">First Name</label>
                <input type="text" id="inputFirstname" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputLastname">Last Name</label>
                <input type="text" id="inputLastname" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputEmail">Email</label>
                <input type="text" id="inputEmail" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputPosition">Position</label>
                <input type="text" id="inputPosition" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputPhone">Phone</label>
                <input type="number" id="inputPhone" class="form-control">
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkParticipation">
                <label class="form-check-label" for="checkParticipation">Legal Representative will join Arise</label>
              </div>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <div class="col-md-12">
          <div class="card card-secondary">
            <div class="card-header">
              <h3 class="card-title">Primary Contact for ARISE Engagement and Communications</h3>
              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="inputTitle">Title (e.g. Mr/Ms/Dr):</label>
                <input type="text" id="inputTitle" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputFirstname">First Name</label>
                <input type="text" id="inputFirstname" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputLastname">Last Name</label>
                <input type="text" id="inputLastname" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputEmail">Email</label>
                <input type="text" id="inputEmail" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputPosition">Position</label>
                <input type="text" id="inputPosition" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputPhone">Phone</label>
                <input type="number" id="inputPhone" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputStreet">Street</label>
                <input type="text" id="inputStreet" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputCity">City</label>
                <input type="text" id="inputCity" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputProvince">Province/State</label>
                <input type="text" id="inputProvince" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputPostalCode">Postal/ZIP code</label>
                <input type="text" id="inputPostalCode" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputCountry">Country</label>
                <input type="text" id="inputCountry" class="form-control">
              </div>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <div class="col-md-12">
          <div class="card card-secondary">
            <div class="card-header">
              <h3 class="card-title">Additional Contacts</h3>

              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
              <a>Please enter the email addresses of colleagues that shoud be included in ARISE ommunications.</a>
              <div class="form-group">
                <label for="inputFirstname">First Name</label>
                <input type="text" id="inputFirstname" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputLastname">Last Name</label>
                <input type="text" id="inputLastname" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputEmail">Email</label>
                <input type="text" id="inputEmail" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputPosition">Position</label>
                <input type="text" id="inputPosition" class="form-control">
              </div>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
      <!-- </div> -->
      <div class="row">
        <div class="col-12">
          <a href="#" class="btn mb-3 btn-secondary">Cancel</a>
          <input type="submit" value="Submit" class="btn mb-3 btn-success float-right">
        </div>
      </div>
    </section>
  
  @endsection