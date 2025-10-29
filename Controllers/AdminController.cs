using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace DoAn_web.Controllers
{
    public class AdminController : Controller
    {
        // GET: Admin
        //Trang Dashboard chính
        public ActionResult Dashboard()
        {
            return View();
        }
        //Trang Quản lý sản phẩm
        public ActionResult Products()
        {
            return View();
        }
        //Trang Quản lý đơn hàng
        public ActionResult Order()
        {
            return View();
        }
        //Trang Quản lý người dùng
        public ActionResult Users()
        {
            return View();
        }
    }
}