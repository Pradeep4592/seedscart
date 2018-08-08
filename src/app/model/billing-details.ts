export interface BillingDetails{

bill_no:string,
billing_date:Date,
custommer_name:string,
custommer_address:string,
custommer_mob:number,

//product Details---
product_key:string,
product_tag_no?:string,
product_quantity:number,

//billing amount

total_amount:number,
paid_amount:number,
remaining_amount:number

//payment mode

paid_through:string,










}