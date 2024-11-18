$(function () {

    let table = [];
    window.getPageInfo("/GeneralLedger/Currency/CurrencyManagementInfo", null, startPage);
    function startPage(res) {
        $("#load_screen").hide()
        if (window.dataInfo.IsSuccess != undefined && window.dataInfo.IsSuccess) {
            window.dataInfo = dataInfo.Obj;



            var col = [
                { 'data': 'Id' },
                { 'data': 'BranchName' },
                { 'data': 'NameAr' },
                {
                    'targets': -1,
                    "render": function (data, type, full, meta) {

                        if (full.IsDefault == true) {
                            return tr_maincurrency;
                        } else {
                            return tr_notmaincurrency;
                        }
                    }
                },

                {
                    'targets': -1,
                    "render": function (data, type, full, meta) {

                        let html = ` <button  type="button" id="showToEdit" class="btn editBtnInTable" data-toggle="tooltip" data-placement="top" title="${tr_show}"> <i class="uk-icon-eye"></i> </button>
                        `
                        return html;
                    }
                }
            ];
            console.log("dataInfo.Obj", window.dataInfo)
            table = window.fillMainTable("#mainTable", window.dataInfo.Currencies, col)

        }
        var CheckviewState = window.getUrlParameter('ViewStateAdd');
        if (CheckviewState == "A") {
            window.AddIframBody();
        }
    }



 









});
