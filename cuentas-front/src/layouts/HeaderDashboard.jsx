export default function HeaderDashboard(){
    return(
        <>
      <div className="d-flex justify-content-between align-items-center mb-4">
       
                <h3 className="fw-bold">Welcome to your Dashboard!</h3>
                <p className="text-muted">Effortlessly manage your finances with real-time insights.</p>
      
            <div className="d-flex align-items-center gap-3">
                <i className="fa-regular fa-envelope fs-5"></i>
                <i className="fa-regular fa-bell fs-5"></i>
                <img src="https://cdn.pixabay.com/photo/2021/11/24/05/19/user-6820232_1280.png" className="rounded-circle" style={{ width: "35px", height: "35px" }}/>
            </div>
        </div>
    
        </>
    )
} 
