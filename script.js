fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => {
        //  console.log(data) // data is currently in json format
        return data.json();// converted to object
    }).then((objectData) => {
        console.log(objectData);
        let tableData = "";
        objectData.map((values) => {
            tableData += `<tr>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.body}</td>
      </tr>`;
            document.getElementById("table_body").innerHTML = tableData;
        })
    })