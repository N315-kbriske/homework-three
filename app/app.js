import * as MODEL from "./model.js";

// routes links to data for pages
function route() {
  // hash information from the url bar -> #lock
  let hashTag = window.location.hash;

  // replace the hashtag with an empty space -> lock
  let pageID = hashTag.replace("#", "");

  // create an array that split the link by the /
  let pageIDArray = pageID.split("/");

  // pageID is equal to whatever was before the fslash
  pageID = pageIDArray[0];

  // subPageID is equal to whatever was after the fslash
  let subPageID = pageIDArray[1];

  //   console.log("sub " + subPageID);

  // if the pageID is empty, reset to the home page (lock), else if the pageID and subPageID are the same pass over pageID and subPageID
  if (pageID == "") {
    MODEL.changePage("lock");
  } else {
    if (pageID == subPageID) {
      MODEL.changePage(pageID);
    } else {
      // calls over to model to retrieve the data for the page
      MODEL.changePage(pageID, subPageID);
    }
  }
}

function initListeners() {}

// function executes route when there is a change in hash of url
function initApp() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initApp();
  initListeners();
});
