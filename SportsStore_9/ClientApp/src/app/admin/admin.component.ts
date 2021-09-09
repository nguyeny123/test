import { Component } from "@angular/core";
import { Repository } from "../models/repository";
@Component({
templateUrl: "admin.component.html"
})
export class AdminComponent {
    constructor(private repo: Repository) {
        this.repo.filter.reset();
        this.repo.filter.related = true;
        this.repo.getProducts();
        this.repo.getSuppliers();
        this.repo.getOrders();
    }
}