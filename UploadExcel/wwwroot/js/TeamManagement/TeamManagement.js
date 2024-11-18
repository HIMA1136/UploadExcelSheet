$(function () {
    let table = [];

    window.getPageInfo("/HR/HRManagement/GeTAllTeamsData", null, startPage);
    function startPage() {
        if (window.dataInfo.IsSuccssed != undefined && window.dataInfo.IsSuccssed != null) {
            window.fillSelects("#EmployeesIds", window.dataInfo.Obj.Employees, "Id", ["Name"], "<option  disabled value='0'>-- اختر اسم الموظف -- </option>", false);
            window.fillSelects("#CommitteeId", window.dataInfo.Obj.Committee, "Id", ["Name"], "<option  disabled value='0'>-- اختر اسم اللجنه -- </option>", false);
            fillMainTable(window.dataInfo.Obj.Team)
        }
    }

    function fillMainTable(RES) {
        var col = [
            { 'data': 'Id' },

            { 'data': 'Name' },
            { 'data': 'CommitteName' },
            {
                'targets': -1,
                "render": function (data, type, full, meta) {
                    let html = `<a href="javascript:void(0);" id="showToEdit" class="bs-tooltip font-20 text-primary showToEdit " title="Edit" data-original-title="Edit"><i class="las la-pen"></i></a>
                            <a href="javascript:void(0);" class="bs-tooltip font-20 text-danger ml-2" id="deleteBtn" title="Delete" data-original-title="Delete"><i class="las la-trash"></i></a>`;
                    return html;
                }
            }
        ];
        table = window.fillMainTable("#MainTable", RES, col);
//        $('#EmployeesIds').find(`option[value="6"]`).prop('selected', true);
///*        $('#EmployeesIds').selectpicker('refresh');*/
//        $('#EmployeesIds').find(`option[value="2"]`).prop('selected', true);
//     /*   $('#EmployeesIds').selectpicker('refresh');*/
    }

    $("#saveBtn").on("click", () => {
        var model = {};

        model.Id = Number($("#ID").val())
        model.Name = $("#TeamName").val()
        model.CommitteId = Number($("#CommitteeId").val());
        model.EmployeesIds = setDetails();
        model.Notes = $("#TeamNotes").val();
        if (model.Id == 0) {
            window.sendToServer("/HR/HRManagement/CreateTeam", model, window.reload)
        }
        else {
            window.sendToServer("/HR/HRManagement/UpdateTeam", model, window.reload)
        }

        window.location.reload();
    });
    function setDetails() {
        var List = [];
        var SelecIDEmp = $("#EmployeesIds").val();
        for (var i = 0; i < SelecIDEmp.length; i++) {
            List.push(SelecIDEmp[i]);
        }


        return List
    }
    $(document).on("click", "#showToEdit", async function () {

        rowmodel = table.row($(this).parents('tr')).data();
        var id = rowmodel.Id;
        var res = await window.sendToServer(`/HR/HRManagement/GetProjectbyId?Id=${id}`, null, AppendEmps)
        $("#ID").val(rowmodel.Id);
        $("#CommitteeId").val(rowmodel.CommitteId).change();
        $("#TeamNotes").val(rowmodel.Notes);
        $("#TeamName").val(rowmodel.Name);



    });

    $("#cancel").on("click", () => {
        $("#TeamName").val("")
        $("#CommitteeId").empty()
        $("#TeamNotes").val("")
        $("#EmployeesIds").empty()
        $("#createDiv").hide(400)
        $("#tableDiv").show(400)
    })

    function AppendEmps(res) {
        var List = res.Obj.Emps;
        window.fillSelects("#EmployeesIds", window.dataInfo.Obj.Employees, "Id", ["Name"], "<option  disabled value='0'>-- اختر اسم الموظف -- </option>", false);
        for (var i in List) {
            $('#EmployeesIds').find(`option[value="${List[i].Id}"]`).prop('selected', true);
          
        }
       /* $('#EmployeesIds').selectpicker('refresh');*/
    }


    $(document).on("click", "#deleteBtn", function () {
        rowModel = table.row($(this).parents('tr')).data();

        let Id = Number(rowModel.Id);

        if (Id != undefined && !isNaN(Id) && Id > 0) {
            //    window.confirmMg(title = `حذف`, content = `هل انت متاكد !`, confirm)

            //function confirm() {
            window.sendToServer(`/HR/HRManagement/DeleteTeam?Id=${Id}`, null, window.location.reload())
            //    }

        } else {
            window.warning("خطأ في التعرف علي المستند");
        }
            /*window.location.reload();*/



    })
})