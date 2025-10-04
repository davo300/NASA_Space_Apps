package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func HandleRootRoute(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w,r,"./frontend/dist/index.html")
}

func HandleImgRoute(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./frontend/img/test_image.jpg")
}

func HandleImgLabelRoute(w http.ResponseWriter, r *http.Request) {
	const maxUploadSize= 10 << 20
	r.ParseMultipartForm(maxUploadSize)
	
	file, handler, err := r.FormFile("file")
	if err != nil {
		http.Error(w, "Error retrieving file", http.StatusBadRequest)
		return
	}
	defer file.Close() 
	
	dst, err := os.Create("./frontend/img/test_image_change.jpg")
	if err != nil {
		http.Error(w, "Error creating file", http.StatusBadRequest)
	}
	defer dst.Close()


	if _, err := io.Copy(dst, file); err != nil {
		http.Error(w, "Error saving file: " + err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Println("File received from user: " + handler.Filename)
}

