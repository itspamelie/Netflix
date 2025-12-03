export default function MainDashboard(){
    return (
        <>
     
  

      <div class="row g-3">

        <div class="col-md-3">
          <div class="p-3 bg-black rounded">
            <h4>$12.34 <span class="text-success fs-6">+3.5%</span></h4>
            <p class="text-secondary">Potential growth</p>
          </div>
        </div>

        <div class="col-md-3">
          <div class="p-3 bg-black rounded">
            <h4>$17.34 <span class="text-success fs-6">+11%</span></h4>
            <p class="text-secondary">Revenue current</p>
          </div>
        </div>

        <div class="col-md-3">
          <div class="p-3 bg-black rounded">
            <h4>$12.34 <span class="text-danger fs-6">-2.4%</span></h4>
            <p class="text-secondary">Daily income</p>
          </div>
        </div>

        <div class="col-md-3">
          <div class="p-3 bg-black rounded">
            <h4>$31.53 <span class="text-success fs-6">+3.5%</span></h4>
            <p class="text-secondary">Expense current</p>
          </div>
        </div>

      </div>

      <div class="row mt-4 g-4">

        <div class="col-md-6">
          <div class="bg-black p-3 rounded">
            <h5 class="mb-3">Transaction History</h5>

            <ul class="list-group bg-black">
              <li class="list-group-item bg-dark text-light d-flex justify-content-between">
                <span>Transfer to Paypal<br/><small class="text-secondary">07 Jan 2019</small></span>
                <strong>$236</strong>
              </li>
              <li class="list-group-item bg-dark text-light d-flex justify-content-between">
                <span>Transfer to Stripe<br/><small class="text-secondary">07 Jan 2019</small></span>
                <strong>$593</strong>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-6">
          <div class="bg-black p-3 rounded">
            <h5 class="mb-3">Open Projects</h5>

            <ul class="list-group bg-black text-light">

              <li class="list-group-item bg-dark text-light d-flex justify-content-between">
                <div>
                  <strong>Admin dashboard design</strong>
                  <br/><small class="text-secondary">Broadcast web app mockup</small>
                </div>
                <small class="text-secondary">15 min ago</small>
              </li>

              <li class="list-group-item bg-dark text-light d-flex justify-content-between">
                <div>
                  <strong>WordPress Development</strong>
                  <br/><small class="text-secondary">Upload new design</small>
                </div>
                <small class="text-secondary">1 hour ago</small>
              </li>

              <li class="list-group-item bg-dark text-light d-flex justify-content-between">
                <div>
                  <strong>Project meeting</strong>
                  <br/><small class="text-secondary">Project discussion</small>
                </div>
                <small class="text-secondary">35 min ago</small>
              </li>

            </ul>

          </div>
        </div>

      </div>
        </>
    )
}