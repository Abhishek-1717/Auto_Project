import { test, expect } from '@playwright/test';

test.only('CMS Login', async ({ page }) => {
  
  await page.goto('https://suzukibusinesscloud-qa.com/');
  await page.locator('button').click();
  //await expect(page).toHaveURL(/login/);  
  //await expect(page).toHaveTitle(/Signin/);

  await page.getByRole('textbox',{name:'username'}).fill("Editordist@2");
  await page.getByRole('textbox',{name:'password'}).fill('TempPassword@123456');
  await page.getByRole('button',{name: 'Submit'}).click();


  // await expect(page.locator("h3")).toHaveText('Hello User! Welcome to Suzuki CMS');

  //Menu Manager -create sub Menu

  // await page.locator("//span[normalize-space()='Menu Manager']").click();
  // const Main_Menu = await page.locator("(//*[name()='svg'][@stroke='currentColor'])[1]").click();
  // const Add_item = await page.locator("(//button[contains(@type,'button')][normalize-space()='Add Items'])[1]").click();
  // const item_name=await page.locator("(//input[contains(@placeholder,'Enter item name')])[1]").fill("Suzuki");
  // const target = await page.locator("(//select[@name='target'])[1]");
  // target.click();
  // target.selectOption('New Tab');
  // const Url = await page.locator("(//input[contains(@placeholder,'Enter URL')])[1]").fill("www.suzuki.com");
  // const event = await page.locator("(//input[@placeholder='Enter event'])[1]").fill("Redirect");
  // const save_button=await page.locator("(//button[normalize-space()='Save'])[1]").click();

   //create Menu Placeholder
  // const Add_New_Menu = await page.locator("(//button[normalize-space()='Add New Menu'])[1]").click();
  // const Menu_name = await page.locator("//input[@name='menuTitle']").fill("bmw");
  // const save1 = await page.locator("//button[normalize-space()='Save']").click();

  // //Home Page
  await page.locator("(//span[normalize-space()='Home Page'])[1]").click();
  const banner = await page.locator("(//a[normalize-space()='Banners'])[1]").click();
  const Banners = await page.locator("(//button[normalize-space()='Save And Continue'])[1]").click();
  const Cars_Listing = await page.locator("(//button[normalize-space()='Save And Continue'])[1]").click();
  const Content_Placeholder = await page.locator("(//button[normalize-space()='Save And Continue'])[1]").click();
  const Seo_Settings = await page.locator("(//button[normalize-space()='Save And Continue'])[1]").click();
  const Send_Approve = await page.locator("(//button[normalize-space()='Send To Approve'])[1]").click();

  //Models
  //await page.locator("(//a[@class='leftmenu__nav-link text-nowrap active'])[1]").click();
  

  //All Pages
//  const All_pages = await page.locator("//span[normalize-space()='All Pages']").click();
//  const Add_new_page = await page.locator("(//button[normalize-space()='Add New Page'])[1]").click();
//  const select_template = await page.locator("(//*[name()='svg'][@class='css-19bqh2r'])[2]").click();
//  const template_save = await page.locator("(//button[normalize-space()='Add'])[1]").click();

 


 
// //Site Settings
//   await page.locator("//span[normalize-space()='Site Settings']").click();
// const Twitter = await page.locator("//input[@placeholder='Enter twitter url']").fill("https://www.twitterr.com");
// const Facebook = await page.locator("//input[@placeholder='Enter facebook url']").fill("https://www.facebookk.com");
// const Instagram = await page.locator("//input[@placeholder='Enter instagram url']").fill("https://www.instagramm.com/");
// const YouTube = await page.locator("//input[@placeholder='Enter youtube url']").fill("https://www.youtubee.com/");
// const Linkedin = await page.locator("//input[@placeholder='Enter Linkedin url']").fill("https://in.linkedin.com");

// const Save_continue1 = await page.locator("//button[normalize-space()='Save And Continue']").click();
// const Analytics = await page.locator("//button[normalize-space()='Save And Continue']").click();
// const Site_Variables = await page.locator("//button[normalize-space()='Save And Continue']").click();
// const Theme_Setting = await page.locator("//button[normalize-space()='Save And Continue']").click();
// const Send_Approve1 = await page.locator("//button[normalize-space()='Send To Approve']").click();




//   await page.locator("//span[normalize-space()='Form Settings']").click();
//   const Add_New_Form =  await page.locator("//button[normalize-space()='Add New Form']").click();
//   const form_title = await page.locator("(//input[@class='form-control'])[1]").fill("DemoForm");
//   const form_Save = await page.locator("//button[normalize-space()='Save']").click();





//   await page.locator("//span[normalize-space()='Widgets']").click();
//   const add_widgest = await page.locator("//button[normalize-space()='Add Widget']").click();
//   const Widget_title1 = await page.locator("//input[@name='title']").fill("demo");
//   const description = await page.locator("(//div[@class='jodit-wysiwyg'])[1]").fill("test");
//   const create = await page.locator("(//button[normalize-space()='Create'])[1]").click();
//   const Save_continue5 = await page.locator("(//button[normalize-space()='Save And Continue'])[1]").click();
//   const Add_new = await page.locator("getByRole('button', { name: 'Add New' })").click();
//   const widget_map = await page.locator("(//button[normalize-space()='Save'])[1]").click();



//   await page.locator("(//span[normalize-space()='Contact Us'])[1]").click();
//   await page.locator("(//div[contains(text(),'Blogs')])[1]").click();
//   await page.locator("(//span[normalize-space()='Dealer Location'])[1]").click();
//   await page.locator("(//span[normalize-space()='Testimonial'])[1]").click();
//   await page.locator("(//span[normalize-space()='Ecommerce Setting'])[1]").click();
//   page.close;





});