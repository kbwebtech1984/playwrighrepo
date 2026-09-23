exports.purchase = class purchase
{
constructor(page)
{
    this.page=page;
    this.firstnm=page.locator('#inputName');
    this.address=page.locator("#address");
}    
    async purchaseticket()
    {
        
             await this.firstnm.fill('kunal');
             await this.address.fill('air port road');
    }
   

};