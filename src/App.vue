<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .getStates{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .updatedWhen{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .status{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .center-align{
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }

  .updatedAt{
    padding-top: 40px;
  }

  .rejectedCases{
    padding-top: 45px;
  }
  .text-height{
    height: 55px;
  }

  @media only screen and (max-width: 768px) {
    .getStates{
      margin-top: 50px;
      min-width: 100%;
    }
    .rejectedCases{
      padding-top: 0px;
    }
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
