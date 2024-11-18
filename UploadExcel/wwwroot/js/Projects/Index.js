$(function () {
    let table = [];
    var manager = 1;
    window.getPageInfo("/Projects/Project/GetProjectPageInfo", null, startPage)
    function startPage() {
        console.log(window.dataInfo);
        if (window.dataInfo.IsSuccssed != undefined && window.dataInfo.IsSuccssed != null) {

            fillMainTable(window.dataInfo.Obj.projects);
        }


    }
    function fillMainTable(res) {
        var col = [

            { 'data': 'Id' },
            { 'data': 'Name' },
            {
                'targets': -1,
                "render": function (data, type, full, meta) {

                    if (full.StartDate.length > 10) {
                        return full.StartDate.substring(0, 10);
                    } else {
                        return full.StartDate;
                    }
                }
            },
            { 'data': 'Name' },
            { 'data': 'Expenses' },
            {
                'targets': -1,
                "render": function (data, type, full, meta) {
                    var html = '';
                    if (full.projectState == 1) {
                        return `<span class="badge badge-warning light"> تحت الاجراء</span>`;
                         html
                    } else if (full.projectState == 2) {
                        html = `<span class="badge badge-success-teal light"> تمت بنجاح</span>`;
                        return html
                    } else {
                        html = `<span class="badge badge-danger light" > متاخر</span>`;
                        return html
                    }
                }
            },
            { 'data': 'qualityCode' },
            {
                'targets': -1,
                "render": function (data, type, full, meta) {
                    let html = ` <span class="btn-label"><i class="las la-info-circle" id="ShowDetails" style="  font-size: 24px; color: #007bff; padding: 5px; 
      "></i></span>`;
                    return html;
                }
            },
            
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
        table = window.fillMainTable("#MainTable", res, col);
    }
    $(document).on("click", "#showToEdit", function () {

        rowmodel = table.row($(this).parents('tr')).data();

        window.location.href = `/Projects/Project/Management?EditId=${rowmodel.Id}`;
    });
    $(document).on("click", "#ShowDetails", function () {

        rowmodel = table.row($(this).parents('tr')).data();

        window.location.href = `/Projects/Project/Details?EditId=${rowmodel.Id}`;
    });


});