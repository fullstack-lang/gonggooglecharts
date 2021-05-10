A gong stack for displaying google charts

### compile application
> cd ng; npm i; ng build;

### launch application

at the root of the repository (requires go >= 1.16)
> go run main.go

```
 Executing task: go run main.go <

gonggooglecharts: Database Migration of package github.com/fullstack-lang/gonggooglecharts/go is OK
gonggooglecharts: Server ready to serve on localhost:8080
```

### expected result

launch browser on http://localhost:8080

![result](gong_google_charts.png)

### warning : not to use offline

```
Can I use charts offline?
    Your users' computers must have access to https://www.gstatic.com/charts/loader.js in order to use the interactive features of Google Charts. This is because the visualization libraries that your page requires are loaded dynamically before you use them. The code for loading the appropriate library is part of the included script, and is called when you invoke the google.charts.load() method. Our terms of service do not allow you to download the google.charts.load or google.visualization code to use offline.
```