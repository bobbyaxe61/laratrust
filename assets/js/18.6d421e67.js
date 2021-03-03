(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{219:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("If you make changes directly to the Laratrust tables and when you run your code the changes are not reflected, please clear your application cache using::")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan cache:clear\n")])])]),a("p",[e._v("Remember that Laratrust uses cache in the roles and permissions checks.")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("If you want to use the "),a("code",[e._v("Authorizable")]),e._v(" trait you have to do:")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("Authorizable")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    Authorizable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("can "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("insteadof")]),e._v(" LaratrustUserTrait"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    LaratrustUserTrait"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("can "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" laratrustCan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("And then replace all the uses of "),a("code",[e._v("can")]),e._v(" with "),a("code",[e._v("hasPermission")]),e._v(" or "),a("code",[e._v("isAbleTo")]),e._v(".")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("If you use the "),a("code",[e._v("Laratrust::can")]),e._v(" facade method you don't have to change this method because it calls the "),a("code",[e._v("hasPermission")]),e._v(" method.")])]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("If you encounter an error when doing the migration that looks like::")]),e._v(" "),a("div",{staticClass:"language-log extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SQLSTATE[HY000]: General error: 1005 Can't create table 'laravelbootstrapstarter.#sql-42c_f8' (errno: 150)\n    (SQL: alter table `role_user` add constraint role_user_user_id_foreign foreign key (`user_id`)\n    references `users` (`id`)) (Bindings: array ())\n")])])]),a("p",[e._v("Then it is likely that the "),a("code",[e._v("id")]),e._v(" column in your user table does not match the "),a("code",[e._v("user_id")]),e._v(" column in "),a("code",[e._v("role_user")]),e._v(".\nMake sure both are "),a("code",[e._v("INT(10)")]),e._v(".")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("When trying to use the LaratrustUserTrait methods, you encounter the error which looks like::")]),e._v(" "),a("pre",[a("code",[e._v("Class name must be a valid object or a string\n")])]),e._v(" "),a("p",[e._v("Then probably you do not have published Laratrust assets or something went wrong when you did it.\nFirst of all check that you have the "),a("code",[e._v("laratrust.php")]),e._v(" file in your "),a("code",[e._v("app/config")]),e._v(" directory.\nIf you don't, then try "),a("code",[e._v("php artisan vendor:publish")]),e._v(" and, if it does not appear, manually copy the "),a("code",[e._v("/vendor/santigarcor/laratrust/src/config/config.php")]),e._v(" file in your config directory and rename it "),a("code",[e._v("laratrust.php")]),e._v(".")]),e._v(" "),a("hr")])}],!1,null,null,null);t.default=r.exports}}]);