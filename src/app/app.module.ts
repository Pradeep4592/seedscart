
import { ProductService } from './product/service/product.service';
import { CategoryService } from './category.service';
import { BootstrapNavbarComponent } from './bootstrap-navbar/bootstrap-navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessfullComponent } from './order-successfull/order-successfull.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RouterModule } from '@angular/router';
import {CustomFormsModule} from 'ng2-validation'

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { LoginComponent } from './login/login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './user.service';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { LogOutComponent } from './logout/log-out/log-out.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { LogoutConfirmationComponent } from './logout/logout-confirmation/logout-confirmation.component';
import {MatDialogModule} from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatSidenavModule, MatTabsModule} from '@angular/material';
import { SignupComponent } from './singup/signup/signup.component';
import { SignupSuccessComponent } from './dilog/signup-success/signup-success.component';
import { BillingFormComponent } from './billing/billing-form/billing-form.component';




@NgModule({
  declarations: [
    AppComponent,
    BootstrapNavbarComponent,
    HomeComponent,
    ProductComponent,
    ShopingCartComponent,
    CheckOutComponent,
    OrderSuccessfullComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    LogOutComponent,
    ProductFormComponent,
    LogoutConfirmationComponent,
    SignupComponent,
    SignupSuccessComponent,
    BillingFormComponent,
    


  ],
  entryComponents:[LogoutConfirmationComponent,SignupSuccessComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatButtonModule, MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    CustomFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSidenavModule,
    MatTabsModule,
   
    
   

 

    
    
    AngularFirestoreModule,
    RouterModule.forRoot([
      {path:'',component:ProductComponent},
      {path:'products',component:ProductComponent},
      {path:'shopingCart',component:ShopingCartComponent},
      {path:'checkOut',component:CheckOutComponent},
      {path:'orderSuccessfull',component:OrderSuccessfullComponent},
      {path:'myOrder',component:MyOrdersComponent},
      {path:'login',component:LoginComponent},
      {path:'logout',component:LogOutComponent},
      {path:'navBar',component:BootstrapNavbarComponent},
      {path:'manageProduct',component:AdminProductsComponent},
      {path:'productForm/new',component:ProductFormComponent},
      {path:'productForm/:Id',component:ProductFormComponent},
      {path:'signup',component:SignupComponent},
      {path:'billing',component:BillingFormComponent}

    ])
  ],
  providers: [
    UserService,
    AngularFirestore,
    LoginService,
    BootstrapNavbarComponent,
    CategoryService,
    ProductService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
