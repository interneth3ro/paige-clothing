import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ProductItem, ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChild(MatTable) productsTable!: MatTable<ProductItem>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  dataSource: any;
  columns: string[] = ['name', 'color', 'type', 'cost', 'actions'];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadData();
  }

  filter(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filter.trim().toLowerCase();
  }

  deleteProduct(id: string): void {
    this.productsService.deleteProduct(id);
    this.loadData();
  }

  formatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD'
  });

  loadData(): void {
    const products = this.productsService.getProducts();
    this.dataSource = new MatTableDataSource<ProductItem>(products);
    this.dataSource.filterPredicate = (data: ProductItem, filter: string) => {
      return data.color === filter;
    }
    this.dataSource.paginator = this.paginator;
  }
}
