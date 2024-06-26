import React, { useContext,useEffect,useState  } from 'react';
import { DataContext } from '@/Context/DataContext';
import moment from 'moment-jalaali';
import { LineChart, Line, XAxis, YAxis, CartesianGrid,Pie,PieChart,Radar,PolarRadiusAxis,PolarAngleAxis,PolarGrid,RadarChart, Tooltip, Legend,ResponsiveContainer } from 'recharts';
function Constructor(){
    const { data,url } = useContext(DataContext);
    const [weekDays, setWeekDays] = useState([]);
    const maxValue = data.visit_web_site.visit_month.reduce((max, current) => (current.value > max ? current.value : max), 0);
    const maxVisit = Math.max(...data.list_pages.map(item => item.visit));

    const dataWithGrowth = data.list_pages.map(item => ({
    ...item,
    growth: (item.visit / maxVisit) * 100
    }));
    const currentMonth = moment().jMonth();
    const currentLastMonth = ()=>{
        if(moment().jMonth() == 0){
            return 11;
        }else{
            return moment().jMonth() - 1;
        }
    }
    useEffect(() => {
      const daysOfWeek = data.visit_web_site.visit_week.map((item, index) => ({
        name: item.name,
        value1: item.value,
        value2: data.visit_web_site.visit_last_week[index].value,
      }));
      const Get_Date = ()=>{
        const today = new Date();
        if(today.getDay() == 6){
            return 0;
        }
        else{
            const currentDayIndex = today.getDay()+ 1;
            return currentDayIndex;
        }
      }
      const currentDayIndex = Get_Date();
        const adjustedDays = [
        ...daysOfWeek.slice(currentDayIndex + 1),
        ...daysOfWeek.slice(0, currentDayIndex + 1)
      ];
      setWeekDays(adjustedDays);
    }, []);
    return (
        <>
                <div className="container-fluid">
          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <a href={url+"/"} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">مشاهده سایت</a>
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
                                  <div className="h5 mb-0 font-weight-bold text-gray-800">{data.visit_web_site.total_week}</div>
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
                                  <div className="h5 mb-0 font-weight-bold text-gray-800">{data.visit_web_site.total_month}</div>
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
                                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">درصد رشد بازدید نسبط به هفته گذشته
                                  </div>
                                  <div className="row no-gutters align-items-center">
                                      <div className="col-auto">
                                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{parseInt(((data.visit_web_site.total_week - data.visit_web_site.total_last_week) / data.visit_web_site.total_last_week) * 100)}%</div>
                                      </div>
                                      <div className="col">
                                          <div className="progress progress-sm mr-2">
                                              <div className="progress-bar bg-info" role="progressbar"
                                                  style={{"width": +String(((data.visit_web_site.total_week - data.visit_web_site.total_last_week) / data.visit_web_site.total_last_week) * 100)+"%"}} aria-valuenow="-1" aria-valuemin="0"
                                                  aria-valuemax="100"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-auto">
                                  {/* <i className="fas fa-clipboard-list fa-2x text-gray-300"></i> */}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* <!-- Pending Requests Card Example --> */}
              <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-warning  shadow h-100 py-2">
                      <div className="card-body">
                          <div className="row no-gutters align-items-center">
                              <div className="col mr-2">
                                  <div className="text-xs font-weight-bold text-warning  text-uppercase mb-1">درصد رشد بازدید نسبط به ماه گذشته
                                  </div>
                                  <div className="row no-gutters align-items-center">
                                      <div className="col-auto">
                                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                            {parseInt(((data.visit_web_site.visit_month[currentMonth].value - data.visit_web_site.visit_month[currentLastMonth()].value) / data.visit_web_site.visit_month[currentLastMonth()].value) * 100)}%</div>
                                      </div>
                                      <div className="col">
                                          <div className="progress progress-sm mr-2">
                                              <div className="progress-bar bg-warning " role="progressbar"
                                                  style={{"width": +String(((data.visit_web_site.visit_month[currentMonth].value - data.visit_web_site.visit_month[currentLastMonth()].value) / data.visit_web_site.visit_month[currentLastMonth()].value) * 100)+"%"}} aria-valuenow="-1" aria-valuemin="0"
                                                  aria-valuemax="100"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-auto">
                                  {/* <i className="fas fa-clipboard-list fa-2x text-gray-300"></i> */}
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
                          <h6 className="m-0 font-weight-bold text-primary">مقایسه تعداد بازدید هفته گذشته با هفته جاری</h6>
                      </div>
                      {/* <!-- Card Body --> */}
                      <div className="card-body">
                            <div style={{ width: '100%', height: '400px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={weekDays}>
                                        <XAxis dataKey="name"/>
                                        <YAxis />
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="value2" name="هفته گذشته" stroke="#8884d8" />
                                        <Line type="monotone" dataKey="value1" name="هفته جاری" stroke="#82ca9d" />
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
                          <h6 className="m-0 font-weight-bold text-primary">مقایسه</h6>
                      </div>
                      {/* <!-- Card Body --> */}
                      <div className="card-body">
                      <div style={{ width: '100%', height: '400px' }}>
                      <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                            <Pie data={weekDays} dataKey="value2" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label />
                            <Pie data={weekDays} dataKey="value1" nameKey="name" cx="50%" cy="50%" innerRadius={95} outerRadius={115} fill="#82ca9d" label />
                            <Tooltip />
                            <Legend payload={[{ value: 'هفته جاری',color:"#82ca9d"},{ value: 'هفته گذشته',color:"#8884d8"}]} />
                            </PieChart>
                        </ResponsiveContainer>
                        </div>
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
                                <LineChart data={data.visit_web_site.visit_month}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
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
                        <h6 className="m-0 font-weight-bold text-primary">مقایسه</h6>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div className="card-body">
                        <div style={{ width: '100%', height: '400px' }}>
                        <ResponsiveContainer width="100%" height={290}>
                            <RadarChart outerRadius={100} data={data.visit_web_site.visit_month}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="name" />
                            <PolarRadiusAxis angle={18} domain={[0, maxValue]} />
                            <Radar name="بازدید در سال" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            <Tooltip />
                            <Legend />
                            </RadarChart>
                        </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">صفحه ها</h6>
                    </div>
                    <div className="card-body">
                    {dataWithGrowth?.map(item => 
                        <>
                        <h4 className="small font-weight-bold">{item.url} <span
                                className="float-right">{parseInt(item.visit)}</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-info" role="progressbar" style={{"width": parseInt(item.growth)+"%"}}
                                aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </>
                    )}
                    </div>
                </div>
            </div>
            </div>

          </div>
        </>
    );
}
export default function Dashboard() {
    const { active_component } = useContext(DataContext);
    return (
        <>
        {active_component === 'Dashboard' && <Constructor />}
        </>
    );
}