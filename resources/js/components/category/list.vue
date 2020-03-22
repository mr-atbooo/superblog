<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) breadCrumbs-->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Category Page</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                            <li class="breadcrumb-item active">Category Page</li>
                        </ol>
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>

<!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Category List</h3>
			  <div class="text-right">
				<router-link class="btn btn-success" to="/cats/create">add category</router-link>
			  </div>
			  
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>s1</th>
                  <th>Category Name</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
					<tr>
					  <td>1</td>
					  <td>cat1</td>
					  <td>
							<a href="">Edit</a>
							<a href="">Delete</a>
					  </td>
					</tr>
					<tr>
					  <td>2</td>
					  <td>cat2</td>
					  <td>
							<a href="">Edit</a>
							<a href="">Delete</a>
					  </td>
					</tr>
                </tbody>
                <tfoot>
                <tr>
                  <th>s1</th>
                  <th>Category Name</th>
                  <th>Actions</th>
                </tr>
                </tfoot>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
		</div>
	  </div>
    </section>
        <!-- /.content -->
    </div>
</template>
