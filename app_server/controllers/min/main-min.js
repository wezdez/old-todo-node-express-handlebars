module.exports.about=function(o,e){e.render("about",{name:"derp",info:"i like turtles...",things:["monsters","certain sounds","asdf"]})},module.exports.contact=function(o,e){e.render("contact")};var mysql=require("../models/mysql.js");module.exports.process=function(o,e){mysql.getConnection(function(e,t){t.query("INSERT INTO projects (title, client, startdate, enddate, notes) VALUES ( '"+o.body.title+"','"+o.body.client+"', '"+o.body.SD+"', '"+o.body.ED+"' , '"+o.body.notes+"' )")}),e.redirect("/")},module.exports.deleteTask=function(o,e){var t=o.params.id;mysql.getConnection(function(o,n){console.log(t),n.query("DELETE FROM tasks WHERE id ="+t,function(o,n){if(o)throw o;console.log("DELETE FROM tasks WHERE id ="+t),console.log("Deleted "+n.affectedRows+" rows"),e.sendStatus(202)})})},module.exports.deleteProject=function(o,e){var t=o.params.id;mysql.getConnection(function(o,e){console.log(t+"in delete project controller"),e.query("DELETE FROM projects WHERE id ="+t,function(o,e){if(o)throw o;console.log("DELETE FROM tasks WHERE id ="+t),console.log("Deleted "+e.affectedRows+" rows")})})},module.exports.index=function(o,e){mysql.getConnection(function(o,t){t.query("Select * from projects",function(o,t){if(o)throw o;e.render("index",{row:t})})})},module.exports.tasks=function(o,e){var t=o.params.id;mysql.getConnection(function(o,n){n.query("Select * from tasks WHERE project_id = "+t,function(o,n){if(o)throw o;mysql.getConnection(function(o,s){s.query("Select * from projects WHERE id = "+t,function(o,t){if(o)throw o;e.render("tasks",{tasks:n,row:t})})})})})},module.exports.editTask=function(o,e){console.log(o.body),mysql.getConnection(function(t,n){n.query("UPDATE tasks SET ? WHERE id = ?",[{title:o.body.title,hours:o.body.hours,notes:o.body.notes},o.body.id],function(o,t){if(o)throw o;e.sendStatus(202)})})},module.exports.newTask=function(o,e){mysql.getConnection(function(t,n){if(console.log(o.body),n.query("INSERT INTO tasks (title, hours, notes, project_id) VALUES ( '"+o.body.title+"',"+o.body.hours+", '"+o.body.notes+"', "+o.body.project_id+")"),t)throw t;e.sendStatus(202)})},module.exports.images=function(o,e){var t=require("../routes/slides"),n=t.getSlides();console.log(n[1].name);var s=o.params.num;console.log(n[s].imageLocation),e.render("images",{name:n[s].name,img:n[s].imageLocation})};