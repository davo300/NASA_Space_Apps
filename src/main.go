package main

import (
	"log"
	"net/http"
	"path/filepath"
)

func main () {
	buildPath := filepath.Join("..", "frontend", "build")
	
	fs := http.FileServer(http.Dir(buildPath))
	http.Handle("/static/", fs)
	http.Handle("/assets/", fs)

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, filepath.Join(buildPath, "index.html"))
	})

	log.Println("Server running at localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
