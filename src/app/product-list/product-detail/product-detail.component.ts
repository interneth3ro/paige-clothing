import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductItem, ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required, Validators.maxLength(56)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(56)]),
    color: new FormControl('', [Validators.required, Validators.maxLength(56)]),
    price: new FormControl('', [Validators.required, Validators.min(1)])
  });

  private item: ProductItem | undefined;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const products = this.productsService.getProducts();
      this.item = products.find(p => p.sku === params['id']);
    });

    this.productForm.patchValue({
      name: this.item?.name,
      type: this.item?.type,
      description: this.item?.description,
      color: this.item?.color,
      price: this.item?.price
    });
  }

  saveProduct(form: FormGroup) {
    const updatedItem = {
      ...this.item,
      name: form.controls['name'].value,
      type: form.controls['type'].value,
      description: form.controls['description'].value,
      color: form.controls['color'].value,
      price: parseInt(form.controls['price'].value)
    } as ProductItem;

    this.productsService.saveProduct(updatedItem);
    
    this.router.navigate(['/product-list']);
  }
}
