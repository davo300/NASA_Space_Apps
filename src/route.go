package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func HandleRootRoute(w http.ResponseWriter, r *http.Request) {
	// Vite index.html
	http.ServeFile(w, r, "./frontend/dist/index.html")
}

func HandleImgRoute(w http.ResponseWriter, r *http.Request) {
	// Serve files under /img/... from public/img
	http.ServeFile(w, r, "./frontend/public"+r.URL.Path)
}

func HandleImgLabelRoute(w http.ResponseWriter, r *http.Request) {
	const maxUploadSize = 10 << 20
	r.ParseMultipartForm(maxUploadSize)

	file, handler, err := r.FormFile("file")
	if err != nil {
		http.Error(w, "Error retrieving file", http.StatusBadRequest)
		return
	}
	defer file.Close()

	dst, err := os.Create("./frontend/public/img/test_image_change.jpg")
	if err != nil {
		http.Error(w, "Error creating file", http.StatusBadRequest)
		return
	}
	defer dst.Close()

	if _, err := io.Copy(dst, file); err != nil {
		http.Error(w, "Error saving file: "+err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Println("File received from user:", handler.Filename)
}

func HandleImgNames(w http.Response, r *http.ResponseWriter) {
	
}
