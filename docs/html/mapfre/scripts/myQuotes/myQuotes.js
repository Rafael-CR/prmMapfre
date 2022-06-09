$(function () {
    $('#tabResultados').DataTable({
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No hay cotizaciónes",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "No hay cotizaciónes",
            "infoFiltered": "(filtrando de un total de _MAX_ registros)",
            "search": "Buscar Cotización",
            "oPaginate": {
              "sFirst":    	"Primera",
              "sPrevious": 	"Anterior",
              "sNext":     	"Siguiente",
              "sLast":     	"Última"
            }
        },
        "bFilter": false,
        responsive: true,
            dom: 'Bfrtip,',
            buttons: [
            ],
    });

    $("#exportExcel").click(function () {
        fnExcelReport();
    });

    function fnExcelReport(){
        var tab_text="<table border='2px'>";
        var textRange; var j=0;
        tab = $('#tabResultados'); // id of table

        for(j = 0 ; j < tab.length ; j++) 
        {     
            tab_text=tab_text+tab[j].innerHTML+"</tr>";
            //tab_text=tab_text+"</tr>";
        }

        tab_text=tab_text+"</table>";
        tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
        tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
        tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE "); 

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
        {
            txtArea1.document.open("txt/html","replace");
            txtArea1.document.write(tab_text);
            txtArea1.document.close();
            txtArea1.focus(); 
            sa=txtArea1.document.execCommand("SaveAs",true,"Say Thanks to Sumit.xls");
        }  
        else                 //other browser not tested on IE 11
            sa = 'data:application//vnd.openxmlformats-officedocument.spreadsheetml.sheet,' + encodeURIComponent(tab_text);

            link.href=sa;
            link.download="Cotizaciones.xls";
            link.click();
    }
});