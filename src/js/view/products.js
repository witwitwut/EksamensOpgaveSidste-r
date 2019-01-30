

export class product{
    constructor(product){
        this.navn = product.navn
        this.beskrivelse = product.beskrivelse
        this.pris = product.pris
        this.img = product.img
    }


    render(){
        return `<div class="col-md-6">
        <div class="card mb-4 shadow-sm">
          <img src="${this.img}" alt="">
          <div class="card-body">
            <h2>${this.navn}<h2>
            <p class="card-text">${this.beskrivelse}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">Bestil</button>
              </div>
              <small class="text-muted">pris: ${this.pris}</small>
            </div>
          </div>
        </div>
      </div>        
        `
    }
}

