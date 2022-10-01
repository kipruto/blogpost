<template>
   <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="index.html">
              <i class="fa fa-line-chart"></i>
              Digital Trend
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/service" class="nav-link">Services</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/blog" class="nav-link">Our Blog</router-link>
                    </li>
                    <li class="nav-item">
                         <router-link to="/contacts" class="nav-link">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


</template>


<script>
    export default {
        name: "MyHeader"
    };

</script>
