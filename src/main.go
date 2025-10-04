package main

import (
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", HandleRootRoute)
	http.HandleFunc("/img", HandleImgRoute)

	log.Println("Server starting on :8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatalf("Server failed %v", err)
	}
}

