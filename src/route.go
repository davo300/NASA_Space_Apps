package main

import "net/http"

func HandleRootRoute(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w,r,"./frontend/dist/index.html")
}

func HandleImgRoute(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./frontend/img/test_image.jpg")
}


