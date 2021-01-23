<template>
    <div class="container">
        <h2>Users</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>User Name</th>
                <th>Selection</th>
                <th>Color</th>
                <th>Money</th>
            </tr>
            </thead>
            <tbody>
              <tr >
                  <td>{{ name }}</td>
                  <td>{{ item.selection }}</td>
                  <td>{{ item.selectedColor }}</td>
                  <td>{{ item.money }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'Users',
        props: ["name"]
     }
</script>