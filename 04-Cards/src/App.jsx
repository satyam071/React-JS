import Card from './Components/Card'

const App = () => {
  const jobs = [
    {
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png",
      companyName: "Google",
      postTime: "5 days ago",
      post: "Senior UI/UX Designer",
      jobType: "Full Time",
      level: "Senior Level",
      salaryPerHour: "$120/hr",
      location: "Mumbai, India"
    },
    {
      companyLogo: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
      companyName: "Amazon",
      postTime: "2 weeks ago",
      post: "Frontend Developer",
      jobType: "Full Time",
      level: "Junior Level",
      salaryPerHour: "$85/hr",
      location: "Bangalore, India"
    },
    {
      companyLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_960_720.png",
      companyName: "Meta",
      postTime: "1 week ago",
      post: "Product Designer",
      jobType: "Part Time",
      level: "Senior Level",
      salaryPerHour: "$110/hr",
      location: "Hyderabad, India"
    },
    {
      companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCJpAHzn91VMfwirwAbAmV-ONO02UjmCj2w&s",
      companyName: "Apple",
      postTime: "3 days ago",
      post: "React Developer",
      jobType: "Full Time",
      level: "Junior Level",
      salaryPerHour: "$95/hr",
      location: "Pune, India"
    },
    {
      companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSymwdtxCSKJoGnys2K6LyndJeuy3IzuWg_w&s",
      companyName: "Netflix",
      postTime: "10 weeks ago",
      post: "Backend Engineer",
      jobType: "Full Time",
      level: "Senior Level",
      salaryPerHour: "$140/hr",
      location: "Delhi, India"
    },
    {
      companyLogo: "https://cdn-icons-png.flaticon.com/256/906/906309.png",
      companyName: "Microsoft",
      postTime: "6 days ago",
      post: "Cloud Engineer",
      jobType: "Part Time",
      level: "Junior Level",
      salaryPerHour: "$100/hr",
      location: "Chennai, India"
    },
    {
      companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAibtuIe2BI9kfJQE2nBDrdkgyBSrASSPWw&s",
      companyName: "Uber",
      postTime: "4 weeks ago",
      post: "Mobile App Developer",
      jobType: "Full Time",
      level: "Senior Level",
      salaryPerHour: "$115/hr",
      location: "Noida, India"
    },
    {
      companyLogo: "https://companieslogo.com/img/orig/ADBE-fb158b30.png?t=1740130206",
      companyName: "Adobe",
      postTime: "8 days ago",
      post: "UI Designer",
      jobType: "Part Time",
      level: "Junior Level",
      salaryPerHour: "$75/hr",
      location: "Ahmedabad, India"
    },
    {
      companyLogo: "https://static.vecteezy.com/system/resources/previews/020/336/484/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
      companyName: "Tesla",
      postTime: "7 weeks ago",
      post: "Software Engineer",
      jobType: "Full Time",
      level: "Senior Level",
      salaryPerHour: "$130/hr",
      location: "Jaipur, India"
    },
    {
      companyLogo: "https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png",
      companyName: "LinkedIn",
      postTime: "12 days ago",
      post: "Data Analyst",
      jobType: "Part Time",
      level: "Junior Level",
      salaryPerHour: "$90/hr",
      location: "Kolkata, India"
    }
  ];
  console.log(jobs)

  return (
    <div className= "w-[100vw] bg-black flex flex-wrap">
      {jobs.map(function(elem,idx){
        return <div key={idx}>
            <Card companyLogo={elem.companyLogo} companyName={elem.companyName}  datePosted={elem.postTime} post={elem.post} tag1={elem.jobType} tag2={elem.level} brandLogo={elem.companyLogo} price={elem.salaryPerHour} location={elem.location}/>

        </div>
      })}

    </div>
    
    
  )
}

export default App
