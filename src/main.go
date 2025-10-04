package main

import (
	"log"
	"net/http"
)

func main() {
	// Serve static files from frontend/dist
	fs := http.FileServer(http.Dir("./frontend/dist"))
	http.Handle("/assets/", fs)     // Vite bundles
	http.Handle("/favicon.ico", fs) // optional

	// API / custom routes
	http.HandleFunc("/img/", HandleImgRoute)
	http.HandleFunc("/imglabel", HandleImgLabelRoute)

	// Fallback: always serve React's index.html
	http.HandleFunc("/", HandleRootRoute)

	log.Println("Server starting on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
