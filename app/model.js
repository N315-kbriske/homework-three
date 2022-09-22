export function changePage(pageID, subPage) {
  if (subPage == undefined) {
    // path to pageID (pageID is whatever you click on)
    $.get(`pages/${pageID}.html`, function (data) {
      // console.log(data);
      //   console.log("page " + pageID);
      $("#app").html(data);
    }).fail((error) => {
      if (error.status == "404") {
        // alert("Page not found, please check the URL")
      }
      console.log("ERROR", error);
    });
    //   } else {
    //     $.get(`pages/${pageID}/${subPage}.html`, function (data) {
    //       // console.log(data);
    //       //   console.log("sub " + subPage);
    //       $("#app").html(data);
    //     }).fail((error) => {
    //       if (error.status == "404") {
    //         // alert("Page not found, please check the URL")
    //       }
    //       console.log("error", error);
    //     });
    //   }
    // }
  }
}
