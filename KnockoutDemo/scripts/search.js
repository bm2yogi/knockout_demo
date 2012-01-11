$(document).ready(function () {
    ko.applyBindings(viewModel);
    $(document).on('click', '.lightboxButton', viewModel.updateLightbox);
});

var viewModel = {};

viewModel.query = ko.observable();
viewModel.searchResults = ko.observableArray();

viewModel.updateLightbox = function () {
    var assetToUpdate = ko.dataFor(this)
    assetToUpdate.InLightbox(!assetToUpdate.InLightbox());
    //$.post('lightbox/addToLightbox', assetToUpdate.AssetId, function(){ alert('yay')});
}

viewModel.search = function () {
    $.getJSON('scripts/searchresults_sm.js', function (data) {
        var observableAssets = (data.Assets);

        for (var i = 0; i < data.Assets.length; i++) {
            var observable = ko.mapping.fromJS(data.Assets[i]);
            viewModel.searchResults.push(observable);
        }

    });
};

ko.bindingHandlers.transform = {

//    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
//        var val = valueAccessor();
//        $(element).text((val) ? "(In Lightbox)" : "(Not In Lightbox)");
//    },

    update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var val = valueAccessor();
        $(element).text((val()==true) ? "(In Lightbox)" : "(Not In Lightbox)");
    }
};
