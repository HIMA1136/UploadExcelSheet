$(function () {
    // Basic Example
    $("#createItem").click(function () {
        $("#createDiv").show("500")
        $("#tableDiv").hide("300")
    })

    $("#returnToView").click(function () {
        $("#createDiv").hide("300")
        $("#tableDiv").show("500")
    })
    $(document).on("click", "#showToEdit", function () {
        $("#createDiv").show("300")
        $("#tableDiv").hide("500")
    })


    window.fillSelects = (selector, dataInfo, value, name, firstOption = null, IsSelectTo = false, removeOld = true) => {

        if (removeOld)
            $(selector).empty();
        if (firstOption != null && firstOption != undefined) {
            $(selector).append(firstOption)
        }
        if (dataInfo != null) {
            for (var i = 0; i < dataInfo.length; i++) {
                //$(selector).append(' <option value="' + dataInfo[i].id + '">' + dataInfo[i].nameAr + '</option>')
                $(selector).append(' <option value="' + dataInfo[i][value] + '">' + dataInfo[i][name] + '</option>')
            }
        }
        if (IsSelectTo) {
            window.setSelectTwo(selector)
        }
    }

    window.sendToServer = async (url, model, callbackFun, selector = $("#saveBtn")) => {
        if (selector != null)
            $(selector).prop("disabled", true);

        //if (window.DivSpinner != undefined) {
        //    window.DivSpinner.style.display = "block"
        //}

        var token = "";
        var url1 = url;

/*        token = localStorage.getItem('AccessToken').toString();*/
        
        //if (url != "/Auth/User/Login") { }
        ///* url1 = "/Auth/User/Login/" + token;*/
        //if (url.includes('?')) {
        //    url1 = `${url}&Token=${token}`;
        //}
        //else {
        //    if (url !="/Auth/User/Login")
        //    url1 = `${url}?Token=${token}`;
        //}
        try {
            const response = await $.ajax({
                type: "POST",
                url: url1,
                data: { model },
            });
            if (window.DivSpinner != undefined) {
                window.DivSpinner.style.display = "none"
            }


            if (response.Message != "noMsg" && response.Message != null && response.Message != undefined && response.Message != "")
                /*  window.success(response.Message);*/
                alertsuccess(response.Message)

            if (response.IsSuccssed) {


                    if (selector != null)
                        $(selector).prop("disabled", false);


                } else {
                    /*   window.error(response.Message);*/
                    window.alertWarning(response.Message)
                    if (selector != null)
                        $(selector).prop("disabled", false);
                    throw  window.alertWarning(response.Message)
                    //  throw new Error(response.Message); // Reject the Promise with an error
                }
            if (callbackFun != undefined && callbackFun != null) {
                callbackFun(response); // Call the callback function with the response value
            }


            if (response.IsRedirect) {
                window.redirect(response.URL);
            }

            if (selector != null)
                $(selector).prop("disabled", false);
            return response; // Resolve the Promise with the response value
        } catch (error) {

            if (window.DivSpinner != undefined) {
                window.DivSpinner.style.display = "none"
            }

            // Handle any errors that occurred during the AJAX request
            /*  console.error("Error in sendToServer:", error);*/
         /*   throw error; // Re-throw the error to propagate it*/
        }
    }
    window.getPageInfo = (url, prams = null, callbackFun) => {


        var obj = {
            type: "Get",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            url: url,
            success: function (res) {
                //if (window.DivSpinner != undefined) {
                //    window.DivSpinner.style.display = "none"
                //}


                if (res.IsSuccssed) {

                    window.dataInfo = res;
                    callbackFun(res);
                }
                else {
                    window.alertdanger(res.Message);
                }
                if (res.IsRedirect) {
                    window.redirect(res.URL);
                }
                //alert("wait");

            }, error: function (resError) {

                window.dataInfo = resError;
                callbackFun(resError);
            }
        };

        if (prams != null) {
            obj.data = prams;
        }
        $.ajax(obj);
    };
    
    window.dataTableServerSide = (selecor, url, columns, additionalData = null) => {
        $(selecor).DataTable({
            "destroy": true,
            "processing": true,
            "serverSide": true,
            "ordering": false,
            "columns": columns,
            "ajax": {
                type: "POST",
                "url": url,
                "data": function (d) {
                    d.searchValue = $(`${selecor}_wrapper .dataTables_filter input[type='search']`).val()
                    if (additionalData != null) {
                        for (const key in additionalData) {
                            console.log(key);
                            console.log(additionalData[key]);
                            if (additionalData.hasOwnProperty(key)) {
                                d[key] = additionalData[key];
                            }
                        }
                    }
                },
                "dataSrc": function (json) {
                    var data = json.Obj;
                    json.draw = data.draw;
                    json.recordsTotal = data.recordsTotal;
                    json.recordsFiltered = data.recordsTotal;
                    json.data = data.data;
                    return json.data;
                }
            },
            "language":
            {
                "processing": "جاري تحميل البيانات"
            },
            "paging": true, // Enable pagination
            "pageLength": 10, // Set the default value to 10
            "lengthMenu": ["10", "25", "50", "100"], // Define page length menu options as text
            "pagingType": "full_numbers" // Display page numbers as "1, 2, 3, 4, 5, 6"

        });
        const lengthInput = $(`${selecor}_length select`);
        lengthInput.css('width', '100px'); // Adjust the width as needed
        $(`.dataTables_length  select`).val("10");
    }
    window.fillMainTable = (tableSel, dataInfo, columns, hasHuttons = true, haseSearch = true) => {

        var buttons = (hasHuttons) ? ['copy', 'excel', 'print'] : [];
        var lang = (haseSearch) ? {
            "search": " بحث : ",
            "paginate":
            {
                "first": "الاول",
                "last": "الاخير",
                "next": "التالي",
                "previous": "السابق"
            },
            "emptyTable": "لايوجد بيانات لعرضها",
            "info": "عرض _START_ الى _END_ من _TOTAL_ صف",
            "infoEmpty": "عرض 0 الى 0 من 0 صف",
            "lengthMenu": "عرض _MENU_ صف",
            "bDestroy": true
        } : {};

        var table = $(tableSel).DataTable({
            destroy: true,
            data: dataInfo,
            dom: 'Bfrtip',

            buttons: buttons,

            columns: columns,

            "language": lang
        });
        $('a.toggle-vis').on('click', function (e) {
            e.preventDefault();
            var column = table.column($(this).attr('data-column'));
            column.visible(!column.visible());
        });
        $(".buttons-print,.buttons-html5").addClass("btn btn-info")
        return table;
    }



    window.reload = () => {
        setTimeout(function () { location.reload() }, 1500);
    }
    window.alertsuccess=(msg)=> {
            Snackbar.show({
                text: msg,
                actionTextColor: '#fff',
                backgroundColor: '#8dbf42',
                pos: 'bottom-center'
            });
    }
    window.alertWarning=(msg)=> {
            Snackbar.show({
                text: msg,
                actionTextColor: '#fff',
                backgroundColor: '#e2a03f',
                pos: 'bottom-center'
            });
    }
    window.alertdanger =(msg)=> {
            Snackbar.show({
                text: msg,
                actionTextColor: '#fff',
                backgroundColor: '#e7515a',
                pos: 'bottom-center'
            });
    }

    // Custom Background

    $('.notification-bg-info').click(function () {
        Snackbar.show({
            text: 'Info',
            actionTextColor: '#fff',
            backgroundColor: '#2196f3',
            pos: 'bottom-center'
        });
    });
    $('.notification-bg-success').click(function () {
        Snackbar.show({
            text: 'Success',
            actionTextColor: '#fff',
            backgroundColor: '#8dbf42',
            pos: 'bottom-center'
        });
    });
    $('.notification-bg-warning').click(function () {
        Snackbar.show({
            text: 'Warning',
            actionTextColor: '#fff',
            backgroundColor: '#e2a03f',
            pos: 'bottom-center'
        });
    });
    $('.notification-bg-danger').click(function () {
        Snackbar.show({
            text: 'Danger',
            actionTextColor: '#fff',
            backgroundColor: '#e7515a',
            pos: 'bottom-center'
        });
    });
    $('.notification-bg-dark').click(function () {
        Snackbar.show({
            text: 'Dark',
            actionTextColor: '#fff',
            backgroundColor: '#3b3f5c',
            pos: 'bottom-center'
        });
    });
    window.getUrlParameter = (sParam) => {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('?'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    };


    ////////////////////////////////////////////////////
    ///////////////////////////////////////////////////
    const dropzone = document.getElementById('dropzone');
    const tableHeaders = document.getElementById('table-headers');
    const tableBody = document.querySelector('#file-table tbody');

    // Dropzone click functionality
    dropzone.addEventListener('click', () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = ".xlsx, .xls"; // Only accept Excel files
        fileInput.style.display = 'none';

        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                handleFile(file);
            }
        });

        fileInput.click();
    });

    // Handle the selected file
    function handleFile(file) {
        if (validateFileType(file)) {
            addFileToDropzone(file);
            readExcelFile(file);
        } else {
            alert("Invalid file type! Please select an Excel file (.xlsx or .xls).");
        }
    }

    // Validate the file type
    function validateFileType(file) {
        const validExtensions = ["xlsx", "xls"];
        const fileExtension = file.name.split('.').pop().toLowerCase();
        return validExtensions.includes(fileExtension);
    }

    // Add file to dropzone
    function addFileToDropzone(file) {
        const fileBox = document.createElement('div');
        fileBox.classList.add('file-box');
        fileBox.textContent = file.name;

        // Add the file box to the dropzone
        dropzone.appendChild(fileBox);
    }

    // Read Excel file and extract data
    function readExcelFile(file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }); // Extract all rows (array of arrays)

            if (sheetData.length > 0) {
                const headers = sheetData[0];
                    const rows = sheetData.slice(1); // Remaining rows as data
                    const updatedRows = addTotalValueBeforeTaxingColumn(rows);
              /*  updatedRows.push(addTotalSumRow(updatedRows)); // Add total sum row*/
                headers.push('Total Value before Taxing')
                    updateTable(headers, updatedRows);
 
            }
        };

        reader.readAsArrayBuffer(file);
    }

    // Update table headers and rows dynamically
    function updateTable(headers, rows) {
        // Clear existing table headers and rows
        tableHeaders.innerHTML = "";
        tableBody.innerHTML = "";

        // Append headers to the table
        headers.forEach((header) => {
            const th = document.createElement('th');
            th.textContent = header;
            tableHeaders.appendChild(th);
        });

        // Append rows to the table
        rows.forEach((row, index) => {
            const tr = document.createElement('tr');
            if (index === rows.length - 1) {
                tr.classList.add('total-row');  // Add class to the last row (total row)
            }

            Object.values(row).forEach((cell) => {
                const td = document.createElement('td');
                td.textContent = cell !== undefined ? cell : ""; // Handle empty cells
                tr.appendChild(td);
            });

            tableBody.appendChild(tr);
        });
    }


    // Export button functionality (placeholder)
    document.getElementById('export-btn').addEventListener('click', () => {
        const headers = Array.from(tableHeaders.children).map(th => th.textContent.trim().replace(/\s+/g, ''));  // Remove leading/trailing spaces and internal spaces

        const rows = Array.from(tableBody.children);  // Get the rows from the table body

        const exportData = rows.map(row => {
            const rowData = {};
            const cells = Array.from(row.children);  // Get the cells in the row

            cells.forEach((cell, index) => {
                // Map header name to cell value
                rowData[headers[index].trim()] = cell.textContent.trim();
            });

            return rowData;  // Return the row object
        });

        // Log the data or process the array for export (e.g., as JSON)
        console.log(exportData);
        var model = exportData

        window.sendToServer("/Upload/UploadFile", model, callback());

    });

    function callback(){
        alert("تم الحفظ بنجاح")
    }

    // Add "Total Value before Taxing" column based on the formula (Total Value After Taxing / (1 + Tax Rate))
    // Add "Total Value before Taxing" column and calculate "Total Value After Taxing" sum
    function addTotalValueBeforeTaxingColumn(rows) {
        let totalValueAfterTaxingSum = 0;  // Sum of "Total Value After Taxing"
        let totalValueBeforeTaxingSum = 0; // Sum of "Total Value before Taxing"

        const updatedRows = rows.map(row => {
            // Get all values in the row as an array
            const rowValues = Object.values(row);

            // Get the last two values from the row (last two columns)
            const lastValue = rowValues[rowValues.length - 1];  // "Total Value After Taxing"
            const secondLastValue = rowValues[rowValues.length - 2]; // "Tax Rate" or second-last value

            // Calculate "Total Value before Taxing" as the sum of the last two values
            let totalValueBeforeTaxing = "";
            if (!isNaN(lastValue) && !isNaN(secondLastValue)) {
                totalValueBeforeTaxing = (parseFloat(lastValue) + parseFloat(secondLastValue)).toFixed(2);
            }

            // Add the "Total Value before Taxing" column to the row
            row["Total Value before Taxing"] = totalValueBeforeTaxing;

            // Accumulate the sum for the "Total Value After Taxing" and "Total Value before Taxing"
            if (!isNaN(lastValue)) {
                totalValueAfterTaxingSum += parseFloat(lastValue);
            }
            if (!isNaN(totalValueBeforeTaxing)) {
                totalValueBeforeTaxingSum += parseFloat(totalValueBeforeTaxing);
            }

            return row;
        });

        // Create the total row and place totals under their respective columns
        const totalRow = {
            "T1": "",
            "2": "",
            "3": "",
            "4": "",
            "5": "",
            "6": "",
            "7": "",
            "8": "",
            "Total Value before Taxing": totalValueBeforeTaxingSum.toFixed(2)
        };

        // Add the total row at the end of the rows array
        updatedRows.push(totalRow);

        return updatedRows;
    }


    document.addEventListener('DOMContentLoaded', function () {
        var dropdownElements = document.querySelectorAll('.dropdown-toggle');
        dropdownElements.forEach(function (dropdown) {
            new bootstrap.Dropdown(dropdown);
        });
    });





})