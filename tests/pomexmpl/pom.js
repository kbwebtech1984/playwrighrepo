exports.blazdemo = class blazdemo
{
constructor(page)
{
    this.page=page;
    this.departure =page.locator('.form-inline').nth(0);
    this.destination=page.locator('.form-inline').nth(1);
    this.findflight=page.getByText('Find Flights');

}
    async searchflight(departure,destination)
    {
        
            await this.departure.selectOption(departure);
            await this.destination.selectOption(destination);
            await this.findflight.click();
    }

}