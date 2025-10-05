package main

import (
	"log"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("./frontend/dist"))
	http.Handle("/assets/", fs)     // Vite bundles
	http.Handle("/favicon.ico", fs) // optional

	http.HandleFunc("/img/", HandleImgRoute)
	http.HandleFunc("/imglabel", HandleImgLabelRoute)
	http.HandleFunc("/", HandleRootRoute)
	http.HandleFunc("/imgnames", HandleImgNames)

	log.Println("Server starting on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
