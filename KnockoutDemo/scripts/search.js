$(document).ready(function () {
    ko.applyBindings(viewModel);
});

var viewModel = {};

viewModel.query = ko.observable();

viewModel.searchResults = ko.observableArray();

viewModel.updateLightbox = function () {
    var assetToUpdate = ko.dataFor(this)
    assetToUpdate.InLightbox = !assetToUpdate.InLightbox;
    //$.post('lightbox/addToLightbox', assetToUpdate.AssetId, function(){ alert('yay')});
}

viewModel.search = function () {
    $.getJSON('scripts/searchresults_sm.js', function (data) {
        //var observableAssets = ko.mapping.fromJSON(data.Assets);
        var observableAssets = (data.Assets);
        ko.utils.arrayPushAll(viewModel.searchResults, observableAssets);
    });
};

$(document).on('click', '.lightboxButton', viewModel.updateLightbox);