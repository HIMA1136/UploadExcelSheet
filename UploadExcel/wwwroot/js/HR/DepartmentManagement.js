$(function () {
    let table = [];

    window.getPageInfo("/HR/HRManagement/GeTAll", null, startPage);
    function startPage(res) {
        if (window.dataInfo.IsSuccssed != undefined && window.dataInfo.IsSuccssed) {
            window.fillSelects("#ResponsbiltyId", window.dataInfo.Obj.Employee, "Id", "Name", "<option  disabled value='0'>-- اختر اسم الموظف -- </option>", false);
            fillMainTable(res.Obj.Committee)
        }
    }

        function fillMainTable(RES) {
            var col = [
                { 'data': 'Id' },

                { 'data': 'Name' },
                { 'data': 'EmployeeName' },
                {
                    'targets': -1,
                    "render": function (data, type, full, meta) {
                        let html = `<a href="javascript:void(0);" id="showToEdit" class="bs-tooltip font-20 text-primary showToEdit " title="Edit" data-original-title="Edit"><i class="las la-pen"></i></a>
                            <a href="javascript:void(0);" class="bs-tooltip font-20 text-danger ml-2" id="deleteBtn" title="Delete" data-original-title="Delete"><i class="las la-trash"></i></a>
         
                                                </a >`;
                        return html;
                    }
                }
            ];
            table = window.fillMainTable("#MainTable", RES, col);
        }
        $("#saveBtn123").click(function () {
            var model = {};


            model.Name = $("#Name").val();
            model.Id = $("#ID").val();
            model.EmployeeId = Number($("#ResponsbiltyId").val())
            model.Notes = $("#Notes").val()
            if (model.Id != 0) {
                window.sendToServer("/HR/HRManagement/Update", model, window.reload())
}
            else {
                window.sendToServer("/HR/HRManagement/Create", model, window.reload())
            }
            window.reload()
        });
    $(document).on("click", "#showToEdit", function () {

        rowmodel = table.row($(this).parents('tr')).data();
    


        $("#ID").val(rowmodel.Id);
        $("#Name").val(rowmodel.Name);
        $("#ResponsbiltyId").val(rowmodel.ResponsbiltyId);
        $("#Notes").val(rowmodel.Notes);

    });

    $(document).on("click", "#deleteBtn", function () {
        rowModel = table.row($(this).parents('tr')).data();

        let Id = Number(rowModel.Id);

        if (Id != undefined && !isNaN(Id) && Id > 0) 
            window.sendToServer(`/HR/HRManagement/DeleteDepartment?Id=${Id}`, null, window.reload())

        });

 })