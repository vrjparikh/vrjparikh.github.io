/*!
 * Start Bootstrap - Stylish Portfolio Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

/* Global Styles */

html,
body {
    width: 100%;
    height: 100%;
}

body {
    font-family: "Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
}

.text-vertical-center {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}

.text-vertical-center h1 {
    margin: 0;
    padding: 0;
    font-size: 4.5em;
    font-weight: 700;
}

/* Custom Button Styles */

.btn-dark {
    border-radius: 0;
    color: #fff;
    background-color: rgba(0,0,0,0.4);
}

.btn-dark:hover,
.btn-dark:focus,
.btn-dark:active {
    color: #fff;
    background-color: rgba(0,0,0,0.7);
}

.btn-light {
    border-radius: 0;
    color: #333;
    background-color: rgb(255,255,255);
}

.btn-light:hover,
.btn-light:focus,
.btn-light:active {
    color: #333;
    background-color: rgba(255,255,255,0.8);
}

/* Custom Horizontal Rule */

hr.small {
    max-width: 100px;
}

/* Side Menu */

#sidebar-wrapper {
    z-index: 1000;
    position: fixed;
    right: 0;
    width: 250px;
    height: 100%;
    margin-right: -250px;
    overflow-y: auto;
    background: #222;
    -webkit-transition: all 0.4s ease 0s;
    -moz-transition: all 0.4s ease 0s;
    -ms-transition: all 0.4s ease 0s;
    -o-transition: all 0.4s ease 0s;
    transition: all 0.4s ease 0s;
}

.sidebar-nav {
    position: absolute;
    top: 0;
    width: 250px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.sidebar-nav li {
    text-indent: 20px;
    line-height: 40px;
}

.sidebar-nav li a {
    display: block;
    text-decoration: none;
    color: #999;
}

.sidebar-nav li a:hover {
    text-decoration: none;
    color: #fff;
    background: rgba(255,255,255,0.2);
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
    text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
    height: 55px;
    font-size: 18px;
    line-height: 55px;
}

.sidebar-nav > .sidebar-brand a {
    color: #999;
}

.sidebar-nav > .sidebar-brand a:hover {
    color: #fff;
    background: none;
}

#menu-toggle {
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;
}

#sidebar-wrapper.active {
    right: 250px;
    width: 250px;
    -webkit-transition: all 0.4s ease 0s;
    -moz-transition: all 0.4s ease 0s;
    -ms-transition: all 0.4s ease 0s;
    -o-transition: all 0.4s ease 0s;
    transition: all 0.4s ease 0s;
}

.toggle {
    margin: 5px 5px 0 0;
}

/* Header */

.header {
    display: table;
    position: relative;
    width: 100%;
    height: 100%;
    background: url(../img/kgp.jpg) no-repeat center center scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
}

/* About */

.about {
    padding: 50px 0;
}

/* Services */

.services {
    padding: 50px 0;
}

.service-item {
    margin-bottom: 30px;
}

/* Callout */

.callout {
    display: table;
    width: 100%;
    height: 400px;
    color: #fff;
    background: url(../img/callout.jpg) no-repeat center center scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
}

/* Portfolio */

.portfolio {
    padding: 50px 0;
}

.portfolio-item {
    margin-bottom: 30px;
}

.img-portfolio {
    margin: 0 auto;
}

.img-portfolio:hover {
    opacity: 0.8;
}

/* Call to Action */

.call-to-action {
    padding: 50px 0;
}

.call-to-action .btn {
    margin: 10px;
}

/* Map */

.map {
    height: 500px;
}

@media(max-width:768px) {
    .map {
        height: 75%;
    }
}

/* Footer */

footer {
    padding: 100px 0;
}
