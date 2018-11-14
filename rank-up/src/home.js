import React, {Component, Fragment} from 'react';

export default class Home extends Component {
    render(){
        return(
            <Fragment>
                <nav class="navbar navbar-dark navbar-expand-md bg-faded justify-content-center fixed-top">
    <a href="/" class="navbar-brand d-flex w-50 mr-auto text-uppercase text-white">RankUp</a>
    <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
      <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
        <li class="nav-item">
          <a class="nav-link text-uppercase text-white" href="#">how it works</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-uppercase text-white" href="#">signup / login</a>
        </li>
      </ul>
    </div>
  </nav>
            </Fragment>
        )
    }
}