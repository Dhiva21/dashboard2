

$(document).ready(function(){  

  contentHeight();
  
  // $(".imgDiv").height( $(".cardBody_content_2").height()+20 );


  // $('.sidebar li.active').removeClass('active');
  // $('.sidebar li a').on('click', function(){
  //     $('.sidebar li.active').removeClass('active');
  //     $(this).addClass('active');
  // });
  

  // $('.sidebar li.active').removeClass('active');
  // $('a[href="' + location.pathname + '"]').closest('li').addClass('active'); 

  
  


  
  

  /****** For SMS ListPage Data table ******/

  /*
  $("#srmapListPageTable_1").one("preInit.dt", function () {
    $(".dataTables_filter").append('<a href="user-role/user-role-add.html"><i class="fa fa-save"></i></a>');
    $(".dataTables_filter").append('<a href="user-role/user-role-modify.html"><i class="fa fa-pencil"></i></a>');
    $(".dataTables_filter").append('<a href="user-role/user-role-view.html"><i class="fa fa-eye"></i></a>');
    $(".dataTables_filter").append('<a href="#"><i class="fa fa-trash"></i></a>');
  }); */


  // $('#dataTable').DataTable();


  //-- Datatable 001 STRAT --//

  var listTable = $('#dataTable').DataTable({

    "bFilter": false,
    "bSort": true,
    "bInfo": true,
    "bLengthChange": true,
    // "pagingType": "full_numbers",
    //  "pagingType": "bootstrap_extended",
    // "pagingType": "bootstrap_full_number",
    "pagingType": "full_numbers",
    "scrollX": true,

    "language": {
      "search": "Search",
      "emptyTable": "No data available in table",
      // "lengthMenu": "Show _MENU_",
      "lengthMenu": "_MENU_",
      "zeroRecords": "No matching records found",
      "info": "Showing _PAGE_ of _PAGES_ records",
      "infoEmpty": "No records available",
      "infoFiltered": "(filtered from _MAX_ total records)",

      // "paginate": {
      //   "first": "First",
      //   "previous": "Prev",
      //   "next": "Next",
      //   "last": "Last"
      // },

      "paginate": {
        "first": '<i class="fa fa-angle-double-left"></i>',
        "previous": '<i class="fa fa-angle-left"></i>',
        "next": '<i class="fa fa-angle-right"></i>',
        "last": '<i class="fa fa-angle-double-right"></i>'
      },
    },

    "iDisplayLength": 5,
    "lengthMenu": [
      [5, 10, 20, -1],
      [5, 10, 20, "All"]
    ],


    //"dom": '<"top"i>rt<"bottom"flp><"clear">',
    // "dom": '<"pull-right"i><"pull-bottom"l>tlp',
    // "dom": '<lf<t>ip>',
    // "dom": '<f<t>lip>',
    // "dom": 'lrtip',
    // "dom": '<"top"f>rt<"bottom"fip><"clear">',
    // "dom": '<"top"f>rt<"bottom"ilp><"clear">', // For Filter top & Page Lenght, Page Info, Pagination bottom of screen    
    "dom": "<'row'<'col-md-6'><'col-md-6'f>>" +
      "<'row'<'col-md-12'tr>>" +
      // "<'row d-flex align-items-center'<'col-md-2'i><'col-md-3'l><'col-md-7'p>>",
      "<'row'<'col-md-5 d-flex align-items-center'il><'col-md-7'p>>",


      
    // 'select': {
    //   'style': 'multi'
    // },

    'order': [[0, 'asc']]
  });

  //-- Datatable 001 END --//  





  /****** For SMS ListPage Data table ******/





});  //--- End of Ready function ---//









//--- For Duallist box ----//

$(function() {

  $('.studentMap_duallistbox').bootstrapDualListbox({
    nonSelectedListLabel: 'Mapped Student List',
    selectedListLabel: 'Unmapped Student List',
    moveOnSelect: false,
    filterPlaceHolder:'Search',
  });

  var customSettings = $('.studentMap_duallistbox').bootstrapDualListbox('getContainer');
    customSettings.find('.move').append('<i class="fas fa-angle-right"></i>');
    customSettings.find('.moveall').append('<i class="fas fa-angle-double-right"></i>');
    customSettings.find('.remove').append('<i class="fas fa-angle-left"></i>');
    customSettings.find('.removeall').append('<i class="fas fa-angle-double-left"></i>');
    customSettings.find('select').addClass('custom_scroll_1');
    
});

//--- For Duallist box ----//











//--- DIV Height Set to 100% ---//
function contentHeight() {
  var winH = $(window).outerHeight(),
    // headerHei = $(".header_sec").outerHeight(),
    headerStickyNavHei = $(".sticky_top_custom").outerHeight(),
    // headerBreadcrumHei = $(".customBredcrum_sec").outerHeight(),
    footerHei = $(".footer_sec").outerHeight(),
    // contentHei = winH - headerHei - headerStickyNavHei - headerBreadcrumHei - footerHei;
    contentHei = winH - headerStickyNavHei - footerHei;
  $(".container_height_1").css("min-height", contentHei-24);
}

$(window).resize(function() {
  contentHeight();
});
//--- DIV Height Set to 100% ---//

















    
    