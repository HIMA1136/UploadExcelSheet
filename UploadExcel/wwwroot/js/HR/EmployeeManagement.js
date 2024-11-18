$(function () {
    var tablel = [];
    window.rowModel


    window.getPageInfo("/HR/HRManagement/GetEmpDataInfo", null, startPage);
    function startPage(res) {
        //if (window.dataInfo.IsSuccssed != undefined && window.dataInfo.IsSuccssed) {


            window.dataInfo = dataInfo.Obj;

            var col = [

                { 'data': 'Id' },
                { 'data': 'Name' },
                { 'data': 'CommitteeName' },

                {
                    'targets': -1,
                    "render": function (data, type, full, meta) {
                        let html = ` 

                                                  <td>
                                                                <div class="d-flex">
                                                                    <a href="javascript:void(0);" id="showToEdit" class="bs-tooltip font-20 text-primary" title="Edit" data-original-title="Edit"><i class="las la-pen"></i></a>
                                                                    <a href="javascript:void(0);"id="BtnDelete"class="bs-tooltip font-20 text-danger ml-2" title="Delete" data-original-title="Delete"><i class="las la-trash"></i></a>
                                                                </div>
                                                            </td>`;
                        return html;
                    }
                }
            ];
            tablel = window.fillMainTable("#EmployeesTable", window.dataInfo.Employees, col)


            window.fillSelects("#committeeId", window.dataInfo.Committe, "Id", "Name", "<option disabled value='0'>-- اختر الفرع -- </option>", false);


        }
    /*}*/


    $(document).on('click', "#saveBtn", function (e) {


        var model = {};
        model.Employee = {};
        model.User = {};

        model.Id = $("#ID").val();
        model.pasward = $("#pasward").val();
        model.Name = $("#Name").val();
        model.committeeId = Number($("#committeeId").val());
        model.Adrress = $("#Adrress").val();
        model.PhoneNumber = $("#PhoneNumber").val();
        model.UserName = $("#UserName").val();
        model.IsUser = true;
        if (model.Name == "" || model.Name.length < 3) {
            //$("#NameArSpan").focus();
            window.warning("ادخل اسم الموظف بشكل صحيح");
            return;
        }

        //if (model.Id == undefined || model.Id == 0) 
        if (model.pasward == "" || model.pasward.length < 3) {
            window.warning("ادخل كلمة المرور بشكل صحيح");
            return;
        }
        //    if (model.Id == undefined || model.Id == 0) {
        if (model.pasward == "" || model.pasward.length < 3) {
            window.warning("ادخل كلمة المرور بشكل صحيح");
            return;
        }
        if (model.Id != 0) {
            window.sendToServer("/HR/HRManagement/UpdateEmployee", model, window.reload)
        
            //} else {
            //    if (model.Password != undefined && model.Password.length < 3) {
            //        window.warning("ادخل كلمة المرور بشكل صحيح");
            //        return;
            //    }
            //    window.sendToServer("/HR/Employee/UpdateEmployee", model, window.reload)
            //        }
        } else {
            window.sendToServer("/HR/HRManagement/CreateEmployee", model, window.reload)

        }
    })

    $(document).on('click', "#showToEdit", function (e) {

        window.rowModel = tablel.row($(this).parents('tr')).data();
        console.log(rowModel)
        $("#ID").val(rowModel.Id);
        $("#Name").val(rowModel.Name);
        Number($("#committeeId").val(rowModel.EmployeeNo));
        $("#Adrress").val(rowModel.Adrress);
        $("#PhoneNumber").val(rowModel.PhoneNumber);
        $("#UserName").val(rowModel.UserName);

    })


    $(document).on("click", "#BtnDelete", function () {
        window.rowModel = tablel.row($(this).parents('tr')).data();

        let Id = Number(window.rowModel.Id)

        if (Id != undefined && !isNaN(Id) && Id > 0) {
        //    window.confirmMg(title = `حذف`, content = `هل انت متاكد !`, confirm)

            //function confirm() {
                window.sendToServer("/HR/HRManagement/DeleteEmployee/" + Id, null, window.reload)
        //    }
        } else {
            window.warning("خطأ في التعرف علي المستند");
        }

    })







});
