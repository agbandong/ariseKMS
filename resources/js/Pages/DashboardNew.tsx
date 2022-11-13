import React from 'react';
import useRoute from '@/Hooks/useRoute';
import AppLayoutNew from '@/Layouts/AppLayout';

export default function Example(){
    const route = useRoute;
    return(
        <AppLayoutNew
        title="Dashboard"
        renderHeader={() => (
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Dashboard
          </h2>
          
        )}
      >

        <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                <div className="col-sm-6">
                    <h1>Dashboard</h1>
                </div>
                </div>
            </div>{/*<!-- /.container-fluid -->*/}
        </section>

        {/*<!-- Main content -->*/}
        <section className="content">
        <div className="container-fluid">
            <div className="row">
            <div className="col-12">
                <div className="card card-primary">
                <div className="card-header">
                    <div className="card-title">
                    Projects
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                    <div className="btn-group w-100 mb-2">
                        <a className="btn btn-info active" href="javascript:void(0)" data-filter="all"> All Projects </a>
                        <a className="btn btn-info" href="javascript:void(0)" data-filter="1"> Ongoing </a>
                        <a className="btn btn-info" href="javascript:void(0)" data-filter="2"> Upcoming </a>
                        <a className="btn btn-info" href="javascript:void(0)" data-filter="3"> Completed </a>
                    </div>
                    <div className="mb-2">
                        <div className="float-right">
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className="filter-container p-0 row">
                        <div className="filtr-item col-sm-2" data-category="1" data-sort="white sample">
                        <a href="https://via.placeholder.com/1200/FFFFFF.png?text=1" data-toggle="lightbox" data-title="Project 1">
                            <img src="https://via.placeholder.com/300/FFFFFF?text=1" className="img-fluid mb-2" alt="white sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="2" data-sort="black sample">
                        <a href="https://via.placeholder.com/1200/000000.png?text=2" data-toggle="lightbox" data-title="Project 2">
                            <img src="https://via.placeholder.com/300/000000?text=2" className="img-fluid mb-2" alt="black sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="3" data-sort="red sample">
                        <a href="https://via.placeholder.com/1200/FF0000/FFFFFF.png?text=3" data-toggle="lightbox" data-title="Project 3">
                            <img src="https://via.placeholder.com/300/FF0000/FFFFFF?text=3" className="img-fluid mb-2" alt="red sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="4" data-sort="red sample">
                        <a href="https://via.placeholder.com/1200/FF0000/FFFFFF.png?text=4" data-toggle="lightbox" data-title="Project 4">
                            <img src="https://via.placeholder.com/300/FF0000/FFFFFF?text=4" className="img-fluid mb-2" alt="red sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="5" data-sort="black sample">
                        <a href="https://via.placeholder.com/1200/000000.png?text=5" data-toggle="lightbox" data-title="Project 5">
                            <img src="https://via.placeholder.com/300/000000?text=5" className="img-fluid mb-2" alt="black sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="6" data-sort="white sample">
                        <a href="https://via.placeholder.com/1200/FFFFFF.png?text=6" data-toggle="lightbox" data-title="Project 6">
                            <img src="https://via.placeholder.com/300/FFFFFF?text=6" className="img-fluid mb-2" alt="white sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="7" data-sort="white sample">
                        <a href="https://via.placeholder.com/1200/FFFFFF.png?text=7" data-toggle="lightbox" data-title="Project 7">
                            <img src="https://via.placeholder.com/300/FFFFFF?text=7" className="img-fluid mb-2" alt="white sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="8" data-sort="black sample">
                        <a href="https://via.placeholder.com/1200/000000.png?text=8" data-toggle="lightbox" data-title="Project 8">
                            <img src="https://via.placeholder.com/300/000000?text=8" className="img-fluid mb-2" alt="black sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="9" data-sort="red sample">
                        <a href="https://via.placeholder.com/1200/FF0000/FFFFFF.png?text=9" data-toggle="lightbox" data-title="Project 9">
                            <img src="https://via.placeholder.com/300/FF0000/FFFFFF?text=9" className="img-fluid mb-2" alt="red sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="10" data-sort="white sample">
                        <a href="https://via.placeholder.com/1200/FFFFFF.png?text=10" data-toggle="lightbox" data-title="Project 10">
                            <img src="https://via.placeholder.com/300/FFFFFF?text=10" className="img-fluid mb-2" alt="white sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="11" data-sort="white sample">
                        <a href="https://via.placeholder.com/1200/FFFFFF.png?text=11" data-toggle="lightbox" data-title="Project 11">
                            <img src="https://via.placeholder.com/300/FFFFFF?text=11" className="img-fluid mb-2" alt="white sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="12" data-sort="black sample">
                        <a href="https://via.placeholder.com/1200/000000.png?text=12" data-toggle="lightbox" data-title="Project 12">
                            <img src="https://via.placeholder.com/300/000000?text=12" className="img-fluid mb-2" alt="black sample"/>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-12">
                <div className="card card-primary">
                <div className="card-header">
                    <div className="card-title">
                    Reports
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                    <div className="mb-2">
                        <div className="float-right">
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className="filter-container p-0 row">
                        <div className="filtr-item col-sm-2" data-category="1" data-sort="white sample">
                        <a href="https://via.placeholder.com/1200/FFFFFF.png?text=1" data-toggle="lightbox" data-title="Report 1">
                            <img src="https://via.placeholder.com/300/FFFFFF?text=1" className="img-fluid mb-2" alt="white sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="2" data-sort="black sample">
                        <a href="https://via.placeholder.com/1200/000000.png?text=2" data-toggle="lightbox" data-title="Report 2">
                            <img src="https://via.placeholder.com/300/000000?text=2" className="img-fluid mb-2" alt="black sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="3" data-sort="red sample">
                        <a href="https://via.placeholder.com/1200/FF0000/FFFFFF.png?text=3" data-toggle="lightbox" data-title="Report 3">
                            <img src="https://via.placeholder.com/300/FF0000/FFFFFF?text=3" className="img-fluid mb-2" alt="red sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="4" data-sort="red sample">
                        <a href="https://via.placeholder.com/1200/FF0000/FFFFFF.png?text=4" data-toggle="lightbox" data-title="Report 4">
                            <img src="https://via.placeholder.com/300/FF0000/FFFFFF?text=4" className="img-fluid mb-2" alt="red sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="5" data-sort="black sample">
                        <a href="https://via.placeholder.com/1200/000000.png?text=5" data-toggle="lightbox" data-title="Report 5">
                            <img src="https://via.placeholder.com/300/000000?text=5" className="img-fluid mb-2" alt="black sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="6" data-sort="white sample">
                        <a href="https://via.placeholder.com/1200/FFFFFF.png?text=6" data-toggle="lightbox" data-title="Report 6">
                            <img src="https://via.placeholder.com/300/FFFFFF?text=6" className="img-fluid mb-2" alt="white sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="7" data-sort="white sample">
                        <a href="https://via.placeholder.com/1200/FFFFFF.png?text=7" data-toggle="lightbox" data-title="Report 7">
                            <img src="https://via.placeholder.com/300/FFFFFF?text=7" className="img-fluid mb-2" alt="white sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="8" data-sort="black sample">
                        <a href="https://via.placeholder.com/1200/000000.png?text=8" data-toggle="lightbox" data-title="Report 8">
                            <img src="https://via.placeholder.com/300/000000?text=8" className="img-fluid mb-2" alt="black sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="9" data-sort="red sample">
                        <a href="https://via.placeholder.com/1200/FF0000/FFFFFF.png?text=9" data-toggle="lightbox" data-title="Report 9">
                            <img src="https://via.placeholder.com/300/FF0000/FFFFFF?text=9" className="img-fluid mb-2" alt="red sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="10" data-sort="white sample">
                        <a href="https://via.placeholder.com/1200/FFFFFF.png?text=10" data-toggle="lightbox" data-title="Report 10">
                            <img src="https://via.placeholder.com/300/FFFFFF?text=10" className="img-fluid mb-2" alt="white sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="11" data-sort="white sample">
                        <a href="https://via.placeholder.com/1200/FFFFFF.png?text=11" data-toggle="lightbox" data-title="Report 11">
                            <img src="https://via.placeholder.com/300/FFFFFF?text=11" className="img-fluid mb-2" alt="white sample"/>
                        </a>
                        </div>
                        <div className="filtr-item col-sm-2" data-category="12" data-sort="black sample">
                        <a href="https://via.placeholder.com/1200/000000.png?text=12" data-toggle="lightbox" data-title="Report 12">
                            <img src="https://via.placeholder.com/300/000000?text=12" className="img-fluid mb-2" alt="black sample"/>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>{/*<!-- /.container-fluid -->*/}
        </section>
    </AppLayoutNew>
    )
}