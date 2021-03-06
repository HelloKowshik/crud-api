$('#add_user').submit(function (event) {
  alert('Data Inserted Successfully!');
});

$('#update_user').submit(function (e) {
  e.preventDefault();

  let unindexed_array = $(this).serializeArray();
  let data = {};

  $.map(unindexed_array, function (n, i) {
    data[n['name']] = n['value'];
  });

  let request = {
    url: `https://crud-app-2021.herokuapp.com/api/users/${data.id}`,
    method: 'PUT',
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert('Data Updated Successfully!');
  });
});

if (window.location.pathname == '/') {
  $ondelete = $('.table tbody td a.delete');
  $ondelete.click(function () {
    let id = $(this).attr('data-id');

    let request = {
      url: `https://crud-app-2021.herokuapp.com/api/users/${id}`,
      method: 'DELETE',
    };

    if (confirm('Do you really want to delete this record?')) {
      $.ajax(request).done(function (response) {
        alert('Data Deleted Successfully!');
        location.reload();
      });
    }
  });
}
