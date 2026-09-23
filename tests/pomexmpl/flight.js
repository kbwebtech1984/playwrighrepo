exports.chooseflight = class chooseflight
{
constructor(page)
{
    this.page=page;
    this.choose = page.getByRole('row').filter({ has:page.getByRole('cell', { name: '43', exact: true }) }).getByRole('button', { name: 'Choose This Flight' });
}    
    async flightchoose()
    {
        await this.choose.click();
               
    }
   

};

