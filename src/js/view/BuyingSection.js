

export function createBuyingSection(){

    return `
    <section class="album py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-8">     
            <div id="ProductSection" class="row">
            </div>            
        </div>
        
        <!-- bestillings list -->
        <div class="col-md-4">
          <article class="">
            <div class="order-md-2 mb-4">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Your cart</span>
                <span id="buyingAmount" class="badge badge-secondary badge-pill"></span>
              </h4>
              <ul id="cart" class="list-group mb-3">                
              </ul>              
              <form class="card p-2">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="">
                  <div class="">
                    <button id="totalprice" ></button>
                  </div>
                  <div class="input-group-append">
                    <button id="buybtn" type="submit" class="btn btn-secondary">Buy</button>
                  </div>
                </div>
              </form>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>       
</section>
    `
}