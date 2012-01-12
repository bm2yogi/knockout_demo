var viewModel = {};

var data = {
    ContactId: 3,
    FirstName: 'Mike',
    LastName: 'Ibarra',
    Age: 39,
    City: 'Seattle'
};

var behaviors = {
    click: function () {
        $.getJSON('scripts/contact.js',
        function (data) {
            ko.mapping.fromJS(data, viewModel); 
        });
    }
};

$(document).ready(function () {
    viewModel = ko.mapping.fromJS(data);
//    viewModel.ContactId = ko.observable(data.ContactId);
//    viewModel.FirstName = ko.observable(data.FirstName);
//    viewModel.LastName = ko.observable(data.LastName);
//    viewModel.Age = ko.observable(data.Age);
//    viewModel.City = ko.observable(data.City);

    viewModel.FullName = ko.computed(function () { return this.FirstName() + " " + this.LastName() }, viewModel);
    
    viewModel.onclick = behaviors.click;
    
    ko.applyBindings(viewModel);
});