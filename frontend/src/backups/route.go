package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"
)

func HandleRootRoute(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./frontend/dist/index.html")
}


func HandleImgRoute(w http.ResponseWriter, r *http.Request) {
    imageName := strings.TrimPrefix(r.URL.Path, "/img/")
    imageName = strings.TrimPrefix(imageName, "/") // remove accidental leading slash

    fmt.Println("Serving image:", imageName)

    filePath := "./frontend/src/assets/" + imageName
    if _, err := os.Stat(filePath); os.IsNotExist(err) {
        http.Error(w, "Image not found: "+imageName, http.StatusNotFound)
        return
    }

    http.ServeFile(w, r, filePath)
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

	dst, err := os.Create("./frontend/src/assets/" + r.URL.Path)
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

func HandleImgNames(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	files, err := os.ReadDir("./frontend/src/assets")
	if err != nil {
		http.Error(w, "Error reading image files", http.StatusInternalServerError)
		return
	}

	// Only return file names as strings
	var fileNames []string
	for _, f := range files {
		name := f.Name()
		// Optional: only include images (jpg, jpeg, png)
		if !(f.IsDir()) && (strings.HasSuffix(name, ".jpg") || strings.HasSuffix(name, ".jpeg") || strings.HasSuffix(name, ".png")) {
			fileNames = append(fileNames, name)
		}
	}

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*") // allow CORS from frontend dev server
	json.NewEncoder(w).Encode(fileNames)
}




