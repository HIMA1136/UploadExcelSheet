$(function () {
    $("#LoginBtn").click(function () {
        var model = {};

  

        model.UserName = $("#UserName").val();
        model.Password = $("#Passward").val();

        window.sendToServer("/Auth/User/Login", model, TokenToLocalStorage);

    });

    function TokenToLocalStorage(res) {
        if (res.IsSuccssed == true) {

      

            //if (res.Message == "Choose Branch") {
            //    openBranchModal(res.Obj)
            //}
            if (res.Obj != null) {
                localStorage.setItem("AccessToken", res.Obj.Token);
                //var branchesArray = res.Obj.Obj.UserBranches;
                //var myBranch = branchesArray.find(a => a.Id == res.Obj.Obj.BranchId);
                //var branchesJSON = JSON.stringify(branchesArray);
                //var myBranchJSON = JSON.stringify(myBranch);
                //localStorage.setItem("branchesList", branchesJSON);
                //localStorage.setItem("branchesListS", myBranchJSON);
                //localStorage.setItem("branchId", res.Obj.Obj.BranchId);
                window.location.href = "/DashBoard/Home/Index";
            }
            console.log(res);

        }
        else {
            console.log("testMessage", res.Obj.Message);
            $("#validationSummary").val(res.Obj.Message).change();
        }
    }
})