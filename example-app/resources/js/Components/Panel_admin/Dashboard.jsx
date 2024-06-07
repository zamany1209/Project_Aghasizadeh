import React, { useContext,useEffect,useState  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';
export default function Dashboard() {
    const { data } = useContext(DataContext);
    return (
        <>
        <div className="container-fluid">
          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <a href="http://127.0.0.1:8000/" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">مشاهده سایت</a>
          </div>

          {/* <!-- Content Row --> */}
          <div className="row">

              {/* <!-- Earnings (Monthly) Card Example --> */}
              <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
                          <div className="row no-gutters align-items-center">
                              <div className="col mr-2">
                                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    تعداد کل بازدید در هفته
                                    </div>
                                  <div className="h5 mb-0 font-weight-bold text-gray-800">{data.visit_web_site.data.total_week}</div>
                              </div>
                              <div className="col-auto">
                                  {/* <i className="fas fa-calendar fa-2x text-gray-300"></i> */}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* <!-- Earnings (Monthly) Card Example --> */}
              <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-success shadow h-100 py-2">
                      <div className="card-body">
                          <div className="row no-gutters align-items-center">
                              <div className="col mr-2">
                                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    تعداد کل بازدید در سال
                                    </div>
                                  <div className="h5 mb-0 font-weight-bold text-gray-800">{data.visit_web_site.data.total_month}</div>
                              </div>
                              <div className="col-auto">
                                  {/* <i className="fas fa-dollar-sign fa-2x text-gray-300"></i> */}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* <!-- Earnings (Monthly) Card Example --> */}
              <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-info shadow h-100 py-2">
                      <div className="card-body">
                          <div className="row no-gutters align-items-center">
                              <div className="col mr-2">
                                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                  </div>
                                  <div className="row no-gutters align-items-center">
                                      <div className="col-auto">
                                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                      </div>
                                      <div className="col">
                                          <div className="progress progress-sm mr-2">
                                              <div className="progress-bar bg-info" role="progressbar"
                                                  style={{"width": "50%"}} aria-valuenow="50" aria-valuemin="0"
                                                  aria-valuemax="100"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-auto">
                                  <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* <!-- Pending Requests Card Example --> */}
              <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-warning shadow h-100 py-2">
                      <div className="card-body">
                          <div className="row no-gutters align-items-center">
                              <div className="col mr-2">
                                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                      Pending Requests</div>
                                  <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                              </div>
                              <div className="col-auto">
                                  <i className="fas fa-comments fa-2x text-gray-300"></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* <!-- Content Row --> */}

          <div className="row">

              {/* <!-- Area Chart --> */}
              <div className="col-xl-8 col-lg-7">
                  <div className="card shadow mb-4">
                      {/* <!-- Card Header - Dropdown --> */}
                      <div
                          className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                          <h6 className="m-0 font-weight-bold text-primary">تعداد بازدید در هفته</h6>
                      </div>
                      {/* <!-- Card Body --> */}
                      <div className="card-body">
                            <div style={{ width: '100%', height: '400px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={data.visit_web_site.data.week}>
                                        <XAxis dataKey="day" />
                                        <YAxis />
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="visit" stroke="#8884d8" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                      </div>
                  </div>
              </div>

              {/* <!-- Pie Chart --> */}
              <div className="col-xl-4 col-lg-5">
                  <div className="card shadow mb-4">
                      {/* <!-- Card Header - Dropdown --> */}
                      <div
                          className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                          <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                      </div>
                      {/* <!-- Card Body --> */}
                      <div className="card-body">
                          {/* <div className="chart-pie pt-4 pb-2">
                              <canvas id="myPieChart"></canvas>
                          </div>
                          <div className="mt-4 text-center small">
                              <span className="mr-2">
                                  <i className="fas fa-circle text-primary"></i> Direct
                              </span>
                              <span className="mr-2">
                                  <i className="fas fa-circle text-success"></i> Social
                              </span>
                              <span className="mr-2">
                                  <i className="fas fa-circle text-info"></i> Referral
                              </span>
                          </div> */}
                      </div>
                  </div>
              </div>
          </div>

          <div className="row">

            {/* <!-- Area Chart --> */}
            <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">تعداد بازدید درماه</h6>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div className="card-body">
                        <div style={{ width: '100%', height: '400px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data.visit_web_site.data.month}>
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="visit" stroke="#8884d8" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Pie Chart --> */}
            <div className="col-xl-4 col-lg-5">
                <div className="card shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div className="card-body">
                        {/* <div className="chart-pie pt-4 pb-2">
                            <canvas id="myPieChart"></canvas>
                        </div>
                        <div className="mt-4 text-center small">
                            <span className="mr-2">
                                <i className="fas fa-circle text-primary"></i> Direct
                            </span>
                            <span className="mr-2">
                                <i className="fas fa-circle text-success"></i> Social
                            </span>
                            <span className="mr-2">
                                <i className="fas fa-circle text-info"></i> Referral
                            </span>
                        </div> */}
                    </div>
                </div>
            </div>
            </div>

          </div>
        </>
    );
}