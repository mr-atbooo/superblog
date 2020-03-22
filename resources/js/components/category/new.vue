<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) breadCrumbs-->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
					
                        <h1>Add Category Page</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
							 <li class="breadcrumb-item"><router-link to="/cats">Category</router-link></li>
                            <li class="breadcrumb-item active">Add Category</li>
                        </ol>
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>

<!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-12">
        <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Add New Category</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Add New Category</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Add New Category">
                  </div>
                  
                 
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          <!-- /.card -->
		</div>
	  </div>
    </section>
        <!-- /.content -->
    </div>
</template>
