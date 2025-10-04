package main

import "net/http"

func HandleRootRoute(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w,r,"./frontend/dist/index.html")
}
