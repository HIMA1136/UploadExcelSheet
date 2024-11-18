$(function () {
    var viewState = 'C';
    var manager = 1;
    window.getPageInfo("/Projects/Project/GetProjectPageInfo", null, startPage)
    async function startPage() {
        console.log(window.dataInfo);
        if (window.dataInfo.IsSuccssed != undefined && window.dataInfo.IsSuccssed != null) {
            window.fillSelects("#EmployeeSelect", window.dataInfo.Obj.Employee, "Id", ["Name"], "-اختر  الموظف-", false);
            window.fillSelects("#ComitteeSelect", window.dataInfo.Obj.Committee, "Id", ["Name"], "-اختر  اللجنة-", false);
        }
        var id = window.getUrlParameter('EditId')
        if (id != 0 && id != null && id !=false) {

            var res = await window.sendToServer(`/Projects/Project/GetProjectbyId?Id=${id}`, null, FillPage)
        }


    }
    $(document).on('click', '#SaveBtn', function () {

        save();
    })
    function save() {
        debugger;
        var model = {}
        model.Id = $("#Id").val();
        model.Name = $("#ProjectNameId").val();
        model.project_description = $("#ProjectDescription").val();
        model.StartDate = $("#StartDateExpected").val();
        model.EndDate = $("#EndDateExpected").val();
        if (manager == 1) {
            model.EmployeeId = $("#EmployeeSelect").val();
        }
        else if (manager == 2) {
            model.CommitteeId = $("#ComitteeSelect").val();
        }
        model.PhoneNumber = $("#PhoneNumber").val();
        model.Expenses = $("#ProjectBudget").val();
        model.Address = $("#Address").val();
        model.Coordinations = $("#Coordinations").val();
        model.SiteCode = $("#SiteCode").val();
        if (model.Id == 0) { window.sendToServer("/Projects/Project/Create", model, Callback) }
        else { window.sendToServer("/Projects/Project/Update", model, Callback) }
        
    }
    function Callback(res) {
        if (res.IsSuccssed == true) {
            window.location.href = "/Projects/Project/Index"; }
    }

    $('input[type=radio][name=ProjectMangerRdio]').change(function () {
 
        if (this.id === 'rdo-1') {
            $("#EmployeeDiv").removeClass('Dnone');
            $("#ComitteeDiv").addClass('Dnone');
            manager = 1
        } else if (this.id === 'rdo-2') {
            $("#ComitteeDiv").removeClass('Dnone');
            $("#EmployeeDiv").addClass('Dnone');
            manager = 2;
        }
    });

    function FillPage(res) {
        var projects = res.Obj
        $("#Id").val(projects.Id);
        $("#ProjectNameId").val(projects.Name);
        $("#ProjectDescription").val(projects.project_description);
        $("#PhoneNumber").val(projects.PhoneNumber);
        $("#ProjectBudget").val(projects.Expenses);
        $("#Address").val(projects.Address);
        $("#Coordinations").val(projects.Coordinations);
        $("#SiteCode").val(projects.SiteCode);
        $("#StartDateExpected").val(projects.StartDate.split("T")[0]).change();
        $("#EndDateExpected").val(projects.EndDate.split("T")[0]).change();
        if (projects.EmployeeId != 0 || projects.EmployeeId != undefined || projects.EmployeeId != null) {
            $("#EmployeeDiv").removeClass('Dnone');
            $("#ComitteeDiv").addClass('Dnone');
            manager = 1
        }
        else {
            $("#ComitteeDiv").removeClass('Dnone');
            $("#EmployeeDiv").addClass('Dnone');
            manager = 2;
        }


    }

});