<template>
<div id="wrapper">
  <nav class="navbar navbar-default">
    <div class="container">
      <a class="navbar-brand" href="#">
      Seif Sayed
      </a>
      <ul class="nav navbar-nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>

      </ul>
    </div>
  </nav>
  <div class="container">
    <div class="col-sm-9">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>
