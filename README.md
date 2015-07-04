# TestOnTrack

This application will allow teams to plan and track both manual and automated test efforts.

Currently it is in the early stages, with some configuration, examples, and boilerplate of a Spring Boot app with:

* Mixed Java and Groovy
* Spring Cassandra and Spring Cassandra Repository support
* Static files with:
	* Angular
	* Angular Routes (Single Page App)
	* Bootstrap 
	* Bootstrap [United Theme](https://bootswatch.com/united/)
* Controllers, Rest demo serving JSON

## Running the App

Assuming you have Java, Groovy, and Gradle installed, you should be able to run the app from the root directory 
using:
<pre>gradle bootRun</pre>  
To see the Angular portion of our program, try [http://localhost:8080/index.html](http://localhost:8080/index.html).
For some starter restful endpoints, see [http://localhost:8080/groovy](http://localhost:8080/groovy) (Groovy) and
[http://localhost:8080/hello](http://localhost:8080/hello) (Java).
