package main

import (
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w,r,"./frontend/dist/index.html")
	})

	log.Println("Server starting on :8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatalf("Server failed %v", err)
	}
}

