// Object containing handlers for different modal states
COLOURPICKER_CHOOSER_MODAL_ONLOAD_HANDLERS = (url) => {
  // Handler for the 'chooser' state
  chooser: function (modal, jsonData) {
    console.log(jsonData);
    // Add submit event listener to the colour form within the modal
    $("form.colour-form", modal.body).on("submit", function () {
      // Create FormData object from the submitted form
      var formdata = new FormData(this);

      // Send AJAX request
      $.ajax({
        url: url,
        data: formdata,
        processData: false,
        contentType: false,
        type: "POST",
        dataType: "text",
        // On success, load the response text into the modal
        success: modal.loadResponseText,
      });

      // Prevent default form submission
      return false;
    });
  },

  // Handler for the 'colour_chosen' state
  colour_chosen: function (modal, jsonData) {
    console.log(jsonData);

    // Respond with 'colourChosen' event, passing toggled feature and all features
    modal.respond(
      "colourChosen",
      jsonData["toggled_feature"],
      jsonData["all_features"]
    );
    // Close the modal
    modal.close();
  },
};
