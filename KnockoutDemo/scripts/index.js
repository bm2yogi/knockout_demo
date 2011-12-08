var viewModel = {};

var _data = {
    ContactId: 3,
    FirstName: 'Mike',
    LastName: 'Ibarra',
    Age: 39,
    City: 'Seattle'
};

var behaviors = {
    click: function () {
        $.getJSON('scripts/contact.js', function (data) { ko.mapping.fromJS(data, viewModel); });
    }
};

$(document).ready(function () {
    viewModel = ko.mapping.fromJS(_data);
    viewModel.onclick = behaviors.click;
    ko.applyBindings(viewModel);
});